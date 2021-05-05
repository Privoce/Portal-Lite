import { useState, useEffect, useCallback, useRef } from 'react';
import emitter, { EVENTS, STATUS } from './useEmitter';
import { initCursor, bindCursorSync, destoryCursor } from '../Cursor';
import { getUsername, appendVeraHistory, preventCloseTabHandler } from './utils';
const peerConfig = {
  host: 'r.nicegoodthings.com',
  // port: '80',
  path: '/ngt',
  config: {
    iceServers: [
      { urls: 'stun:47.93.119.186:3478' },
      {
        urls: 'turn:47.93.119.186:3478',
        username: 'a',
        credential: 'b'
      }
    ]
  }
  // debug: 3
};
const usePeer = ({ invitePeerId = null }) => {
  const [myPeer, setMyPeer] = useState(null);
  const [status, setStatus] = useState('waiting');
  const [error, setError] = useState(null);
  const [dataConns, setDataConns] = useState({});
  const dataConnsRef = useRef({});
  const [mediaConns, setMediaConns] = useState({});
  const mediaConnsRef = useRef({});
  const [streams, setStreams] = useState({});
  const usernamesRef = useRef({});
  const usernameRef = useRef('');
  const updateConns = ({ conn, remove = false, type = 'media' }) => {
    let current = type == 'media' ? mediaConnsRef.current : dataConnsRef.current;
    let _setState = type == 'media' ? setMediaConns : setDataConns;
    if (remove) {
      // remove
      delete current[conn];
      _setState((prev) => {
        delete prev[conn];
        return { ...prev };
      });
      // 如果移除的是视频连接 则把stream也去掉
      if (type == 'media') {
        setStreams((prev) => {
          delete prev[conn];
          return { ...prev };
        });
      }
    } else {
      // add
      current = { ...current, [conn.peer]: conn };
      _setState((prev) => {
        prev[conn.peer] = conn;
        return { ...prev };
      });
    }
  };
  // 初始化Peer
  useEffect(() => {
    const initUsername = async () => {
      usernameRef.current = await getUsername();
    };
    if (!myPeer) {
      let tmp = new Peer(peerConfig);
      setMyPeer(tmp);
      initUsername();
    }
  }, [myPeer]);
  const clearUpConnect = (pid) => {
    // 删掉data&media连接，去掉名字
    updateConns({ conn: pid, type: 'data', remove: true });
    updateConns({ conn: pid, type: 'media', remove: true });
    delete usernamesRef.current[pid];
    if (Object.keys(usernamesRef.current).length == 0) {
      // 重置为等待连接的初始状态
      window.removeEventListener('beforeunload', preventCloseTabHandler);
      setStatus(STATUS.WAITING);
    }
    // 销毁鼠标
    destoryCursor({ id: pid });
  };
  const initDataChannel = useCallback(
    (conn) => {
      conn.on('close', () => {
        console.log('peer data connection close');
        clearUpConnect(conn.peer);
      });
      conn.on('error', (err) => {
        console.log('peer data connection error', err);
        clearUpConnect(conn.peer);
      });
      conn.on('open', async () => {
        console.log('peer data connection open');
        let { connections = null, username, fromHost = false } = conn.metadata || {};
        // connections 是host发过来的已经建立的连接id集合，所以只有guest才做操作
        if (connections && fromHost) {
          console.log('connections from host:', connections);
          // 更新到usernames集合里
          usernamesRef.current = { ...usernamesRef.current, ...connections };

          Object.entries(connections).forEach(([id]) => {
            // 遍历房主发过来的连接
            let newConn = myPeer.connect(id, {
              metadata: { fromHost: false, username: usernameRef.current }
            });
            initDataChannel(newConn);
          });
          setStatus(STATUS.READY);
        }
        // 只要不是自己发给自己的情况，就更新上去
        if (typeof username !== 'undefined') {
          console.log('set username', conn.peer, myPeer.id, username, fromHost, !!invitePeerId);
          let allowOverride = !!invitePeerId && fromHost;
          if (typeof usernamesRef.current[conn.peer] == 'undefined' || allowOverride) {
            console.log(
              'set username auctual',
              conn.peer,
              myPeer.id,
              username,
              fromHost,
              !!invitePeerId
            );
            // 更新到usernames集合里
            usernamesRef.current = { ...usernamesRef.current, [conn.peer]: username };
            // 同时初始化鼠标
            let inited = initCursor({ id: conn.peer, username });
            if (inited) {
              bindCursorSync({ conn });
            }
          }
        }
        console.log('new dataChannel added:', conn.peer);
        // 开始监听消息
        conn.on('data', (obj) => {
          console.log('invited peer data connection data', obj);
          const { type = '', data } = obj;
          if (type.startsWith('CC_')) {
            emitter.emit(EVENTS.CAMERA_CONTROL, { pid: conn.peer, type });
          }
          if (type.startsWith('CURSOR')) {
            emitter.emit(type, { pid: conn.peer, data });
          }
        });
        // 更新到dataConnections集合里
        updateConns({ conn, type: 'data' });
      });
    },
    [invitePeerId, myPeer]
  );
  const addMediaConnection = (mediaConn) => {
    // 更新到mediaConnections集合里
    updateConns({ conn: mediaConn, type: 'media' });
    // 新增vera历史记录
    appendVeraHistory({
      peerId: mediaConn.peer,
      isHost: !invitePeerId,
      usernames: usernamesRef.current
    });
    // console.log({ mediaConns });
    mediaConn.on('close', () => {
      console.log('peer media connection close');
      clearUpConnect(mediaConn.peer);
    });
    mediaConn.on('error', (err) => {
      console.log('peer media connection error', err);
      clearUpConnect(mediaConn.peer);
    });
    mediaConn.on('stream', (st) => {
      setStatus(STATUS.STREAMING);
      console.log('peer media connection stream', st);
      setStreams((prev) => {
        prev[mediaConn.peer] = st;
        return { ...prev };
      });
    });
  };
  useEffect(() => {
    if (myPeer) {
      myPeer.on('open', () => {
        console.log('peer connection open');
        setStatus(STATUS.OPEN);
        // 受邀者则主动连接房主，并报上自己的名字
        if (invitePeerId) {
          let username = usernameRef.current;
          let invitedDataConn = myPeer.connect(invitePeerId, {
            metadata: { fromHost: false, username }
          });
          // 初始化通用的监听事件
          initDataChannel(invitedDataConn);
        }
        // 有连接请求过来
        myPeer.on('connection', (conn) => {
          window.addEventListener('beforeunload', preventCloseTabHandler);
          console.log('peer data connection incoming', conn);
          setStatus(STATUS.CONNECTED);

          // 房主主动连接对方？存疑
          if (!invitePeerId) {
            console.log('peer connection host connect remote');
            // 连接的同时，通过metadata把已连接的用户发过去（带连接id）
            let username = usernameRef.current;
            console.log('send to remote with metadata', username, usernamesRef.current);

            initDataChannel(
              myPeer.connect(conn.peer, {
                metadata: {
                  fromHost: true,
                  username,
                  connections: usernamesRef.current
                }
              })
            );
          }
          initDataChannel(conn);
        });
      });
      myPeer.on('call', (call) => {
        // 有人呼叫
        console.log('peer connection call from the other');
        setStatus(STATUS.CALLING);
        // 回应
        call.answer(window.LOCAL_MEDIA_STREAM);
        addMediaConnection(call);
      });
      myPeer.on('disconnected', () => {
        console.log('peer connection disconnected');
        setStatus(STATUS.DISCONNECTED);
      });
      myPeer.on('close', () => {
        console.log('peer connection close');
        setStatus(STATUS.CLOSE);
      });
      myPeer.on('error', (err) => {
        console.log('peer connection error', { err });
        setStatus(STATUS.ERROR);
        setError(err.type);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myPeer, invitePeerId]);
  //关闭peer连接
  const shutdownPeer = useCallback(() => {
    window.removeEventListener('beforeunload', preventCloseTabHandler);
    // 关闭每个mediaConn
    Object.entries(mediaConnsRef.current).forEach(([, conn]) => {
      conn.close();
    });
    window.LOCAL_MEDIA_STREAM?.getTracks().forEach((t) => {
      t.stop();
    });
    window.LOCAL_MEDIA_STREAM = null;
    myPeer.destroy();
  }, [myPeer]);
  return {
    shutdownPeer,
    peer: myPeer,
    dataConnections: dataConns,
    mediaConnections: mediaConns,
    addMediaConnection,
    streams,
    usernames: usernamesRef.current,
    status,
    error
  };
};

export default usePeer;

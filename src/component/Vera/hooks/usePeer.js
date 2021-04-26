import { useState, useEffect, useCallback } from 'react';
import emitter, { EVENTS } from './useEmitter';
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
  const [mediaConns, setMediaConns] = useState({});
  const [streams, setStreams] = useState({});
  const [usernames, setUsernames] = useState({});

  // 初始化Peer
  useEffect(() => {
    if (!myPeer) {
      let tmp = new Peer(peerConfig);
      setMyPeer(tmp);
    }
  }, [myPeer]);
  const initDataChannel = useCallback(
    (conn) => {
      const clearUpConnect = () => {
        // 更新到dataConnections集合里
        setDataConns((prev) => {
          delete prev[conn.peer];
          return { ...prev };
        });
        mediaConns[conn.peer]?.close();
        // 销毁鼠标
        destoryCursor({ id: conn.peer });
      };
      conn.on('close', () => {
        console.log('peer data connection close');
        clearUpConnect();
      });
      conn.on('error', (err) => {
        console.log('peer data connection error', err);
        clearUpConnect();
      });
      conn.on('open', async () => {
        console.log('peer data connection open');
        let { connections = null, username } = conn.metadata || {};
        // connections 是host发过来的已经建立的连接id集合，所以只有guest才做操作
        if (connections && invitePeerId) {
          console.log('connections from host:', connections);
          // 更新到usernames集合里
          setUsernames((prev) => {
            return { ...prev, ...connections };
          });
          let un = await getUsername();
          Object.entries(connections).forEach(([id]) => {
            // 遍历房主发过来的连接
            let newConn = myPeer.connect(id, { metadata: { username: un } });
            initDataChannel(newConn);
          });
        }
        // 只要不是undefined，就更新上去
        if (typeof username !== 'undefined') {
          // 更新到usernames集合里
          setUsernames((prev) => {
            prev[conn.peer] = username;
            return { ...prev };
          });
          // 同时初始化鼠标
          let inited = initCursor({ id: conn.peer, username });
          if (inited) {
            bindCursorSync({ conn });
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
        setDataConns((prev) => {
          prev[conn.peer] = conn;
          return { ...prev };
        });
      });
    },
    [invitePeerId, myPeer, dataConns, mediaConns]
  );
  const addMediaConnection = (mediaConn) => {
    const clearUpConnect = () => {
      // remove stream
      setStreams((prev) => {
        delete prev[mediaConn.peer];
        return { ...prev };
      });
      setMediaConns((prev) => {
        delete prev[mediaConn.peer];
        return { ...prev };
      });
      if (Object.keys(mediaConns).length == 0) {
        // 无论是哪一方，重置为等待连接的初始状态
        window.removeEventListener('beforeunload', preventCloseTabHandler);
        setStatus('waiting');
      }
    };
    // 更新到mediaConnections集合里
    setMediaConns((prev) => {
      prev[mediaConn.peer] = mediaConn;
      return { ...prev };
    });
    // 新增vera历史记录
    appendVeraHistory({ peerId: mediaConn.peer, isHost: !invitePeerId, usernames });
    // console.log({ mediaConns });
    mediaConn.on('close', () => {
      console.log('peer media connection close');
      clearUpConnect();
    });
    mediaConn.on('error', (err) => {
      console.log('peer media connection error', err);
      clearUpConnect();
    });
    mediaConn.on('stream', (st) => {
      setStatus('streaming');
      console.log('peer media connection stream', st);
      setStreams((prev) => {
        prev[mediaConn.peer] = st;
        return { ...prev };
      });
    });
  };

  useEffect(() => {
    if (myPeer) {
      myPeer.on('open', async () => {
        console.log('peer connection open');
        setStatus('open');
        // 受邀者则主动连接房主，并报上自己的名字
        if (invitePeerId) {
          let username = await getUsername();
          let invitedDataConn = myPeer.connect(invitePeerId, { metadata: { username } });
          // 初始化通用的监听事件
          initDataChannel(invitedDataConn);
        }
        // 有连接请求过来
        myPeer.on('connection', async (dataConn) => {
          window.addEventListener('beforeunload', preventCloseTabHandler);
          console.log('peer data connection incoming', dataConn);
          setStatus('connected');

          // 房主主动连接对方？存疑
          if (!invitePeerId) {
            console.log('peer connection host connect remote');
            // 连接的同时，通过metadata把已连接的用户发过去（带连接id）
            let username = await getUsername();
            console.log('send to remote with metadata', { username, usernames });

            initDataChannel(
              myPeer.connect(dataConn.peer, {
                metadata: {
                  username,
                  connections: usernames
                }
              })
            );
          }
          initDataChannel(dataConn);
        });
      });
      myPeer.on('call', (call) => {
        // 有人呼叫
        console.log('peer connection call from the other');
        setStatus('call');
        // 回应
        call.answer(window.LOCAL_MEDIA_STREAM);
        addMediaConnection(call);
      });
      myPeer.on('disconnected', () => {
        console.log('peer connection disconnected');
        setStatus('disconnected');
      });
      myPeer.on('close', () => {
        console.log('peer connection close');
        setStatus('close');
      });
      myPeer.on('error', (err) => {
        console.log('peer connection error', { err });
        setStatus('error');
        setError(err.type);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myPeer, usernames, invitePeerId]);
  //关闭peer连接
  const shutdownPeer = useCallback(() => {
    window.removeEventListener('beforeunload', preventCloseTabHandler);
    console.log({ dataConns, mediaConns });
    // 关闭每个mediaConn
    Object.entries(mediaConns).forEach(([, conn]) => {
      conn.close();
    });
    window.LOCAL_MEDIA_STREAM?.getTracks().forEach((t) => {
      t.stop();
    });
    window.LOCAL_MEDIA_STREAM = null;
    myPeer.destroy();
  }, [myPeer, dataConns, mediaConns]);
  return {
    shutdownPeer,
    peer: myPeer,
    dataConnections: dataConns,
    mediaConnections: mediaConns,
    addMediaConnection,
    streams,
    usernames,
    status,
    error
  };
};

export default usePeer;

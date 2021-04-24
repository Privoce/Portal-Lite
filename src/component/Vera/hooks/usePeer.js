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
      conn.on('open', () => {
        console.log('peer data connection open');
        // 如果是房主，则发送已经建立的连接集合
        if (!invitePeerId) {
          conn.send({
            type: 'CONNECTIONS',
            data: Object.keys(dataConns)
          });
        }
        console.log('new dataChannel added:', conn.peer);
        // 开始监听消息
        conn.on('data', (obj) => {
          console.log('invited peer data connection data', obj);
          const { type = '', data } = obj;
          if (type == 'CONNECTIONS') {
            data.forEach((id) => {
              // 遍历房主发过来的连接
              let newConn = myPeer.connect(id);
              initDataChannel(newConn);
            });
          }
          if (type == 'USERNAME') {
            // 更新到usernames集合里
            setUsernames((prev) => {
              prev[conn.peer] = data;
              return { ...prev };
            });
            // 同时初始化鼠标
            let inited = initCursor({ id: conn.peer, username: data });
            if (inited) {
              bindCursorSync({ conn });
            }
          }
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
  const addMediaConnection = useCallback(
    (mediaConn) => {
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
      // 发送自己这边的用户名
      getUsername(true).then((un = null) => {
        dataConns[mediaConn.peer]?.send({
          type: 'USERNAME',
          data: un
        });
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
    },
    [invitePeerId, usernames]
  );

  useEffect(() => {
    if (myPeer) {
      myPeer.on('open', () => {
        console.log('peer connection open');
        setStatus('open');
        // 受邀者则主动连接房主
        if (invitePeerId) {
          let invitedDataConn = myPeer.connect(invitePeerId);
          // 初始化通用的监听事件
          initDataChannel(invitedDataConn);
        }
        // 有连接请求过来
        myPeer.on('connection', (dataConn) => {
          window.addEventListener('beforeunload', preventCloseTabHandler);
          console.log('peer data connection incoming', dataConn);
          setStatus('connected');

          // 房主主动连接对方？存疑
          if (!invitePeerId) {
            console.log('peer connection host connect remote');
            initDataChannel(myPeer.connect(dataConn.peer));
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
        console.log('peer connection error', err);
        setStatus('error');
        setError(err.type);
      });
    }
    // return () => {
    //   cleanUp();
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myPeer, invitePeerId]);
  const shutdownPeer = useCallback(() => {
    console.log({ dataConns, mediaConns });
    Object.entries(mediaConns).forEach(([, conn]) => {
      conn.close();
    });
    Object.entries(dataConns).forEach(([, conn]) => {
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

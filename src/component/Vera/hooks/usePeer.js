import { useState, useEffect, useCallback, useRef } from 'react';
import emitter, { EVENTS, STATUS } from './useEmitter';
import { destoryCursor } from '../Cursor';
import { preventCloseTabHandler } from './utils';
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
const usePeer = (updatePeerId) => {
  const [myPeer, setMyPeer] = useState(null);
  const [status, setStatus] = useState('waiting');
  const [error, setError] = useState(null);
  const [dataConns, setDataConns] = useState({});
  const dataConnsRef = useRef({});
  const [mediaConns, setMediaConns] = useState({});
  const mediaConnsRef = useRef({});
  const [streams, setStreams] = useState({});
  const updateConns = ({ conn, remove = false, type = 'media' }) => {
    let current = type == 'media' ? mediaConnsRef.current : dataConnsRef.current;
    let _setState = type == 'media' ? setMediaConns : setDataConns;
    if (remove) {
      // remove
      delete current[conn.peer];
      _setState((prev) => {
        delete prev[conn.peer];
        return { ...prev };
      });
      // 如果移除的是视频连接 则把stream也去掉
      if (type == 'media') {
        setStreams((prev) => {
          delete prev[conn.peer];
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
    // update to ref
    if (type == 'media') {
      mediaConnsRef.current = current;
    } else {
      dataConnsRef.current = current;
    }
  };
  // 初始化Peer
  useEffect(() => {
    if (!myPeer) {
      let tmp = new Peer(peerConfig);
      setMyPeer(tmp);
    }
  }, [myPeer]);
  const clearUpConnect = (conn) => {
    let pid = conn.peer;
    // 删掉data&media连接，去掉名字
    updateConns({ conn, type: 'data', remove: true });
    updateConns({ conn, type: 'media', remove: true });
    // 销毁鼠标
    destoryCursor({ id: pid });
  };
  const initDataChannel = useCallback(
    (conn) => {
      conn.on('close', () => {
        console.log('peer data connection close');
        clearUpConnect(conn);
      });
      conn.on('error', (err) => {
        console.log('peer data connection error', err);
        clearUpConnect(conn);
      });
      conn.on('open', async () => {
        console.log('peer data connection open');
        console.log('new dataChannel added:', conn.peer);
        // 开始监听消息
        conn.on('data', (obj) => {
          const { type = '', data } = obj;
          if (type == EVENTS.SYNC_PLAYER) {
            emitter.emit(EVENTS.SYNC_PLAYER, { data });
          }
          if (type.startsWith('CC_')) {
            emitter.emit(EVENTS.CAMERA_CONTROL, { pid: conn.peer, type });
          }
          if (type.startsWith('CURSOR')) {
            emitter.emit(type, { pid: conn.peer, data });
          }
        });
        // 更新到dataConnections集合里
        updateConns({ conn, type: 'data' });
        // dataChannel ready
        setStatus(STATUS.READY);
      });
    },
    [myPeer]
  );
  const addMediaConnection = (mediaConn) => {
    // console.log({ mediaConns });
    mediaConn.on('close', () => {
      console.log('peer media connection close');
      clearUpConnect(mediaConn);
    });
    mediaConn.on('error', (err) => {
      console.log('peer media connection error', err);
      clearUpConnect(mediaConn);
    });
    mediaConn.on('stream', (st) => {
      setStatus(STATUS.STREAMING);
      console.log('peer media connection stream', st);
      setStreams((prev) => {
        prev[mediaConn.peer] = st;
        return { ...prev };
      });
    });
    // 更新到mediaConnections集合里
    updateConns({ conn: mediaConn, type: 'media' });
  };
  useEffect(() => {
    if (myPeer) {
      myPeer.on('open', () => {
        // wtf
        updatePeerId(myPeer.id);
        console.log('peer connection open');
        setStatus(STATUS.OPEN);
        // 有连接请求过来
        myPeer.on('connection', (conn) => {
          window.addEventListener('beforeunload', preventCloseTabHandler);
          console.log('peer data connection incoming', conn);
          setStatus(STATUS.CONNECTED);

          initDataChannel(conn);
        });
      });
      myPeer.on('call', (mediaCon) => {
        // 有人呼叫
        console.log('peer connection call from the other');
        setStatus(STATUS.CALLING);

        // 回应
        mediaCon.answer(window.LOCAL_MEDIA_STREAM);
        addMediaConnection(mediaCon);
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
  }, [myPeer]);
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
    addDatachannelConnection: initDataChannel,
    streams,
    status,
    error
  };
};

export default usePeer;

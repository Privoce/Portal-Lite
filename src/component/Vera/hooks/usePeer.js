import { useState, useEffect } from 'react';
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
window.MyPortalVeraPeer = window.MyPortalVeraPeer || null;
window.PEER_DATA_CONNECTIONS = window.PEER_DATA_CONNECTIONS || {};
window.PEER_MEDIA_CONNECTIONS = window.PEER_MEDIA_CONNECTIONS || {};
window.PEER_STRAMS = window.PEER_STRAMS || {};
const usePeer = ({ invitePeerId = null }) => {
  const [myPeer, setMyPeer] = useState(window.MyPortalVeraPeer);
  const [status, setStatus] = useState('waiting');
  const [error, setError] = useState(null);
  const [dataConns, setDataConns] = useState(window.PEER_DATA_CONNECTIONS);
  const [mediaConns, setMediaConns] = useState(window.PEER_MEDIA_CONNECTIONS);
  const [streams, setStreams] = useState(window.PEER_STRAMS);
  // 更新全局
  useEffect(() => {
    window.PEER_DATA_CONNECTIONS = dataConns;
  }, [dataConns]);
  useEffect(() => {
    window.PEER_MEDIA_CONNECTIONS = mediaConns;
  }, [mediaConns]);
  // 初始化Peer
  useEffect(() => {
    if (!myPeer) {
      let tmp = new Peer(peerConfig);
      setMyPeer(tmp);
      // 赋值到全局变量
      window.MyPortalVeraPeer = tmp;
    }
  }, [myPeer]);
  const initDataChannel = (conn) => {
    conn.on('close', () => {
      console.log('peer data connection close');
      // 更新到dataConnections集合里
      setDataConns((prev) => {
        delete prev[conn.peer];
        return { ...prev };
      });
      // 顺带把视频链接也关掉
      mediaConns[conn.peer]?.close();
    });
    conn.on('error', (err) => {
      console.log('peer data connection error', err);
    });
    conn.on('open', () => {
      console.log('peer data connection open');
      // 如果是房主，则发送已经建立的链接集合
      if (!invitePeerId) {
        conn.send({
          type: 'CONNECTIONS',
          data: Object.keys(window.PEER_DATA_CONNECTIONS)
        });
      }
      // 更新到dataConnections集合里
      setDataConns((prev) => {
        prev[conn.peer] = conn;
        return { ...prev };
      });
    });
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
    });
  };
  const addMediaConnection = (mediaConn) => {
    // 更新到mediaConnections集合里
    setMediaConns((prev) => {
      prev[mediaConn.peer] = mediaConn;
      return { ...prev };
    });
    console.log({ mediaConns });
    mediaConn.on('close', () => {
      console.log('peer media connection close');
      // 更新到dataConnections集合里
      setMediaConns((prev) => {
        delete prev[mediaConn.peer];
        return { ...prev };
      });
    });
    mediaConn.on('error', (err) => {
      console.log('peer media connection error', err);
    });
    mediaConn.on('stream', (st) => {
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
        setStatus('open');
        // 受邀者则主动连接房主
        if (invitePeerId) {
          let invitedDataConn = myPeer.connect(invitePeerId);
          // 初始化通用的监听事件
          initDataChannel(invitedDataConn);
        }
        // 有连接请求过来
        myPeer.on('connection', (dataConn) => {
          console.log('peer data connection incoming', dataConn);
          setStatus('connected');

          // 房主主动连接对方？存疑
          if (!invitePeerId) {
            myPeer.connect(dataConn.peer);
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
        // cleanUp();
      });
      myPeer.on('close', () => {
        console.log('peer connection close');
        setStatus('close');
        // cleanUp();
      });
      myPeer.on('error', (err) => {
        console.log('peer connection error');
        setStatus('error');
        setError(err.type);
        // cleanUp();
      });
    }
    // return () => {
    //   cleanUp();
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myPeer, invitePeerId]);
  // const cleanUp = () => {
  //   if (myPeer) {
  //     myPeer.disconnect();
  //     myPeer.destroy();
  //   }
  //   setMyPeer(null);
  // };
  const shutdownPeer = () => {
    console.log({ dataConns, mediaConns });
    Object.entries(mediaConns).forEach(([, conn]) => {
      conn.close();
    });
    Object.entries(dataConns).forEach(([, conn]) => {
      conn.close();
    });
    myPeer.destroy();
  };
  return {
    shutdownPeer,
    peer: myPeer,
    dataConnections: dataConns,
    mediaConnections: mediaConns,
    addMediaConnection,
    streams,
    status,
    error
  };
};

export default usePeer;

import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { getUser } from './utils';
import emitter, { EVENTS } from './useEmitter';
// import { destoryCursor } from '../Cursor';

const PEER_JOIN_EVENT = 'PEER_JOIN_EVENT';
const PEER_LEAVE_EVENT = 'PEER_LEAVE_EVENT';
const CURRENT_PEERS = 'CURRENT_PEERS_EVENT';
const SOCKET_SERVER_URL = '//vera.nicegoodthings.com';
// const SOCKET_SERVER_URL = 'http://localhost:4000';

const useSocketRoom = (roomId) => {
  const [temp, setTemp] = useState(false)
  const [users, setUsers] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [isHost, setIsHost] = useState(true);
  const [peerId, setPeerId] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    const initUser = async () => {
      let curr = await getUser();
      if (curr) {
        let { id, username, photo } = curr;
        setUser({ uid: id, username, avator: photo });
      } else {
        setUser({ username: 'Guest' });
      }
    };

    initUser();
  }, []);
  useEffect(() => {
    console.log('io init', user, roomId, peerId);
    if (!user || !roomId || !peerId || socketRef.current) {
      return;
    }
    let finalRoomId = roomId;
    let temp = false;
    let link = '';
    if (roomId.endsWith('.temp')) {
      setTemp(true)
      temp = true;
      link = location.href;
      finalRoomId = roomId.split('.temp')[0]
    }
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId: finalRoomId, link, temp, peerId, ...user }
    });
    const socket = socketRef.current;
    socket.on('connect', () => {
      console.log('io connect', socket.id);
    });
    socket.on('message', (wtf) => {
      console.log('io message', wtf);
    });
    // 房间当前有哪些人 服务器端来判断是否是host
    socket.on(CURRENT_PEERS, ({ users, host = false, update = false }) => {
      console.log('io current users', users);
      setUsers(users);
      // 首次
      if (!update) {
        setIsHost(host);

        // 立即开始监听房间新加入人员事件
        socket.on(PEER_JOIN_EVENT, (user) => {
          console.log('io join event', user);
          if (user.id === socket.id) return;
          setUsers((users) => [...users, user]);
          // 过滤下
          if (user.peerId !== peerId) {
            emitter.emit(EVENTS.NEW_PEER, user.peerId);
          }
        });
        // 拿到了房间当前人员列表，才算初始化完
        setInitializing(false);
      }
    });

    // 离开房间事件
    socket.on(PEER_LEAVE_EVENT, (user) => {
      console.log('io leave user', user);
      // destoryCursor({ id: user.peerId });
      setUsers((users) => users.filter((u) => u.peerId !== user.peerId));
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId, user, peerId]);
  const sendSocketMessage = (data) => {
    // const { cmd = 'NEW_PEER' } = data;
    // 开始监听房间新加入人员事件
    let currSocket = socketRef.current;

    // if (cmd == 'NEW_PEER') {
    //   currSocket.on(PEER_JOIN_EVENT, (user) => {
    //     console.log('io join event second', user);
    //     emitter.emit(EVENTS.NEW_PEER, user.peerId);
    //   });
    // }
    currSocket.send(data);
  };
  const updatePeerId = (id) => {
    setPeerId(id);
  };
  return {
    temp,
    sendSocketMessage,
    initializing,
    updatePeerId,
    users,
    user,
    isHost
  };
};

export default useSocketRoom;

import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { getUser } from './utils';
import { destoryCursor } from '../Cursor';

const PEER_JOIN_EVENT = 'PEER_JOIN_EVENT';
const PEER_LEAVE_EVENT = 'PEER_LEAVE_EVENT';
const CURRENT_PEERS = 'CURRENT_PEERS_EVENT';
const SOCKET_SERVER_URL = '//vera.nicegoodthings.com';
// const SOCKET_SERVER_URL = '//localhost:4000';

const useSocketRoom = (roomId) => {
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
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId, peerId, ...user }
    });
    const socket = socketRef.current;
    socket.on('connect', () => {
      console.log('io connect', socket.id);
    });
    socket.on('message', (wtf) => {
      console.log('io message', wtf);
    });
    // 房间当前有哪些人 只触发一次
    socket.on(CURRENT_PEERS, (users) => {
      console.log('io current users', users);
      setIsHost(users.length == 0);
      setUsers(users);
      // 拿到了房间当前人员列表，才算初始化完
      setInitializing(false);
    });
    // 房间新加入人员事件
    socket.on(PEER_JOIN_EVENT, (user) => {
      console.log('io join event', user);
      if (user.id === socket.id) return;
      setUsers((users) => [...users, user]);
    });
    // 离开房间事件
    socket.on(PEER_LEAVE_EVENT, (user) => {
      destoryCursor({ id: user.peerId });
      setUsers((users) => users.filter((u) => u.id !== user.id));
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId, user, peerId]);
  const updatePeerId = (id) => {
    setPeerId(id);
  };
  return {
    initializing,
    updatePeerId,
    users,
    user,
    isHost
  };
};

export default useSocketRoom;

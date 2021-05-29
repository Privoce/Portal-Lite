import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
// import axios from 'axios';

const PEER_JOIN_EVENT = 'PEER_JOIN_EVENT';
const PEER_LEAVE_EVENT = 'PEER_LEAVE_EVENT';
const NEW_PEER_MESSAGE_EVENT = 'NEW_PEER_MESSAGE_EVENT';
const SOCKET_SERVER_URL = 'ws://localhost:3008';

const usePeerRoom = (roomId) => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [user] = useState(null);
  const socketRef = useRef();

  useEffect(() => {
    // if (!user) {
    //   return;
    // }
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId }
    });

    socketRef.current.on('connect', () => {
      console.log('socket.io connect', socketRef.current.id);
    });
    socketRef.current.on('message', (wtf) => {
      console.log('socket.io message', wtf);
    });

    socketRef.current.on(PEER_JOIN_EVENT, (user) => {
      if (user.id === socketRef.current.id) return;
      setUsers((users) => [...users, user]);
    });

    socketRef.current.on(PEER_LEAVE_EVENT, (user) => {
      setUsers((users) => users.filter((u) => u.id !== user.id));
    });

    socketRef.current.on(NEW_PEER_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, user]);

  //   const sendMessage = (messageBody) => {
  //     if (!socketRef.current) return;
  //     socketRef.current.emit(NEW_PEER_MESSAGE_EVENT, {
  //       body: messageBody,
  //       senderId: socketRef.current.id,
  //       user: user
  //     });
  //   };

  return {
    messages,
    users,
    user
  };
};

export default usePeerRoom;

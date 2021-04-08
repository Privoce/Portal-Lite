import { useState, useEffect } from 'react';
import { useAuthing } from '@authing/react-ui-components';
import styled from 'styled-components';
import { MdNotificationsActive, MdNotificationsOff } from 'react-icons/md';
import { appId, appHost } from '../InitialConfig';
// 注册 service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  });
}

const publicVapidKey =
  'BMrfFtMtL9IWl9vchDbbbYzJlbQwplyZ_fbv8Pei8gPNna_Dr1O-Ng7U7fy0LLqz5RKIxEytTIzyk6TLrcKbN30';

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  // eslint-disable-next-line no-useless-escape
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
const StyledWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: fixed;
  top: 0.1rem;
  left: 0.1rem;
  font-size: 0.2rem;
`;
export default function Notification() {
  const { authClient } = useAuthing({
    appId,
    appHost
  });
  const [isSub, setIsSub] = useState(false);
  const [username, setUsername] = useState('');
  const handleSub = async () => {
    if (!username) {
      alert('Login First');
      return;
    }
    if (!('serviceWorker' in navigator)) return;
    const registration = await navigator.serviceWorker.ready;
    // Subscribe to push notifications
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log({ subscription });
    const response = await fetch(
      `${process.env.REACT_APP_SERVICE_DOMAIN}/service/notification/${username}`,
      {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
          'content-type': 'application/json'
        }
      }
    );
    const resp = await response.json();

    console.log({ resp });
    if (resp.code == 0) {
      setIsSub(true);
    } else {
      alert('subscribe failed...');
    }
  };

  const handleUnSub = async (name = null) => {
    if (!username) {
      alert('Login First');
      return;
    }
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (!subscription) return;
    // const { endpoint } = subscription;
    if (name) {
      const response = await fetch(
        `${process.env.REACT_APP_SERVICE_DOMAIN}/service/notification/${name}`,
        {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
        }
      );
      const resp = await response.json();

      console.log({ resp });
      if (resp.code == 0) {
        await subscription.unsubscribe();
        setIsSub(false);
      } else {
        alert('unsubscribe failed...');
      }
    } else {
      await subscription.unsubscribe();
      setIsSub(false);
    }
    // if (response.ok) {
    //   await subscription.unsubscribe();
    //   setSubscribeMessage();
    // }
  };
  useEffect(() => {
    const initSub = async () => {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      setIsSub(!!subscription);
    };
    initSub();
  }, []);
  useEffect(() => {
    const initUsername = async () => {
      let currUser = await authClient.getCurrentUser();
      if (currUser && currUser.username) {
        setUsername(currUser.username);
      }
    };
    initUsername();
  }, []);
  return (
    <StyledWrapper>
      {isSub ? (
        <button className="btn unsub" onClick={handleUnSub.bind(null, username)}>
          <MdNotificationsOff />
        </button>
      ) : (
        <button className="btn sub" onClick={handleSub}>
          <MdNotificationsActive />
        </button>
      )}
      <span className="name">{username}</span>
    </StyledWrapper>
  );
}

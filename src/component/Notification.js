import { useState, useEffect } from 'react';
import { useAuthing } from '@authing/react-ui-components';
import styled from 'styled-components';
import { MdNotificationsActive, MdNotificationsOff } from 'react-icons/md';
import { appId, appHost, PushyAppId } from '../InitialConfig';
import { useToasts } from 'react-toast-notifications'
import Pushy from 'pushy-sdk-web'; 

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
  const [isSub, setIsSub] = useState(true);
  const [username, setUsername] = useState('');
  const { addToast } = useToasts();
  
  const registerNotify = () => {
    return new Promise((resolve) => {
      Pushy.register({appId: PushyAppId}).then(async (traceId) => {
        const status = await authClient.checkLoginStatus();
        if (status && status.status) {
          // TODO[eric]: should check original value before updating
          authClient.setUdv('notification', traceId);
          setIsSub(true);
          return resolve(true);
        }
        return resolve(false);
      });
    });

  }

  // remove traceId in authing
  const unregisterNotify = async () => {
      const status = await authClient.checkLoginStatus();
      if (status && status.status) {
        authClient.setUdv('notification', '');
        setIsSub(false);
        disableToast();
      }
  }
  
  useEffect(() => {
    const initUsername = async () => {
      let currUser = await authClient.getCurrentUser();
      if (currUser && currUser.username) {
        setUsername(currUser.username);
      }
    };
    initUsername();
  }, []);

  // setup / update notification trace id
  //TODO[eric]: check if log in first
  useEffect(async () => {
    let count = 0;
    const retryRegister = () => {
      const timerId = setTimeout(async () => {
        await registerNotify();
        count ++;
        if (Pushy.isRegistered()) clearTimeout(timerId);
        else (count < 5) && retryRegister();
      }, 1000);
    }
    retryRegister();
  }, []);

  const enableToast = () => {
    addToast(
      <p>Notification Enabled</p>, {
        appearance: 'success',
        autoDismiss: true
      }
    );
  };

  const disableToast = () => {
    addToast(
      <p>Notification Disabled</p>, {
        appearance: 'success',
        autoDismiss: true
      }
    );
  };


  return (
    <StyledWrapper>
      {isSub ? (
        <button className="btn unsub" onClick={unregisterNotify}>
          <MdNotificationsOff />
        </button>
      ) : (
        <button className="btn sub" onClick={async () => {
          (await registerNotify()) ? enableToast() : disableToast();
        }}>
          <MdNotificationsActive />
        </button>
      )}
      <span className="name">{username}</span>
    </StyledWrapper>
  );
}

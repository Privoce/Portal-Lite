import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import { AuthingGuard } from '@authing/react-ui-components';

// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css';
import { appId, GuardConfig } from '../../InitialConfig';
import { useWidgetSettings } from '../../hooks';
const StyledIcon = styled.div`
  position: relative;
  cursor: pointer;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #c7beff;
  border-radius: 50%;
  padding: 0.14rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  .status {
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    position: absolute;
    top: -0.05rem;
    right: -0.05rem;
    background-color: #aaa;
    &.logged {
      background-color: #07d302;
    }
  }
`;
export default function AuthIcon({ setSyncing, user, openModal, updateUserInfo }) {
  const { widgetSettings, importWidgetSettings } = useWidgetSettings();
  const [guardVisible, setGuardVisible] = useState(false);
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const syncWidgetData = async () => {
      let { status } = await auth.checkLoginStatus();
      if (!status) return;
      setSyncing(true);
      let localData = widgetSettings;
      let [cloudData = null] = await auth.listUdv('widget_data');
      console.log({ localData, cloudData });
      if (!localData) {
        if (cloudData && cloudData.value) {
          // 云端数据存在
          importWidgetSettings(cloudData.value);
          // location.reload();
        }
      } else {
        if (!cloudData) {
          // 云端数据不存在
          await auth.setUdv('widget_data', JSON.stringify(localData));
        } else {
          let cloudObj = JSON.parse(cloudData.value);
          let localDate = new Date(localData.timestamp || new Date().getTime());
          let cloudDate = new Date(cloudObj.timestamp || null);
          if (localDate - cloudDate > 0) {
            // 本地数据较新
            await auth.setUdv('widget_data', JSON.stringify(localData));
          } else {
            // 云端数据较新
            importWidgetSettings(cloudData.value);
            // location.reload();
          }
        }
      }
      // await auth.setUdv('widget_data', JSON.stringify(localData));
      setSyncing(false);
    };
    if (auth && user) {
      syncWidgetData();
    }
  }, [auth, user]);
  const handleIconClick = () => {
    if (user) {
      // 已登录的逻辑

      openModal();
    } else {
      // 去登陆
      setGuardVisible(true);
    }
  };
  const handleGuardLoad = async (authClient) => {
    let currUser = await authClient.getCurrentUser();
    // console.log({ authingResp });
    // const { userInfo, session } = authingResp;
    if (currUser) {
      if (process.env.REACT_APP_CHROME_EXT == 'true') {
        // 扩展环境，则注入用户信息
        chrome.storage.local.set({ user: currUser }, function () {
          console.log('Value is set to ', user);
        });
      }
      setGuardVisible(false);
      updateUserInfo(currUser);
    }
    setAuth(authClient);
  };
  const handleGuardLogin = async (user) => {
    console.log('login', { user });
    updateUserInfo(user);
    setGuardVisible(false);
  };
  const handleGuardClose = () => {
    setGuardVisible(false);
  };
  return (
    <>
      <AuthingGuard
        visible={guardVisible}
        // onRegister={handleReg}
        onClose={handleGuardClose}
        onLogin={handleGuardLogin}
        onLoad={handleGuardLoad}
        appId={appId}
        config={GuardConfig}
      />
      <StyledIcon className="icon profile" onClick={handleIconClick}>
        <FaUserAlt />
        <i className={`status ${user ? 'logged' : ''}`}></i>
      </StyledIcon>
    </>
  );
}

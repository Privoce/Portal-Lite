import { useState } from 'react';
import styled from 'styled-components';
import { AuthingGuard } from '@authing/react-ui-components';
// 引入 css 文件
import '@authing/react-ui-components/lib/index.min.css';
import { appId, GuardConfig } from './config';
const StyledIcon = styled.div`
  cursor: pointer;
  position: fixed;
  right: 0.8rem;
  bottom: 0.1rem;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  .status {
    white-space: nowrap;
    position: absolute;
    top: -0.24rem;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    text-align: center;
    padding: 0.04rem 0.1rem;
    border-radius: 0.1rem;
    border: 1px solid #fff;
    font-size: 0.12rem;
    color: #fff;
    background-color: #07d302;
    &.not_login {
      background-color: #f88070;
    }
  }
`;
export default function AuthIcon({ user, openModal, updateUserInfo }) {
  const [guardVisible, setGuardVisible] = useState(false);
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
      setGuardVisible(false);
      updateUserInfo(currUser);
    }
  };
  const handleGuardLogin = (user) => {
    updateUserInfo(user);
    setGuardVisible(false);
  };
  const handleReg = (user) => {
    console.log('reg user', user);
    // updateUserInfo(user);
    // setGuardVisible(false);
  };
  const handleGuardClose = () => {
    setGuardVisible(false);
  };
  const { username, phone, email } = user || {};
  const user_str = username || phone || email;
  return (
    <>
      <AuthingGuard
        visible={guardVisible}
        onRegister={handleReg}
        onClose={handleGuardClose}
        onLogin={handleGuardLogin}
        onLoad={handleGuardLoad}
        appId={appId}
        config={GuardConfig}
      />
      <StyledIcon className="icon" onClick={handleIconClick}>
        <span className={`status ${user_str ? '' : 'not_login'}`}>{user_str || '未登录'}</span>
        <svg
          t="1614064546843"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1201"
          width="300"
          height="300"
        >
          <path
            d="M512 590.75c-142.5 0-258.75-116.25-258.75-258.75S369.5 69.5 512 69.5s258.75 116.25 258.75 258.75S654.5 590.75 512 590.75z m0-446.25c-101.25 0-183.75 82.5-183.75 183.75S410.75 512 512 512s183.75-82.5 183.75-183.75S613.25 144.5 512 144.5z"
            fill="#5072f0"
            p-id="1202"
          ></path>
          <path
            d="M170.75 950.75c-18.75 0-37.5-15-37.5-37.5v-15c0-210 172.5-382.5 382.5-382.5 22.5 0 37.5 15 37.5 37.5s-15 37.5-37.5 37.5c-168.75 0-307.5 138.75-307.5 307.5v11.25c0 22.5-18.75 41.25-37.5 41.25z"
            fill="#5072f0"
            p-id="1203"
          ></path>
          <path
            d="M853.25 947c-22.5 0-37.5-15-37.5-37.5v-11.25c0-168.75-138.75-307.5-307.5-307.5-22.5 0-37.5-15-37.5-37.5s15-37.5 37.5-37.5c210 0 382.5 172.5 382.5 382.5v11.25c0 22.5-15 37.5-37.5 37.5z"
            fill="#5072f0"
            p-id="1204"
          ></path>
        </svg>
      </StyledIcon>
    </>
  );
}

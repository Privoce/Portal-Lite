import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AuthingSSO from '@authing/sso';

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
    /* line-height: 1.2; */
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
const auth = new AuthingSSO({
  appId: '6034a70af621af721e5320b9',
  appDomain: 'portal-lite-china.authing.cn'
});
export default function AuthIcon({ openModal, updateUserInfo }) {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const checkAuthing = async () => {
      let authingResp = await auth.trackSession();
      console.log({ authingResp });
      const { userInfo, session } = authingResp;
      if (session) {
        setUserInfo(userInfo);
        updateUserInfo(userInfo);
      }
    };
    checkAuthing();
  }, []);
  const handleIconClick = () => {
    if (userInfo) {
      // 已登录的逻辑

      openModal();
    } else {
      // 去登陆
      auth.login({});
    }
  };
  const { username } = userInfo || {};
  return (
    <StyledIcon className="icon" onClick={handleIconClick}>
      <span className={`status ${username ? '' : 'not_login'}`}>{username || '未登录'}</span>
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
  );
}

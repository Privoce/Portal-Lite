import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useAuthing from './useAuthing';
import LogoIcon from '../../asset/img/icon.logo.png';

const StyledWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eee;
  .logo {
    margin-top: -0.8rem;
    width: 2rem;
    height: 2rem;
    border: 2px solid #ccc;
    border-radius: 50%;
    padding: 0.16rem;
    img {
      width: 100%;
    }
  }
  .tip {
    font-weight: 800;
    margin-top: 0.2rem;
    color: #333;
    font-size: 0.6rem;
  }
  .subtip {
    color: #666;
    margin-top: 0.14rem;
    font-size: 0.3rem;
  }
`;

export default function AuthingPage() {
  const { localKey } = useAuthing();
  const [isExt] = useState(window.IS_CHROME_EXT);
  useEffect(() => {
    let code = new URLSearchParams(location.search).get('code');
    if (code) {
      localStorage.setItem(localKey, code);
    }
    if (isExt) {
      setTimeout(() => {
        window.close();
      }, 2000);
    } else {
      setTimeout(() => {
        location.href = '/';
      }, 2000);
    }
  }, []);
  return (
    <StyledWrapper>
      <div className="logo">
        <img src={LogoIcon} alt="Logo" />
      </div>
      <span className="tip">登录成功</span>
      <span className="subtip">{isExt ? '即将关闭该页面...' : '即将跳转...'}</span>
    </StyledWrapper>
  );
}

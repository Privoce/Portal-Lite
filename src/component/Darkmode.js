import { useState } from 'react';
import Darkmode from 'darkmode-js';
import styled, { createGlobalStyle } from 'styled-components';
const StyledG = createGlobalStyle`
.darkmode--activated{
  h1,h2,h3{
    color:#eee !important;
  }
  input,textarea{
    border-color:#666 !important;
    background: #333 !important;
    color: #eee !important;
  }
  .widget[type='widget'] .container{
    background-color:#333;
    border-color:#666;
    box-shadow:0rem 0rem 0.08rem 0rem #999;
  }
  .modal{
    background:#333 !important;
    .tabs .tab{
      color:#eee;
    }
    .widget{
      border-color: #999;
    }
  }
  .inside,.inside:hover{
    .icon{
      box-shadow:none;
    }
  }
  .list .item .txt{
    color:#aaa;
  }
}
`;
const StyledButton = styled.button`
  position: fixed;
  left: 0.1rem;
  bottom: 0.1rem;
  font-size: 0.25rem;
  padding: 0.12rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  &.dark {
    background: #fff;
  }
  &.light {
    background: #666;
  }
`;
const options = {
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  autoMatchOsTheme: true // default: true
};
const dm = new Darkmode(options);
export default function Dark() {
  const [dark, setDark] = useState(dm.isActivated);

  const toggleDarkmode = () => {
    dm.toggle();
    setDark(dm.isActivated);
  };
  return (
    <>
      <StyledG />
      <StyledButton onClick={toggleDarkmode} className={dark ? 'dark' : 'light'}>
        {dark ? '☀️' : '🌙'}
      </StyledButton>
    </>
  );
}

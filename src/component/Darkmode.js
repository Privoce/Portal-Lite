import { useState } from 'react';
import Darkmode from 'darkmode-js';
import styled, { createGlobalStyle } from 'styled-components';
import { useWidgetSettings } from '../hooks';
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
     .list .item .txt{
      color:#aaa;
    }
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
  .widget[type='nav'] .container{
    .inside,.inside:hover{
      .icon{
        box-shadow:none;
      }
      .title{
        text-shadow: 0 0 5px #000;
      }
    }
  }
}
`;
const StyledButton = styled.button`
  font-size: 0.26rem;
  transition: all 0.5s;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 996;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #333;
  &.dark {
    background-color: #eee !important;
  }
  &.light {
    background-color: #003c71 !important;
  }
`;
const options = {
  // mixColor: '#fff', // default: '#fff'
  // backgroundColor: '#fff', // default: '#fff'
  saveInCookies: false // default: true,
  // autoMatchOsTheme: true // default: true
};
const dm = new Darkmode(options);
export default function Dark() {
  const { getWidgetSetting } = useWidgetSettings();
  const [dark, setDark] = useState(dm.isActivated);
  let pageBg = getWidgetSetting({ key: 'bg' });
  if (pageBg) {
    let dmbg = document.querySelector('.darkmode-background');
    let dmlayer = document.querySelector('.darkmode-layer');
    if (dmbg) {
      dmbg.remove();
    }
    if (dmlayer) {
      dmlayer.remove();
    }
    document.body.style.backgroundImage = `url(${pageBg})`;
  }
  const toggleDarkmode = () => {
    let pageBg = getWidgetSetting({ key: 'bg' });
    if (!pageBg) {
      dm.toggle();
      setDark(dm.isActivated);
    } else {
      setDark((prev) => !prev);
      document.body.classList.toggle('darkmode--activated');
    }
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

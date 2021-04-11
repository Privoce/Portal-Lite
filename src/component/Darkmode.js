import { useState } from 'react';
import Darkmode from 'darkmode-js';
import styled, { createGlobalStyle } from 'styled-components';
import { useWidgetSettings } from '../hooks';
const StyledG = createGlobalStyle`
  :root{
    /* common */
    --box-shadow-color:#333;
    --input-bg-color:#fff;
    --input-font-color:#222;
    --input-border-color:#666;
    /* widget */
    --widget-bg-color:#fff;
    --widget-setting-bg-color:#fff;
    --widget-title-font-color:#333;
    --widget-border-color:#ececec;
    --widget-link-color:#bbdaff;
    --widget-font-color:#000;
    --widget-box-shadow-color:#999;

    /* modal */
    --modal-bg-color:#fff;
    --modal-font-color:#222;
  }
  .darkmode--activated {
    /* common */
     --box-shadow-color:#ccc;
    --input-bg-color:#666;
    --input-font-color:#eee;
    --input-border-color:#ccc;
    /* widget */
    --widget-bg-color:#333;
    --widget-setting-bg-color:#aaa;
    --widget-title-font-color:#fff;
    --widget-border-color:#666;
    --widget-link-color:#bbdaff;
    --widget-font-color:#ccc;
    --widget-box-shadow-color:#999;
    /* modal */
    --modal-bg-color:#333;
    --modal-font-color:#fff;
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
  saveInCookies: true // default: true,
  // autoMatchOsTheme: true // default: true
};
window.DARK_MODE = new Darkmode(options);
export default function Dark() {
  const { getWidgetSetting } = useWidgetSettings();
  const [dark, setDark] = useState(window.DARK_MODE.isActivated());
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
      window.DARK_MODE.toggle();
      setDark(window.DARK_MODE.isActivated());
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

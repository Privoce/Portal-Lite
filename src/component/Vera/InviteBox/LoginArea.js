// import { useEffect } from 'react';
import styled from 'styled-components';

import Login from '../Login';
const tipLogin = chrome.i18n.getMessage('tipLogin');
const StyledBox = styled.div`
  height: fit-content;
  overflow: scroll;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #000;
  padding: 2em;
  border-radius: var(--vera-border-radius);
  color: var(--vera-font-color);
  .tip {
    white-space: nowrap;
    font-size: 1.4em;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0.5em;
  }
`;
export default function LoginBox() {
  return (
    <StyledBox>
      <div className="tip">{tipLogin}</div>
      <div className="btns">
        <Login />
        <Login type="reg" />
      </div>
    </StyledBox>
  );
}

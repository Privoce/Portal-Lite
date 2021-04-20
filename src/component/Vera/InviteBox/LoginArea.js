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
  gap: 10px;
  background-color: #000;
  padding: 20px;
  border-radius: var(--border-radius);
  color: var(--font-color);
  .tip {
    white-space: nowrap;
    font-size: 14px;
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 5px;
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

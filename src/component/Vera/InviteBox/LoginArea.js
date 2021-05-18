// import { useEffect } from 'react';
import styled from 'styled-components';

import Login from '../Login';
const StyledBox = styled.div`
  height: fit-content;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: var(--vera-font-color);
  .hr {
    width: 100%;
    color: inherit;
    position: relative;
    font-size: 1.8em;
    text-align: center;
    &:before,
    &:after {
      position: absolute;
      content: '';
      height: 1px;
      background-color: var(--vera-font-color);
      width: 40%;
      top: 50%;
    }
    &:before {
      left: 0;
    }
    &:after {
      right: 0;
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
    margin: 1.5em 0;
  }
`;
export default function LoginBox() {
  return (
    <StyledBox>
      <div className="hr">Or</div>
      <div className="btns">
        <Login />
        <Login type="reg" />
      </div>
    </StyledBox>
  );
}

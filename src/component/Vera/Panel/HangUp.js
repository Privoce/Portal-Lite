import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  width: 3em;
  height: 3em;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/tel.svg`});
  background-color: #eb2027;
  &.close {
    left: 30px;
    top: 26px;
    background-size: 80%;
    background-color: transparent;
    background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/close.svg`});
    &:hover {
      background-color: #eb2027;
    }
  }
`;
export default function HangUp({ type = 'close', handleHangUp }) {
  return <StyledWrapper className={type} onClick={handleHangUp}></StyledWrapper>;
}

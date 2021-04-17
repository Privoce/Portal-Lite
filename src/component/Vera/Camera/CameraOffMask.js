import React from 'react';
import styled from 'styled-components';
const StyledMask = styled.div`
  z-index: 6;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/user.svg`});
`;
export default function CameraOffMask() {
  return <StyledMask></StyledMask>;
}

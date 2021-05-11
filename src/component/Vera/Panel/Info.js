import React from 'react';
import styled from 'styled-components';
const StyledInfo = styled.div`
  font-size: 10px;
  color: #333;
  position: absolute;
  right: 0;
  bottom: -10px;
`;
const { version } = chrome.runtime.getManifest();
export default function Info() {
  return <StyledInfo className="info">{version}</StyledInfo>;
}

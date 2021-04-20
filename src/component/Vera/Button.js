// import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  border: none;
  white-space: nowrap;
  background-color: var(--camera-bg-color);
  color: var(--font-color);
  border-radius: var(--border-radius);
  padding: 4px 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in;
  font-size: 14px;
  line-height: 1.4;
  &.blue {
    background-color: #5480f4;
  }
  &.large {
    font-size: 22px;
    padding-right: 20px;
    padding-left: 20px;
  }
  &:active {
    transform: scale(0.9);
  }
`;
export default StyledButton;

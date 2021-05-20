// import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  min-width: 70px;
  border: none;
  white-space: nowrap;
  background-color: var(--vera-button-bg-color);
  color: var(--vera-button-font-color);
  border-radius: var(--vera-border-radius);
  padding: 6px 8px;
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
  &:disabled {
    background-color: #ccc;
  }
  &:active {
    transform: scale(0.9);
  }
`;
export default StyledButton;

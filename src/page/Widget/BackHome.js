// import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
const StyledLink = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  position: relative;
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
  &:after {
    color: #666;
    font-size: 0.12rem;
    content: '返回首页';
    position: absolute;
    left: -50%;
    transform: translateX(50%);
    bottom: -0.2rem;
  }
`;
export default function BackHome() {
  const history = useHistory();
  const handleHomeBack = () => {
    history.push('/');
  };
  return (
    <StyledLink onClick={handleHomeBack}>
      <svg
        t="1611929695981"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3288"
      >
        <path
          d="M671.2 909.6h-37.6V646.7c0-29-32.6-57.5-65.7-57.5H455.3c-33.2 0-65.7 28.5-65.7 57.5v262.9H352V646.7c0-54.4 54.5-95.1 103.3-95.1H568c48.8 0 103.3 40.7 103.3 95.1v262.9z"
          fill="#1296db"
          p-id="3289"
        ></path>
        <path
          d="M806.1 928.4h-589c-45.7 0-82.8-42.1-82.8-93.9V365h37.6v469.5c0 30.5 20.7 56.3 45.2 56.3h589c24.5 0 45.2-25.8 45.2-56.3V365h37.6v469.5c0 51.7-37.2 93.9-82.8 93.9z"
          fill="#1296db"
          p-id="3290"
        ></path>
        <path
          d="M943.5 446.3c-4.2 0-8.4-1.4-11.9-4.3L537.2 116.6c-25.6-20.8-25.6-20.8-51.3 0.1L91.6 442c-8 6.6-19.8 5.4-26.4-2.5-6.6-8-5.5-19.8 2.5-26.4L462.1 87.6c41.2-33.5 57.8-33.5 98.9-0.1L955.5 413c8 6.6 9.1 18.4 2.5 26.4-3.7 4.6-9.1 6.9-14.5 6.9z"
          fill="#1296db"
          p-id="3291"
        ></path>
      </svg>
    </StyledLink>
  );
}

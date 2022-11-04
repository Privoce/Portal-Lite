// import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
const StyledLink = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  position: fixed;
  right: 0.1rem;
  bottom: 0.1rem;
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
  const navTo = useNavigate();
  const handleHomeBack = () => {
    navTo('/');
  };
  return (
    <StyledLink onClick={handleHomeBack}>
      <AiOutlineHome />
    </StyledLink>
  );
}

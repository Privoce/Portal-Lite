import React from 'react';
import styled from 'styled-components';
import { RiAppsFill } from 'react-icons/ri';
const StyledButton = styled.button`
  width: 0.6rem;
  height: 0.6rem;
  background-color: #ffdddd;
  border-radius: 50%;
  padding: 0.12rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  transition: transform 0.5s;
  svg {
    width: 100%;
    height: 100%;
  }
  /* .title {
    text-align: center;
    color: #555;
    font-size: 0.1rem;
  } */
  &:hover {
    transform: scale(1.1);
  }
`;
export default function OpenButton({ openWidgetListModal }) {
  return (
    <StyledButton onClick={openWidgetListModal}>
      <RiAppsFill />
      {/* <h2 className="title">添加</h2> */}
    </StyledButton>
  );
}

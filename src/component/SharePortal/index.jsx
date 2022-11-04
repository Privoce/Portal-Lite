import { useState } from 'react';
import styled from 'styled-components';
import { RiShareLine } from 'react-icons/ri';
import Modal from './Modal';
const StyledWrapper = styled.button`
  width: 0.6rem;
  height: 0.6rem;
  background-color: #fc6a52;
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export default function SharePortal() {
  const [visible, setVisible] = useState(false);
  const toggleShareModalVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <StyledWrapper onClick={toggleShareModalVisible}>
        <RiShareLine color="#fff" />
      </StyledWrapper>
      {visible ? <Modal closeModal={toggleShareModalVisible} /> : null}
    </>
  );
}

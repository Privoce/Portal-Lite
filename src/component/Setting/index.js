import { useState } from 'react';
import styled from 'styled-components';
import { MdSettings } from 'react-icons/md';
import Modal from './Modal';
const StyledWrapper = styled.button`
  width: 0.6rem;
  height: 0.6rem;
  background-color: #badfff;
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
export default function Setting() {
  const [visible, setVisible] = useState(false);
  const toggleSettingModalVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <StyledWrapper onClick={toggleSettingModalVisible}>
        <MdSettings />
      </StyledWrapper>
      {visible ? <Modal closeModal={toggleSettingModalVisible} /> : null}
    </>
  );
}

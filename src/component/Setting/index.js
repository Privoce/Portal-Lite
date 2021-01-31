import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
const StyledWrapper = styled.button`
  position: fixed;
  right: 0.9rem;
  bottom: 0.15rem;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
`;
export default function Setting() {
  const [visible, setVisible] = useState(false);
  const toggleSettingModalVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <StyledWrapper onClick={toggleSettingModalVisible}>
        <svg
          t="1611931154444"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="12353"
          width="100"
          height="100"
        >
          <path
            d="M341.333333 714.666667a85.333333 85.333333 0 0 1 79.36 53.845333L420.394667 768 896 768v64l-475.562667 0.042667 0.256-0.597334a85.333333 85.333333 0 0 1-158.72 0l0.256 0.597334L128 832V768h134.229333l-0.213333 0.512A85.333333 85.333333 0 0 1 341.333333 714.666667z m0 42.666666a42.666667 42.666667 0 1 0 0 85.333334 42.666667 42.666667 0 0 0 0-85.333334z m341.333334-341.333333A85.333333 85.333333 0 0 1 761.813333 469.333333H896v64l-134.229333 0.042667a85.333333 85.333333 0 0 1-158.208 0L128 533.333333V469.333333h475.52A85.333333 85.333333 0 0 1 682.666667 416z m0-309.333333A85.333333 85.333333 0 0 1 765.312 170.666667H896v64l-139.434667 0.042666a85.333333 85.333333 0 0 1-147.797333 0L128 234.666667V170.666667h472.021333A85.333333 85.333333 0 0 1 682.666667 106.666667z"
            p-id="12354"
            fill="#5072f0"
          ></path>
        </svg>
      </StyledWrapper>
      {visible ? <Modal closeModal={toggleSettingModalVisible} /> : null}
    </>
  );
}

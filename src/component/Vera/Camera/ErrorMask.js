import React from 'react';
import styled from 'styled-components';
const StyledMask = styled.div`
  z-index: 6;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  .tip {
    font-size: 18px;
    color: red;
    font-weight: 800;
  }
`;
export default function ErrorMask({ tip = 'Error' }) {
  return (
    <StyledMask>
      <div className="tip">{tip}</div>
    </StyledMask>
  );
}

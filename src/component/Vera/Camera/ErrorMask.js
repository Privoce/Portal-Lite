import React from 'react';
import styled from 'styled-components';
const StyledMask = styled.div`
  z-index: 6;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 1.8em;
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

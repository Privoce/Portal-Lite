// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
  width: fit-content;
  margin: 1rem auto;
  font-size: 0.3rem;
  color: #fd8778;
  padding: 0.2rem 0.25rem;
  border-radius: 5px;
  border: 1px dashed #eee;
`;
export default function ErrorTip({ tip = 'Error' }) {
  return <StyledWrapper>{tip}</StyledWrapper>;
}

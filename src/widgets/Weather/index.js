// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
export default function Weather() {
  return <StyledWrapper src="https://i.tianqi.com/?c=code&a=getcode&id=55&icon=1"></StyledWrapper>;
}

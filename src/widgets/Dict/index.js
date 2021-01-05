// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
export default function Dict() {
  return <StyledWrapper src="https://fanyi.baidu.com/"></StyledWrapper>;
}

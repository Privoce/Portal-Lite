// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.iframe`
  width: 100%;
  min-height: 5rem;
  height: 100%;
  height: -webkit-fill-availible;
  border: none;
`;
export default function LifeProgress() {
  return <StyledWrapper src="https://works.yangerxiao.com/life-progress/"></StyledWrapper>;
}

// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 0.14rem;
    font-weight: 400;
    color: #333333;
    line-height: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .btn {
    background: #4e6df2;
    border-radius: 0.04rem;

    font-size: 0.16rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 0.22rem;
    padding: 0.11rem 0.46rem;
  }
`;
export default function GoAuth({ authLink = '' }) {
  return (
    <StyledWrapper>
      <p className="tip">暂未授权，点击进行授权</p>
      <a className="btn" href={authLink} target="_blank" rel="noopener noreferrer">
        去授权
      </a>
    </StyledWrapper>
  );
}

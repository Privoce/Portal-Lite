// import React from 'react'
import styled from 'styled-components';
import { useLanguage } from 'uselanguage';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0;
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
    color: #fff;
    line-height: 0.22rem;
    padding: 0.11rem 0.46rem;
    &[disabled] {
      background: #aaa;
    }
  }
`;
export default function GoAuth({ auth = '', disabled = false }) {
  const {
    language: {
      words: {
        widget: { goAuth }
      }
    }
  } = useLanguage();
  let isF = typeof auth === 'function';
  const handleClick = () => {
    auth();
  };
  const txt = disabled ? goAuth.initializing : goAuth.btnTxt;
  return (
    <StyledWrapper>
      <p className="tip">{goAuth.tip}</p>
      {isF ? (
        <button disabled={disabled} className="btn" onClick={handleClick}>
          {txt}
        </button>
      ) : (
        <a className="btn" href={auth} target="_blank" rel="noopener noreferrer">
          {txt}
        </a>
      )}
    </StyledWrapper>
  );
}

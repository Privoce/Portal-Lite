import { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
  .input {
    width: 100%;
    border-radius: 0.1rem 0rem 0rem 0.1rem;
    border: 0.02rem solid #c4c7ce;
    border-right: none;
    padding: 0.1rem 0.16rem;
    font-size: 0.18rem;
    height: 0.44rem;
    &:focus {
      border: 0.02rem solid #4e6ef3;
      border-right: none;
    }
  }
  .btn {
    /* width: 1.4rem;
    height: 0.44rem; */
    word-break: keep-all;
    background: #4e6ef3;
    border-radius: 0rem 0.1rem 0.1rem 0rem;
    padding: 0.1rem 0.34rem 0.09rem 0.35rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: #fff;
    line-height: 0.25rem;
  }
`;
export default function BaiduSearch() {
  const [input, setInput] = useState('');
  const handleInput = (evt) => {
    setInput(evt.target.value);
  };
  return (
    <StyledWrapper>
      <input value={input} onChange={handleInput} className="input" />
      <button className="btn">百度一下</button>
    </StyledWrapper>
  );
}

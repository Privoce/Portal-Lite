import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { highlightWord } from '../util';
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
  .input {
    width: 100%;
    position: relative;
    display: flex;
    input {
      width: 100%;
      border-radius: 0.04rem;
      border: 0.01rem solid #d0d0d0;
      padding: 0.1rem 0.16rem;
      font-size: 0.16rem;
      height: 0.44rem;
      margin-right: 0.2rem;
      &:focus {
        border: 0.01rem solid #999999;
      }
    }
  }
  .btn {
    border-radius: 0.04rem;
    border: 0.01rem solid #d9d9d9;
    word-break: keep-all;
    background-color: #f5f5f5;
    padding: 0.1rem 0.34rem 0.09rem 0.35rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: #555;
    line-height: 0.25rem;

    /* &:hover {
      background-color: #4662d9;
    } */
  }
`;
// let timeoutInt = 0;
export default function BaiduSearch() {
  const [input, setInput] = useState('');
  // const [associates, setAssociates] = useState([]);
  const [focused, setFocused] = useState(false);
  const handleInput = (evt) => {
    setInput(evt.target.value);
  };
  const handleFocus = (val = false) => {
    setFocused(val);
  };
  useEffect(() => {
    const enterKeyUp = ({ keyCode }) => {
      if (keyCode == 13) {
        window.open(`https://google.com/search?q=${input}`, '_blank');
      }
    };
    if (input && focused) {
      window.addEventListener('keypress', enterKeyUp);
    }

    return () => {
      window.removeEventListener('keypress', enterKeyUp);
    };
  }, [input, focused]);
  return (
    <StyledWrapper>
      <div className={`input`}>
        <input
          value={input}
          onFocus={handleFocus.bind(null, true)}
          onBlur={handleFocus.bind(null, false)}
          onChange={handleInput}
        />
      </div>
      <a className="btn" target="_blank" href={`https://google.com/search?q=${input}`}>
        Google
      </a>
    </StyledWrapper>
  );
}

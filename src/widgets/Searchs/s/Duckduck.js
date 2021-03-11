import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SiDuckduckgo } from 'react-icons/si';
// import { highlightWord } from '../util';
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  .input {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    .logo {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.3rem;
      svg {
        width: 100%;
      }
    }
    input {
      width: 100%;
      border-radius: 0.05rem;
      border: 0.01rem solid #d9d9d9;
      padding: 0.12rem 0.16rem;
      font-size: 0.16rem;
      height: 0.44rem;
      padding-right: 0.5rem;
      background-image: url('https://gitee.com/zyanggc/oss/raw/master/works/icon.google.search.png');
      background-repeat: no-repeat;
      background-size: 0.22rem;
      background-position: right 0.06rem top 0.1rem;
      &:focus {
        /* border: 0.01rem solid #999999; */
        box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      }
    }
    .clear {
      width: 0.16rem;
      height: 0.16rem;
      cursor: pointer;
      position: absolute;
      right: 0.4rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
// let timeoutInt = 0;
export default function DuckduckSearch() {
  const [input, setInput] = useState('');
  // const [associates, setAssociates] = useState([]);
  const [focused, setFocused] = useState(false);
  const handleInput = (evt) => {
    setInput(evt.target.value);
  };
  const handleClearInput = () => {
    setInput('');
  };
  const handleFocus = (val = false) => {
    setFocused(val);
  };
  useEffect(() => {
    const enterKeyUp = ({ keyCode }) => {
      if (keyCode == 13) {
        window.open(`https://duckduckgo.com/?q=${input}`, '_blank');
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
        <SiDuckduckgo className="logo" color="#dc593a" />
        <input
          placeholder="DuckduckGo: Search the web without being tracked"
          value={input}
          onFocus={handleFocus.bind(null, true)}
          onBlur={handleFocus.bind(null, false)}
          onChange={handleInput}
        />
        {input && (
          <img
            onClick={handleClearInput}
            className="clear"
            src="https://gitee.com/zyanggc/oss/raw/master/works/icon.google.remove.png"
            alt="google clear icon"
          />
        )}
      </div>
      {/* <a className="btn" target="_blank" href={`https://google.com/search?q=${input}`}>
        Google
      </a> */}
    </StyledWrapper>
  );
}

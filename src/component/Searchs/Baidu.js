import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { highlightWord } from '../../util';
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
      border-radius: 0.1rem 0rem 0rem 0.1rem;
      border: 0.02rem solid #c4c7ce;
      border-right: none;
      padding: 0.1rem 0.16rem;
      font-size: 0.16rem;
      height: 0.44rem;
      &:focus {
        border: 0.02rem solid #4e6ef3;
        /* border-right: none; */
      }
    }
    .line {
      position: absolute;
      top: 0.44rem;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      height: 0.01rem;
      width: 94%;
      background-color: #f5f5f6;
      z-index: 888;
      display: none;
    }
    .list {
      height: 2rem;
      overflow: scroll;
      overscroll-behavior: contain;
      background-color: #fff;
      width: 100%;
      position: absolute;
      font-size: 0.12rem;
      list-style: none;
      padding: 0.02rem 0.16rem 0.04rem 0.16rem;

      margin: 0;
      margin-top: -0.06rem;
      left: 0;
      top: 0.5rem;
      z-index: 886;
      border-radius: 0 0 0.1rem 0.1rem;
      border: 0.02rem solid #4e6ef3;
      border-top: none;
      display: none;

      .item {
        a {
          display: inline-block;
          font-size: 0.15rem;
          line-height: 0.21rem;
          padding: 0.07rem 0;
          color: #222;
          cursor: pointer;
          width: 100%;
          /* &:hover {
          background-color: #eee;
        } */
          mark {
            background: none;
            color: #626676;
          }
        }
        &:hover a {
          mark {
            color: #4e6ef3;
          }
          color: #4e6ef3;
        }
      }
    }
    &.asses {
      input:focus {
        border-bottom: none;
        border-bottom-left-radius: unset;
      }
      .list,
      .line {
        display: initial;
      }
      &:not(:focus-within) .list {
        display: none;
      }
    }
  }
  .btn {
    /* width: 1.4rem;
    height: 0.44rem; */
    word-break: keep-all;
    background-color: #4e6ef3;
    border-radius: 0 0.1rem 0.1rem 0;
    padding: 0.1rem 0.34rem 0.09rem 0.35rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: #fff;
    line-height: 0.25rem;
    &:hover {
      background-color: #4662d9;
    }
  }
`;
let timeoutInt = 0;
export default function BaiduSearch() {
  const [input, setInput] = useState('');
  const [associates, setAssociates] = useState([]);
  const [focused, setFocused] = useState(false);
  const handleInput = (evt) => {
    setInput(evt.target.value);
  };
  const handleFocus = (val = false) => {
    setFocused(val);
  };
  useEffect(() => {
    if (input) {
      // simple debounce
      clearTimeout(timeoutInt);
      timeoutInt = setTimeout(() => {
        fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}/service/baidu/ass?w=${input}`)
          .then((response) => response.json())
          .then((resp) => {
            console.log({ resp });
            const { code, data } = resp;
            if (code == 0) {
              setAssociates(data);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, 400);
    } else {
      setAssociates([]);
    }
  }, [input]);
  useEffect(() => {
    const enterKeyUp = ({ keyCode }) => {
      if (keyCode == 13) {
        window.open(`https://www.baidu.com/s?wd=${input}`, '_blank');
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
      <div className={`input ${associates.length ? 'asses' : ''}`}>
        <input
          value={input}
          onFocus={handleFocus.bind(null, true)}
          onBlur={handleFocus.bind(null, false)}
          onChange={handleInput}
        />
        <div className="line"></div>
        <ul className={`list`}>
          {highlightWord(associates, input).map((word, idx) => {
            return (
              <li key={word} className="item">
                <a
                  target="_blank"
                  href={`https://www.baidu.com/s?wd=${associates[idx]}`}
                  dangerouslySetInnerHTML={{ __html: word }}
                ></a>
              </li>
            );
          })}
        </ul>
      </div>
      <a className="btn" target="_blank" href={`https://www.baidu.com/s?wd=${input}`}>
        百度一下
      </a>
    </StyledWrapper>
  );
}

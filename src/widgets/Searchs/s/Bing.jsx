import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { highlightWord } from '../util';
const StyledWrapper = styled.div`
  display: flex;
  /* flex-direction: column;
  align-items: flex-start; */
  /* width: 100%; */
  .input {
    width: 100%;
    position: relative;
    display: flex;
    input {
      width: 100%;
      border-radius: 0.06rem;
      border: 0.01rem solid #ababab;

      padding: 0.16rem 0.12rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: #222;
      line-height: 0.22rem;
      &:focus {
        border: 0.01rem solid #127ea8;
      }
    }
    .btn {
      position: absolute;
      right: 0.12rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.25rem;
      height: 0.25rem;
      background-image: url('https://static.nicegoodthings.com/privoce/icon.search.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .drop_list {
      position: absolute;
      left: 0;
      top: 0.56rem;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* padding: 0.04rem 0; */
      width: 100%;
      background: #ffffff;
      box-shadow: 0rem 0.02rem 0.09rem 0rem rgba(196, 196, 196, 0.5);
      border-radius: 0.01rem;
      border: 0.01rem solid #e2e2e2;

      .item {
        width: 100%;
        padding: 0.04rem 0.12rem;
        cursor: pointer;
        font-size: 0.16rem;
        font-weight: 400;
        color: #333;
        line-height: 0.22rem;
        &:hover {
          background: #f3f3f3;
        }
        &:first-child {
          padding-top: 0.08rem;
        }
        &:last-child {
          padding-bottom: 0.08rem;
        }
      }
    }
    &:not(:focus-within) .drop_list {
      display: none;
    }
  }
`;
let timeoutInt = 0;
export default function BingSearch({ placeholder }) {
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
        fetch(`${import.meta.env.VITE_SERVICE_DOMAIN}/service/bing/ass?w=${input}`)
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
        window.open(`https://cn.bing.com/search?q=${input}`, '_blank');
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
          placeholder={placeholder}
          value={input}
          onFocus={handleFocus.bind(null, true)}
          onBlur={handleFocus.bind(null, false)}
          onChange={handleInput}
        />
        <a className="btn" target="_blank" href={`https://cn.bing.com/search?q=${input}`}></a>
        {associates.length != 0 && (
          <div className="drop_list">
            {associates.map((ass) => {
              return (
                <a
                  key={ass}
                  className="item"
                  target="_blank"
                  href={`https://cn.bing.com/search?q=${ass}`}
                >
                  {ass}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </StyledWrapper>
  );
}

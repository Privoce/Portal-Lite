import { useState, useEffect } from 'react';
import styled from 'styled-components';

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

    .list {
      height: 2rem;
      overflow: scroll;
      background-color: #fff;
      width: 100%;
      position: absolute;
      font-size: 0.12rem;
      list-style: none;
      padding: 0;
      padding-left: 0.16rem;
      margin: 0;
      left: 0;
      top: 0.5rem;
      z-index: 999;
      border-radius: 0 0 0.1rem 0.1rem;
      border: 0.02rem solid #4e6ef3;
      border-top: none;
      display: none;
      .item {
        font-size: 0.14rem;
        padding: 0.04rem 0.02rem;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
    }
    &.asses {
      input:focus {
        border-bottom: none;
        border-bottom-left-radius: unset;
      }
      .list {
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
    background: #4e6ef3;
    border-radius: 0 0.1rem 0.1rem 0;
    padding: 0.1rem 0.34rem 0.09rem 0.35rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: #fff;
    line-height: 0.25rem;
  }
`;
export default function BaiduSearch() {
  const [input, setInput] = useState('');
  const [associates, setAssociates] = useState(['教书先生']);
  const handleInput = (evt) => {
    setInput(evt.target.value);
  };
  useEffect(() => {
    if (input) {
      fetch(`http://localhost:3008/service/baidu/ass?w=${input}`)
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
    }
  }, [input]);
  return (
    <StyledWrapper>
      <div className={`input ${associates.length ? 'asses' : ''}`}>
        <input value={input} onChange={handleInput} />
        <ul className={`list`}>
          {associates.map((word) => {
            return (
              <li key={word} className="item">
                <a target="_blank" href={`https://www.baidu.com/s?wd=${word}`}>
                  {word}
                </a>
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

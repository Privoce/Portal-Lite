// import { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.28rem 0.45rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .opts {
    display: flex;
    /* justify-content: space-evenly; */
    .opt {
      cursor: pointer;
      font-size: 0.14rem;
      font-weight: 400;
      line-height: 0.2rem;
      margin-right: 0.4rem;
      &[data-selected='true'] {
        color: #4e6df2;
      }
    }
  }
`;
export default function Setting({ lang, name, search, updateSearch, toggleWidgetSettingVisible }) {
  const handleClick = ({
    target: {
      dataset: { s }
    }
  }) => {
    if (s !== search) {
      updateSearch(s);
      toggleWidgetSettingVisible();
    }
  };

  return createPortal(
    <StyledWrapper>
      <ul className="opts">
        <li className="opt" onClick={handleClick} data-s="baidu" data-selected={search == 'baidu'}>
          {lang.baidu}
        </li>
        <li
          className="opt"
          onClick={handleClick}
          data-s="google"
          data-selected={search == 'google'}
        >
          {lang.google}
        </li>
        <li className="opt" onClick={handleClick} data-s="bing" data-selected={search == 'bing'}>
          {lang.bing}
        </li>
      </ul>
    </StyledWrapper>,
    document.querySelector(`#widget-${name}-setting`)
  );
}

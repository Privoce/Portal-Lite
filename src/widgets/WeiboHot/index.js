import React from 'react';
import styled from 'styled-components';
import News from './mock_data';
const StyledWrapper = styled.ul`
  padding: 0.02rem;
  margin: 0;
  list-style: none;
  overflow: scroll;
  height: 100%;
  .item {
    font-size: 0.13rem;
    font-weight: 400;
    line-height: 0.18rem;
    margin-bottom: 0.24rem;
    white-space: nowrap;
    padding-left: 0.3rem;
    padding-right: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    a {
      color: #0178b6;
    }
    &:before {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      content: attr(data-seq);
      font-size: 0.14rem;
      font-weight: 400;
      color: #f26e5f;
      line-height: 0.2rem;
      text-align: center;
      width: 0.1rem;
    }
    &:after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      content: attr(data-tag);
      font-size: 0.12rem;
      color: #ffffff;
      line-height: 0.17rem;
      border-radius: 0.02rem;
      width: 0.18rem;
      text-align: center;
    }
    &[data-tag-type='hotest']:after {
      background: #f86300;
    }
    &[data-tag-type='hot']:after {
      background: #fe9404;
    }
    &[data-tag-type='new']:after {
      background: #ff3852;
    }
  }
`;
const TagMap = {
  hot: '热',
  hotest: '沸',
  new: '新'
};
export default function WeiboHot() {
  return (
    <StyledWrapper>
      {News.map((n, idx) => {
        const { txt, link, tag } = n;
        return (
          <li
            className="item"
            key={idx}
            data-seq={idx + 1}
            data-tag-type={tag}
            data-tag={TagMap[tag]}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {txt}
            </a>
          </li>
        );
      })}
    </StyledWrapper>
  );
}

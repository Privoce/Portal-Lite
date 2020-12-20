import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import News from './mock_data';
import { formatNumber } from '../../util';
const StyledWrapper = styled.ul`
  padding: 0.02rem;
  margin: 0;
  list-style: none;
  overflow: scroll;
  overscroll-behavior: contain;
  height: 100%;
  .item {
    font-size: 0.13rem;
    font-weight: 400;
    line-height: 0.18rem;
    margin-bottom: 0.1rem;
    /* margin-bottom: 0.24rem; */
    white-space: nowrap;
    padding-left: 0.3rem;
    padding-right: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    a {
      color: #0178b6;
      .heat {
        padding-left: 0.15rem;
        font-size: 0.1rem;
        color: #666;
        text-transform: lowercase;
      }
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
    &[data-tag-type='recomm']:after {
      background: #ff3852;
    }
  }
`;
const TagMap = {
  ['热']: 'hot',
  ['沸']: 'hotest',
  ['新']: 'new',
  ['荐']: 'recomm'
};
export default function WeiboHot() {
  const [hots, setHots] = useState([]);
  useEffect(() => {
    const getHots = async () => {
      const list = await fetch('https://api.oioweb.cn/api/summary.php');
      const arr = await list.json();
      setHots(arr);
    };
    getHots();
  }, []);
  return (
    <StyledWrapper>
      {hots.map((n, idx) => {
        const { title, link, hot, heat } = n;
        return (
          <li
            className="item"
            key={idx}
            data-seq={idx + 1}
            data-tag-type={TagMap[hot]}
            data-tag={hot}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
              {heat && <span className="heat">{formatNumber(heat)}</span>}
            </a>
          </li>
        );
      })}
    </StyledWrapper>
  );
}

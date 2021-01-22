import { useState } from 'react';
import styled from 'styled-components';
import IconClose from '../Common/Icons/Close';
import Icon from './Icon';
import { CateMap } from './const';

const StyledWrapper = styled.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  z-index: 885;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  font-size: 0.2rem;
  display: flex;
  flex-direction: column;
  .set {
    padding: 0.05rem 0.1rem;
    user-select: none;
    .title {
      font-weight: 800;
      font-size: 0.2rem;
    }
    .content {
      font-size: 0.14rem;
      line-height: 1.5;
      margin: 0.2rem 0;
      .item {
        cursor: pointer;
        color: #fff;
        border: 1px solid #fff;
      }
      &.intervals {
        .inter {
          margin-right: 0.2rem;
          &[data-selected='true'] {
            background: #fff;
            color: #333;
          }
        }
      }
      &.cates {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-row-gap: 0.2rem;
        justify-items: flex-start;
        .cate {
          padding: 0.05rem 0.1rem;
          &[data-selected='true'] {
            background: #fff;
            color: #333;
          }
        }
      }
    }
  }
  .icon_close {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
`;

const InterMap = [
  {
    inter: 10,
    label: '10秒'
  },
  {
    inter: 60,
    label: '一分钟'
  },
  {
    inter: 60 * 30,
    label: '半小时'
  },
  {
    inter: 60 * 60,
    label: '一小时'
  }
];
export default function Tabs({ currCates, updateCurrCates, currInter, updateInter }) {
  const [tabExpand, setTabExpand] = useState(false);
  const toggleTabExpand = () => {
    setTabExpand((prev) => !prev);
  };
  const handleInterClick = ({ target }) => {
    const { selected, inter } = target.dataset;
    console.log({ selected });
    if (selected == 'true') {
      return;
    } else {
      updateInter(Number(inter));
    }
  };
  const handleCateClick = ({ target }) => {
    const { selected, cate } = target.dataset;
    console.log({ selected });
    if (selected == 'true') {
      let tmpArr = currCates.filter((c) => c != cate);
      updateCurrCates(tmpArr);
    } else {
      updateCurrCates([...currCates, cate]);
    }
  };
  if (!tabExpand)
    return (
      <Icon onClick={toggleTabExpand} style={{ left: '.45rem' }}>
        设
      </Icon>
    );
  return (
    <StyledWrapper>
      <IconClose className="icon_close" onClick={toggleTabExpand} />
      <div className="set">
        <h2 className="title">刷新间隔</h2>
        <div className="content intervals">
          {InterMap.map(({ inter, label }) => {
            return (
              <button
                key={label}
                data-inter={inter}
                data-selected={inter == currInter}
                onClick={handleInterClick}
                className="item inter"
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="set">
        <h2 className="title">分类</h2>
        <div className="content cates">
          {Object.entries(CateMap).map(([key, val]) => {
            return (
              <div
                key={key}
                onClick={handleCateClick}
                className="item cate"
                data-cate={key}
                data-selected={currCates.includes(key)}
              >
                {val}
              </div>
            );
          })}
        </div>
      </div>
    </StyledWrapper>
  );
}

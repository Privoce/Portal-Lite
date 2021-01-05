import { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Widget from '../Widget';

import Navs from './nav_data';
import Tools from './tool_data';

const StyledWrapper = styled.div`
  font-size: 0.16rem;
  .tabs {
    font-weight: 400;
    display: flex;
    border-bottom: 1px solid #e4e4e4;
    margin: 0 0.2rem;
    @media screen and (max-width: 414px) {
      overflow-x: scroll;
      overflow-y: hidden;
    }
    .tab {
      cursor: pointer;
      color: #333;
      line-height: 0.22rem;
      padding-bottom: 0.1rem;
      margin-bottom: -1.5px;
      margin-right: 0.61rem;
      white-space: nowrap;
      &.active {
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #4e6df2;
        border-bottom: 0.03rem solid #4e6df2;
      }
    }
  }
  .content {
    .swiper-container {
      /* overflow: visible; */
      padding: 0 0.2rem;
      .swiper-slide {
        max-height: 4.2rem;
        overflow: scroll;
        padding: 0.32rem 0;
        /* padding-left: 0.2rem; */
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        > div {
          margin-right: 0.44rem;
        }
      }
    }
  }
`;
// const tabs = ['常用', '办公效率', '社交', '视频音乐', '新闻阅读', '生活', '其它'];
const DataMap = {
  tool: Tools,
  nav: Navs
};
export default function SwiperTabs({ source = 'nav', handleSelect }) {
  const [currSwiper, setCurrSwiper] = useState(null);
  const [currIdx, setCurrIdx] = useState(0);
  const handleTabClick = ({ target }) => {
    console.log({ target });
    const { idx } = target.dataset;
    currSwiper.slideTo(Number(idx));
    setCurrIdx(idx);
  };
  const handleClick = (item) => {
    handleSelect(item);
  };
  return (
    <StyledWrapper>
      <div className="tabs">
        {DataMap[source].map(({ title }, idx) => {
          return (
            <div
              data-idx={idx}
              onClick={handleTabClick}
              className={`tab ${currIdx == idx && 'active'}`}
              key={title}
            >
              {title}
            </div>
          );
        })}
      </div>

      <div className="content">
        <Swiper
          spaceBetween={30}
          onSlideChange={({ activeIndex }) => {
            setCurrIdx(activeIndex);
          }}
          onSwiper={setCurrSwiper}
        >
          {DataMap[source].map(({ items }, idx) => {
            return (
              <SwiperSlide key={idx}>
                {items.map((logo) => {
                  return (
                    <Widget
                      key={logo.title}
                      onClick={handleClick.bind(null, logo)}
                      data={{ ...logo, preset: true }}
                    />
                  );
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledWrapper>
  );
}

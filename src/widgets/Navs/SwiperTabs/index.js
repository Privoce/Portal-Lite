import { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import NavItem from '../NavItem';
import { useWidgetSettings } from '../../../hooks';

import Navs from './nav_data';
// import Tools from './tool_data';
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
      /* padding: 0 0.2rem; */
      .swiper-slide {
        max-height: 4.2rem;
        overflow-y: overlay;
        padding: 0.32rem 0;
        /* padding-left: 0.2rem; */
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-items: center;
        @media screen and (max-width: 414px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
`;
export default function SwiperTabs({ widgetName, handleSelect, activeTab = null }) {
  const { updateWidgetSetting } = useWidgetSettings();
  const [currSwiper, setCurrSwiper] = useState(null);
  const [currIdx, setCurrIdx] = useState(0);
  const handleTabClick = ({ target }) => {
    console.log({ target });
    const { idx } = target.dataset;
    currSwiper.slideTo(Number(idx));
    setCurrIdx(idx);
    updateWidgetSetting(widgetName, { swiper_tab: idx });
  };
  const handleClick = (item) => {
    handleSelect(item);
  };
  return (
    <StyledWrapper>
      <div className="tabs">
        {Navs.map(({ title }, idx) => {
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
          allowTouchMove={false}
          // keyboard={true}
          // grabCursor={true}
          spaceBetween={30}
          onSlideChange={({ activeIndex }) => {
            setCurrIdx(activeIndex);
          }}
          onSwiper={(sw) => {
            if (activeTab) {
              sw.slideTo(Number(activeTab));
            }
            setCurrSwiper(sw);
          }}
        >
          {Navs.map(({ items }, idx) => {
            return (
              <SwiperSlide key={idx}>
                {items.map((logo) => {
                  return (
                    <NavItem
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

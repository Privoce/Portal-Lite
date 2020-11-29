import { useState } from 'react';
import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Widget from './Widget';
const StyledWrapper = styled.div`
  font-size: 0.16rem;
  .tabs {
    font-weight: 400;
    display: flex;
    gap: 0.61rem;
    border-bottom: 1px solid #e4e4e4;
    margin: 0 0.2rem;
    .tab {
      cursor: pointer;
      color: #333333;
      line-height: 0.22rem;
      padding-bottom: 0.1rem;
      margin-bottom: -1px;
      &.active {
        color: #4e6df2;
        border-bottom: 2px solid #4e6df2;
      }
    }
  }
  .content {
    .swiper-container {
      /* overflow: visible; */
      padding: 0 0.2rem;
      .swiper-slide {
        padding: 0.32rem 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 0.44rem;
      }
    }
  }
`;
// const tabs = ['常用', '办公效率', '社交', '视频音乐', '新闻阅读', '生活', '其它'];
const TabData = [
  {
    title: '常用',
    items: [
      {
        title: '微博',
        icon: './logos/wb.png',
        themeColor: '#FFD902'
      },
      {
        title: '抖音',
        icon: './logos/dy.png',
        themeColor: '#888'
      }
    ]
  },
  {
    title: '办公效率',
    items: [
      {
        title: '微信',
        icon: './logos/wx.png',
        themeColor: '#fff'
      }
    ]
  },
  {
    title: '社交',
    items: [
      {
        title: '知乎',
        icon: './logos/zh.png',
        themeColor: '#1787fc'
      }
    ]
  },
  {
    title: '视频音乐',
    items: [
      {
        title: '淘宝',
        icon: './logos/tb.png',
        themeColor: '#Ff9'
      }
    ]
  },
  {
    title: '新闻阅读',
    items: [
      {
        title: '爱奇艺',
        icon: './logos/iqy.png',
        themeColor: '#07D302'
      }
    ]
  }
];
export default function SwiperTabs() {
  const [currSwiper, setCurrSwiper] = useState(null);
  const [currIdx, setCurrIdx] = useState(0);
  const handleTabClick = ({ target }) => {
    console.log({ target });
    const { idx } = target.dataset;
    currSwiper.slideTo(Number(idx));
    setCurrIdx(idx);
  };
  return (
    <StyledWrapper>
      <div className="tabs">
        {TabData.map(({ title }, idx) => {
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
          {TabData.map(({ items }, idx) => {
            return (
              <SwiperSlide key={idx}>
                {items.map((logo) => {
                  return <Widget key={logo.title} {...logo} />;
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledWrapper>
  );
}

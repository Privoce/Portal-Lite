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
        padding: 0.32rem 0;
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
const TabData = [
  {
    title: '常用',
    items: [
      {
        title: '哔哩哔哩',
        icon: 'https://www.bilibili.com/favicon.ico',
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
        title: 'Github',
        icon: 'https://github.com/favicon.ico',
        themeColor: '#fff'
      },
      {
        title: '石墨文档',
        icon: 'https://shimo.im/favicon.ico',
        themeColor: '#f6f6f6'
      },
      {
        title: '印象笔记',
        icon: 'https://www.yinxiang.com/favicon.ico',
        themeColor: '#1dbe6b'
      },
      {
        title: 'Office',
        icon: 'https://blobs.officehome.msocdn.com/images/content/images/favicon-8f211ea639.ico',
        themeColor: '#d63c18'
      },
      {
        title: '百度翻译',
        icon: 'https://fanyi.baidu.com/favicon.ico',
        themeColor: '#4898fc'
      }
    ]
  },
  {
    title: '社交',
    items: [
      {
        title: '微博',
        icon: './logos/wb.png',
        themeColor: '#FFD902'
      },
      {
        title: '知乎',
        icon: './logos/zh.png',
        themeColor: '#FFD902'
      },
      {
        title: '豆瓣',
        icon: 'https://www.douban.com/favicon.ico',
        themeColor: '#edf4ed'
      }
    ]
  },
  {
    title: '视频音乐',
    items: [
      {
        title: '优酷',
        icon: 'https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png',
        themeColor: '#fff'
      },
      {
        title: '腾讯视频',
        icon: 'https://v.qq.com/favicon.ico',
        themeColor: '#Ff9'
      },
      {
        title: '爱奇艺',
        icon: './logos/iqy.png',
        themeColor: '#3a4412'
      },
      {
        title: '网易云音乐',
        icon: 'https://s1.music.126.net/style/favicon.ico?v20180823',
        themeColor: '#242424'
      },
      {
        title: '酷狗',
        icon: 'https://www.kugou.com/favicon.ico',
        themeColor: '#fff'
      }
    ]
  },
  {
    title: '新闻阅读',
    items: [
      {
        title: '虎嗅网',
        icon: 'https://gitee.com/zyanggc/oss/raw/master/works/6fDNqR.jpg',
        themeColor: '#f60'
      },
      {
        title: '新华网',
        icon: 'http://xinhuanet.com/favicon.ico',
        themeColor: '#167ff8'
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
                  return <Widget key={logo.title} data={logo} />;
                })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledWrapper>
  );
}

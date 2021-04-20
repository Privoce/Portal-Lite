import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { useWidgetSettings } from '../../hooks';

import Loading from '../Common/Loading';
import IconDownload from '../Common/Icons/Download';
import IconWall from '../Common/Icons/Wall';
import useData from '../Common/hooks/useData';
// install Swiper components
SwiperCore.use([Navigation, Pagination]);
const StyledWrapper = styled.section`
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-pagination,
    .swiper-button-next,
    .swiper-button-prev,
    .swiper-wrapper .swiper-slide .pic .opts {
      opacity: 0;
    }
    .swiper-wrapper {
      /* height: 100%; */
      .swiper-slide {
        /* height: 100%; */
        .pic {
          width: 100%;
          height: 100%;
          position: relative;
          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .opts {
            z-index: 99;
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;
            display: flex;
            .opt {
              display: flex;
              &:not(:last-child) {
                margin-right: 0.1rem;
              }
              .icon {
                cursor: pointer;
                width: 0.32rem;
                height: 0.32rem;
              }
            }
          }
          .cr {
            transition: transform 0.5s;
            transform: translateY(100%);
            padding: 0.1rem 0.2rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, #000, transparent);
            .txt {
              font-size: 0.16rem;
              line-height: 1.4;
              color: #fff;
            }
          }
        }
      }
    }
    &:hover {
      .swiper-pagination,
      .swiper-button-next,
      .swiper-button-prev,
      .swiper-wrapper .swiper-slide .pic .opts {
        opacity: 0.8;
      }
      .swiper-slide .pic .cr {
        transform: translateY(0);
      }
    }
  }
`;
export default function BingDailyPicture() {
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const [currWallpaper, setCurrWallpaper] = useState(getWidgetSetting({ key: 'bg' }));
  const { data: list, loading, error } = useData(
    `${process.env.REACT_APP_SERVICE_DOMAIN}/service/bing/wp/7`
  );

  const handleSetBG = (url) => {
    setCurrWallpaper(url);
    updateWidgetSetting({
      key: 'bg',
      data: url
    });
  };
  useEffect(() => {
    if (currWallpaper) {
      document.body.style.backgroundImage = `url(${currWallpaper})`;
    }
  }, [currWallpaper]);
  if (loading) return <Loading />;
  // 抛错
  if (error) {
    throw new Error(error);
  }
  return (
    <StyledWrapper>
      <Swiper
        // allowTouchMove={true}
        autoplay={{
          delay: 1000
        }}
        navigation
        pagination={{ clickable: true }}
        keyboard={true}
        loop={true}
        // grabCursor={true}
        spaceBetween={30}
        // onSlideChange={({ activeIndex }) => {
        //   setCurrIdx(activeIndex);
        // }}
        onSwiper={(mySwiper) => {
          mySwiper.update();
        }}
      >
        {list.map((n) => {
          const { url, copyright } = n;
          return (
            <SwiperSlide key={url}>
              <div className="pic">
                <div className="opts">
                  <div
                    className="opt wall"
                    title="设置为壁纸"
                    onClick={handleSetBG.bind(null, `https://cn.bing.com${url}`)}
                  >
                    <IconWall className="icon" />
                  </div>
                  <a
                    target="_blank"
                    href={`https://cn.bing.com${url}`}
                    download={true}
                    title="下载"
                    className="opt download"
                  >
                    <IconDownload className="icon" />
                  </a>
                </div>
                <img className="img" src={`https://cn.bing.com${url}&w=600`} alt="必应壁纸" />
                <div className="cr">
                  <p className="txt">{copyright}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledWrapper>
  );
}

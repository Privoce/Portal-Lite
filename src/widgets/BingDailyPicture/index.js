import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import ErrorTip from '../Common/ErrorTip';
import Loading from '../Common/Loading';
import IconDownload from '../Common/Icons/Download';
// install Swiper components
SwiperCore.use([Navigation, Pagination]);
const StyledWrapper = styled.section`
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-pagination,
    .swiper-button-next,
    .swiper-button-prev,
    .swiper-wrapper .swiper-slide .pic .download {
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
            object-fit: cover;
          }
          .download {
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;
            display: flex;
            .icon {
              width: 0.32rem;
              height: 0.32rem;
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
      .swiper-wrapper .swiper-slide .pic .download {
        opacity: 0.8;
      }
      .swiper-slide .pic .cr {
        transform: translateY(0);
      }
    }
  }
`;
export default function BingDailyPicture() {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  useEffect(() => {
    const getPics = async () => {
      const list = await fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}/service/bing/wp/7`);
      const { code, data, msg } = await list.json();
      if (code != 0) {
        setErrTip(msg);
        return;
      }
      setPics(data);
      setLoading(false);
    };
    getPics();
  }, []);
  if (loading) return <Loading />;
  if (errTip) return <ErrorTip tip={errTip} />;
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
        {pics.map((n) => {
          const { url, copyright } = n;
          return (
            <SwiperSlide key={url}>
              <div className="pic">
                <a
                  target="_blank"
                  href={`//cn.bing.com${url}`}
                  download={true}
                  className="download"
                >
                  <IconDownload className="icon" />
                </a>
                <img className="img" src={`//cn.bing.com${url}&w=600`} alt="必应壁纸" />
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

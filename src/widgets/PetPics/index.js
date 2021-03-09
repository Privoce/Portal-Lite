import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Pets from './Pets';
import { useWidgetSettings } from '../../hooks';

import Loading from '../Common/Loading';
// import IconDownload from '../Common/Icons/Download';
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
          background-color: #333;
          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          .img {
            border-radius: 0.24rem;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
            backdrop-filter: blur(8px);
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
export default function PetPics({ name, toggleWidgetSettingVisible }) {
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  let localPics = getWidgetSetting({ name, key: 'pics' });
  const [pet, setPet] = useState(getWidgetSetting({ name, key: 'pet' }) || 'shibes');
  const [pics, setPics] = useState(localPics || []);
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');

  useEffect(() => {
    const getPics = async () => {
      setLoading(true);
      const list = await fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}/service/animals/${pet}`);
      const { code, data, msg } = await list.json();
      if (code != 0) {
        setErrTip(msg);
        return;
      }
      setPics(data);
      updateWidgetSetting({ name, key: 'pics', data });
      setLoading(false);
    };
    getPics();
    updateWidgetSetting({ name, key: 'pet', data: pet });
  }, [pet, name]);
  if (loading) return <Loading />;
  // 抛错
  if (errTip) {
    throw new Error(errTip);
  }
  return (
    <>
      <Pets
        currPet={pet}
        updatePet={setPet}
        name={name}
        toggleWidgetSettingVisible={toggleWidgetSettingVisible}
      />
      <StyledWrapper>
        <Swiper
          autoplay={{
            delay: 1000
          }}
          navigation
          pagination={{ clickable: true }}
          keyboard={true}
          loop={true}
          spaceBetween={30}
          onSwiper={(mySwiper) => {
            mySwiper.update();
          }}
        >
          {pics.map((url) => {
            return (
              <SwiperSlide key={url}>
                <div className="pic" style={{ backgroundImage: `url(${url})` }}>
                  <div className="img">
                    <img src={url} alt="宠物图" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledWrapper>
    </>
  );
}

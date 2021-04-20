// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Pets from './Pets';
import { useWidgetSettings } from '../../hooks';
import usePets from './usePets';
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
export default function PetPics({ name, data, toggleWidgetSettingVisible }) {
  const { getWidgetSetting } = useWidgetSettings();
  let localPics = getWidgetSetting({ name, key: 'pics' });
  const { updatePet, loading, pet, pets: pics, error } = usePets(
    data?.pet || getWidgetSetting({ name, key: 'pet' }) || 'shibes',
    data?.pics || localPics || []
  );
  const handleUpdatePet = (pet) => {
    updatePet(pet);
  };
  if (loading) return <Loading />;
  // 抛错
  if (error) {
    throw new Error(error);
  }
  return (
    <>
      <Pets
        currPet={pet}
        updatePet={handleUpdatePet}
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

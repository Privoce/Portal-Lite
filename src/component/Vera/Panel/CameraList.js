import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import IconArrowLeft from '../icons/ArrowLeft';
import IconArrowRight from '../icons/ArrowRight';
import Camera from '../Camera';
import { STATUS } from '../hooks/useEmitter';
SwiperCore.use([Navigation]);
const StyledWrapper = styled.div``;
export default function CameraList({
  joined = false,
  peerId = null,
  panelRef,
  layout,
  streams,
  remoteUsers = [],
  dataConnections,
  mediaConnections
}) {
  const renderCameras = () => {
    console.log({ remoteUsers, joined });
    // if (!panelRef.current) return null;
    let count = joined ? remoteUsers.length : 0;
    const remotes = count
      ? remoteUsers.map(({ peerId: pid, username = 'Guest' }) => {
          let st = streams[pid];
          let dataConn = dataConnections[pid];
          let mediaConn = mediaConnections[pid];
          console.log('current camera username', username);
          const status = st ? STATUS.STREAMING : mediaConn ? STATUS.JOINING : STATUS.WAITING;
          return count > 2 ? (
            <SwiperSlide key={pid}>
              <Camera
                status={status}
                username={{ value: username }}
                peerId={pid}
                key={pid}
                dataConnection={dataConn}
                mediaStream={st}
              />
            </SwiperSlide>
          ) : (
            <Camera
              status={status}
              username={{ value: username }}
              peerId={pid}
              key={pid}
              dataConnection={dataConn}
              mediaStream={st}
            />
          );
        })
      : [];
    return count > 2 ? (
      <Swiper
        // direction={'vertical'}
        direction={layout == 'vt' ? 'vertical' : 'horizontal'}
        observer={true}
        resizeObserver={true}
        slidesPerView={layout == 'one' ? 1 : 3}
        spaceBetween={layout == 'one' ? 0 : 15}
        navigation={{
          prevEl: panelRef.current.querySelector('.cameras .nav.prev'),
          nextEl: panelRef.current.querySelector('.cameras .nav.next')
        }}
        onUpdate={() => {
          console.log('swiper update');
        }}
        onDestroy={() => {
          console.log('swiper destory');
        }}
      >
        <SwiperSlide>
          <Camera dataConnections={dataConnections} peerId={peerId} remote={false} />
        </SwiperSlide>
        {remotes}
      </Swiper>
    ) : (
      [
        <Camera key={peerId} dataConnections={dataConnections} peerId={peerId} remote={false} />,
        ...remotes
      ]
    );
  };
  let remoteCount = joined ? remoteUsers.length : 0;
  let cameraSlides = remoteCount > 2;
  let camerasStyle = cameraSlides
    ? layout == 'vt'
      ? { height: 'calc(60em + 30px)' }
      : layout == 'one'
      ? { width: '20em' }
      : { width: 'calc(60em + 30px)' }
    : {};
  return (
    <StyledWrapper
      className={`cameras ${cameraSlides ? 'slides' : ''}`}
      data-count={`+ ${remoteCount - 2}`}
      style={camerasStyle}
    >
      {cameraSlides && (
        <div className="nav prev">
          <IconArrowLeft />
        </div>
      )}
      {renderCameras()}
      {cameraSlides && (
        <div className="nav next">
          <IconArrowRight />
        </div>
      )}
    </StyledWrapper>
  );
}

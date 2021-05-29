import { useState, useRef, useEffect } from 'react';
import Camera from '../Camera';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import IconArrowLeft from '../icons/ArrowLeft';
import IconArrowRight from '../icons/ArrowRight';
import Invite from '../InviteBox';
import Join from '../JoinBox';
import usePeer from '../hooks/usePeer';
import { getTranslateValues } from '../hooks/utils';
import StyledWrapper from './styled';
import Topbar from './Topbar';
import HangUp from './HangUp';
import Setting from './Setting';
import Info from './Info';
import Resize from './Resize';
import { EVENTS, STATUS } from '../hooks/useEmitter';
import useSocketRoom from '../hooks/useSocketRoom';

SwiperCore.use([Navigation]);
const quitConfirmTxt = chrome.i18n.getMessage('quitConfirm');

let used = false;
let draggable = null;
export default function Panel({
  roomId = null,
  chatVisible = false,
  closePanel,
  toggleChatVisible
}) {
  const { initializing, updatePeerId, users, user, isHost } = useSocketRoom(roomId);
  const {
    peer,
    shutdownPeer,
    dataConnections,
    mediaConnections,
    addDatachannelConnection,
    addMediaConnection,
    streams,
    status
  } = usePeer(updatePeerId);
  const [videoSync, setVideoSync] = useState(true);
  const [enableCursor, setEnableCursor] = useState(true);
  const [resizing, setResizing] = useState(false);
  const [floatVisible, setFloatVisible] = useState(false);
  const [panelSize, setPanelSize] = useState({ width: 440, height: 250 });
  const [movePosition, setMovePosition] = useState({ left: 0, top: 0 });
  const [layout, setLayout] = useState('hz');
  const panelRef = useRef(null);

  const handleLayout = ({ target }) => {
    if (target.classList.contains('curr')) return;
    let tmp = target.getAttribute('layout');
    setLayout(tmp);
  };
  // 视频过
  useEffect(() => {
    if (Object.keys(streams).length) {
      used = true;
    }
  }, [streams]);
  const initDraggable = () => {
    let dragEle = panelRef.current;
    let containment = document.querySelector('#VERA_FULLSCREEN_CONTAINER');
    draggable = new PlainDraggable(dragEle, {
      containment,
      // autoScroll: true,
      onMove: () => {
        // console.log({ pos, draggable });
        let { x, y } = getTranslateValues(dragEle);
        // let { left, top } = pos;
        setMovePosition({ left: x, top: y });
      }
    });
  };
  const handleResizeStop = () => {
    draggable.remove();
    initDraggable();
    setResizing(false);
  };
  const handleResizeStart = () => {
    setResizing(true);
  };
  // 拖拽
  useEffect(() => {
    if (!initializing) {
      initDraggable();
    }
  }, [initializing]);
  const toggleInviteVisible = () => {
    setFloatVisible((prev) => !prev);
  };
  const handleClose = () => {
    let letGo = Object.keys(dataConnections).length ? confirm(quitConfirmTxt) : true;
    if (letGo) {
      console.log('clean up stream');
      let cameras = [...panelRef.current.querySelectorAll('video')];
      cameras.forEach((c) => {
        c.srcObject?.getTracks().forEach((t) => {
          t.stop();
        });
        c.srcObject = null;
      });
      shutdownPeer();
      closePanel();
    }
  };
  const sendDataToPeers = (cmd) => {
    Object.entries(dataConnections).forEach(([, conn]) => {
      conn.send(cmd);
    });
  };
  const toggleCursor = () => {
    let cmd = {
      type: EVENTS.TOGGLE_CURSOR,
      data: {
        peer: peer.id,
        enable: !enableCursor
      }
    };
    sendDataToPeers(cmd);
    setEnableCursor((prev) => !prev);
  };
  const toggleVideoSync = () => {
    setVideoSync((prev) => !prev);
  };
  const syncPlayerToPeers = (payload) => {
    let cmd = {
      type: EVENTS.SYNC_PLAYER,
      data: {
        peer: peer?.id,
        payload
      }
    };
    sendDataToPeers(cmd);
  };
  const renderCameras = () => {
    // if (!panelRef.current) return null;
    let count = Object.keys(mediaConnections).length;
    const remotes = count
      ? Object.entries(mediaConnections).map(([pid, conn]) => {
          let st = streams[pid];
          let username = { value: users.filter((u) => u.peerId == pid)[0]?.name };
          console.log('current camera username', username);
          return count > 2 ? (
            <SwiperSlide>
              <Camera
                username={username}
                peerId={pid}
                key={pid}
                mediaConnection={conn}
                dataConnection={dataConnections[pid]}
                mediaStream={st}
              />
            </SwiperSlide>
          ) : (
            <Camera
              username={username}
              peerId={pid}
              key={pid}
              mediaConnection={conn}
              dataConnection={dataConnections[pid]}
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
          <Camera dataConnections={dataConnections} peerId={peer?.id} remote={false} />
        </SwiperSlide>
        {remotes}
      </Swiper>
    ) : (
      [
        <Camera
          key={peer?.id}
          dataConnections={dataConnections}
          peerId={peer?.id}
          remote={false}
        />,
        ...remotes
      ]
    );
  };
  let remoteCount = Object.keys(mediaConnections).length;
  let noConnection = remoteCount == 0;
  let cameraSlides = remoteCount > 2;
  // let reset='reset'==status;
  let miniLayout = layout == 'min';
  let boxVisible = noConnection && !miniLayout;
  let { width, height } = panelSize;
  let camerasStyle = cameraSlides
    ? layout == 'vt'
      ? { height: 'calc(60em + 30px)' }
      : layout == 'one'
      ? { width: '20em' }
      : { width: 'calc(60em + 30px)' }
    : {};
  // 还在初始化房间
  if (initializing) return null;
  console.log('current user', user);
  return (
    <StyledWrapper className={resizing ? 'resizing' : ''}>
      <div
        className={`panel ${layout}`}
        data-status={status}
        ref={panelRef}
        style={{ width: `${width}px`, height: `${height}px`, fontSize: `${(width / 440) * 10}px` }}
      >
        {floatVisible && <Invite float={true} roomId={roomId} />}
        <div
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
        </div>
        {boxVisible ? (
          !isHost ? (
            used ? (
              <Invite roomId={roomId} />
            ) : (
              <Join
                ready={status == STATUS.READY}
                peerClient={peer}
                peerIds={users.map((u) => u.peerId)}
                addDatachannelConnection={addDatachannelConnection}
                addMediaConnection={addMediaConnection}
              />
            )
          ) : (
            <Invite roomId={roomId} />
          )
        ) : null}
        <Topbar
          cursor={enableCursor}
          videoSync={videoSync}
          toggleVideoSync={toggleVideoSync}
          syncPlayerToPeers={syncPlayerToPeers}
          toggleCursor={toggleCursor}
          inviteVisible={floatVisible}
          toggleInviteVisible={toggleInviteVisible}
          layout={layout}
          handleLayout={handleLayout}
          chatVisible={chatVisible}
          toggleChatBoxVisible={toggleChatVisible}
        />
        <Info />
        {layout !== 'min' && <Setting logoutVisible={status !== STATUS.STREAMING} />}
        <HangUp type={noConnection ? 'close' : 'hangup'} handleHangUp={handleClose} />
      </div>
      {layout !== 'min' && (
        <Resize
          {...panelSize}
          {...movePosition}
          updateSize={setPanelSize}
          onResizeStart={handleResizeStart}
          onResizeStop={handleResizeStop}
        />
      )}
    </StyledWrapper>
  );
}

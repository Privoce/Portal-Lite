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
import useDarkTheme from '../hooks/useDarkTheme';
import useUserMedia from '../hooks/useUserMedia';
import { getTranslateValues } from '../hooks/utils';
import StyledWrapper from './styled';
import Topbar from './Topbar';
import HangUp from './HangUp';
import Setting from './Setting';
import Info from './Info';
import Resize from './Resize';
import PermissionTip from './PermissionTip';
import { STATUS } from '../hooks/useEmitter';
import useSocketRoom from '../hooks/useSocketRoom';
import Loading from '../Loading';

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
  const { dark, updateDarkTheme } = useDarkTheme();
  const { permissions } = useUserMedia();

  const { initializing, updatePeerId, users, user, isHost, sendSocketMessage } = useSocketRoom(
    roomId
  );
  const { peer, shutdownPeer, dataConnections, mediaConnections, streams, status } = usePeer(
    updatePeerId
  );
  const [resizing, setResizing] = useState(false);
  const [floatVisible, setFloatVisible] = useState(false);
  const [panelSize, setPanelSize] = useState({ width: 440, height: 250 });
  const [movePosition, setMovePosition] = useState({ left: 0, top: 0 });
  const [layout, setLayout] = useState('hz');
  const panelRef = useRef(null);
  const [filteredMediaConns, setFilteredMediaConns] = useState([]);

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
  //更新过滤后的media connects
  useEffect(() => {
    console.log('useeffect', users, mediaConnections);
    let filters = Object.entries(mediaConnections).filter(([pid]) => {
      // return true;
      return users.some((u) => u.peerId == pid);
    });
    setFilteredMediaConns(filters);
  }, [users, mediaConnections]);
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
    if (!initializing && permissions == 'granted') {
      initDraggable();
    }
  }, [initializing, permissions]);
  const toggleInviteVisible = () => {
    setFloatVisible((prev) => !prev);
  };
  const handleClose = () => {
    let letGo = Object.keys(dataConnections).length ? confirm(quitConfirmTxt) : true;
    if (letGo) {
      shutdownPeer();
      closePanel();
    }
  };
  const sendDataToPeers = (cmd) => {
    Object.entries(dataConnections).forEach(([, conn]) => {
      conn.send(cmd);
    });
  };
  const renderCameras = () => {
    // if (!panelRef.current) return null;
    let count = filteredMediaConns.length;
    const remotes = count
      ? filteredMediaConns.map(([pid, conn]) => {
          let st = streams[pid];
          let username = { value: users.filter((u) => u.peerId == pid)[0]?.username };
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
          <Camera
            dataConnections={dataConnections}
            mediaConnections={mediaConnections}
            peerId={peer?.id}
            remote={false}
          />
        </SwiperSlide>
        {remotes}
      </Swiper>
    ) : (
      [
        <Camera
          key={peer?.id}
          mediaConnections={mediaConnections}
          dataConnections={dataConnections}
          peerId={peer?.id}
          remote={false}
        />,
        ...remotes
      ]
    );
  };
  let remoteCount = Object.keys(filteredMediaConns).length;
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
  // tip for permission
  if (['prompt', 'denied'].includes(permissions)) {
    return (
      <StyledWrapper>
        <PermissionTip type={permissions} />
      </StyledWrapper>
    );
  }
  // 还在初始化房间
  if (initializing)
    return (
      <StyledWrapper>
        <Loading />
      </StyledWrapper>
    );
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
              <Join sendSocketMessage={sendSocketMessage} />
            )
          ) : (
            <Invite roomId={roomId} />
          )
        ) : null}
        <Topbar
          sendDataToPeers={sendDataToPeers}
          peerId={peer?.id}
          inviteVisible={floatVisible}
          toggleInviteVisible={toggleInviteVisible}
          layout={layout}
          handleLayout={handleLayout}
          chatVisible={chatVisible}
          toggleChatBoxVisible={toggleChatVisible}
        />
        <Info />
        {layout !== 'min' && (
          <Setting
            logoutVisible={status !== STATUS.STREAMING}
            dark={dark}
            updateDarkTheme={updateDarkTheme}
          />
        )}
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

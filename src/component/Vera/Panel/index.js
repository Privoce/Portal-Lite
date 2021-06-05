import { useState, useRef, useEffect } from 'react';

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
import CameraList from './CameraList';

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

  const { temp: tempRoom, initializing, updatePeerId, users, isHost, sendSocketMessage } = useSocketRoom(roomId);
  const { peer, shutdownPeer, dataConnections, mediaConnections, streams, status } = usePeer(
    updatePeerId
  );
  const [resizing, setResizing] = useState(false);
  const [floatVisible, setFloatVisible] = useState(false);
  const [panelSize, setPanelSize] = useState({ width: 440, height: 250 });
  const [movePosition, setMovePosition] = useState({ left: 0, top: 0 });
  const [layout, setLayout] = useState('hz');
  const panelRef = useRef(null);
  const [remoteUsers, setRemoteUsers] = useState([]);

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
    if (peer) {
      setRemoteUsers(users.filter((u) => u.peerId !== peer.id));
    }
  }, [users, peer]);
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
      if (tempRoom) {
        let yes = confirm('do you want keep the temp room?');
        if (yes) {
          sendSocketMessage({ cmd: "KEEP_ROOM" })
        }
      }

      shutdownPeer();
      closePanel();
    }
  };
  const sendDataToPeers = (cmd) => {
    Object.entries(dataConnections).forEach(([, conn]) => {
      conn.send(cmd);
    });
  };
  let joined = !!users.find((u) => u.peerId == peer?.id);
  let noConnection = remoteUsers.length == 0 || !joined;

  let miniLayout = layout == 'min';
  let boxVisible = noConnection && !miniLayout;
  let { width, height } = panelSize;
  console.log({ noConnection, miniLayout });
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
  console.log('users', users);

  return (
    <StyledWrapper className={resizing ? 'resizing' : ''}>
      <div
        className={`panel ${layout}`}
        data-status={status}
        ref={panelRef}
        style={{ width: `${width}px`, height: `${height}px`, fontSize: `${(width / 440) * 10}px` }}
      >
        {floatVisible && <Invite float={true} roomId={roomId} />}
        {/* camera list */}
        <CameraList
          joined={joined}
          streams={streams}
          peerId={peer?.id}
          remoteUsers={remoteUsers}
          panelRef={panelRef}
          layout={layout}
          dataConnections={dataConnections}
          mediaConnections={mediaConnections}
        />
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

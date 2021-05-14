import { useState, useRef, useEffect } from 'react';
import Camera from '../Camera';
// import Loading from '../Loading';
import Invite from '../InviteBox';
import Join from '../JoinBox';
import usePeer from '../hooks/usePeer';
import { getTranslateValues } from '../hooks/utils';
import StyledWrapper from './styled';
import Topbar from './Topbar';
import Info from './Info';
import Resize from './Resize';
import { STATUS } from '../hooks/useEmitter';
const quitConfirmTxt = chrome.i18n.getMessage('quitConfirm');

let used = false;
let draggable = null;
export default function Panel({
  closePanel,
  invitePeerId = null,
  updateChannelId,
  toggleChatVisible
}) {
  const {
    peer,
    shutdownPeer,
    dataConnections,
    mediaConnections,
    addMediaConnection,
    streams,
    usernames,
    status
  } = usePeer({
    invitePeerId
  });
  const [resizing, setResizing] = useState(false);
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
  const handleResizeStop = () => {
    draggable.remove();
    initDraggable();
    setResizing(false);
  };
  const handleResizeStart = () => {
    setResizing(true);
  };
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
  // 拖拽
  useEffect(() => {
    if (panelRef) {
      initDraggable();
    }
  }, []);
  useEffect(() => {
    if (status == STATUS.OPEN) {
      let channelId = invitePeerId || peer?.id;

      updateChannelId(channelId);
    }
  }, [status, invitePeerId, peer]);
  const handleClose = () => {
    let letGo = Object.keys(dataConnections).length ? confirm(quitConfirmTxt) : true;
    if (letGo) {
      console.log('clean up stream');
      let cameras = [...panelRef.current.querySelectorAll('video')];
      cameras.forEach((c) => {
        c.srcObject?.getTracks().forEach((t) => t.stop());
        c.srcObject = null;
      });
      shutdownPeer();
      closePanel();
    }
  };

  let noConnection = Object.keys(mediaConnections).length == 0;
  // let reset='reset'==status;
  let miniLayout = layout == 'min';
  let boxVisible = noConnection && !miniLayout;
  let { width, height } = panelSize;
  return (
    <StyledWrapper className={resizing ? 'resizing' : ''}>
      <div
        className={`panel ${layout}`}
        data-status={status}
        ref={panelRef}
        style={{ width: `${width}px`, height: `${height}px`, fontSize: `${(width / 440) * 10}px` }}
      >
        <div className="cameras">
          <Camera dataConnections={dataConnections} peerId={peer?.id} remote={false} />
          {Object.entries(mediaConnections).map(([pid, conn]) => {
            let st = streams[pid];
            return (
              <Camera
                username={usernames[pid]}
                peerId={pid}
                key={pid}
                mediaConnection={conn}
                dataConnection={dataConnections[pid]}
                mediaStream={st}
              />
            );
          })}
        </div>
        {boxVisible ? (
          invitePeerId ? (
            used ? (
              <Invite peerId={peer?.id} />
            ) : (
              <Join
                ready={status == STATUS.READY}
                peerClient={peer}
                peerIds={Object.keys(usernames)}
                addMediaConnection={addMediaConnection}
              />
            )
          ) : (
            <Invite peerId={peer?.id} />
          )
        ) : null}
        <Topbar
          pid={!noConnection ? invitePeerId || peer?.id : null}
          layout={layout}
          handleLayout={handleLayout}
          handleClose={handleClose}
          toggleChatBoxVisible={toggleChatVisible}
        />
        <Info />
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

import { useState, useRef, useEffect } from 'react';
import Camera from '../Camera';
import Invite from '../InviteBox';
import Join from '../JoinBox';
import usePeer from '../hooks/usePeer';
import StyledWrapper from './styled';
const tipFeedback = chrome.i18n.getMessage('feedback');
const quitConfirmTxt = chrome.i18n.getMessage('quitConfirm');
const layouts = {
  min: <div className="mock line"></div>,
  one: <div className="mock box"></div>,
  vt: (
    <>
      <div className="mock box"></div>
      <div className="mock box"></div>
    </>
  ),
  hz: (
    <>
      <div className="mock box"></div>
      <div className="mock box"></div>
    </>
  )
};
export default function Panel({ invitePeerId = null }) {
  const {
    peer,
    shutdownPeer,
    dataConnections,
    mediaConnections,
    addMediaConnection,
    streams,
    status
  } = usePeer({
    invitePeerId
  });
  const [layout, setLayout] = useState('hz');
  const panelRef = useRef(null);
  const handleLayout = ({ target }) => {
    if (target.classList.contains('curr')) return;
    let tmp = target.getAttribute('layout');
    setLayout(tmp);
  };
  // 拖拽
  useEffect(() => {
    if (panelRef) {
      new PlainDraggable(panelRef.current, {
        autoScroll: true
      });
    }
  }, []);
  const handleClose = () => {
    let isConfirmed = confirm(quitConfirmTxt);
    if (isConfirmed) {
      shutdownPeer();
      window.TOGGLE_VERA_PANEL();
    }
  };
  let cameraListVisible = layout !== 'min';
  let localCameraVisible = layout !== 'one';
  let noConnection = Object.keys(mediaConnections).length == 0;
  // let remoteCameraVisible = layout !== 'min';
  return (
    <StyledWrapper ref={panelRef} className={layout} data-status={status}>
      {cameraListVisible && (
        <div className="cameras">
          {localCameraVisible && (
            <Camera dataConnections={dataConnections} peerId={peer?.id} remote={false} />
          )}
          {Object.entries(mediaConnections).map(([pid]) => {
            let st = streams[pid];
            return (
              st && (
                <Camera
                  peerId={pid}
                  key={pid}
                  dataConnection={dataConnections[pid]}
                  mediaStream={streams[pid]}
                />
              )
            );
          })}
        </div>
      )}
      {noConnection && !invitePeerId && <Invite peerId={peer?.id} />}
      {noConnection && invitePeerId && (
        <Join
          peerClient={peer}
          peerIds={Object.keys(dataConnections)}
          addMediaConnection={addMediaConnection}
        />
      )}
      <div className="topbar">
        <div className="close" onClick={handleClose}></div>
        <div className="right">
          <a
            className="feedback"
            title={`${tipFeedback}`}
            href="https://www.surveymonkey.com/r/RMGZDW8"
            target="_blank"
          ></a>
          <ul className="layout">
            {Object.entries(layouts).map(([key, mocks]) => {
              return (
                <li
                  onClick={handleLayout}
                  key={key}
                  className={`item ${key} ${key == layout ? 'curr' : ''}`}
                  layout={key}
                >
                  {mocks}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );
}

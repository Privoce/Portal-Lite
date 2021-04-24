import { useState, useRef, useEffect } from 'react';
import Camera from '../Camera';
// import Loading from '../Loading';
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
let used = false;
export default function Panel({ invitePeerId = null }) {
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
  // 拖拽
  useEffect(() => {
    if (panelRef) {
      new PlainDraggable(panelRef.current, {
        autoScroll: true
      });
    }
  }, []);
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
      window.TOGGLE_VERA_PANEL();
    }
  };
  let noConnection = Object.keys(mediaConnections).length == 0;
  // let reset='reset'==status;
  let miniLayout = layout == 'min';
  let boxVisible = noConnection && !miniLayout;
  return (
    <StyledWrapper ref={panelRef} className={layout} data-status={status}>
      <div className="cameras">
        <Camera dataConnections={dataConnections} peerId={peer?.id} remote={false} />
        {Object.entries(mediaConnections).map(([pid]) => {
          let st = streams[pid];
          return (
            <Camera
              username={usernames[pid]}
              peerId={pid}
              key={pid}
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
              peerClient={peer}
              peerIds={Object.keys(dataConnections)}
              addMediaConnection={addMediaConnection}
            />
          )
        ) : (
          <Invite peerId={peer?.id} />
        )
      ) : null}
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

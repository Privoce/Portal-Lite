import { useState, useRef, useEffect } from 'react';
import Camera from '../Camera';
// import Loading from '../Loading';
import Invite from '../InviteBox';
import Join from '../JoinBox';
import usePeer from '../hooks/usePeer';
import StyledWrapper from './styled';
import Topbar from './Topbar';
import { STATUS } from '../hooks/useEmitter';
const quitConfirmTxt = chrome.i18n.getMessage('quitConfirm');

let used = false;
export default function Panel({ closePanel, invitePeerId = null }) {
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
  useEffect(() => {
    console.log('current usernames', usernames);
  }, [usernames]);
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
      closePanel();
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
      />
    </StyledWrapper>
  );
}

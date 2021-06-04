import { useState, useEffect, useRef, memo } from 'react';
import Username from '../Username';
import { stringToHexColor } from '../hooks/utils';
import { initCursor, bindCursorSync, destoryCursor } from '../Cursor';

import ErrorMask from './ErrorMask';
import OffMask from './CameraOffMask';
import BgOffMask from './BgRemoveMask';
import useUserMedia from '../hooks/useUserMedia';
import { STATUS } from '../hooks/useEmitter';
import StyledWrapper from './styled';
import Controls from './Controls';
const Tips = {
  [STATUS.WAITING]: 'waiting',
  [STATUS.JOINING]: 'joining'
};
// const tipProcessing = chrome.i18n.getMessage('tipProcessing');
// status: loading ready error
function Camera({
  status,
  username = { value: 'Guest', fake: true },
  peerId,
  remote = true,
  mediaStream = null,
  dataConnection = null,
  dataConnections = null
}) {
  const [loaded, setLoaded] = useState(false);
  const [controls, setControls] = useState({ pin: false, video: true, audio: true, bg: true });
  const { enableStream, error } = useUserMedia();
  const videoRef = useRef(null);
  const updateControls = (st) => {
    let tmp = { audio: false, video: false };
    let hasAudio = !!st.getAudioTracks().length;
    let hasVideo = !!st.getVideoTracks().length;
    tmp.audio = hasAudio;
    tmp.video = hasVideo;
    setControls((prev) => {
      return { ...prev, ...tmp };
    });
  };
  useEffect(() => {
    let videoEle = videoRef.current;
    const attachLocalStream = async () => {
      // if (videoEle.srcObject) return;
      let st = await enableStream();
      if (st) {
        updateControls(st);
        videoEle.srcObject = st;
      }
    };

    if (!remote) {
      attachLocalStream();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remote, peerId]);
  useEffect(() => {
    return () => {
      // 及时销毁鼠标
      if (peerId) {
        destoryCursor({ id: peerId });
      }
    };
  }, [peerId]);
  useEffect(() => {
    let videoEle = videoRef.current;
    if (mediaStream) {
      videoEle.srcObject = mediaStream;
      updateControls(mediaStream);
    }
  }, [mediaStream]);

  useEffect(() => {
    const createCursor = () => {
      // 同时初始化鼠标
      let inited = initCursor({
        id: peerId,
        username: username.value,
        color: stringToHexColor(peerId)
      });
      if (inited) {
        bindCursorSync({ conn: dataConnection });
      }
    };
    if (dataConnection) {
      // 已经建立datachannel连接
      createCursor();
    }
  }, [peerId, username, dataConnection]);

  const handleLoad = () => {
    setLoaded(true);
  };
  if (error) return <ErrorMask tip={error.tip} />;

  const { video, bg } = controls;
  const color = stringToHexColor(peerId);
  console.log({ video, loaded });
  return (
    <StyledWrapper data-peer={peerId} className={remote ? 'remote' : 'local'} color={color}>
      <div className={`video ${!bg ? 'hide_video' : ''}`}>
        {/* <span>{peerId.substr(-5)}</span> */}
        <Username local={!remote} readonly={remote} name={username.value} />

        {[STATUS.WAITING, STATUS.JOINING].includes(status) && (
          <OffMask style={{ backgroundColor: color }} tip={Tips[status]} peerId={peerId} />
        )}
        {(!video || !loaded) && <OffMask style={{ backgroundColor: color }} />}
        {!bg && <BgOffMask video={videoRef.current} />}
        <video
          ref={videoRef}
          onPlay={handleLoad}
          playsInline
          autoPlay
          muted={remote ? false : 'muted'}
        ></video>
        <Controls
          videoRef={videoRef}
          dataConnections={dataConnections}
          controls={controls}
          setControls={setControls}
          peerId={peerId}
        />
      </div>
    </StyledWrapper>
  );
}
export default memo(Camera);

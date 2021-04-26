import { useState, useEffect, useRef, memo } from 'react';
import Username from '../Username';
import emitter, { EVENTS } from '../hooks/useEmitter';

import ErrorMask from './ErrorMask';
import OffMask from './CameraOffMask';
import BgOffMask from './BgRemoveMask';
import useUserMedia from '../hooks/useUserMedia';
import StyledWrapper from './styled';
const tipVideo = chrome.i18n.getMessage('tipDisableVideo');
const tipAudio = chrome.i18n.getMessage('tipDisableAudio');
const tipRemoveBg = chrome.i18n.getMessage('tipRemoveBg');
// const tipProcessing = chrome.i18n.getMessage('tipProcessing');
const tipPin = chrome.i18n.getMessage('tipPin');
let triggerByCmd = {
  video: false,
  audio: false
};
// status: loading ready error
function Camera({
  username = 'Guest',
  peerId,
  remote = true,
  mediaStream = null,
  dataConnections = null
}) {
  const [loaded, setLoaded] = useState(false);
  const [controls, setControls] = useState({ pin: false, video: true, audio: true, bg: true });
  const { enableStream, error } = useUserMedia();
  const videoRef = useRef(null);
  useEffect(() => {
    const attachLocalStream = async () => {
      let localStream = await enableStream();
      console.log({ localStream });
      if (localStream) {
        let cloned = localStream.clone();
        cloned.getAudioTracks().forEach((t) => (t.enabled = false));
        videoRef.current.srcObject = cloned;
      }
    };
    if (!remote) {
      attachLocalStream();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remote]);

  useEffect(() => {
    if (mediaStream) {
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);
  useEffect(() => {
    // 来自远程对方的消息
    emitter.on(EVENTS.CAMERA_CONTROL, ({ pid, type }) => {
      if (pid !== peerId) return;
      console.log('data connection msg in camra', pid, peerId, type);
      switch (type) {
        case 'CC_VIDEO_ON':
          setMedia({ type: 'video', enable: true, cmd: true });
          break;
        case 'CC_VIDEO_OFF':
          setMedia({ type: 'video', enable: false, cmd: true });
          break;
        case 'CC_AUDIO_ON':
          setMedia({ type: 'audio', enable: true, cmd: true });
          break;
        case 'CC_AUDIO_OFF':
          setMedia({ type: 'audio', enable: false, cmd: true });
          break;
        case 'CC_BG_ON':
          setBackground({ keep: true });
          break;
        case 'CC_BG_OFF':
          setBackground({ keep: false });
          break;

        default:
          break;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peerId]);
  // 画中画
  const handlePin = () => {
    const { pin } = controls;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    if (!pin) {
      let videoEle = videoRef.current;
      videoEle
        .requestPictureInPicture()
        .then(() => {
          setControls((prev) => {
            return { ...prev, pin: true };
          });
          videoEle.onleavepictureinpicture = () => {
            setControls((prev) => {
              return { ...prev, pin: false };
            });
          };
        })
        .catch((error) => {
          // Error handling
          console.log('pip error', error);
        });
    }
  };
  // 音视频
  const setMedia = ({ type = 'video', enable = true, cmd = false }) => {
    console.log('start toggle media');
    let stream = videoRef.current.srcObject;
    const tracks = type == 'video' ? stream.getVideoTracks() : stream.getAudioTracks();
    // 巨复杂的一个判断：当前状态是button置的，而且cmd想开启
    if (cmd && !triggerByCmd[type] && enable && tracks.filter((t) => t.enabled == false).length) {
      return;
    }
    tracks.forEach((t) => {
      t.enabled = enable;
    });
    setControls((prev) => {
      return { ...prev, [type]: enable };
    });
    // 如果是host，则同步给每个连接
    if (dataConnections) {
      let cmd = { type: `CC_${type.toUpperCase()}_${enable ? 'ON' : 'OFF'}` };
      Object.entries(dataConnections).forEach(([, conn]) => {
        console.log('send msg to connection', conn.peer);
        conn.send(cmd);
      });
    }
    // 更新全局标识
    triggerByCmd[type] = cmd;
  };
  // 背景
  const setBackground = ({ keep = true }) => {
    setControls((prev) => {
      return { ...prev, bg: keep };
    });
    // 如果是host，则同步给每个连接
    if (dataConnections) {
      let cmd = { type: `CC_BG_${keep ? 'ON' : 'OFF'}` };
      Object.entries(dataConnections).forEach(([, conn]) => {
        console.log('send msg to connection', conn.peer);
        conn.send(cmd);
      });
    }
  };
  const handleMediaControl = ({ target }) => {
    // if (remote) return;
    const { type, status } = target.dataset;
    let isOn = status == 'true';
    if (isOn || (!isOn && !triggerByCmd[type])) {
      setMedia({ type, enable: status !== 'true' });
    }
  };
  const handleBgControl = ({ target }) => {
    const { video } = controls;
    if (remote || !video) return;
    const { status } = target.dataset;
    setBackground({ keep: status !== 'true' });
  };
  const handleLoad = () => {
    setLoaded(true);
  };
  if (error) return <ErrorMask tip={error.tip} />;
  const { pin, video, audio, bg } = controls;
  return (
    <StyledWrapper data-peer={peerId} className={remote ? 'remote' : 'local'}>
      <div className={`video ${!bg ? 'hidden' : ''}`}>
        <Username local={!remote} name={username} />
        <div className="opts">
          <button
            className="opt bg"
            onClick={handleBgControl}
            data-status={bg}
            title={tipRemoveBg}
          ></button>
          <button
            className="opt video"
            onClick={handleMediaControl}
            data-type={'video'}
            data-status={video}
            title={tipVideo}
          ></button>
          <button
            className="opt audio"
            onClick={handleMediaControl}
            data-type={'audio'}
            data-status={audio}
            title={tipAudio}
          ></button>
          <button className="opt pin" onClick={handlePin} data-status={pin} title={tipPin}></button>
        </div>

        {(!video || !loaded) && <OffMask />}
        {!bg && <BgOffMask video={videoRef.current} />}
        <video
          ref={videoRef}
          onPlay={handleLoad}
          playsInline
          autoPlay
          muted={remote ? false : 'muted'}
        ></video>
      </div>
    </StyledWrapper>
  );
}
export default memo(Camera);

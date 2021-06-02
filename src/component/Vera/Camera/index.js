import { useState, useEffect, useRef, memo } from 'react';
import Username from '../Username';
import emitter, { EVENTS } from '../hooks/useEmitter';
import { stringToHexColor } from '../hooks/utils';
import { initCursor, bindCursorSync } from '../Cursor';

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
// status: loading ready error
function Camera({
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
      if (videoEle.srcObject) return;
      let localStream = await enableStream();
      console.log({ localStream });
      if (localStream) {
        let cloned = localStream;
        cloned.getAudioTracks().forEach((t) => (t.enabled = false));
        updateControls(cloned);
        videoEle.srcObject = cloned;
      }
    };

    if (!remote) {
      attachLocalStream();
    }
    return () => {
      if (videoEle && videoEle.srcObject && !remote) {
        // 及时清理掉cloned之后的stream
        videoEle.srcObject.getTracks().forEach((t) => t.stop());
        videoEle.srcObject = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remote, peerId]);

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
  useEffect(() => {
    // 来自远程对方的消息
    emitter.on(EVENTS.CAMERA_CONTROL, ({ pid, type }) => {
      if (pid !== peerId) return;
      console.log('data connection msg in camra', pid, peerId, type);
      switch (type) {
        case 'CC_VIDEO_ON':
          setMedia({ type: 'video', enable: true });
          break;
        case 'CC_VIDEO_OFF':
          setMedia({ type: 'video', enable: false });
          break;
        case 'CC_AUDIO_ON':
          setMedia({ type: 'audio', enable: true });
          break;
        case 'CC_AUDIO_OFF':
          setMedia({ type: 'audio', enable: false });
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
  const setMedia = async ({ type = 'video', enable = true }) => {
    console.log('start toggle media');
    let stream = videoRef.current.srcObject;
    const tracks = type == 'video' ? stream.getVideoTracks() : stream.getAudioTracks();
    // if (tracks.length) {
    if (enable) {
      // add track
      const st = await enableStream();
      const newTracks = type == 'video' ? st.getVideoTracks() : st.getAudioTracks();
      stream.addTrack(newTracks[0]);
    } else {
      // 暂存
      tracks.forEach((t) => {
        t.stop();
      });
      stream.removeTrack(tracks[0]);
    }
    // }
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
    setMedia({ type, enable: !isOn });
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
  const color = stringToHexColor(peerId);
  return (
    <StyledWrapper data-peer={peerId} className={remote ? 'remote' : 'local'} color={color}>
      <div className={`video ${!bg ? 'hide_video' : ''}`}>
        <Username local={!remote} readonly={remote} name={username.value} />
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

        {(!video || !loaded) && <OffMask style={{ backgroundColor: color }} />}
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

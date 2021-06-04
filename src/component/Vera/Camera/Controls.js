import { useEffect } from 'react';
import styled from 'styled-components';
import emitter, { EVENTS } from '../hooks/useEmitter';
const tipVideo = chrome.i18n.getMessage('tipDisableVideo');
const tipAudio = chrome.i18n.getMessage('tipDisableAudio');
const tipRemoveBg = chrome.i18n.getMessage('tipRemoveBg');
const tipPin = chrome.i18n.getMessage('tipPin');

const StyledWrapper = styled.div`
  z-index: 7;
  position: absolute;
  bottom: 3em;
  left: 50%;
  padding: 0.5em;
  display: flex;
  transform: translateX(-50%);
  gap: 0.4em;
  .opt {
    padding: 0;
    border: none;
    border-radius: 50%;
    height: 2em !important;
    width: 2em !important;
    min-width: unset;
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    background-color: transparent;
    &:hover {
      background-color: var(--vera-panel-bg-color);
    }
    &.bg {
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/bg.rm.svg`});
      &[data-status='false'] {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/bg.rm.off.svg`});
      }
    }
    &.video {
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/video.on.svg`});
      &[data-status='false'] {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/video.off.svg`});
      }
    }
    &.audio {
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/audio.on.svg`});
      &[data-status='false'] {
        background-color: #863733;
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/audio.off.svg`});
      }
    }
    &.pin {
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/pin.off.svg`});
      &[data-status='false'] {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/pin.svg`});
      }
    }
  }
`;
export default function Controls({
  controls = {},
  setControls,
  peerId,
  videoRef = {},
  dataConnections
}) {
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
    let videoEle = videoRef.current;
    const { pin } = controls;
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    if (!pin) {
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
  const setMedia = ({ type = 'video', enable = true }) => {
    console.log('start toggle media');
    let videoEle = videoRef.current;
    let stream = videoEle?.srcObject;
    if (!stream) {
      console.log('empty video');
      return;
    }
    const tracks = type == 'video' ? stream.getVideoTracks() : stream.getAudioTracks();
    tracks.forEach((t) => {
      t.enabled = enable;
    });
    setControls((prev) => {
      console.log('run update');
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
    if (!video) return;
    const { status } = target.dataset;
    setBackground({ keep: status !== 'true' });
  };
  const { pin, video, audio, bg } = controls;
  return (
    <StyledWrapper className="opts">
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
    </StyledWrapper>
  );
}

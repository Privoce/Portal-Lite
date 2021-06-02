import { useState, useEffect } from 'react';
const videoStreamConfig = {
  video: {
    facingMode: 'user',
    width: { min: 200, ideal: 200, max: 720 },
    height: { min: 200, ideal: 200, max: 720 }
  },
  audio: false
};
const audioStreamConfig = {
  video: false,
  audio: true
};
const fullStreamConfig = {
  video: {
    facingMode: 'user',
    width: { min: 200, ideal: 200, max: 720 },
    height: { min: 200, ideal: 200, max: 720 }
  },
  audio: true
};
const Tips = {
  ['NotAllowedError']: 'Allow Vera to use your camera & microphone'
};
window.LOCAL_MEDIA_STREAM = window.LOCAL_MEDIA_STREAM || null;
export default function useUserMedia() {
  const [mediaStream, setMediaStream] = useState(window.LOCAL_MEDIA_STREAM);
  const [error, setError] = useState(null);
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState(null);
  const [micPermissionStatus, setMicPermissionStatus] = useState(null);
  const enableStream = async () => {
    // if (mediaStream) return mediaStream;
    try {
      // 一次性获取两个授权
      let devices = await navigator.mediaDevices.enumerateDevices();
      let hasCamera = devices.some((d) => {
        return d.kind == 'videoinput';
      });
      let hasAudio = devices.some((d) => {
        return d.kind == 'audioinput';
      });
      let mediaConfig =
        hasCamera && hasAudio
          ? fullStreamConfig
          : hasCamera
          ? videoStreamConfig
          : hasAudio
          ? audioStreamConfig
          : null;
      if (mediaConfig) {
        const stream = await navigator.mediaDevices.getUserMedia(mediaConfig);
        setMediaStream(stream);
        return stream;
      }
      // 既没有摄像头 也没有麦克风
      return null;
    } catch (error) {
      let { name } = error;
      console.log(error, { name });
      setError({
        type: name,
        tip: Tips[name]
      });
      return null;
    }
  };
  useEffect(() => {
    const getAllPermissions = async () => {
      // We use Promise.all to wait until all the permission queries are resolved
      let ps = await Promise.all(
        ['camera', 'microphone'].map(async (permissionName) => {
          let p = navigator.permissions.query({ name: permissionName });
          return p;
          // allPermissions.push({ permissionName, state: permission.state });
        })
      );
      ps.forEach((p, idx) => {
        const __setStatus = idx == 0 ? setCameraPermissionStatus : setMicPermissionStatus;
        __setStatus(p.state);
        if (p.status !== 'granted') {
          p.onchange = ({ target: { state } }) => {
            __setStatus(state);
          };
        }
      });
      console.log({ ps });
    };
    getAllPermissions();
    enableStream().then((st) => {
      if (st) {
        st.getTracks().forEach((t) => t.stop());
      }
    });
  }, []);
  // 更新到全局变量
  useEffect(() => {
    window.LOCAL_MEDIA_STREAM = mediaStream;
  }, [mediaStream]);

  const stopStream = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };
  let ps = [cameraPermissionStatus, micPermissionStatus];
  let permissions = ps.includes('prompt')
    ? 'prompt'
    : ps.includes('denied')
    ? 'denied'
    : ps.filter((p) => p == 'granted').length == 2
    ? 'granted'
    : 'error';
  return {
    mediaStream,
    permissions,

    enableStream,
    stopStream,
    error
  };
}

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
window.LOCAL_MEDIA_STREAM = window.LOCAL_MEDIA_STREAM || null;
export default function useUserMedia() {
  const [mediaStream, setMediaStream] = useState(window.LOCAL_MEDIA_STREAM);
  const [error, setError] = useState(null);
  // 更新到全局变量
  useEffect(() => {
    window.LOCAL_MEDIA_STREAM = mediaStream;
  }, [mediaStream]);
  const enableStream = async () => {
    if (mediaStream) return mediaStream;
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
      console.log(error);
      let { name } = error;
      setError(name);
    }
  };
  const stopStream = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  return { mediaStream, enableStream, stopStream, error };
}

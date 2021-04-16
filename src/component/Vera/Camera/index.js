import { useState, useEffect, useRef } from 'react';
import Loading from '../Loading';
import useUserMedia from '../hooks/useUserMedia';
import StyledWrapper from './styled';
const tipVideo = chrome.i18n.getMessage('tipDisableVideo');
const tipAudio = chrome.i18n.getMessage('tipDisableAudio');
const tipRemoveBg = chrome.i18n.getMessage('tipRemoveBg');
// const tipProcessing = chrome.i18n.getMessage('tipProcessing');
const tipPin = chrome.i18n.getMessage('tipPin');
// status: loading ready error
export default function Camera({ peerId, remote = true, mediaStream = null }) {
  const [status, setStatus] = useState(mediaStream ? 'ready' : 'loading');
  const [stream, setStream] = useState(mediaStream);
  const { enableStream } = useUserMedia();
  const videoRef = useRef(null);
  useEffect(() => {
    const attachLocalStream = async () => {
      let localStream = await enableStream();
      let cloned = localStream.clone();
      cloned.getAudioTracks().forEach((t) => (t.enabled = false));
      setStatus('ready');
      setStream(cloned);
    };
    if (!remote) {
      attachLocalStream();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remote]);
  useEffect(() => {
    if (videoRef && stream) {
      console.log('video ref', videoRef.current);
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (status == 'loading') return <Loading />;
  if (status == 'ready')
    return (
      <StyledWrapper data-peer={peerId}>
        <div className="video" video="true" bg="true" audio="true" waiting="true">
          <div className="mask user"></div>

          <div className="opts">
            <button className="opt bg" control="bg" title={tipRemoveBg}></button>
            <button className="opt video" control="video" title={tipVideo}></button>
            <button className="opt audio" control="audio" title={tipAudio}></button>
            <button className="opt pin" control="pin" title={tipPin}></button>
          </div>
          <video ref={videoRef} playsInline autoPlay muted={remote ? false : 'muted'}></video>
        </div>
      </StyledWrapper>
    );
}

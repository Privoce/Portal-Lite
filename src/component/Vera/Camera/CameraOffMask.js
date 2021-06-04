import { useEffect, useState } from 'react';
import styled from 'styled-components';
import emitter, { EVENTS } from '../hooks/useEmitter';
const StyledMask = styled.div`
  z-index: 6;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/user.svg`});
  .tip {
    color: #fff;
    font-size: 15px;
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
  .rejoin {
    border: none;
    padding: 5px 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    text-transform: uppercase;
    background: rgba(2, 2, 2, 0.4);
    color: #fff;
  }
`;

export default function CameraOffMask({ tip = '', peerId = '', ...rest }) {
  const [btnVisible, setBtnVisible] = useState(false);
  const handleRejoin = () => {
    emitter.emit(EVENTS.NEW_PEER, peerId);
  };
  useEffect(() => {
    let inter = setTimeout(() => {
      setBtnVisible(true);
    }, 8000);
    return () => {
      clearTimeout(inter);
    };
  }, []);
  return (
    <StyledMask {...rest}>
      {tip && <div className="tip">{tip}</div>}
      {btnVisible && (
        <button className="rejoin" onClick={handleRejoin}>
          rejoin
        </button>
      )}
    </StyledMask>
  );
}

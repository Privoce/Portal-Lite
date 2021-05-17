import styled from 'styled-components';

const StyledWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  height: 80vh;
  min-width: 40vw;
  &.visible {
    pointer-events: all;
    visibility: visible;
  }
  .str-chat-channel {
    max-height: 80vh;
  }
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    padding: 5px;
    background-color: #444;
    color: #fff;
    font-weight: bold;
  }
  .close {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #333;
    border: none;
    background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/close.svg`});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;

export default StyledWrapper;

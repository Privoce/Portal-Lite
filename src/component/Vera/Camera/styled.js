import styled from 'styled-components';
const StyledWrapper = styled.div`
  width: 20em;
  height: 20em;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--box-border-radius);
  border: none;
  background: transparent;
  .video .username,
  .opts {
    visibility: hidden;
  }
  &:hover {
    .video {
      .username,
      .opts {
        visibility: visible;
      }
    }
  }
  .processing {
    z-index: 10;
    display: none;
    text-transform: capitalize;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -70%, 0);
    padding: 1em;
    border-radius: 0.5em;
    background-color: var(--camera-bg-color);
    font-size: 2.2em;
    color: var(--font-color);
  }
  .video {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    width: -webkit-fill-available;
    &.hidden video {
      visibility: hidden;
    }
    video {
      width: -webkit-fill-available;
    }
    .opts {
      z-index: 7;
      position: absolute;
      bottom: 1em;
      left: 50%;
      padding: 0.5em;
      display: flex;
      transform: translateX(-50%);
      gap: 0.4em;
      /* visibility: hidden; */
      .opt {
        padding: 0;
        border: none;
        border-radius: var(--border-radius);
        background-color: var(--button-bg-color);
        height: 2em !important;
        width: 2em !important;
        min-width: unset;
        background-size: 65%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
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
          background-color: var(--button-bg-color);
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
    }
  }
`;

export default StyledWrapper;

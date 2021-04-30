import styled, { keyframes } from 'styled-components';
const AniSlideOut = keyframes`
    from {
        transform: translateX(-30px);
        opacity: 0.1;
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
const StyledWidget = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  width: auto;
  height: 100vh;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  background: transparent;
  border: none;
  box-shadow: none;
  .widget {
    pointer-events: all;
    cursor: pointer;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .drag {
      margin-left: -25px;
      width: 50px;
      height: 50px;
      background-color: var(--vera-widget-bg-color);
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: margin-left 0.5s ease-in-out;
      will-change: margin-left;
      > .portal_logo {
        width: 25px;
        height: 25px;
        background-color: transparent;
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/logo.png`});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      > .handle {
        border-radius: 4px;
        width: 12px;
        height: 30px;
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/drag-vertical.svg`});
        background-size: cover;
        background-color: #333;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    .camera {
      will-change: transform;
      filter: drop-shadow(0 2px 4px rgba(34, 36, 38, 0.35));
      margin-left: 8px;
      cursor: pointer;
      visibility: hidden;
      content: '';
      width: 50px;
      height: 50px;
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/video.svg`});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
    &:hover {
      .drag {
        margin-left: 0;
      }
      .camera {
        visibility: visible;
        animation: ${AniSlideOut} 0.3s ease-in forwards;
      }
    }
    &.plain-draggable-moving {
      .camera {
        visibility: visible;
      }
      &:hover .camera {
        animation: none;
      }
    }
  }
`;

export default StyledWidget;

import styled from 'styled-components';
const StyledWrapper = styled.aside`
  font-family: sans-serif;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: all;
  display: flex !important;
  align-items: center;
  gap: 15px;
  min-width: 200px;
  min-height: 200px;
  max-height: 100vh;
  overflow: visible;
  padding: 12px;
  padding-top: 40px;
  border-radius: var(--border-radius);
  transition: all 0.5s ease-in-out;
  transition-property: background, width, height;
  background: var(--panel-bg-color);
  &:after {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 10px;
    height: 10px;
    background-color: #999;
    border-radius: 50%;
  }
  &[data-status='waiting'] {
    /* width: 440px;
    height: 224px; */
  }
  &[data-status='open']:after {
    background-color: #ee7f3d;
  }
  &[data-status='close']:after {
    background-color: #fff;
  }
  &[data-status='call']:not(.min),
  &[data-status='streaming']:not(.min) {
    &:after {
      background-color: #85e89e;
    }
    background: transparent;

    .topbar,
    &:after {
      visibility: hidden;
    }
    &:hover {
      background: var(--panel-bg-color);
      .topbar,
      &:after {
        visibility: visible;
      }
    }
  }
  &[data-status='connected']:after {
    background-color: #48baff;
  }
  &[data-status='disconnected']:after {
    background-color: #ccc;
  }
  &.vt {
    flex-direction: column;
    .cameras {
      flex-direction: column;
    }
  }
  &.one {
    gap: 0;
    .cameras .local {
      display: none;
    }
  }
  &.min {
    min-height: fit-content;
    min-width: 240px;
    padding-bottom: 2px;
    .cameras {
      display: none;
    }
  }
  .topbar {
    display: flex;
    position: absolute;
    top: 10px;
    left: 0;
    justify-content: space-between;
    width: -webkit-fill-available;
    padding: 0 12px;
    .close {
      cursor: pointer;
      width: 40px;
      height: 22px;
      background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/tel.svg`});
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #eb2027;
      border-radius: var(--border-radius);
    }
    .right {
      display: flex;
      align-items: center;
      .feedback {
        padding: 0;
        margin: 0;
        margin-right: 5px;
        border: none;
        width: 22px;
        height: 22px;
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/feedback.svg`});
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: var(--border-radius);
        background-color: var(--button-bg-color);
      }

      .layout {
        display: flex;
        align-items: center;
        border-radius: var(--border-radius);
        background-color: var(--button-bg-color);
        padding: 4px;
        gap: 10px;
        .item {
          position: relative;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1px;
          width: 15px;
          height: 15px;
          margin: 0;
          &:after {
            position: absolute;
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
          &:hover,
          &.curr {
            background-color: var(--camera-bg-color);
          }
          &.vt {
            flex-direction: column;
          }
          .mock {
            border-radius: 1px;
            width: 4px;
            background: var(--font-color);
            &.box {
              height: 4px;
            }
            &.line {
              height: 2px;
            }
          }
        }
      }
    }
  }
  .cameras {
    overflow: hidden;
    display: flex;
    gap: 15px;
  }
`;

export default StyledWrapper;

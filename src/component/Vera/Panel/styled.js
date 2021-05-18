import styled from 'styled-components';
import { STATUS } from '../hooks/useEmitter';
const StyledWrapper = styled.aside`
  position: relative;
  pointer-events: none;
  font-family: sans-serif;
  .react-resizable {
    pointer-events:none;
    position: absolute;
    left:0;
    top:0;
    width:100% !important;
    height:100% !important;
      .react-resizable-handle {
        pointer-events:all;
        position: absolute;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+');
        background-position: bottom right;
        padding: 0 3px 3px 0;
        /* 暂时隐藏掉 */
        opacity:0;
        &.react-resizable-handle-sw {
          bottom: 0;
          left: 0;
          cursor: sw-resize;
          transform: rotate(90deg);
        }
        &.react-resizable-handle-se {
          bottom: 0;
          right: 0;
          cursor: se-resize;
        }
        &.react-resizable-handle-nw {
          top: 0;
          left: 0;
          cursor: nw-resize;
          transform: rotate(180deg);
        }
        &.react-resizable-handle-ne {
          top: 0;
          right: 0;
          cursor: ne-resize;
          transform: rotate(270deg);
        }
        &.react-resizable-handle-w,
        &.react-resizable-handle-e {
          top: 50%;
          margin-top: -10px;
          cursor: ew-resize;
        }
        &.react-resizable-handle-w {
          left: 0;
          transform: rotate(135deg);
        }
        &.react-resizable-handle-e {
          right: 0;
          transform: rotate(315deg);
        }
        &.react-resizable-handle-n,
        &.react-resizable-handle-s {
          left: 50%;
          margin-left: -10px;
          cursor: ns-resize;
        }
        &.react-resizable-handle-n {
          top: 0;
          transform: rotate(225deg);
        }
        &.react-resizable-handle-s {
          bottom: 0;
          transform: rotate(45deg);
        }
      }
    }
  .panel{
    pointer-events: all;
    display: flex !important;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    padding: 13px 26px;
    padding-top: 40px;
    border-radius: var(--vera-panel-border-radius);
    transition: all 0.5s ease-in-out;
    transition-property: background-color;
    background-color: var(--vera-panel-bg-color);
    font-size:10px;
    width:fit-content !important;
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
    &[data-status='${STATUS.OPEN}']:after {
      background-color: #ee7f3d;
    }
    &[data-status='${STATUS.CLOSE}']:after {
      background-color: #fff;
    }
    &[data-status='${STATUS.CALLING}']:not(.min),
    &[data-status='${STATUS.STREAMING}']:not(.min) {
      &:after {
        background-color: #85e89e;
      }
      background: transparent;
      .topbar,
      .info,
      .hangup,
      .setting .icon,
      &:after {
        visibility: hidden;
      }
      &:hover {
        background: var(--vera-panel-bg-color);
        .topbar,
        .info,
        .hangup,
        .setting .icon,
        &:after {
          visibility: visible;
        }
      }
    }
    &[data-status='${STATUS.CONNECTED}']:after,&[data-status='${STATUS.READY}']:after {
      background-color: #48baff;
    }
    &[data-status='${STATUS.DISCONNECTED}']:after {
      background-color: #ccc;
    }
    &.vt {
      flex-direction: column;
      height: fit-content !important;
      .cameras {
        flex-direction: column;
      }
    }
    &.one {
      gap: 0;
      width:fit-content !important;
      .cameras .local {
        display: none;
      }
    }
    &.min {
      min-height: fit-content;
      min-width: 250px;
      height: fit-content !important;
      padding-bottom: 2px;
      .cameras {
        display: none;
      }
    }
    
    .topbar {
      position: absolute;
      top: 10px;
      left: 0;
      justify-content: space-between;
      width: -webkit-fill-available;
    }
    .cameras {
      position: relative;
      /* width: 20em; */
      display: flex;
      gap: 15px;
      .nav{
        cursor: pointer;
        visibility:hidden;
        position: absolute;
        top:50%;
        transform:translateY(-50%);
        &.prev{
          left:-20px;
          
        }
        &.next{
          right:-20px;
        }
      }
      &.slides{
        .nav{
          visibility:visible;
        }
        gap:0;
        .swiper-container {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
  &:hover{
    .panel{
      background-color:var(--vera-panel-bg-color) !important;
    }
  }
  &.resizing .panel{
      background: var(--vera-panel-bg-color) !important;
    }
`;

export default StyledWrapper;

// import React from 'react';
import styled, { keyframes } from 'styled-components';
const AniLodaing = keyframes`
 0% {
    stroke-dasharray: 1, 126; /*实线部分1，虚线部分126*/
    stroke-dashoffset: 0; /*前面1/126显示实线，后面125显示空白*/
  }

  50% {
    stroke-dasharray: 95, 126; /*实线部分95，虚线部分126*/
    stroke-dashoffset: -31px; /*顺时针偏移31/126，即前31/126显示空白，后面3/4显示线条*/
  }

  to {
    stroke-dasharray: 6, 120; /*实线部分6，虚线部分120*/
    stroke-dashoffset: -120px; /*最后顺时针偏移120/126，即前120/126显示空白，后面6点显示线条部分*/
  }
`;
const AniRotate = keyframes`
 to {
    transform: rotate(1turn); // 旋转1圈
  }
`;
const StyledLoading = styled.div`
  position: relative;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  .circle {
    width: 100px;
    height: 100px;
    animation: ${AniRotate} 1.5s infinite ease-in-out; /*给svg也加上一个旋转动画*/
    .path {
      stroke: #000; /*给画笔设置一个颜色*/
      stroke-width: 3; /*设置线条的宽度*/
      stroke-dasharray: 95, 126; /*设置实现长95，虚线长126*/
      stroke-dashoffset: 0; /*设置虚线的偏移位置*/
      animation: ${AniLodaing} 1.5s ease-in-out infinite;
    }
  }
  .txt {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: var(--font-color);
  }
`;
const loadingTxt = chrome.i18n.getMessage('tipLoading');
const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="circle">
    <circle cx="25" cy="25" r="20" fill="none" className="path"></circle>
  </svg>
);
export default function Loading({ tip = loadingTxt }) {
  return (
    <StyledLoading>
      {svg}
      <span className="txt">{tip}</span>
    </StyledLoading>
  );
}

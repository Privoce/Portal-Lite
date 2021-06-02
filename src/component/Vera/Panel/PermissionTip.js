import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  pointer-events: all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 12px;
  width: 440px;
  height: 200px;
  background-color: var(--vera-panel-bg-color);
  padding: 20px;
  color: var(--vera-font-color);
  .title {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .content {
    line-height: 1.6;
    img {
      display: inline;
      vertical-align: middle;
    }
  }
`;
const Tips = {
  prompt: {
    title: 'Allow Vera to use your camera and microphone',
    content: (
      <span>
        Vera needs access to your camera and microphone so that other participants can see and hear
        you. Vera will ask you to confirm this decision on each browser and computer you use.
      </span>
    )
  },
  denied: {
    title: 'Camera and microphone are blocked',
    content: (
      <span>
        Vera requires access to your camera and microphone. Click the camera blocked icon{' '}
        <img src="https://www.gstatic.com/meet/ic_blocked_camera_dark_f401bc8ec538ede48315b75286c1511b.svg" />{' '}
        in your browser&apos;s address bar.
      </span>
    )
  }
};
export default function PermissionTip({ type = 'prompt' }) {
  const { title, content } = Tips[type];
  return (
    <StyledWrapper>
      <h3 className="title">{title}</h3>
      <div className="content">{content}</div>
    </StyledWrapper>
  );
}

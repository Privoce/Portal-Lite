import React from 'react';
import styled from 'styled-components';
import IconCursor from '../icons/Cursor';
import IconChat from '../icons/Chat';
import IconInvite from '../icons/Invite';
const StyledBar = styled.div`
  display: flex;
  padding: 0 1.2em;
  .left {
    display: flex;
    align-items: center;
    gap: 0.4em;
    .rect {
      cursor: pointer;
      width: 2em;
      height: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 70%;
        height: 70%;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .layout {
      display: flex;
      align-items: center;
      padding: 0.4em;
      gap: 1em;
      .item {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1px;
        width: 1.5em;
        height: 1.5em;
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
          background-color: var(--vera-camera-bg-color);
        }
        &.vt {
          flex-direction: column;
        }
        .mock {
          width: 0.4em;
          background: var(--vera-layout-bg-color);
          &.box {
            height: 0.4em;
          }
          &.line {
            height: 0.2em;
          }
        }
      }
    }
  }
`;
const layouts = {
  min: <div className="mock line"></div>,
  one: <div className="mock box"></div>,
  vt: (
    <>
      <div className="mock box"></div>
      <div className="mock box"></div>
    </>
  ),
  hz: (
    <>
      <div className="mock box"></div>
      <div className="mock box"></div>
    </>
  )
};
export default function Topbar({
  pid = null,
  layout,
  toggleInviteVisible,
  cursor = true,
  toggleCursor,
  handleLayout,
  toggleChatBoxVisible
}) {
  return (
    <StyledBar className="topbar">
      <div className="left">
        {pid && (
          <>
            <div className="rect cursor" onClick={toggleCursor}>
              <IconCursor enable={cursor} />
            </div>

            <div className={`rect chat`} onClick={toggleChatBoxVisible}>
              <IconChat />
            </div>
            <div className={`rect invite`} onClick={toggleInviteVisible}>
              <IconInvite />
            </div>
          </>
        )}
      </div>
      <div className="right">
        <ul className="layout">
          {Object.entries(layouts).map(([key, mocks]) => {
            return (
              <li
                onClick={handleLayout}
                key={key}
                className={`item ${key} ${key == layout ? 'curr' : ''}`}
                layout={key}
              >
                {mocks}
              </li>
            );
          })}
        </ul>
      </div>
    </StyledBar>
  );
}

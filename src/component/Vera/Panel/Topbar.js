import React from 'react';
import styled from 'styled-components';
import { getInviteUrl } from '../hooks/utils';
import useCopy from '../hooks/useCopy';
const copiedTxt = chrome.i18n.getMessage('copied');
const StyledBar = styled.div`
  display: flex;
  padding: 0 1.2em;
  .left {
    display: flex;
    align-items: center;
    gap: 0.4em;
    .rect {
      cursor: pointer;
      width: 3em;
      height: 2em;
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: var(--vera-border-radius);
      &.close {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/tel.svg`});
        background-color: #eb2027;
      }
      &.chat {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/chat.svg`});
        background-color: #85e89e;
      }
      &.invite:not(.copied) {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/invite.svg`});
        background-color: #5e7fec;
      }
      &.copied.invite {
        background: #0d1117;
        color: #fff;
        font-size: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5em 1em;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .layout {
      display: flex;
      align-items: center;
      border-radius: var(--vera-border-radius);
      background-color: var(--vera-button-bg-color);
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
          border-radius: 1px;
          width: 4px;
          background: var(--vera-font-color);
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
  handleClose,
  handleLayout,
  toggleChatBoxVisible
}) {
  const { copied, copy } = useCopy();
  const handleInvite = () => {
    let link = getInviteUrl(pid);
    copy(link);
  };
  return (
    <StyledBar className="topbar">
      <div className="left">
        <div className="rect close" onClick={handleClose}></div>
        {pid && (
          <div className={`rect invite ${copied ? 'copied' : ''}`} onClick={handleInvite}>
            {copied && copiedTxt}
          </div>
        )}
        {pid && <div className={`rect chat`} onClick={toggleChatBoxVisible} />}
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

import React from 'react';
import styled from 'styled-components';
import { getInviteUrl } from '../hooks/utils';
import useCopy from '../hooks/useCopy';
const tipFeedback = chrome.i18n.getMessage('feedback');
const copiedTxt = chrome.i18n.getMessage('copied');
const StyledBar = styled.div`
  display: flex;
  padding: 0 12px;
  .left {
    display: flex;
    align-items: center;
    gap: 5px;
    .rect {
      cursor: pointer;
      width: 40px;
      height: 22px;
      background-size: 50%;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: var(--vera-border-radius);
      /* margin-right: 5px; */
      &.close {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/tel.svg`});
        background-color: #eb2027;
      }
      &.invite:not(.copied) {
        background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/invite.svg`});
        background-color: #5e7fec;
      }
      &.copied.invite {
        background: #0d1117;
        color: #fff;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
      }
    }
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
      border-radius: var(--vera-border-radius);
      background-color: var(--vera-button-bg-color);
    }

    .layout {
      display: flex;
      align-items: center;
      border-radius: var(--vera-border-radius);
      background-color: var(--vera-button-bg-color);
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
            height: 4px;
          }
          &.line {
            height: 2px;
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
export default function Topbar({ pid = null, layout, handleClose, handleLayout }) {
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
      </div>
      <div className="right">
        <a
          className="feedback"
          title={`${tipFeedback}`}
          href="https://www.surveymonkey.com/r/RMGZDW8"
          target="_blank"
        ></a>
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

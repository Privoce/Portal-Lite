import { useEffect } from 'react';
import styled from 'styled-components';

import IconCursor from '../icons/Cursor';
import IconChat from '../icons/Chat';
import IconInvite from '../icons/Invite';
import IconSync from '../icons/Sync';
import usePagePlayer from '../hooks/usePagePlayer';
import emitter, { EVENTS } from '../hooks/useEmitter';
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
  layout,
  inviteVisible = false,
  toggleInviteVisible,
  cursor = true,
  videoSync = true,
  toggleVideoSync,
  syncPlayerToPeers,
  toggleCursor,
  handleLayout,
  chatVisible = false,
  toggleChatBoxVisible
}) {
  const { player, setPlayTime, setPlay, setPause } = usePagePlayer();
  useEffect(() => {
    const handlePlayerEvent = ({ target, type }) => {
      console.log('seek time', type);
      let time = target.currentTime;
      switch (type) {
        case 'seeked':
          if (time > 1) {
            syncPlayerToPeers({ type: 'time', content: { time } });
          }
          break;
        case 'play':
          syncPlayerToPeers({ type: 'play', content: { time } });
          break;
        case 'pause':
          syncPlayerToPeers({ type: 'pause' });
          break;
        default:
          break;
      }
    };
    const clearEvents = () => {
      player.onseeked = null;
      player.onplay = null;
      player.onpause = null;
    };
    const attachEvents = () => {
      player.onseeked = handlePlayerEvent;
      player.onplay = handlePlayerEvent;
      player.onpause = handlePlayerEvent;
    };
    const listener = ({ data }) => {
      clearEvents();
      let {
        payload: { type, content }
      } = data;
      switch (type) {
        case 'time':
          setPlayTime(content.time);
          break;
        case 'play':
          setPlay(content.time);
          break;
        case 'pause':
          setPause();
          break;
        default:
          break;
      }

      setTimeout(() => {
        attachEvents();
      }, 500);
    };
    if (player) {
      if (videoSync) {
        emitter.on(EVENTS.SYNC_PLAYER, listener);
        attachEvents();
      } else {
        emitter.off(EVENTS.SYNC_PLAYER, listener);
        clearEvents();
      }
    }
    return () => {
      if (player) {
        emitter.off(EVENTS.SYNC_PLAYER, listener);
        clearEvents();
      }
    };
  }, [player, videoSync]);
  return (
    <StyledBar className="topbar">
      <div className="left">
        <div className="rect cursor" onClick={toggleCursor}>
          <IconCursor enable={cursor} />
        </div>

        <div className={`rect chat`} onClick={toggleChatBoxVisible}>
          <IconChat visible={chatVisible} />
        </div>
        <div className={`rect invite`} onClick={toggleInviteVisible}>
          <IconInvite visible={inviteVisible} />
        </div>
        {player && (
          <div className={`rect sync`} onClick={toggleVideoSync}>
            <IconSync enable={videoSync} />
          </div>
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

import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import emitter, { EVENTS } from '../hooks/useEmitter';
const AniScaleIn = keyframes`
  from {
    transform: scale(0.5, 0.5);
    opacity: 0.5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
`;
const StyledCursor = styled.div`
  z-index: 99999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  will-change: transform;
  .circle {
    border-radius: 50%;
    background-color: deepskyblue;
    position: absolute;
    left: -50%;
    top: -50%;
    width: 40px;
    height: 40px;
    opacity: 0;
  }
  &.clicked .circle {
    animation: ${AniScaleIn} 0.5s cubic-bezier(0.36, 0.11, 0.89, 0.32);
    // animation-iteration-count: 2;
  }
  .pointer {
    width: 25px;
    height: 25px;
    background-image: url(${`chrome-extension://${chrome.runtime.id}/crx/vera/assets/icon/cursor.svg`});
    background-size: contain;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.8));
  }
  .name {
    margin-top: 5px;
    font-size: 10px;
    color: #333;
    padding: 4px 6px;
    background-color: #f4ea2a;
  }
`;
export default function Cursor({ id, username }) {
  const wrapper = useRef(null);
  useEffect(() => {
    console.log(wrapper.current);
    emitter.on(EVENTS.CURSOR_MOVE, ({ pid, data }) => {
      //  不是当前鼠标的更新数据
      if (pid !== id) return;
      const {
        pos: { x, y }
      } = data;
      wrapper.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      // console.log('data connection msg in cursor', pid, id, data);
    });
    emitter.on(EVENTS.CURSOR_CLICK, ({ pid }) => {
      //  不是当前鼠标的更新数据
      if (pid !== id) return;
      wrapper.current.classList.add('clicked');
    });
    emitter.on(EVENTS.CURSOR_SELECT, ({ pid, data }) => {
      //  不是当前鼠标的更新数据
      if (pid !== id) return;
      const { selection } = data;
      rangy.deserializeSelection(selection);
    });
  }, []);
  const handleAniEnd = () => {
    wrapper.current.classList.remove('clicked');
  };
  return (
    <StyledCursor id={id} ref={wrapper} onAnimationEnd={handleAniEnd}>
      <div className="circle"></div>
      <div className="pointer"></div>
      {username ? <span className="name">{username}</span> : null}
    </StyledCursor>
  );
}
const initCursor = ({ id, username = 'Guest' }) => {
  let wrapper = document.getElementById(id);
  // 存在了
  if (!wrapper) {
    console.log('cursor init');
    wrapper = document.createElement('aside');
    wrapper.id = id;
    document.body.appendChild(wrapper);
  }
  ReactDOM.render(<Cursor id={id} username={username} />, wrapper);
};
const destoryCursor = ({ id }) => {
  let wrapper = document.getElementById(id);
  wrapper?.remove();
};
const bindCursorSync = ({ conn }) => {
  console.log('bind cursor sync');
  document.addEventListener(
    'mousemove',
    (evt) => {
      const { clientX, clientY } = evt;
      const { scrollTop, scrollLeft } = document.scrollingElement;
      conn.send({
        type: EVENTS.CURSOR_MOVE,
        data: { pos: { x: clientX + scrollLeft, y: clientY + scrollTop } }
      });
    },
    false
  );
  document.addEventListener(
    'mousedown',
    () => {
      conn.send({
        type: EVENTS.CURSOR_CLICK,
        data: { click: true }
      });
    },
    false
  );
  document.addEventListener(
    'mouseup',
    () => {
      let selection = rangy.getSelection();
      if (selection) {
        selection = rangy.serializeSelection(selection, true);
        conn.send({
          type: EVENTS.CURSOR_SELECT,
          data: { selection }
        });
      }
    },
    false
  );
};
export { initCursor, destoryCursor, bindCursorSync };

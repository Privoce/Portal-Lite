import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import emitter, { EVENTS } from '../hooks/useEmitter';
import { throttle } from '../hooks/utils';
import StyledCursor from './styled';
export default function Cursor({ id, username = 'Guest' }) {
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
      try {
        rangy.deserializeSelection(selection);
      } catch (error) {
        console.error(error);
      }
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
const initCursor = ({ id, username }) => {
  if (typeof username == 'undefined') return false;
  let wrapper = document.getElementById(id);
  // 存在了
  if (!wrapper) {
    console.log('cursor init');
    wrapper = document.createElement('aside');
    wrapper.id = id;
    document.body.appendChild(wrapper);
  }
  ReactDOM.render(<Cursor id={id} username={username} />, wrapper);
  return true;
};
const destoryCursor = ({ id }) => {
  let wrapper = document.getElementById(id);
  wrapper?.remove();
};
const bindCursorSync = ({ conn }) => {
  console.log('bind cursor sync');
  document.addEventListener(
    'mousemove',
    throttle((evt) => {
      const { clientX, clientY } = evt;
      const { scrollTop, scrollLeft } = document.scrollingElement;
      conn.send({
        type: EVENTS.CURSOR_MOVE,
        data: { pos: { x: clientX + scrollLeft, y: clientY + scrollTop } }
      });
    }),
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

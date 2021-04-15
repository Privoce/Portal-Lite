// import { getUsername } from './utils.js';

window.PORTAL_USER_NAME = null;
let dragMoving = false;
class Widget {
  constructor() {
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_WIDGET';
    this.dom.innerHTML = `
    <div class="widget">
      <div class='drag'>
        <div class='handle'></div>
        <div class="portal_logo"></div>
      </div>
      <div class='camera'></div>
    </div>
    `;
  }
  show() {
    this.dom.classList.add('show');
  }
  init(
    inviteHandler = () => {
      console.log('invite btn clicked');
    }
  ) {
    this.dom.querySelector('.camera').onmouseup = () => {
      console.log('widget clicked');
      // 正在拖动...
      if (dragMoving) return;
      inviteHandler();
    };
    this.dom.querySelector('.portal_logo').onmouseup = () => {
      chrome.runtime.sendMessage({ action: 'OPEN_HOME' }, function () {
        /* callback */
        console.log('send open home message');
      });
    };

    document.body.appendChild(this.dom);
    let dragEle = this.dom.querySelector('.widget');
    let handle = dragEle.querySelector('.handle');
    // console.log({ handle });
    new PlainDraggable(dragEle, {
      onMove: () => {
        console.log('moving');
        dragMoving = true;
      },
      onDragEnd: () => {
        console.log('drag end');
        dragMoving = false;
      },
      handle,
      autoScroll: true
    });
  }
}
export default Widget;

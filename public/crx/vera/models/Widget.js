import { getUsername } from './utils.js';

window.PORTAL_USER_NAME = null;
class Widget {
  constructor(pvid) {
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_WIDGET';
    if (pvid) {
      this.dom.classList.add('join');
    }
    this.dom.innerHTML = `
    <div class='drag'></div>
    <div class="portal_logo"></div>
    `;
    getUsername().then((username) => {
      if (username) {
        PORTAL_USER_NAME = username;
        let userEle = document.createElement('span');
        userEle.classList.add('username');
        userEle.innerHTML = username;
        this.dom.appendChild(userEle);
      }
    });
  }
  init(
    inviteHandler = () => {
      console.log('invite btn clicked');
    }
  ) {
    this.dom.querySelector('.portal_logo').onclick = inviteHandler;

    document.body.appendChild(this.dom);
    let drag = new PlainDraggable(this.dom);
    drag.containment = { left: 0, top: 0, width: 0, height: '100%' };
    drag.handle = this.dom.querySelector('.drag');
    // drag.snap = { y: { step: 10 }, gravity: 0 };
    // drag.autoScroll = {
    //   speed: [800, 810, 820],
    //   sensitivity: [20, 10, 0]
    // };
  }
}
export default Widget;

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
  show() {
    this.dom.classList.add('show');
  }
  init(
    inviteHandler = () => {
      console.log('invite btn clicked');
    }
  ) {
    this.dom.querySelector('.portal_logo').onclick = inviteHandler;

    document.body.appendChild(this.dom);
    let handle = this.dom.querySelector('.drag');
    new PlainDraggable(this.dom, {
      containment: {
        left: 0,
        top: 0,
        width: 0,
        height: document.body.scrollHeight == 0 ? window.innerHeight : '100%'
      },
      handle,
      autoScroll: true
    });
  }
}
export default Widget;

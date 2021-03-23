import { getUsername } from './utils.js';
window.PORTAL_USER_NAME = null;
class Widget {
  constructor(pvid) {
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_WIDGET';
    if (pvid) {
      this.dom.classList.add('join');
    }
    this.dom.innerHTML = `<div class="portal_logo"></div>`;
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
    this.dom.onclick = inviteHandler;

    document.body.appendChild(this.dom);
  }
}
export default Widget;

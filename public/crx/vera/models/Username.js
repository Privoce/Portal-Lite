import { selectText, getUsername } from './utils.js';
import { userKey } from './config.js';

const tmpName = 'Guest';
window.REMOTE_USERNAME = new URLSearchParams(location.search).get(userKey) || '';
class Username {
  constructor(option = {}) {
    const { myself = true } = option;
    this.dom = document.createElement('div');
    this.dom.classList.add('username');
    if (myself) {
      getUsername().then((un) => {
        if (un) {
          window.LOCAL_USERNAME = un;
        }
        this.dom.innerHTML = un || tmpName;
        this.dom.contentEditable = un ? false : true;
      });
    } else {
      this.dom.innerHTML = window.REMOTE_USERNAME || tmpName;
      this.dom.contentEditable = window.REMOTE_USERNAME ? false : true;
    }
    this.dom.addEventListener(
      'input',
      (evt) => {
        if (!myself) {
          window.REMOTE_USERNAME = evt.target.innerText;
        } else {
          window.LOCAL_USERNAME = evt.target.innerText;
        }
      },
      false
    );
    this.dom.addEventListener(
      'click',
      () => {
        selectText(this.dom);
      },
      false
    );
    return this.dom;
  }
}

export default Username;

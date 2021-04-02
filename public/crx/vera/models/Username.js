import { selectText, getUsername } from './utils.js';
const tmpName = 'Guest';
class Username {
  constructor(option = {}) {
    const { host = true } = option;
    this.dom = document.createElement('div');
    this.dom.classList.add('username');
    if (host) {
      getUsername().then((un) => {
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
        if (!host) {
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

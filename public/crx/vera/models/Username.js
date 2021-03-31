import { selectText, getUsername } from './utils.js';
const tmpName = 'Guest';
class Username {
  constructor(option = { remote: false }) {
    const { remote } = option;
    this.dom = document.createElement('div');
    this.dom.classList.add('username');
    if (!remote) {
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
        if (remote) {
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

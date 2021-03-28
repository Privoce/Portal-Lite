window.LOCAL_TMP_USERNAME = 'Guest';
window.REMOTE_TMP_USERNAME = 'Guest';
class Username {
  constructor(option = { remote: false }) {
    const { remote } = option;
    let tmpName = remote ? REMOTE_TMP_USERNAME : LOCAL_TMP_USERNAME;
    this.dom = document.createElement('div');
    this.dom.contentEditable = window.PORTAL_USER_NAME ? false : true;
    this.dom.classList.add('username');
    this.dom.innerHTML = tmpName;
    this.dom.addEventListener('input', (evt) => {
      if (remote) {
        window.REMOTE_TMP_USERNAME = evt.target.innerText;
      } else {
        window.LOCAL_TMP_USERNAME = evt.target.innerText;
      }
    });
    return this.dom;
  }
}

export default Username;

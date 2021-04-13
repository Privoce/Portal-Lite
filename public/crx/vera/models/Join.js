import Camera from './Camera.js';
import Username from './Username.js';
import Login from './Login.js';
import { appendHistory, getUsername } from './utils.js';
const joinTxt = chrome.i18n.getMessage('join');

class Join {
  constructor({ inviteId = null }) {
    this.dom = document.createElement('div');
    this.dom.classList.add('join');
    this.dom.innerHTML = `
        <button disabled class='btn ok'>${joinTxt}</button>
      `;
    this.init(inviteId);
    this.initUsername();
    return this.dom;
  }
  initUsername() {
    let un = new Username();
    this.dom.appendChild(un);
  }
  init(inviteId) {
    let joinBtn = this.dom.querySelector('.btn.ok');
    getUsername().then((un) => {
      if (!un) {
        // apend Login
        let loginBtn = new Login({ inviteId, isHost: false });
        this.dom.appendChild(loginBtn);
      } else {
        joinBtn.removeAttribute('disabled');
      }
    });
    // 响应加入按钮的事件
    joinBtn.addEventListener('click', async () => {
      // create audio and video constraints
      try {
        console.log('join event peer called');
        let remoteCamera = new Camera({ remote: true, peerId: inviteId });
        let cameraList = this.dom.previousElementSibling;
        let panel = cameraList.parentElement;
        console.log('attach remote video');
        cameraList.appendChild(remoteCamera.dom);
        // 把本地的音视频推给对方
        let call = MyPortalVeraPeer.call(inviteId, LOCAL_STREAM);
        // 加入历史记录
        appendHistory({ peerId: inviteId, isHost: false });
        this.dom.remove();
        // 响应对方的音视频流
        call.on('stream', (st) => {
          REMOTE_STREAM = st;
          remoteCamera.attachStream(st);
          cameraList.setAttribute('camera-status', 'connected');
          panel.setAttribute('data-status', 'streaming');
        });
        call.on('close', () => {
          console.log('call close');
        });
      } catch (error) {
        this.dom.setAttribute('camera-status', 'allow-error');
        console.log('join event peer called,error');
        console.error('Failed to get local stream', error);
      }
    });
  }
}
export default Join;

import RemoteCamera from './RemoteCamera.js';
import { appendHistory } from './utils.js';
class Join {
  constructor({ inviteId = null }) {
    this.dom = document.createElement('div');
    this.dom.classList.add('join');
    this.dom.innerHTML = `
          <button class='btn'>Join</button>
      `;
    this.init(inviteId);
    return this.dom;
  }
  init(inviteId) {
    // 响应加入按钮的事件
    let joinBtn = this.dom.querySelector('.btn');
    joinBtn.addEventListener('click', async () => {
      // create audio and video constraints
      try {
        console.log('join event peer called');
        let remoteCamera = new RemoteCamera(inviteId);
        let cameraList = this.dom.previousElementSibling;
        console.log('attach remote video');
        cameraList.appendChild(remoteCamera.getDom());
        // 把本地的音视频推给对方
        let call = MyPortalVeraPeer.call(inviteId, LOCAL_STREAM);
        // 加入历史记录
        appendHistory({ peerId: inviteId, isHost: false });
        // 响应对方的音视频流
        call.on('stream', (st) => {
          this.dom.remove();
          REMOTE_STREAM = st;
          remoteCamera.attachStream(st);
          cameraList.setAttribute('camera-status', 'connected');
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

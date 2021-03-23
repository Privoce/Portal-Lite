import HostCamera from './HostCamera.js';
import Invite from './Invite.js';
import Join from './Join.js';
import PeerClient from './PeerClient.js';
import { drag_over, drag_start, drop } from './utils.js';
window.REMOTE_PEER_IDS = [];
window.REMOTE_STREAM = null;
window.LOCAL_STREAM = null;

class Panel {
  constructor(pvid = null) {
    this.inited = false;
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_PANEL';
    this.dom.setAttribute('data-status', 'initial');
    this.dom.draggable = true;
    this.dom.addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
    this.dom.innerHTML = `
      <div class='close'></div>
      <h2 class="title">Portal Vera</h2>
      <div class="cameras"></div>
      <div class="intro">
        <div class="copyright">
          <span>© 2020 - 2021 </span>
          <span>Provided by <a href="https://privoce.com/#our-team">Privoce Team</a> with ❤️</span>
        </div>
      </div>
      `;
    // <h3 class="title">Welcome</h3>
    this.initClose();
    this.initPeer(pvid);
    document.body.appendChild(this.dom);
  }
  initClose() {
    this.dom.addEventListener(
      'click',
      ({ target }) => {
        console.log('click ', { target });

        if (target.classList.contains('close')) {
          let confirmed = confirm('Are you sure to quit?');
          if (!confirmed) return;
          this.dom.querySelectorAll('video').forEach((v) => {
            v.srcObject = null;
          });
          // 停掉每一次的stream
          [LOCAL_STREAM, REMOTE_STREAM].forEach((st) => {
            const tracks = st?.getTracks() || [];
            for (let i = 0; i < tracks.length; i++) {
              let track = tracks[i];
              track.stop();
            }
          });
          this.dom.remove();
          document.documentElement.removeAttribute('invite-expand');
          MyPortalVeraPeer.disconnect();
        }
      },
      true
    );
  }
  initPeer(pvid) {
    if (MyPortalVeraPeer) {
      console.log('reopen', pvid, MyPortalVeraPeer.id);
      // MyPortalVeraPeer.reconnect();
      this.init({ inviteId: pvid, localId: MyPortalVeraPeer.id });
    }
    new PeerClient({ pvid, panel: this });
    console.log('invited peerId', pvid);
  }
  init({ inviteId, localId }) {
    if (this.inited) return;
    console.log('invite init ids', inviteId, localId);
    let cameraList = this.dom.querySelector('.cameras');
    this.inviteBox = inviteId ? new Join({ inviteId }) : new Invite({ localId });
    // 如果 inviteId 存在，则是被邀请者
    let CameraBox = new HostCamera({ inviteId, localId });
    cameraList.appendChild(CameraBox);
    cameraList.insertAdjacentElement('afterend', this.inviteBox);
    this.inited = true;
  }
}
export default Panel;

import Camera from './Camera.js';
import Invite from './Invite.js';
import Loading from './Loading.js';
import Join from './Join.js';
import PeerClient from './PeerClient.js';
window.REMOTE_PEER_IDS = [];
window.REMOTE_STREAM = null;
window.LOCAL_STREAM = null;

class Panel {
  constructor(pvid = null) {
    this.inited = false;
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_PANEL';
    if (!pvid) this.dom.classList.add('host');
    this.dom.setAttribute('data-status', 'uninitialized');
    this.dom.innerHTML = `
      <div class='close'></div>
      <div class="cameras"></div>
      <div class='topbar'>
        <div class='add'></div>
        <ul class='layout'>
          <li class="item min" layout='min'>
            <div class="mock line"></div>
          </li>
          <li class="item one" layout='one'>
            <div class="mock box"></div>
          </li>
          <li class="item vt" layout='vt'>
            <div class="mock box"></div>
            <div class="mock box"></div>
          </li>
          <li class="item hz curr" layout='hz'>
            <div class="mock box"></div>
            <div class="mock box"></div>
          </li>
        </ul>
      </div>
      `;
    // <div class="loading"></div>
    // <div class="drag"></div>;
    this.initLoading();
    this.initClose();
    this.initLayout();
    this.initPeer(pvid);
    document.body.appendChild(this.dom);
    new PlainDraggable(this.dom, {
      // handle: this.dom.querySelector('.drag'),
      autoScroll: true,
      containment: {
        left: 0,
        top: 0,
        width: '100%',
        height: document.body.scrollHeight == 0 ? window.innerHeight : '100%'
      }
    });
  }
  initLoading() {
    this.loading = new Loading();
    this.dom.appendChild(this.loading);
  }
  initLayout() {
    let layoutContainer = this.dom.querySelector('.layout');
    layoutContainer.addEventListener(
      'click',
      ({ target }) => {
        console.log('click layout', { target });
        let canNext = target.classList.contains('item') && !target.classList.contains('curr');
        if (canNext) {
          layoutContainer.querySelector('.item.curr').classList.remove('curr');
          target.classList.add('curr');
          let layout = target.getAttribute('layout');
          this.dom.setAttribute('layout', layout);
        }
      },
      true
    );
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
            const tracks = v.srcObject?.getTracks() || [];
            for (let i = 0; i < tracks.length; i++) {
              let track = tracks[i];
              track.stop();
            }
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
          Object.entries(PEER_DATA_CONNS).forEach(([pid, conn]) => {
            console.log('close the peer', pid);
            conn.close();
          });
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
    let CameraBox = new Camera({ peerId: localId });
    cameraList.appendChild(CameraBox.dom);
    cameraList.insertAdjacentElement('afterend', this.inviteBox);
    this.inited = true;
    // remove loading
    this.loading.remove();
  }
}
export default Panel;

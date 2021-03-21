import HostCamera from './HostCamera.js';
import RemoteCamera from './RemoteCamera.js';
import Invite from './Invite.js';
import Join from './Join.js';
import { drag_over, drag_start, drop } from './utils.js';
window.REMOTE_PEER_IDS = [];
window.REMOTE_STREAM = null;
window.LOCAL_STREAM = null;
window.CURRENT_PEER_ID = null;
window.MyPeer = null;
window.PEER_DATA_CONN = null;
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
          MyPeer.disconnect();
        }
      },
      true
    );
  }
  initPeer(pvid) {
    console.log('invited peerId', pvid);
    // init peerjs
    MyPeer = CURRENT_PEER_ID
      ? new Peer(CURRENT_PEER_ID, {
          host: 'r.nicegoodthings.com',
          // port: '80',
          path: '/ngt'
        })
      : new Peer({
          host: 'r.nicegoodthings.com',
          // port: '80',
          path: '/ngt'
        });
    console.log('my peer', MyPeer);
    if (CURRENT_PEER_ID) {
      console.log('reopen', pvid, CURRENT_PEER_ID);
      // MyPeer.reconnect();
      this.init({ inviteId: pvid, localId: CURRENT_PEER_ID });
    }
    // 受邀者，则主动连接对方
    if (pvid) {
      console.log('connect the invite peer');
      PEER_DATA_CONN = MyPeer.connect(pvid);
    }
    MyPeer.on('open', (id) => {
      CURRENT_PEER_ID = id;
      console.log('peer ID', id);
      this.dom.setAttribute('data-status', 'open');
      this.init({ inviteId: pvid, localId: id });

      // incoming connection
      MyPeer.on('connection', (conn) => {
        console.log('incoming peer connection!', conn);
        this.dom.setAttribute('data-status', 'connected');
        // connect the other side from main
        if (!pvid) {
          console.log('connect the other', conn.peer);
          PEER_DATA_CONN = MyPeer.connect(conn.peer);
        }

        conn.on('open', () => {
          console.log('the connection is open and ready for read/write.');
          // 只有host才发初始化的消息
          conn.send('hello!');
          if (!pvid) {
            console.log('send connected peer ids');
            PEER_DATA_CONN.send({ type: 'INIT', data: { pids: REMOTE_PEER_IDS } });
          }
          conn.on('data', (cmd = {}) => {
            let { type = '', data } = cmd;
            console.log(`received: `, type, data);
            let videoContainer = this.dom.querySelector('.camera.remote .video');
            switch (type) {
              case 'RM_BG':
                if (videoContainer.getAttribute('bg') == 'true') {
                  videoContainer.querySelector('.opt.bg').click();
                }
                break;
              case 'RS_BG':
                if (videoContainer.getAttribute('bg') !== 'true') {
                  videoContainer.querySelector('.opt.bg').click();
                }
                break;
              case 'VIDEO_ON':
                if (videoContainer.getAttribute('video') !== 'true') {
                  videoContainer.querySelector('.opt.video').click();
                }
                break;
              case 'VIDEO_OFF':
                if (videoContainer.getAttribute('video') == 'true') {
                  videoContainer.querySelector('.opt.video').click();
                }
                break;
              case 'AUDIO_ON':
                if (videoContainer.getAttribute('audio') !== 'true') {
                  videoContainer.querySelector('.opt.audio').click();
                }
                break;
              case 'AUDIO_OFF':
                if (videoContainer.getAttribute('audio') == 'true') {
                  videoContainer.querySelector('.opt.audio').click();
                }
                break;

              default:
                break;
            }
          });
        });
      });
      MyPeer.on('disconnected', () => {
        this.dom.setAttribute('data-status', 'disconnected');
      });
    });
    // incoming voice/video connection
    MyPeer.on('call', async (call) => {
      console.log('called from remote');
      // 加入当前remote peer列表
      REMOTE_PEER_IDS.push(call.peer);
      try {
        let remoteCamera = new RemoteCamera(call.peer);
        let cameraList = this.dom.querySelector('.cameras');
        console.log('attach remote video');
        cameraList.appendChild(remoteCamera.getDom());
        call.answer(LOCAL_STREAM); // Answer the call with an A/V stream.
        call.on('stream', (s) => {
          REMOTE_STREAM = s;
          remoteCamera.attachStream(s);
          cameraList.setAttribute('camera-status', 'connected');
          // this.dom.setAttribute('camera-status', 'connected');
        });
        call.on('close', () => {
          console.log('call close');
          // 从当前remote peer列表剔除
          REMOTE_PEER_IDS = REMOTE_PEER_IDS.filter((pid) => pid !== call.peer);
        });
      } catch (error) {
        console.error('Failed to get local stream', error);
      }
    });
    MyPeer.on('error', (error) => {
      console.log({ error });
      this.dom.setAttribute('data-status', 'error');
    });
    MyPeer.on('close', () => {
      console.log('connect close');
      // this.dom.setAttribute('data-status', 'close');
    });
  }
  init({ inviteId, localId }) {
    if (this.inited) return;
    console.log('invite init ids', inviteId, localId);
    let cameraList = this.dom.querySelector('.cameras');
    let OptBox = inviteId ? new Join({ inviteId }) : new Invite({ localId });
    // 如果 inviteId 存在，则是被邀请者
    let CameraBox = new HostCamera({ inviteId, localId });
    cameraList.appendChild(CameraBox);
    cameraList.insertAdjacentElement('afterend', OptBox);
    this.inited = true;
  }
}
export default Panel;

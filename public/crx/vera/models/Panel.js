import HostCamera from './HostCamera.js';
import RemoteCamera from './RemoteCamera.js';
import Invite from './Invite.js';
import Join from './Join.js';
import { drag_over, drag_start, drop, appendHistory } from './utils.js';
window.REMOTE_PEER_IDS = [];
window.REMOTE_STREAM = null;
window.LOCAL_STREAM = null;
window.CURRENT_PEER_ID = null;
window.MyPortalVeraPeer = null;
window.PEER_DATA_CONNS = {};
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
    console.log('invited peerId', pvid);
    // init peerjs
    MyPortalVeraPeer = CURRENT_PEER_ID
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
    console.log('my peer', MyPortalVeraPeer);
    if (CURRENT_PEER_ID) {
      console.log('reopen', pvid, CURRENT_PEER_ID);
      // MyPortalVeraPeer.reconnect();
      this.init({ inviteId: pvid, localId: CURRENT_PEER_ID });
    }
    MyPortalVeraPeer.on('open', (id) => {
      // 受邀者，则主动连接对方
      if (pvid) {
        let inviteConn = MyPortalVeraPeer.connect(pvid);
        console.log('connect the invite peer', pvid, inviteConn);
        inviteConn.on('open', () => {
          inviteConn.send('hi from remote!');
        });
        inviteConn.on('error', (error) => {
          console.log('remote connect error', error);
        });
        PEER_DATA_CONNS[pvid] = inviteConn;
      }
      CURRENT_PEER_ID = id;
      console.log('peer ID', id);
      this.dom.setAttribute('data-status', 'open');
      this.init({ inviteId: pvid, localId: id });

      // incoming connection
      MyPortalVeraPeer.on('connection', (conn) => {
        console.log('incoming peer connection!', conn);
        this.dom.setAttribute('data-status', 'connected');
        // 如果是host，来自remote的连接，需要回应并存入全局变量
        if (!pvid) {
          // 放入全局变量中
          // PEER_DATA_CONNS[conn.peer] = conn;
          // console.log('connect the other', conn.peer);
          MyPortalVeraPeer.connect(conn.peer);
          PEER_DATA_CONNS[conn.peer] = conn;
        }

        conn.on('open', () => {
          console.log('the connection is open and ready for read/write.');
          conn.send('hello from host!');
          // 只有host才发初始化的消息
          if (!pvid) {
            let cmd = { type: 'INIT', data: { pids: Object.keys(PEER_DATA_CONNS) } };
            console.log('send connected peer ids', cmd);
            conn.send(cmd);
          }
        });
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
        conn.on('error', (error) => {
          console.log('host connect error', error);
        });
      });
      MyPortalVeraPeer.on('disconnected', () => {
        this.dom.setAttribute('data-status', 'disconnected');
      });
    });
    // incoming voice/video connection
    MyPortalVeraPeer.on('call', async (call) => {
      console.log('called from remote');
      // 加入当前remote peer列表
      REMOTE_PEER_IDS.push(call.peer);
      try {
        let remoteCamera = new RemoteCamera(call.peer);
        let cameraList = this.dom.querySelector('.cameras');
        console.log('attach remote video');
        cameraList.appendChild(remoteCamera.getDom());
        call.answer(LOCAL_STREAM); // Answer the call with an A/V stream.
        // 写入历史记录
        appendHistory();
        call.on('stream', (s) => {
          REMOTE_STREAM = s;
          remoteCamera.attachStream(s);
          cameraList.setAttribute('camera-status', 'connected');
          // this.dom.setAttribute('camera-status', 'connected');
        });
        call.on('close', () => {
          console.log('call close');
          // 从当前remote peer列表剔除
          PEER_DATA_CONNS = Object.fromEntries(
            Object.entries(PEER_DATA_CONNS).filter(([pid, conn]) => pid !== call.peer)
          );
        });
      } catch (error) {
        console.error('Failed to get local stream', error);
      }
    });
    MyPortalVeraPeer.on('error', (error) => {
      console.log({ error });
      this.dom.setAttribute('data-status', 'error');
    });
    MyPortalVeraPeer.on('close', () => {
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

import Camera from './Camera.js';

function drag_start(event) {
  let style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData(
    'text/plain',
    parseInt(style.getPropertyValue('left'), 10) -
      event.clientX +
      ',' +
      (parseInt(style.getPropertyValue('top'), 10) - event.clientY)
  );
}
function drop(event) {
  let offset = event.dataTransfer.getData('text/plain').split(',');
  let dm = document.getElementById('PORTAL_VERA_INVITE');
  dm.style.left = event.clientX + parseInt(offset[0], 10) + 'px';
  dm.style.top = event.clientY + parseInt(offset[1], 10) + 'px';
  dm.style.right = 'auto';
  event.preventDefault();
  return false;
}
function drag_over(event) {
  event.preventDefault();
  return false;
}
class Invite {
  constructor(pvid = null) {
    this.inited = false;
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_INVITE';
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
        console.log('click close', { target });

        if (target.classList.contains('close')) {
          let confirmed = confirm('Are you sure to quit?');
          if (!confirmed) return;
          this.dom.querySelectorAll('video').forEach((v) => {
            v.srcObject = null;
          });
          // 停掉每一次的stream
          VERA_STREAMS.forEach((st) => {
            const tracks = st?.getTracks() || [];
            for (let i = 0; i < tracks.length; i++) {
              let track = tracks[i];
              track.stop();
            }
          });
          this.dom.remove();
          document.documentElement.removeAttribute('invite-expand');
          window.MyPeer.disconnect();
        }
      },
      true
    );
  }
  initPeer(pvid) {
    console.log('invited peerId', pvid);
    // init peerjs
    window.MyPeer = window.CURRENT_PEER_ID
      ? new Peer(window.CURRENT_PEER_ID, {
          host: 'r.nicegoodthings.com',
          // port: '80',
          path: '/ngt'
        })
      : new Peer({
          host: 'r.nicegoodthings.com',
          // port: '80',
          path: '/ngt'
        });
    console.log('my peer', window.MyPeer);
    if (window.CURRENT_PEER_ID) {
      console.log('reopen', pvid, window.CURRENT_PEER_ID);
      // window.MyPeer.reconnect();
      this.init({ inviteId: pvid, localId: window.CURRENT_PEER_ID });
    }
    window.MyPeer.on('open', (id) => {
      window.CURRENT_PEER_ID = id;
      console.log('peer ID', id);
      this.dom.setAttribute('data-status', 'open');
      this.init({ inviteId: pvid, localId: id });
      // incoming connection
      window.MyPeer.on('connection', (conn) => {
        console.log('incoming peer connection!', conn);
        this.dom.setAttribute('data-status', 'connected');
        // connect the other side from main
        if (!pvid) {
          window.PEER_DATA_CONN = window.MyPeer.connect(conn.peer);
        }
        conn.on('open', () => {
          conn.on('data', (data = {}) => {
            console.log(`received: ${data}`);
            let { type = '' } = data;
            switch (type) {
              case 'RM_BG':
              case 'RS_BG':
                this.dom.querySelector('.camera.remote .opt.bg').click();
                break;
              case 'VIDEO_ON':
              case 'VIDEO_OFF':
                this.dom.querySelector('.camera.remote .opt.video').click();
                break;
              case 'AUDIO_ON':
              case 'AUDIO_OFF':
                this.dom.querySelector('.camera.remote .opt.audio').click();
                break;

              default:
                break;
            }
          });
          conn.send('hello!');
        });
      });
      window.MyPeer.on('disconnected', () => {
        this.dom.setAttribute('data-status', 'disconnected');
      });
      if (pvid) {
        console.log('connect the invite peer');
        window.PEER_DATA_CONN = window.MyPeer.connect(pvid);
      }
    });

    window.MyPeer.on('error', (error) => {
      console.log({ error });
      this.dom.setAttribute('data-status', 'error');
    });
    window.MyPeer.on('close', () => {
      console.log('connect close');
      // this.dom.setAttribute('data-status', 'close');
    });
  }
  init({ inviteId, localId }) {
    if (this.inited) return;
    console.log('invite init ids', inviteId, localId);
    let cameraList = this.dom.querySelector('.cameras');
    let frag = document.createDocumentFragment();
    let videos = [new Camera({ host: true, inviteId }), new Camera({ inviteId, localId })];
    for (let i = 0; i < videos.length; i++) {
      frag.appendChild(videos[i]); // Note that this does NOT go to the DOM
    }
    cameraList.appendChild(frag);
    this.inited = true;
  }
}
export default Invite;

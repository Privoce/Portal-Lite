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
        <h3 class="title">Welcome</h3>
      </div>
    `;
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
          this.dom.querySelectorAll('video').forEach((v) => {
            v.pause();
            v.src = '';
          });
          this.dom.remove();

          document.documentElement.removeAttribute('invite-expand');
        }
      },
      true
    );
  }
  initPeer(pvid) {
    // init peerjs
    window.MyPeer =
      window.MyPeer ||
      new Peer({
        host: 'r.nicegoodthings.com',
        // port: '80',
        path: '/ngt'
      });
    if (window.CURRENT_PEER_ID) {
      console.log('reopen', pvid, window.CURRENT_PEER_ID);
      this.init({ inviteId: pvid, localId: window.CURRENT_PEER_ID });
    }
    window.MyPeer.on('open', (id) => {
      window.CURRENT_PEER_ID = id;
      console.log('peer ID', id);
      this.dom.setAttribute('data-status', 'open');
      this.init({ inviteId: pvid, localId: id });
      // incoming connection
      if (pvid) {
        window.MyPeer.connect(pvid);
      }
    });
    window.MyPeer.on('error', (error) => {
      console.log({ error });
      this.dom.setAttribute('data-status', 'error');
    });
    window.MyPeer.on('connection', (conn) => {
      console.log('incoming peer connection!');
      this.dom.setAttribute('data-status', 'connected');
      conn.on('data', (data) => {
        console.log(`received: ${data}`);
      });
      conn.on('open', () => {
        conn.send('hello!');
      });
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

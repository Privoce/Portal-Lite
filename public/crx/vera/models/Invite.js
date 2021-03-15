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
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_INVITE';
    this.dom.setAttribute('data-status', 'initial');
    this.dom.draggable = true;
    this.dom.addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
    this.dom.innerHTML = `
      <h2 class="title">Portal Vera</h2>
      <div class="cameras"></div>
      <div class="intro">
        <h3 class="title">Welcome</h3>
      </div>
    `;
    this.initPeer(pvid);
    document.body.appendChild(this.dom);
  }
  initPeer(pvid) {
    // init peerjs
    window.MyPeer = new Peer({
      host: 'r.nicegoodthings.com',
      // port: '80',
      path: '/ngt'
    });
    if (this.pvid) {
      window.MyPeer.connect(this.pvid);
    }
    window.MyPeer.on('open', (id) => {
      console.log('peer ID', id);
      this.dom.setAttribute('data-status', 'open');
      this.init({ peerId: id, pvid });
    });
    window.MyPeer.on('error', (error) => {
      console.log({ error });
      this.dom.setAttribute('data-status', 'error');
    });
    // incoming connection
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
  init({ peerId = null, pvid = null }) {
    console.log('inite init peerId', peerId);
    let cameraList = this.dom.querySelector('.cameras');
    let frag = document.createDocumentFragment();
    let videos = [new Camera({ host: true }), new Camera({ pvid, peerId })];
    for (let i = 0; i < videos.length; i++) {
      frag.appendChild(videos[i]); // Note that this does NOT go to the DOM
    }
    cameraList.appendChild(frag);
  }
}
export default Invite;

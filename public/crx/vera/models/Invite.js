const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
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
  let dm = document.getElementById('PORTAL_VEMOS_INVITE');
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
    this.pvid = pvid;
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VEMOS_INVITE';
    this.dom.setAttribute('data-status', 'initial');
    this.dom.draggable = true;
    this.dom.addEventListener('dragstart', drag_start, false);
    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
    this.dom.innerHTML = `
      <h2 class="title">Portal Vemos</h2>
      <div class="cameras"></div>
      <div class="intro">
        <h3 class="title">Welcome</h3>
      </div>
      ${
        pvid
          ? `<button class='btn join'>Join</button>`
          : `<button class="btn copy">Copy Invite Link</button>`
      }

    `;
    this.initPeer();
    this.initHandlers();
    document.body.appendChild(this.dom);
  }
  initPeer() {
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
      this.peerId = id;
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
  initHandlers() {
    if (this.pvid) {
      // invited
      let joinBtn = this.dom.querySelector('.btn.join');
      joinBtn.addEventListener('click', () => {
        // create audio and video constraints
        const constraintsVideo = {
          audio: {
            // 设置回音消除
            noiseSuppression: true,
            // 设置降噪
            echoCancellation: true
          },
          video: true
        };
        navigator.mediaDevices
          .getUserMedia(constraintsVideo)
          .then((stream) => {
            let call = window.MyPeer.call(this.pvid, stream);
            call.on('stream', (st) => {
              let remoteVideo = this.dom.querySelector('.cameras .remote video');
              remoteVideo.srcObject = st;
            });
          })
          .catch((err) => {
            console.error('Failed to get local stream', err);
          });
      });
    } else {
      // host
      let inviteBtn = this.dom.querySelector('.btn.copy');
      inviteBtn.addEventListener('click', () => {
        console.log('copy link');
        let obj = new URL(location.href);
        obj.searchParams.append('portal-vera-id', this.peerId);
        console.log(obj.href);
        copyToClipboard(`http://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}`);
      });
    }
  }
  init(videos) {
    let cameraList = this.dom.querySelector('.cameras');
    let frag = document.createDocumentFragment();
    for (let i = 0; i < videos.length; i++) {
      frag.appendChild(videos[i]); // Note that this does NOT go to the DOM
    }
    cameraList.appendChild(frag);
  }
}
export default Invite;

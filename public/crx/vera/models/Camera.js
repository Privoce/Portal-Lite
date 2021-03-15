import { StreamConfig } from './config.js';

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
class Camera {
  constructor({ host = false, peerId = null, pvid = null }) {
    this.host = host;
    this.dom = document.createElement('div');
    this.dom.classList.add('camera');
    this.dom.innerHTML = `<div class='video'>
        <video playsinline autoplay muted='muted'/>
    </div>
    `;
    if (host) {
      this.initHostCamera();
    } else {
      this.initRemoteCamera({ peerId, pvid });
    }

    return this.dom;
  }
  initHostCamera() {
    this.dom.classList.add('host');
    //  贴上本地视频
    let videoDom = this.dom.querySelector('video');
    navigator.mediaDevices
      .getUserMedia(StreamConfig)
      .then((stream) => {
        videoDom.srcObject = stream;
      })
      .catch((err) => {
        console.error('Failed to get local stream', err);
      });
  }
  initRemoteCamera({ peerId = null, pvid = null }) {
    console.log('detected pvid', pvid);
    let prevHtml = this.dom.innerHTML;
    this.dom.innerHTML = `${prevHtml}
    ${
      pvid
        ? `<button class='btn join'>Join</button>`
        : `<button class="btn copy">Copy Invite Link</button>`
    }`;
    this.dom.classList.add('remote');
    // incoming voice/video connection
    window.MyPeer.on('call', (call) => {
      console.log('called from remote');
      navigator.mediaDevices
        .getUserMedia(StreamConfig)
        .then((stream) => {
          call.answer(stream); // Answer the call with an A/V stream.
          call.on('stream', (s) => {
            console.log('attach stream');
            this.dom.querySelector('video').srcObject = s;
          });
        })
        .catch((err) => {
          console.error('Failed to get local stream', err);
        });
    });
    if (!pvid) {
      // 邀请按钮的点击事件
      let inviteBtn = this.dom.querySelector('.btn.copy');
      inviteBtn.addEventListener('click', () => {
        console.log('copy link');
        let obj = new URL(location.href);
        obj.searchParams.append('portal-vera-id', peerId);
        console.log(obj.href);
        copyToClipboard(`http://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}`);
      });
    } else {
      // 响应加入按钮的事件
      let joinBtn = this.dom.querySelector('.btn.join');
      console.log('remote video container', this.dom);
      joinBtn.addEventListener('click', () => {
        // create audio and video constraints
        navigator.mediaDevices
          .getUserMedia(StreamConfig)
          .then((stream) => {
            let call = window.MyPeer.call(peerId, stream);
            call.on('stream', (st) => {
              let remoteVideo = this.dom.querySelector('video');
              remoteVideo.srcObject = st;
            });
          })
          .catch((err) => {
            console.error('Failed to get local stream', err);
          });
      });
    }
  }
  // init() {
  //   let videoWrapper = document.createElement('div');
  //   // videoWrapper

  //   return this.dom;
  // }
}
export default Camera;

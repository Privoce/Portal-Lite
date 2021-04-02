import { fullStreamConfig, audioStreamConfig } from './config.js';
import Username from './Username.js';
import Loading from './Loading.js';
import { bgRemove, bgRestore } from './utils.js';
const handleControl = async (control, btn, root) => {
  let videoEle = btn.parentElement.nextElementSibling;
  let videoContainer = videoEle.parentElement;
  // let isHost = root.classList.contains('local');
  let isTrue;
  let map = {
    audio: {
      on: 'AUDIO_ON',
      off: 'AUDIO_OFF'
    },
    video: {
      on: 'VIDEO_ON',
      off: 'VIDEO_OFF'
    },
    bg: {
      on: 'RS_BG',
      off: 'RM_BG'
    }
  };
  if (control == 'bg') {
    // 如果视频被禁用了，就地返回
    let disabled = videoEle.srcObject.getVideoTracks().some((t) => t.enabled == false);
    if (disabled) return;
  }
  if (['bg', 'pin', 'audio', 'video'].includes(control)) {
    isTrue = videoContainer.getAttribute(control) == 'true';
    if (isTrue) {
      videoContainer.removeAttribute(control);
    } else {
      videoContainer.setAttribute(control, true);
    }
  }
  // pin
  if (control == 'pin') {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }
    if (!isTrue) {
      videoEle.requestPictureInPicture().catch((error) => {
        // Error handling
        console.log('pip error', error);
      });
      videoEle.onleavepictureinpicture = () => {
        videoContainer.removeAttribute('pin');
      };
    }
    return;
  }
  // 禁用音视频
  if (control == 'audio' || control == 'video') {
    let tracks =
      control == 'audio'
        ? videoEle.srcObject.getAudioTracks()
        : videoEle.srcObject.getVideoTracks();
    tracks.forEach((t) => {
      console.log('before', { t });
      t.enabled = !isTrue;
      console.log('after', { t });
    });
  }
  // 去背景
  if (control == 'bg') {
    if (isTrue) {
      await bgRemove(root);
    } else {
      bgRestore(root);
    }
  }
  if (root.classList.contains('local')) {
    // 如果是本地camera给现存连接列表 依次发消息
    let cmd = { type: isTrue ? map[control].off : map[control].on };
    console.log('send cmd to remote camera', cmd);
    Object.entries(PEER_DATA_CONNS).forEach(([pid, conn]) => {
      console.log('send to peer', pid);
      conn.send(cmd);
    });
  }
};
class Camera {
  constructor({ remote = false, peerId = null }) {
    this.dom = document.createElement('div');
    this.dom.setAttribute('peer-id', peerId);
    this.dom.classList.add('camera');
    this.dom.classList.add(remote ? 'remote' : 'local');
    this.dom.innerHTML = `
    <div class='processing'>processing</div>
    <div class='video' video='true' bg='true' audio='true' waiting='true'>
      <div class='mask user'></div>

      <div class='opts'>
        <button class='opt bg' control='bg' title='clear background'></button>
        <button class='opt video' control='video' title='video'></button>
        <button class='opt audio' control='audio' title='audio'></button>
        <button class='opt pin' control='pin' title='pin'></button>
      </div>
      <video playsinline autoplay ${remote ? '' : "muted='muted'"} ></video>
      <canvas class='render' width=200 height=200 ></canvas>
      <canvas class='side' width=200 height=200 ></canvas>
      <div class='mask error'>Camera Error</div>
      <div class='mask waiting'></div>
    </div>
      `;
    // <div class='mask waiting'>
    //   <div class='loading'>
    //     <svg viewBox="0 0 50 50" class="circle">
    //         <circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
    //     </svg>
    //     <span class='txt'>Loading</span>
    //   </div>
    // </div>
    // <div class="cover_opts" />
    this.initLoading();
    this.initControls();
    if (!remote) {
      this.initLocal();
    }
    this.initUsername(remote);
    return { dom: this.dom, attachStream: this.attachStream };
  }
  initLoading() {
    let loading = new Loading();
    this.dom.querySelector('.video .waiting').appendChild(loading);
  }
  initUsername(remote) {
    // if (!window.PORTAL_USER_NAME) return;
    let un = new Username({ host: !remote });
    this.dom.querySelector('.video').appendChild(un);
  }
  initControls() {
    let controls = [...this.dom.querySelectorAll('.opts .opt')].map((opt) =>
      opt.getAttribute('control')
    );
    this.dom.addEventListener(
      'click',
      ({ target }) => {
        console.log('clicked', { target });
        let control = target.getAttribute('control');
        if (controls.includes(control)) {
          handleControl(control, target, this.dom);
        }
      },
      true
    );
  }
  // 初始化本地camera
  async initLocal() {
    let devices = null;
    //  贴上本地视频
    try {
      // 一次性获取两个授权
      devices = await navigator.mediaDevices.enumerateDevices();
      let hasVideoCam = devices.some((d) => {
        return d.kind == 'videoinput';
      });
      // 提前拿到授权
      LOCAL_STREAM = await navigator.mediaDevices.getUserMedia(
        hasVideoCam ? fullStreamConfig : audioStreamConfig
      );
      let cloned = LOCAL_STREAM.clone();
      cloned.getAudioTracks().forEach((t) => (t.enabled = false));
      this.attachStream(cloned);
    } catch (error) {
      console.error('local device list', devices);
      console.error('getUserMedia error', error);
      let { name } = error;
      if (name == 'NotFoundError') {
        // 没有摄像头，再试一次只获取麦克风的情况
        LOCAL_STREAM = await navigator.mediaDevices.getUserMedia(audioStreamConfig);
        this.attachStream();
      } else {
        this.dom.setAttribute('camera-status', 'allow-error');
      }
    }
  }
  // remote method
  getDom() {
    return this.dom;
  }
  attachStream(stream) {
    try {
      //  贴上视频流
      let videoDom = this.dom.querySelector('video');
      videoDom.srcObject = stream;
      videoDom.parentElement.removeAttribute('waiting');
    } catch (error) {
      console.error('getUserMedia error', error);
      this.dom.setAttribute('camera-status', 'allow-error');
    } finally {
      if (this.dom.classList.contains('remote')) {
        VERA_EMITTER.emit('remote.stream.ready');
      } else {
        VERA_EMITTER.emit('local.stream.ready');
      }
    }
  }
}
export default Camera;

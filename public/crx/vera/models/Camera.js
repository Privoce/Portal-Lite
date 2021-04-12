import { fullStreamConfig, audioStreamConfig } from './config.js';
import Username from './Username.js';
import Loading from './Loading.js';
import { toggleCameraControl } from './utils.js';
const tipVideo = chrome.i18n.getMessage('tipDisableVideo');
const tipAudio = chrome.i18n.getMessage('tipDisableAudio');
const tipRemoveBg = chrome.i18n.getMessage('tipRemoveBg');
const tipProcessing = chrome.i18n.getMessage('tipProcessing');
const tipPin = chrome.i18n.getMessage('tipPin');

class Camera {
  constructor({ remote = false, peerId = null }) {
    this.dom = document.createElement('div');
    this.dom.setAttribute('peer-id', peerId);
    this.dom.classList.add('camera');
    this.dom.classList.add(remote ? 'remote' : 'local');
    this.dom.innerHTML = `
    <div class='processing'>${tipProcessing}</div>
    <div class='video' video='true' bg='true' audio='true' waiting='true'>
      <div class='mask user'></div>

      <div class='opts'>
        <button class='opt bg' control='bg' title='${tipRemoveBg}'></button>
        <button class='opt video' control='video' title='${tipVideo}'></button>
        <button class='opt audio' control='audio' title='${tipAudio}'></button>
        <button class='opt pin' control='pin' title='${tipPin}'></button>
      </div>
      <video playsinline autoplay ${remote ? '' : "muted='muted'"} ></video>
      <canvas class='render' width=200 height=200 ></canvas>
      <canvas class='side' width=200 height=200 ></canvas>
      <div class='mask error'>Camera Error</div>
      <div class='mask waiting'></div>
    </div>
      `;
    this.initLoading();
    this.initControls(remote);
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
    let un = new Username({ myself: !remote });
    this.dom.querySelector('.video').appendChild(un);
  }
  initControls(remote = false) {
    // 对方的camera只让Pin
    let controls = remote
      ? ['pin']
      : [...this.dom.querySelectorAll('.opts .opt')].map((opt) => opt.getAttribute('control'));
    this.dom.addEventListener(
      'click',
      ({ target }) => {
        console.log('clicked', { target });
        let control = target.getAttribute('control');
        if (controls.includes(control)) {
          toggleCameraControl(control, this.dom);
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

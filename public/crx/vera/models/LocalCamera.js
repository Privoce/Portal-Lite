import { fullStreamConfig, audioStreamConfig, videoStreamConfig } from './config.js';
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
    videoEle.requestPictureInPicture().catch((error) => {
      // Error handling
      console.log('pip error', error);
    });
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
      t.enabled = !t.enabled;
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
  // if (isHost) {
  // 给现存链接 依次发消息
  let cmd = { type: isTrue ? map[control].off : map[control].on };
  console.log('send cmd to remote camera', cmd);
  Object.entries(PEER_DATA_CONNS).forEach(([pid, conn]) => {
    console.log('send to peer', pid);
    conn.send(cmd);
  });
  // }
};
class LocalCamera {
  constructor({ localId = null }) {
    this.dom = document.createElement('div');
    this.dom.setAttribute('peer-id', localId);
    this.dom.classList.add('camera');
    this.dom.classList.add('local');
    this.dom.innerHTML = `
    <div class='processing'>processing</div>
    <div class='video' video='true' bg='true' audio='true'>
      <div class='mask user'></div>

      <div class='opts'>
        <button class='opt bg' control='bg' title='clear background'></button>
        <button class='opt video' control='video' title='video'></button>
        <button class='opt audio' control='audio' title='audio'></button>
        <button class='opt pin' control='pin' title='pin'></button>
      </div>
      <video playsinline autoplay muted='muted' ></video>
      <canvas class='render' width=200 height=200 ></canvas>
      <canvas class='side' width=200 height=200 ></canvas>
      <div class='mask error'>Camera Error</div>
      </div>
      `;
    // <div class="cover_opts" />
    this.initControls();
    this.init();
    return this.dom;
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
  async init() {
    //  贴上本地视频
    try {
      // 一次性获取两个授权
      let devices = await navigator.mediaDevices.enumerateDevices();
      let hasVideoCam = devices.some((d) => {
        return d.kind == 'videoinput';
      });
      // 仅是为了提前拿到授权
      await navigator.mediaDevices.getUserMedia(hasVideoCam ? fullStreamConfig : audioStreamConfig);
      LOCAL_STREAM = await navigator.mediaDevices.getUserMedia(
        hasVideoCam ? videoStreamConfig : audioStreamConfig
      );
      let videoDom = this.dom.querySelector('video');
      // videoDom.parentElement.removeAttribute('audio');
      // let cloneStream = LOCAL_STREAM.clone();
      // 禁用本地音频
      // LOCAL_STREAM.getAudioTracks().forEach((t) => {
      //   t.enabled = false;
      // });
      videoDom.srcObject = LOCAL_STREAM;
    } catch (error) {
      console.error('getUserMedia error', error);
      this.dom.setAttribute('camera-status', 'allow-error');
    }
  }
}
export default LocalCamera;

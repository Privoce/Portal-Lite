import { bgRemove, bgRestore } from './utils.js';
const handleControl = async (control, btn, root) => {
  let videoEle = btn.parentElement.nextElementSibling;
  let videoContainer = videoEle.parentElement;
  let isTrue;
  if (control == 'bg') {
    // 如果视频被禁用了，就地返回
    let disabled = videoEle.srcObject.getVideoTracks().some((t) => t.enabled == false);
    if (disabled) return;
  }
  if (['bg', 'pin'].includes(control)) {
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
  // 去背景
  if (control == 'bg') {
    if (isTrue) {
      await bgRemove(root);
    } else {
      bgRestore(root);
    }
  }
};
class RemoteCamera {
  constructor(peerId) {
    this.dom = document.createElement('div');
    this.dom.setAttribute('peer-id', peerId);
    this.dom.classList.add('camera');
    this.dom.classList.add('remote');
    this.dom.innerHTML = `
    <div class='processing'>processing</div>
    <div class='video' video='true' bg='true' audio='true'>
      <div class='mask user'></div>

      <div class='opts'>
        <button class='opt bg' control='bg' title='clear background'></button>
        <button class='opt pin' control='pin' title='pin'></button>
      </div>
      <video playsinline autoplay ></video>
      <canvas class='render' width=200 height=200 ></canvas>
      <canvas class='side' width=200 height=200 ></canvas>
      <div class='mask error'>Camera Error</div>
      </div>
      `;
    // <div class="cover_opts" />
    this.initControls();
    // this.init(stream);
    // return this.dom;
  }
  getDom() {
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
  attachStream(stream) {
    try {
      //  贴上远程视频流
      let videoDom = this.dom.querySelector('video');
      // videoDom.setAttribute('muted', 'muted');
      videoDom.srcObject = stream;
    } catch (error) {
      console.error('getUserMedia error', error);
      this.dom.setAttribute('camera-status', 'allow-error');
    }
  }
}
export default RemoteCamera;

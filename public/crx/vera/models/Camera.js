import { localStreamConfig, remoteStreamConfig } from './config.js';

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
const bgRemove = (videoEle, canvasEle) => {
  bodyPix
    .load({
      architecture: 'MobileNetV1',
      outputStride: 16,
      multiplier: 0.75,
      quantBytes: 2
    })
    .catch((error) => {
      console.log(error);
    })
    .then((objNet) => {
      {
        detectBody(objNet, videoEle, canvasEle);
      }
    });
};
const detectBody = (net, videoEle, canvasEle) => {
  console.log({ videoEle, canvasEle });
  net
    .segmentPerson(videoEle, {
      flipHorizontal: true,
      internalResolution: 'low',
      segmentationThreshold: 0.3
    })
    .catch((err) => {
      console.log(err);
    })
    .then((personsegmentation) => {
      drawBody(personsegmentation, videoEle, canvasEle);
    });
  requestAnimationFrame(detectBody.bind(null, net, videoEle, canvasEle));
};
const drawBody = (personSegmentation, videoEle, canvasEle) => {
  canvasEle.getContext('2d').drawImage(videoEle, 0, 0, 200, 200);
  var imageData = canvasEle.getContext('2d').getImageData(0, 0, 200, 200);
  var pixel = imageData.data;
  for (var p = 0; p < pixel.length; p += 4) {
    if (personSegmentation.data[p / 4] == 0) {
      pixel[p + 3] = 0;
    }
  }

  canvasEle.getContext('2d').imageSmoothingEnabled = true;
  canvasEle.getContext('2d').putImageData(imageData, 0, 0);
};
class Camera {
  constructor({ host = false, inviteId = null, localId = null }) {
    this.dom = document.createElement('div');
    this.dom.classList.add('camera');
    this.dom.innerHTML = `
    <div class='video'>
      <video playsinline autoplay />
      <canvas class='mask' width=200 height=200 />
    </div>
    <div class='controls'>
      <button class='control pip'>PiP</button>
      <button class='control remove_bg'>Remove Bg</button>
    </div>
    `;
    this.initPip();
    this.initBgRemoving();
    if (host) {
      this.initHostCamera();
    } else {
      this.initRemoteCamera({ inviteId, localId });
    }

    return this.dom;
  }
  initPip() {
    let pipBtn = this.dom.querySelector('.control.pip');
    pipBtn.addEventListener('click', () => {
      let videoDom = this.dom.querySelector('video');
      console.log('pip', videoDom);
      videoDom.requestPictureInPicture().catch((error) => {
        // Error handling
        console.log('pip error', error);
      });
    });
  }
  initBgRemoving() {
    console.log('暂不可用');
    // let bgRemoveBtn = this.dom.querySelector('.control.remove_bg');
    // bgRemoveBtn.addEventListener('click', () => {
    //   let videoDom = this.dom.querySelector('video');
    //   let canvasDom = this.dom.querySelector('.mask');
    //   console.log('bg remove', videoDom, canvasDom);
    //   bgRemove(videoDom, canvasDom);
    // });
  }
  initHostCamera() {
    this.dom.classList.add('host');
    //  贴上本地视频
    let videoDom = this.dom.querySelector('video');
    videoDom.setAttribute('muted', true);
    navigator.mediaDevices
      .getUserMedia(localStreamConfig)
      .then((stream) => {
        videoDom.srcObject = stream;
      })
      .catch((err) => {
        console.error('Failed to get local stream', err);
      });
    // incoming voice/video connection
    window.MyPeer.on('call', (call) => {
      console.log('called from remote');
      navigator.mediaDevices
        .getUserMedia(remoteStreamConfig)
        .then((stream) => {
          call.answer(stream); // Answer the call with an A/V stream.
          call.on('stream', (s) => {
            let remoteVideoContainer = this.dom.nextElementSibling;
            let videoEle = remoteVideoContainer.querySelector('video');
            console.log('attach stream', videoEle);
            videoEle.srcObject = s;
            remoteVideoContainer.setAttribute('camera-status', 'connected');
            this.dom.setAttribute('camera-status', 'connected');
          });
        })
        .catch((err) => {
          console.error('Failed to get local stream', err);
        });
    });
  }
  initRemoteCamera({ inviteId, localId }) {
    console.log('detected inviteId', inviteId);
    let prevHtml = this.dom.innerHTML;
    this.dom.innerHTML = `${prevHtml}
    ${
      inviteId
        ? `<button class='btn join'>Join</button>`
        : `<button class="btn copy">Copy Invite Link</button>`
    }`;
    this.dom.classList.add('remote');

    if (!inviteId) {
      // 邀请按钮的点击事件
      let inviteBtn = this.dom.querySelector('.btn.copy');
      inviteBtn.addEventListener('click', () => {
        console.log('copy link');
        let obj = new URL(location.href);
        obj.searchParams.append('portal-vera-id', localId);
        console.log(obj.href);
        copyToClipboard(`http://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}`);
      });
    } else {
      // 响应加入按钮的事件
      let joinBtn = this.dom.querySelector('.btn.join');
      joinBtn.addEventListener('click', () => {
        // create audio and video constraints
        navigator.mediaDevices
          .getUserMedia(remoteStreamConfig)
          .then((stream) => {
            console.log('join event peer called');
            let call = window.MyPeer.call(inviteId, stream);
            call.on('stream', (st) => {
              let remoteVideo = this.dom.querySelector('video');
              remoteVideo.srcObject = st;
              this.dom.setAttribute('camera-status', 'connected');
              this.dom.previousElementSibling.setAttribute('camera-status', 'connected');
              // console.log('connect from remote camrea', inviteId);
              // window.MyPeer.connect(inviteId);
            });
          })
          .catch((err) => {
            console.log('join event peer called,error');
            console.error('Failed to get local stream', err);
          });
      });
    }
  }
}
export default Camera;

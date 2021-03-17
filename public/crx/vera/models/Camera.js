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
const bgRemove = async (videoContainer) => {
  videoContainer.setAttribute('bg-rm-status', 'processing');
  let video = videoContainer.querySelector('video');
  let canvas = videoContainer.querySelector('.render');
  let offCanvas = videoContainer.querySelector('.side');
  const net = await bodyPix.load({
    architecture: 'MobileNetV1',
    outputStride: 16,
    multiplier: 0.75,
    quantBytes: 2
  });
  videoContainer.setAttribute('bg-rm-status', 'ready');
  console.log({ video, canvas, offCanvas });
  draw({ video, canvas, offCanvas, net });
};
const draw = async ({ video, canvas, offCanvas, net }) => {
  let ctx = canvas.getContext('2d');
  let offCtx = offCanvas.getContext('2d');
  offCtx.drawImage(video, 0, 0);
  const res = await net.segmentPerson(offCanvas);
  // document.getElementById('i').style.display = 'none';
  tf.tidy(() => {
    const maskTensor = tf.tensor3d(res.data, [200, 200, 1]);
    const imageTensor = tf.browser.fromPixels(offCanvas);
    const t1 = tf.mul(imageTensor, maskTensor);
    const t2 = tf.concat([t1, tf.mul(maskTensor, 255)], 2);
    t2.data().then((rawData) => {
      const rawImageData = new ImageData(new Uint8ClampedArray(rawData), 200, 200);
      ctx.putImageData(rawImageData, 0, 0);
      ctx.scale(-1, 1);
      ctx.translate(-canvas.width, 0);
    });
  });

  requestAnimationFrame(draw.bind(this, { video, canvas, offCanvas, net }));
};
class Camera {
  constructor({ host = false, inviteId = null, localId = null }) {
    this.dom = document.createElement('div');
    this.dom.classList.add('camera');
    this.dom.innerHTML = `
    <div class='processing'>processing</div>
    <div class='video'>
      <div class='opts'>
        <button class='opt mute'>Mute</button>
        <button class='opt pin'>Pin</button>
      </div>
      <video playsinline autoplay ></video>
      <canvas class='render' width=200 height=200 ></canvas>
      <canvas class='side' width=200 height=200 ></canvas>
    </div>
    <div class='controls'>
      <button class='control remove_bg'>Remove Bg</button>
    </div>
    `;
    // <button class='control pip'>Pin</button>
    this.initOpts();
    this.initBgRemoving();
    if (host) {
      this.initHostCamera();
    } else {
      this.initRemoteCamera({ inviteId, localId });
    }

    return this.dom;
  }
  initOpts() {
    // let pipBtn = this.dom.querySelector('.control.pip');
    // console.log('init pip click', pipBtn);
    this.dom.addEventListener(
      'click',
      ({ target }) => {
        console.log('click remote', { target });

        if (target.classList.contains('pin')) {
          let videoEle = target.parentElement.nextElementSibling;
          if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
          }
          videoEle.requestPictureInPicture().catch((error) => {
            // Error handling
            console.log('pip error', error);
          });
        }
        if (target.classList.contains('mute')) {
          let videoEle = target.parentElement.nextElementSibling;
          if (videoEle.getAttribute('muted') == 'true') {
            videoEle.removeAttribute('muted');
            target.innerHTML = 'Mute';
          } else {
            videoEle.setAttribute('muted', true);
            target.innerHTML = 'Unmute';
          }
        }
      },
      true
    );
  }
  initBgRemoving() {
    this.dom.addEventListener(
      'click',
      ({ target }) => {
        console.log('click remote', { target });

        if (target.classList.contains('remove_bg')) {
          bgRemove(this.dom);
        }
      },
      true
    );
  }
  initHostCamera() {
    this.dom.classList.add('host');
    //  贴上本地视频
    let videoDom = this.dom.querySelector('video');
    videoDom.setAttribute('muted', true);
    navigator.mediaDevices
      .getUserMedia(localStreamConfig)
      .then((stream) => {
        VERA_STREAMS.push(stream);
        videoDom.srcObject = stream;
        // window.LOCAL_STREAM = stream;
      })
      .catch((err) => {
        console.error('Failed to get local stream', err);
      });
    // incoming voice/video connection
    window.MyPeer.on('call', async (call) => {
      console.log('called from remote');
      try {
        let stream = await navigator.mediaDevices.getUserMedia(remoteStreamConfig);
        VERA_STREAMS.push(stream);
        call.answer(stream); // Answer the call with an A/V stream.
        // window.LOCAL_STREAM = stream;
        call.on('stream', (s) => {
          VERA_STREAMS.push(s);
          let remoteVideoContainer = this.dom.nextElementSibling;
          let videoEle = remoteVideoContainer.querySelector('video');
          console.log('attach stream', videoEle);
          videoEle.srcObject = s;
          remoteVideoContainer.setAttribute('camera-status', 'connected');
          this.dom.setAttribute('camera-status', 'connected');
        });
        call.on('close', () => {
          console.log('call close');
        });
      } catch (error) {
        console.error('Failed to get local stream', error);
      }
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
      joinBtn.addEventListener('click', async () => {
        // create audio and video constraints
        try {
        } catch (error) {
          console.log('join event peer called,error');
          console.error('Failed to get local stream', error);
        }
        let stream = await navigator.mediaDevices.getUserMedia(remoteStreamConfig);
        VERA_STREAMS.push(stream);
        console.log('join event peer called');
        let call = window.MyPeer.call(inviteId, stream);
        call.on('stream', (st) => {
          VERA_STREAMS.push(st);
          let remoteVideo = this.dom.querySelector('video');
          remoteVideo.srcObject = st;
          this.dom.setAttribute('camera-status', 'connected');
          this.dom.previousElementSibling.setAttribute('camera-status', 'connected');
          // console.log('connect from remote camrea', inviteId);
          // window.MyPeer.connect(inviteId);
        });
        call.on('close', () => {
          console.log('call close');
        });
      });
    }
  }
}
export default Camera;

import { userKey } from './config.js';
const selectText = (node) => {
  // node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn('Could not select text in node: Unsupported browser.');
  }
};
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
  let isHost = videoContainer.classList.contains('local');
  if (isHost) {
    window.VERA_LOCAL_RM_BG = true;
  } else {
    window.VERA_REMOTE_RM_BG = true;
  }
  draw({ key: isHost ? 'local' : 'remote', video, canvas, offCanvas, net });
  console.log({ video, canvas, offCanvas });
};
const bgRestore = (container) => {
  if (container.classList.contains('local')) {
    window.VERA_LOCAL_RM_BG = false;
  } else {
    window.VERA_REMOTE_RM_BG = false;
  }
  container.setAttribute('bg-rm-status', 'restore');
};
const draw = async ({ key = 'local', video, canvas, offCanvas, net }) => {
  let keyMap = {
    local: 'VERA_LOCAL_RM_BG',
    remote: 'VERA_REMOTE_RM_BG'
  };
  if (!window[keyMap[key]]) {
    return;
  }
  let ctx = canvas.getContext('2d');
  console.log('start draw');
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
  requestAnimationFrame(draw.bind(this, { key, video, canvas, offCanvas, net }));
};
function getUsername() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['user'], function (result) {
      if (result.user) {
        // resolve(result.user.username);
        let tmp = result.user.username;
        // 赋值全局变量
        window.LOCAL_USERNAME = tmp;
        resolve(tmp);
      } else {
        resolve(null);
      }
    });
  });
}
async function appendHistory({ peerId, isHost }) {
  if (!PORTAL_USER_NAME) return;
  let urlUsername = new URLSearchParams(location.search).get(userKey) || '';
  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content
    },
    body: JSON.stringify({
      title: document.title,
      url: location.href,
      timestamp: new Date().getTime(),
      peerId,
      host: isHost ? PORTAL_USER_NAME : urlUsername,
      username: PORTAL_USER_NAME,
      participants: [...Object.values(USERNAMES)]
    }) // We send data in JSON format
  };
  let data = {
    code: -1
  };
  try {
    // let resp = await fetch(`http://localhost:3008/service/authing/Tristan/udf/vera`, putMethod);
    let resp = await fetch(
      `https://api.yangerxiao.com/service/authing/${encodeURIComponent(PORTAL_USER_NAME)}/udf/vera`,
      putMethod
    );
    data = await resp.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}
const toggleCameraControl = async (control, root) => {
  let videoContainer = root.querySelector('.video');
  let videoEle = videoContainer.querySelector('video');
  let isLocal = root.classList.contains('local');
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

  if (control == 'pin') {
    // pin
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
  if (isLocal) {
    // 如果是本地camera给现存连接列表 依次发消息
    let cmd = { type: isTrue ? map[control].off : map[control].on };
    console.log('send cmd to remote camera', cmd);
    Object.entries(PEER_DATA_CONNS).forEach(([pid, conn]) => {
      console.log('send to peer', pid);
      conn.send(cmd);
    });
  }
};

export {
  getUsername,
  appendHistory,
  copyToClipboard,
  selectText,
  bgRestore,
  bgRemove,
  toggleCameraControl
};

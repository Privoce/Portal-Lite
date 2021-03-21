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
  let isHost = videoContainer.classList.contains('host');
  if (isHost) {
    window.VERA_HOST_RM_BG = true;
    window.PEER_DATA_CONN?.send({ type: 'RM_BG' });
  } else {
    window.VERA_REMOTE_RM_BG = true;
  }
  draw({ key: isHost ? 'host' : 'remote', video, canvas, offCanvas, net });
  console.log({ video, canvas, offCanvas });
};
const bgRestore = (container) => {
  if (container.classList.contains('host')) {
    window.VERA_HOST_RM_BG = false;
    window.PEER_DATA_CONN?.send({ type: 'RS_BG' });
  } else {
    window.VERA_REMOTE_RM_BG = false;
  }
  container.setAttribute('bg-rm-status', 'restore');
};
const draw = async ({ key = 'host', video, canvas, offCanvas, net }) => {
  let keyMap = {
    host: 'VERA_HOST_RM_BG',
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
// 拖拽事件处理
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
  let dm = document.getElementById('PORTAL_VERA_PANEL');
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
export { copyToClipboard, selectText, bgRestore, bgRemove, drag_over, drag_start, drop };

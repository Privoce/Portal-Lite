import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &.side {
      display: none;
    }
  }
  .tip {
    text-transform: capitalize;
    padding: 1em;
    border-radius: 0.5em;
    background-color: var(--camera-bg-color);
    font-size: 2.2em;
    color: var(--font-color);
  }
`;
let STOP = false;
const draw = async ({ video, canvas, offCanvas, net }) => {
  if (STOP) return;
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
  requestAnimationFrame(draw.bind(this, { video, canvas, offCanvas, net }));
};
const bgRemove = async (videoEle, canvas, offCanvas) => {
  const net = await bodyPix.load({
    architecture: 'MobileNetV1',
    outputStride: 16,
    multiplier: 0.75,
    quantBytes: 2
  });
  draw({ video: videoEle, canvas, offCanvas, net });
};
export default function BgRemoveMask({ video }) {
  const [processing, setProcessing] = useState(true);
  const renderRef = useRef(null);
  const side = useRef(null);
  useEffect(() => {
    const startProcess = async () => {
      await bgRemove(video, renderRef.current, side.current);
      setProcessing(false);
    };
    if (video) {
      console.log('start processing');
      STOP = false;
      startProcess();
    }
    return () => {
      console.log('bg remove off');
      STOP = true;
    };
  }, [video]);
  return (
    <StyledWrapper>
      <canvas ref={side} className="side" width="200" height="200"></canvas>
      <canvas ref={renderRef} className="render" width="200" height="200"></canvas>
      {processing && <div className="tip">processing</div>}
    </StyledWrapper>
  );
}

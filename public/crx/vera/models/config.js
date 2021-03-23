const videoStreamConfig = {
  video: {
    facingMode: 'user',
    width: { min: 200, ideal: 200, max: 720 },
    height: { min: 200, ideal: 200, max: 720 }
  },
  audio: false
};
const audioStreamConfig = {
  video: false,
  audio: true
};
const fullStreamConfig = {
  video: {
    facingMode: 'user',
    width: { min: 200, ideal: 200, max: 720 },
    height: { min: 200, ideal: 200, max: 720 }
  },
  audio: true
};
// const ExtFlag = 'portal-ext';
export { audioStreamConfig, videoStreamConfig, fullStreamConfig };

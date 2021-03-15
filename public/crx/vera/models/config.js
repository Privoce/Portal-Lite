const localStreamConfig = {
  video: {
    width: { min: 160, ideal: 320, max: 640 },
    height: { min: 120, ideal: 240, max: 480 }
  },
  audio: false
};
const remoteStreamConfig = {
  video: {
    width: { min: 160, ideal: 320, max: 640 },
    height: { min: 120, ideal: 240, max: 480 }
  },
  audio: true
};
// const ExtFlag = 'portal-ext';
export { localStreamConfig, remoteStreamConfig };

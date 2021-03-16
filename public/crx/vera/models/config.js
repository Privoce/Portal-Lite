const localStreamConfig = {
  video: {
    width: { min: 200, ideal: 200, max: 720 },
    height: { min: 200, ideal: 200, max: 720 }
  },
  audio: false
};
const remoteStreamConfig = {
  video: {
    width: { min: 200, ideal: 200, max: 720 },
    height: { min: 200, ideal: 200, max: 720 }
  },
  audio: true
};
// const ExtFlag = 'portal-ext';
export { localStreamConfig, remoteStreamConfig };

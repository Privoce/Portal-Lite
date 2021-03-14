class Camera {
  constructor(host = false) {
    this.host = host;
    this.dom = document.createElement('div');
    this.dom.classList.add('camera');
    this.dom.innerHTML = `<div class='video'><video playsinline autoplay/></div>`;
    if (host) {
      this.dom.classList.add('host');
      let videoDom = this.dom.querySelector('video');
      navigator.mediaDevices
        .getUserMedia({
          video: {
            width: 720,
            height: 720
          },
          audio: true
        })
        .then((stream) => {
          videoDom.srcObject = stream;
          this.initPeer();
        })
        .catch((err) => {
          console.error('Failed to get local stream', err);
        });
    } else {
      this.dom.classList.add('remote');
    }

    return this.dom;
  }
  initPeer() {
    // incoming voice/video connection
    window.MyPeer.on('call', (call) => {
      console.log('called from remote');
      navigator.mediaDevices
        .getUserMedia({
          video: {
            width: 720,
            height: 720
          },
          audio: true
        })
        .then((stream) => {
          call.answer(stream); // Answer the call with an A/V stream.
          call.on('stream', (s) => {
            console.log('attach stream');
            this.dom.nextElementSibling.querySelector('video').srcObject = s;
          });
        })
        .catch((err) => {
          console.error('Failed to get local stream', err);
        });
    });
  }
  // init() {
  //   let videoWrapper = document.createElement('div');
  //   // videoWrapper

  //   return this.dom;
  // }
}
export default Camera;

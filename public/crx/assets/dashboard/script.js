// var camerastream,
//   micstream,
//   audioCtx,
//   destination,
//   micsource,
//   constraints,
//   facingMode = 'user',
//   cameradevices = [],
//   audiodevices = [],
//   mediaRecorder = '',
//   output = new MediaStream(),
//   cancel = !1,
//   recording = !1,
//   newwindow = null,
//   htmlinject =
//     "<video id='injected-video' style='height:100%;position:absolute;transform:translateX(-50%);left:50%;right:0;top:0;bottom:0;background-color:#3f4049' playsinline autoplay muted></video>";
// document.body.innerHTML += htmlinject;
// var video = document.getElementById('injected-video');
// function startStreaming(e) {
//   (camerastream = e),
//     navigator.mediaDevices.enumerateDevices().then(function (e) {
//       e.forEach(function (e) {
//         'videoinput' == e.kind
//           ? cameradevices.push({
//               label: e.label,
//               id: e.deviceId
//             })
//           : 'audioinput' == e.kind &&
//             audiodevices.push({
//               label: e.label,
//               id: e.deviceId
//             });
//       }),
//         chrome.runtime.sendMessage({
//           type: 'camera-list',
//           devices: cameradevices,
//           audio: audiodevices
//         });
//     }),
//     chrome.runtime.sendMessage({
//       type: 'loaded'
//     });
// }
// function streamingError(e) {
//   chrome.runtime.sendMessage({
//     type: 'loaded'
//   }),
//     chrome.runtime.sendMessage({
//       type: 'no-camera-access'
//     });
// }
// function startRecording() {
//   (recording = !0),
//     (audioCtx = new AudioContext()),
//     (destination = audioCtx.createMediaStreamDestination()),
//     navigator.mediaDevices
//       .getUserMedia({
//         audio: !0
//       })
//       .then(function (e) {
//         chrome.browserAction.setIcon({
//           path: '../assets/extension-icons/logo-32-rec.png'
//         }),
//           (micstream = e),
//           (micsource = audioCtx.createMediaStreamSource(e)).connect(destination),
//           output.addTrack(destination.stream.getAudioTracks()[0]),
//           output.addTrack(camerastream.getVideoTracks()[0]),
//           (mediaRecorder = new MediaRecorder(output, {
//             videoBitsPerSecond: 25e5,
//             mimeType: 'video/webm;codecs=h264'
//           }));
//         var t = [];
//         (mediaRecorder.ondataavailable = (e) => {
//           e.data && e.data.size > 0 && t.push(e.data);
//         }),
//           (mediaRecorder.onstop = () => {
//             chrome.browserAction.setIcon({
//               path: '../assets/extension-icons/logo-32.png'
//             }),
//               chrome.runtime.sendMessage({
//                 type: 'end-camera-recording'
//               }),
//               (recording = !1),
//               cancel ||
//                 ((newwindow = window.open('../html/videoeditor.html', '_blank')).recordedBlobs = t),
//               camerastream.getTracks().forEach(function (e) {
//                 e.stop();
//               }),
//               micstream.getTracks().forEach(function (e) {
//                 e.stop();
//               });
//           }),
//           mediaRecorder.start();
//       });
// }
// function updateCamera(e) {
//   'disabled' != e
//     ? ((constraints = {
//         audio: !1,
//         video: {
//           deviceId: e
//         }
//       }),
//       navigator.mediaDevices.getUserMedia(constraints).then(function (e) {
//         document.getElementById('injected-video').srcObject = e;
//       }))
//     : ((constraints = {
//         audio: !1,
//         video: !0
//       }),
//       navigator.mediaDevices.getUserMedia(constraints).then(function (e) {
//         document.getElementById('injected-video').srcObject = e;
//       }));
// }
// function updateMic(e) {
//   micstream.getTracks().forEach(function (e) {
//     e.stop();
//   }),
//     navigator.mediaDevices
//       .getUserMedia({
//         audio: {
//           deviceId: e
//         }
//       })
//       .then(function (e) {
//         (micstream = e), (micsource = audioCtx.createMediaStreamSource(e)).connect(destination);
//       });
// }
// chrome.storage.sync.get(['flip'], function (e) {
//   e.flip &&
//     (document.getElementById('injected-video').style.transform = 'translateX(-50%) scaleX(-1)');
// }),
//   chrome.storage.sync.get(['camera'], function (e) {
//     0 != e.camera
//       ? (updateCamera(e.camera),
//         (constraints = {
//           audio: !1,
//           video: {
//             deviceId: e.camera,
//             width: 1920,
//             height: 1080
//           }
//         }))
//       : (constraints = {
//           audio: !1,
//           video: {
//             deviceId: e.camera,
//             width: 1920,
//             height: 1080
//           }
//         }),
//       navigator.mediaDevices.getUserMedia(constraints).then(startStreaming).catch(streamingError);
//   });
window.onload = () => {
  let btn = document.querySelector('#insert');
  btn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let [currTab] = tabs;
      currTabId = currTab.id;
      chrome.tabs.sendMessage(currTabId, { action: 'INSERT_CAMERA' });
    });
  });
};

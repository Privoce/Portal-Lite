import Invite from './Invite.js';
const createEvents = () => ({
  events: {},
  emit(event, ...args) {
    (this.events[event] || []).forEach((i) => i(...args));
  },
  on(event, cb) {
    (this.events[event] = this.events[event] || []).push(cb);
    return () => (this.events[event] = (this.events[event] || []).filter((i) => i !== cb));
  }
});

window.VERA_EMITTER = window.VERA_EMITTER || createEvents();
const tabCloseHanlder = (evt) => {
  evt.preventDefault();
  evt.returnValue = 'Vera is still in connectiong, ary you sure to quit?';
  // return 'Vera is still in connectiong, ary you sure to quit?';
};
VERA_EMITTER.on('panel.close', () => {
  let panel = document.querySelector('#PORTAL_VERA_PANEL');
  panel?.remove();
  MyPortalVeraPeer = null;
});
VERA_EMITTER.on('panel.initialized', () => {
  let panel = document.querySelector('#PORTAL_VERA_PANEL');
  let loadingDom = panel.querySelector('.panel > .loading');
  console.log({ loadingDom });
  loadingDom.remove();
});
VERA_EMITTER.on('connect.ready', () => {
  //  强提醒tab关闭
  console.log('add confirm before close');
  window.addEventListener('beforeunload', tabCloseHanlder);
});
VERA_EMITTER.on('local.stream.ready', () => {
  let panel = document.querySelector('#PORTAL_VERA_PANEL');
  let joinBtn = panel.querySelector('.join .btn');
  joinBtn?.removeAttribute('disabled');
});
VERA_EMITTER.on('remote.stream.ready', () => {
  let panel = document.querySelector('#PORTAL_VERA_PANEL');
  let inviteBox = panel.querySelector('.panel > .invite');
  // let joinBox = panel.querySelector('.panel > .join');
  inviteBox?.remove();
  // joinBox?.remove();
});
VERA_EMITTER.on('connect.close', () => {
  // const { isInvited } = data; data = { isInvited: false }
  // 注销页面关闭事件
  window.removeEventListener('beforeunload', tabCloseHanlder);
  // 如果有pin元素，退出
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
  let panel = document.querySelector('#PORTAL_VERA_PANEL .panel');
  let inviteBox = panel.querySelector('.invite');
  if (!inviteBox) {
    let remoteCamera = panel.querySelector('.camera.remote');
    if (remoteCamera) {
      remoteCamera.remove();
    }
    panel.appendChild(new Invite({ localId: MyPortalVeraPeer.id }));
  }
});
// export {
//   emitter:
// }

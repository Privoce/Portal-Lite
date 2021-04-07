import Invite from './Invite.js';
import Username from './Username.js';
import Join from './Join.js';
// import Panel from './Panel.js';
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
VERA_EMITTER.on('login', (params = {}) => {
  const { localId, inviteId, isHost = true, username } = params;
  PORTAL_USER_NAME = username;
  let panel = document.querySelector('#PORTAL_VERA_PANEL .panel');
  if (isHost) {
    // renew invite
    let oldInviteBox = panel.querySelector('.invite');
    oldInviteBox.remove();
    let newInviteBox = new Invite({ localId });
    panel.appendChild(newInviteBox);
  } else {
    // refresh join
    let oldJoinBox = panel.querySelector('.join');
    oldJoinBox.remove();
    let newJoinBox = new Join({ inviteId });
    panel.appendChild(newJoinBox);
  }
  // renew username
  let oldUsername = panel.querySelector('.username');
  oldUsername.remove();
  let un = new Username();
  panel.querySelector('.video').appendChild(un);
  console.log('new panel again');
});
VERA_EMITTER.on('panel.close', () => {
  // 去掉panel打开的标识
  document.documentElement.removeAttribute('invite-expand');
  let panel = document.querySelector('#PORTAL_VERA_PANEL');
  panel.querySelectorAll('video').forEach((v) => {
    const tracks = v.srcObject?.getTracks() || [];
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }
    v.srcObject = null;
  });
  // 停掉每一次的stream
  [LOCAL_STREAM, REMOTE_STREAM].forEach((st) => {
    const tracks = st?.getTracks() || [];
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }
  });

  Object.entries(PEER_DATA_CONNS).forEach(([pid, conn]) => {
    console.log('close the peer', pid);
    conn.close();
  });
  // 最后关闭panel

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
  let cursor = document.querySelector('#VERA_CURSOR');
  if (cursor) {
    cursor.remove();
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

import Widget from './models/Widget.js';
import Invite from './models/Invite.js';
// import Camera from './models/Camera.js';
// 初始化挂件
export function main() {
  const { pvid } = init();
  const widget = new Widget();
  const inviteHandler = () => {
    console.log('invite from main');
    let expand = document.documentElement.getAttribute('invite-expand');
    if (expand) return;
    new Invite(pvid);
    // const hostCamera = new Camera(true);
    // const gustCamera = new Camera();
    document.documentElement.setAttribute('invite-expand', 1);
  };
  widget.init(inviteHandler);
  console.log('Is chrome.runtime available here?', typeof chrome.runtime.sendMessage == 'function');
}
const init = () => {
  document.documentElement.setAttribute('ext-portal', 1);
  let pvid = new URLSearchParams(location.search).get('portal-vera-id');
  return { pvid };
};

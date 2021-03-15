import Widget from './models/Widget.js';
import Invite from './models/Invite.js';
// import Camera from './models/Camera.js';
// 初始化挂件
let inviteInserted = false;
export function main() {
  const { pvid } = init();
  const widget = new Widget();
  const inviteHandler = () => {
    console.log('invite from main');
    if (inviteInserted) return;
    new Invite(pvid);
    // const hostCamera = new Camera(true);
    // const gustCamera = new Camera();
    inviteInserted = true;
  };
  widget.init(inviteHandler);
  console.log('Is chrome.runtime available here?', typeof chrome.runtime.sendMessage == 'function');
}
const init = () => {
  document.documentElement.setAttribute('ext-portal', 1);
  let pvid = new URLSearchParams(location.search).get('portal-vera-id');
  return { pvid };
};

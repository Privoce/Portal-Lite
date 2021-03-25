import Widget from './models/Widget.js';
import Panel from './models/Panel.js';
import { peerKey, installCheckKey } from './models/config.js';
// import Camera from './models/Camera.js';
// 初始化挂件
export function main() {
  const { pvid } = init();
  const widget = new Widget(pvid);
  const inviteHandler = () => {
    console.log('portal vera id', pvid);
    let expand = document.documentElement.getAttribute('invite-expand');
    if (expand) return;
    new Panel(pvid);
    document.documentElement.setAttribute('invite-expand', 1);
  };
  widget.init(inviteHandler);
  // 受邀者 直接打开panel
  if (pvid) {
    inviteHandler();
  }
  console.log('Is chrome.runtime available here?', typeof chrome.runtime.sendMessage == 'function');
}
const init = () => {
  // localStorage.getItem()
  document.documentElement.setAttribute(installCheckKey, 1);
  let pvid = new URLSearchParams(location.search).get(peerKey) || null;
  return { pvid };
};

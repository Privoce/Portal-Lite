import Widget from './models/Widget.js';
import Panel from './models/Panel.js';
// import Camera from './models/Camera.js';
// 初始化挂件
export function main() {
  window.VERA_STREAMS = [];
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
  console.log('Is chrome.runtime available here?', typeof chrome.runtime.sendMessage == 'function');
}
const init = () => {
  document.documentElement.setAttribute('ext-portal', 1);
  let pvid = new URLSearchParams(location.search).get('portal-vera-id') || null;
  return { pvid };
};

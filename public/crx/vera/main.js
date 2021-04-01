import Widget from './models/Widget.js';
import Panel from './models/Panel.js';
import './models/events.js';
// 初始化挂件
export async function main() {
  const pvid = await getPvid();
  const widget = new Widget();
  const inviteHandler = (pvid = null) => {
    console.log('portal vera id', pvid);
    let expand = document.documentElement.getAttribute('invite-expand');
    if (expand) return;
    new Panel(pvid);
    document.documentElement.setAttribute('invite-expand', 1);
  };
  widget.init(inviteHandler);
  // 受邀者 直接打开panel
  if (pvid) {
    inviteHandler(pvid);
  }

  widget.show();
}
const getPvid = () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['pvid'], function (res) {
      // Notify that we saved.
      console.log('pvid from storage', res.pvid);
      if (res.pvid) {
        chrome.storage.sync.remove('pvid', () => {
          console.log('pvid removed');
        });
        resolve(res.pvid);
      } else {
        resolve(null);
      }
    });
  });
};

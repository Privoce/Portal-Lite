import Widget from './models/Widget.js';
import Panel from './models/Panel.js';
import './models/events.js';
// 初始化挂件
export async function main() {
  // const pvid = await getPvid();
  const widget = new Widget();
  const inviteHandler = (pvid = null) => {
    console.log('portal vera id', pvid);
    let expand = document.documentElement.getAttribute('invite-expand');
    if (expand) return;

    document.documentElement.setAttribute('invite-expand', 1);
    if (window.OPEN_VERA_PANEL) {
      window.TOGGLE_VERA_PANEL();
    }
  };
  widget.init(inviteHandler);

  widget.show();
}

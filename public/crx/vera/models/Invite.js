import { copyToClipboard, selectText } from './utils.js';
class Invite {
  constructor({ localId = null }) {
    let obj = new URL(location.href);
    obj.searchParams.append('portal-vera-id', localId);
    this.inviteUrl = `https://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}`;
    this.dom = document.createElement('div');
    this.dom.classList.add('invite');
    this.dom.innerHTML = `
          <button class="btn copy">Copy Invite Link</button>
          <div class='link' contenteditable>${this.inviteUrl}</div>
      `;
    // <div class="cover_opts" />
    this.init(localId);
    return this.dom;
  }
  init() {
    // 邀请按钮的点击事件
    let inviteBtn = this.dom.querySelector('.btn.copy');
    let linkBox = this.dom.querySelector('.invite .link');
    linkBox.addEventListener('click', (evt) => {
      selectText(evt.target);
    });
    inviteBtn.addEventListener('click', () => {
      copyToClipboard(this.inviteUrl);
    });
  }
}
export default Invite;

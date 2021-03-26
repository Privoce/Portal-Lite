import { copyToClipboard, selectText } from './utils.js';
import { peerKey, userKey } from './config.js';
class Invite {
  constructor({ localId = null }) {
    console.log({ localId });
    let obj = new URL(location.href);
    obj.searchParams.append(peerKey, localId);
    if (PORTAL_USER_NAME) {
      obj.searchParams.append(userKey, PORTAL_USER_NAME);
    }
    this.inviteUrl = `https://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}`;
    this.dom = document.createElement('div');
    this.dom.classList.add('invite');
    this.dom.innerHTML = `
    <div class='link' contenteditable>
      <span class='url'>
        ${this.inviteUrl}
      </span>
      <button class="btn copy">Copy Link</button>
    </div>
      `;
    // <div class="cover_opts" />
    this.init(localId);
    return this.dom;
  }
  init() {
    // 邀请按钮的点击事件
    let inviteBtn = this.dom.querySelector('.btn.copy');
    let linkBox = this.dom.querySelector('.invite .link .url');
    linkBox.addEventListener('click', (evt) => {
      selectText(evt.target);
    });
    inviteBtn.addEventListener('click', () => {
      copyToClipboard(this.inviteUrl);
    });
  }
}
export default Invite;

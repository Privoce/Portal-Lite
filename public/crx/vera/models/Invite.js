import { selectText, copyToClipboard } from './utils.js';
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
  async init() {
    // 邀请按钮的点击事件
    let inviteBtn = this.dom.querySelector('.btn.copy');
    let linkBox = this.dom.querySelector('.invite .link .url');
    linkBox.addEventListener('click', (evt) => {
      selectText(evt.target);
    });
    inviteBtn.addEventListener('click', () => {
      unlocker.enable();
      copyToClipboard(this.inviteUrl);
      unlocker.disable();
      inviteBtn.innerHTML = 'Copied!';
      setTimeout(() => {
        inviteBtn.innerHTML = 'Copy Link';
      }, 2000);
    });
    if (PORTAL_USER_NAME) {
      let userlist = null;
      try {
        // let resp = await fetch(`http://localhost:3008/service/authing/vera/Tristan/userlist`);
        let resp = await fetch(
          `https://api.yangerxiao.com/service/authing/vera/${encodeURIComponent(
            PORTAL_USER_NAME
          )}/userlist`
        );
        let { data = [] } = await resp.json();
        userlist = data;
      } catch (error) {
        console.log(error);
      }
      if (userlist && userlist.length) {
        let inviteLink = this.inviteUrl;
        let ul = document.createElement('ul');
        ul.classList.add('users');
        userlist.forEach((user) => {
          let { username, name, nickname, photo } = user;

          let li = document.createElement('li');
          li.classList.add('user');
          let avator = document.createElement('img');
          avator.classList.add('avator');
          avator.src = photo;
          let btn = document.createElement('button');
          btn.classList.add('btn');
          btn.innerText = 'Copy Link';
          btn.addEventListener('click', () => {
            copyToClipboard(inviteLink);
            btn.innerHTML = 'Copied!';
            setTimeout(() => {
              btn.innerHTML = 'Copy Link';
            }, 2000);
          });
          let un = document.createElement('span');
          un.classList.add('name');
          un.innerText = username || name || nickname;

          li.appendChild(avator);
          li.appendChild(un);
          li.appendChild(btn);
          ul.appendChild(li);
        });
        this.dom.appendChild(ul);
      }
      console.log({ userlist });
    }
  }
}
export default Invite;

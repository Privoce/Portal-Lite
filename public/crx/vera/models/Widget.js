class Widget {
  constructor() {
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_WIDGET';
    this.dom.innerHTML = `<div class="portal_logo"></div>`;
  }
  init(
    inviteHandler = () => {
      console.log('invite btn clicked');
    }
  ) {
    let btn = this.dom.querySelector('.portal_logo');
    btn.onclick = inviteHandler;

    document.body.appendChild(this.dom);
  }
}
export default Widget;

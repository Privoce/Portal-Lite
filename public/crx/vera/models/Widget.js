class Widget {
  constructor(pvid) {
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_WIDGET';
    if (pvid) {
      this.dom.classList.add('join');
    }
    this.dom.innerHTML = `<div class="portal_logo"></div>`;
  }
  init(
    inviteHandler = () => {
      console.log('invite btn clicked');
    }
  ) {
    this.dom.onclick = inviteHandler;

    document.body.appendChild(this.dom);
  }
}
export default Widget;

class Widget {
  constructor() {
    this.dom = document.createElement('aside');
    this.dom.id = 'PORTAL_VERA_WIDGET';
    this.dom.innerHTML = `<button class="btn"></button>`;
  }
  init(
    inviteHandler = () => {
      console.log('invite btn clicked');
    }
  ) {
    let btn = this.dom.querySelector('.btn');
    btn.onclick = inviteHandler;

    document.body.appendChild(this.dom);
  }
}
export default Widget;

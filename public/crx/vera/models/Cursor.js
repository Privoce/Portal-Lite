class Cursor {
  constructor(params = { conn: null, username: '' }) {
    const { conn, username } = params;
    this.dom = document.createElement('aside');
    this.dom.id = 'VERA_CURSOR';
    this.dom.classList.add('cursor');
    this.dom.innerHTML = `
      <div class="circle"></div>
      <div class="pointer"></div>
      ${username ? `<span class='name'>${username}</span>` : ''}
    `;
    this.dom.addEventListener('animationend', () => {
      this.dom.classList.remove('clicked');
    });
    if (conn) {
      conn.on('data', (cmd = {}) => {
        // console.log('cursor data', { cmd });
        const { type, data } = cmd;
        if (type == 'CURSOR') {
          const { click = false, pos = null, selection } = data;
          if (pos) {
            const { x, y } = pos;
            this.dom.style.transform = `translate3d(${x}px,${y}px,0)`;
          }
          if (click) {
            this.dom.classList.add('clicked');
          }
          if (selection) {
            console.log({ selection });
            rangy.deserializeSelection(selection);
          }
        }
      });
      document.addEventListener(
        'mousemove',
        (evt) => {
          // console.log({ evt });
          const { pageX, pageY, clientX, clientY, x, y } = evt;
          // const { x, y } = evt;
          const { scrollTop, scrollLeft } = document.scrollingElement;
          conn.send({
            type: 'CURSOR',
            data: { pos: { x: clientX + scrollLeft, y: clientY + scrollTop } }
          });
          // this.dom.style.left = `${x}px`;
          // this.dom.style.top = `${y}px`;
        },
        false
      );
      document.addEventListener(
        'mousedown',
        () => {
          conn.send({
            type: 'CURSOR',
            data: { click: true }
          });
          // this.dom.style.left = `${x}px`;
          // this.dom.style.top = `${y}px`;
        },
        false
      );
      document.addEventListener('mouseup', (evt) => {
        let selection = rangy.getSelection();
        if (selection) {
          selection = rangy.serializeSelection(selection, true);
          // let { startContainer, startOffset, endContainer, endOffset } = range;
          // selectRange = { startContainer, startOffset, endContainer, endOffset };
          conn.send({
            type: 'CURSOR',
            data: { selection }
          });
        }
      });
    }
    document.body.appendChild(this.dom);
    return this.dom;
  }
  remove() {
    this.dom.remove();
  }
}

export default Cursor;

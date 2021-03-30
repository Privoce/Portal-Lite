class Loading {
  constructor(params = { tip: 'Loading' }) {
    const { tip } = params;
    this.dom = document.createElement('div');
    this.dom.classList.add('loading');
    this.dom.innerHTML = `
      <svg viewBox="0 0 50 50" class="circle">
          <circle cx="25" cy="25" r="20" fill="none" class="path"></circle>
      </svg>
      <span class='txt'>${tip}</span>
    `;
    return this.dom;
  }
  remove() {
    this.dom.remove();
  }
}

export default Loading;

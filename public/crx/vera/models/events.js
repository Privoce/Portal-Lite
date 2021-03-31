const createEvents = () => ({
  events: {},
  emit(event, ...args) {
    (this.events[event] || []).forEach((i) => i(...args));
  },
  on(event, cb) {
    (this.events[event] = this.events[event] || []).push(cb);
    return () => (this.events[event] = (this.events[event] || []).filter((i) => i !== cb));
  }
});

window.VERA_EMITTER = window.VERA_EMITTER || createEvents();
VERA_EMITTER.on('local.stream.ready', () => {
  let panel = document.querySelector('#PORTAL_VERA_PANEL');
  let joinBtn = panel.querySelector('.join .btn');
  joinBtn?.removeAttribute('disabled');
});
// export {
//   emitter:
// }

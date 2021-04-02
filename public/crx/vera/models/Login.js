class Login {
  constructor(option = {}) {
    const { isHost = true, localId, inviteId } = option;
    this.dom = document.createElement('button');
    this.dom.innerHTML = 'Sign In';
    this.dom.classList.add('btn');
    this.dom.classList.add('login');
    this.dom.addEventListener(
      'click',
      () => {
        chrome.runtime.sendMessage({ action: 'LOGIN' }, function () {
          /* callback */
          console.log('send login message');
        });
      },
      false
    );
    // 监听
    chrome.runtime.onMessage.addListener((request) => {
      console.log({ request });
      if (request.user) {
        let { username } = request.user;
        VERA_EMITTER.emit('login', { isHost, localId, inviteId, username });
      }
    });
    return this.dom;
  }
}

export default Login;

const socket = io("wss://api.yangerxiao.com", {
  transports: ['websocket'],
  reconnectionAttempts: 8,
  upgrade: false
});

// should be event driven
// from /src/component/Vera/hooks/utils.js
function getUsername() {
    return new Promise((resolve) => {
      let arr = ['user', 'fakename'];
      chrome.storage.sync.get(arr, (result) => {
        let fake = typeof result.fakename !== 'undefined';
        let name = fake ? result.fakename : result.user?.username || '';
        resolve({ value: name, fake } || { value: null, fake: false });
      });
    });
}

socket.on("connect", async () => {
  // either with send()
  const {
    value,
    fake
  } = await getUsername();
  if (fake || !value) {
    socket.close();
    return;
  }
  // TODO[eric]: should use unique id from authing
  socket.emit('registerUser', {
    "username": value
  });
});

socket.on("message", (d) => {
  // either with send()
  window.currNotifyId = d;
});


socket.on('send:notify', (d) => {
    const notify = new Notification(d.title, {
        body: d.body
    });
    notify.onclick = () => {
        window.open(d.url)
    }
});

chrome.runtime.onMessage.addListener(async (request) => {
    const { value } = await getUsername();
    if (request.action === 'SEND_NOTIFY') {
        const url = new URL(request.url);
        socket.emit('notification', {
            to: request.finalName,
            title: url.hostname,
            body: `${value} invites you to vera`,
            url: request.url,
            from: value
          });          
    }
});

chrome.runtime.onMessage.addListener(async (request) => {
    const { value } = await getUsername();
    if (request.action === 'UPDATE_USER') {
        const url = new URL(request.url);
        socket.emit('registerUser', {
            username: value
        });          
    }
});

const selectText = (node) => {
  // node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn('Could not select text in node: Unsupported browser.');
  }
};
function getUsername(withFake = false) {
  return new Promise((resolve) => {
    let arr = withFake ? ['user', 'fakename'] : ['user'];
    chrome.storage.sync.get(arr, (result) => {
      let name = withFake ? result.user?.username || result.fakename : result.user?.username;
      resolve(name);
    });
  });
}
async function appendVeraHistory({ peerId, isHost, usernames }) {
  let un = await getUsername();
  if (!un) return;
  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8' // Indicates the content
    },
    body: JSON.stringify({
      title: document.title,
      url: location.href,
      timestamp: new Date().getTime(),
      peerId,
      host: isHost ? un : '',
      username: un,
      participants: Object.values(usernames)
    }) // We send data in JSON format
  };
  let data = {
    code: -1
  };
  try {
    // let resp = await fetch(`http://localhost:3008/service/authing/Tristan/udf/vera`, putMethod);
    let resp = await fetch(
      `https://api.yangerxiao.com/service/authing/${encodeURIComponent(un)}/udf/vera`,
      putMethod
    );
    data = await resp.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}
const preventCloseTabHandler = (evt) => {
  evt.preventDefault();
  evt.returnValue = 'Vera is still in connectiong, ary you sure to quit?';
  // return 'Vera is still in connectiong, ary you sure to quit?';
};

function throttle(fn, interval = 200) {
  // 维护上次执行的时间
  let last = 0;
  let inter = 0;
  return function () {
    const context = this;
    const args = arguments;
    const now = Date.now();
    // 根据当前时间和上次执行时间的差值判断是否频繁
    if (now - last >= interval) {
      last = now;
      clearTimeout(inter);
      fn.apply(context, args);
    } else {
      setTimeout(() => {
        fn.apply(context, args);
      }, interval);
    }
  };
}

export { throttle, selectText, getUsername, appendVeraHistory, preventCloseTabHandler };

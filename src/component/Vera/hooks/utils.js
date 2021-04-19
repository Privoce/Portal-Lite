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

export { getUsername, appendVeraHistory, preventCloseTabHandler };

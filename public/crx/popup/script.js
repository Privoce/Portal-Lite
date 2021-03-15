let box = document.querySelector('.box');
let btn = box.querySelector('.btn');
let permissionURL = null;
let currTabId = null;
window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let [currTab] = tabs;
    currTabId = currTab.id;
    let url = new URL(currTab.url);
    let { host, protocol } = url;
    permissionURL = `${protocol}//${host}/*`;

    chrome.permissions.contains(
      {
        origins: [permissionURL]
      },
      async (hasPermission) => {
        if (hasPermission) {
          box.classList.add('allowed');
          // await registerScripts();
          btn.innerText = `Start Vemos !!!`;
        } else {
          btn.innerText = `Allow Vemos to run on ${host}`;
        }
      }
    );
  });
});
btn.addEventListener('click', async () => {
  if (box.classList.contains('allowed')) {
    // start vera
    chrome.tabs.sendMessage(currTabId, { action: 'DASHBOARD_SHOW' });
    // alert('start!');
  } else {
    requestPermissions();
  }
});

// async function executeScripts() {
//   // await chrome.tabs.executeScript({ file: 'url.js' });
//   await chrome.tabs.executeScript({ file: 'crx/content.js' });
//   await chrome.tabs.insertCSS({ file: 'crx/assets/vera.css' });
// }
// 请求当前网址的权限
function requestPermissions() {
  chrome.permissions.request(
    {
      origins: [permissionURL]
    },
    async (granted) => {
      if (granted) {
        console.log('Permission given');
        await registerScripts(permissionURL);
        box.classList.add('allowed');
      } else {
        console.log('Permission refused');
      }
    }
  );
}
// 注册内容脚本
// async function registerScripts() {
//   console.log('Register Vemos scripts');
//   // await chrome.contentScripts.register({
//   //   js: [{ file: 'url.js' }],
//   //   runAt: 'document_start',
//   //   matches: [permissionURL]
//   // });
//   await chrome.contentScripts.register({
//     js: [{ file: '../content.js' }],
//     css: [{ file: '../assets/vera.css' }],
//     runAt: 'document_end',
//     matches: [permissionURL]
//   });
// }

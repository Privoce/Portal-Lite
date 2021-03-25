console.log('bg script ready~');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('bg msg event fire', { request });
  const { action, data } = request;
  if (action === 'UPDATE_TOKEN') {
    console.log('update oath');
    const { key, value } = data;
    localStorage.setItem(key, value);
  }
});
chrome.runtime.onInstalled.addListener(function (details) {
  // 扩展环境，则注入安装标识
  chrome.storage.local.set({ installed: true }, function () {
    console.log('installed ');
  });
});

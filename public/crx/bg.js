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

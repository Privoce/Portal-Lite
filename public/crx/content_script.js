console.log('content_script load~');
const CHROME_EXT_UPDATE = ({ action, data }) => {
  console.log('exec ext update');
  chrome.runtime.sendMessage({ action, data });
};
const EndStr = '_OAUTH_TOKEN';

const storageEvent = (evt) => {
  const { newValue, oldValue, key } = evt;
  console.log({ evt });
  if (key.endsWith(EndStr)) {
    if (newValue != oldValue) {
      // 通知谷歌插件更新token
      CHROME_EXT_UPDATE({
        action: 'UPDATE_TOKEN',
        data: { key, value: newValue }
      });
    }
  }
};
window.addEventListener('storage', storageEvent);

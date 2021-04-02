const guard = new AuthingNativeJsUIComponents.AuthingGuard('6034a70af621af721e5320b9');

// 事件监听
const loginHandler = (user) => {
  // 本地种下用户数据
  chrome.storage.sync.set({ user }, function () {
    console.log('user from login page ', user);
  });
  // chrome.runtime.sendMessage({ action: 'CONTENT_LOGIN', data: user });
  chrome.tabs.getCurrent((tab) => {
    console.log({ tab });
    let { id, openerTabId } = tab;
    chrome.tabs.sendMessage(openerTabId, { user }, () => {
      chrome.tabs.remove(id);
      chrome.tabs.goBack(openerTabId);
    });
  });
};
guard.on('load', (authClient) => console.log(authClient));
guard.on('login', (user) => {
  loginHandler(user);
});
guard.on('register-info-completed', (user) => {
  loginHandler(user);
});

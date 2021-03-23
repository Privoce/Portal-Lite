const authing = new Authing.AuthenticationClient({
  appId: '6034a70af621af721e5320b9'
});
console.log({ authing });
authing.getCurrentUser().then((user) => {
  console.log({ user });
  if (user) {
    chrome.storage.local.set({ user }, function () {
      console.log('Value is set to ', user);
    });
  }
});

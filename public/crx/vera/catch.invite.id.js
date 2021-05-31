// room id
console.log('room listener');
document.addEventListener('VERA_ROOM_EVENT', function (e) {
  let {
    detail: { user }
  } = e;
  console.log('received', user);
  if (user) {
    chrome.storage.sync.set({ user }, () => {
      // Notify that we saved.
      console.log('user saved', user);
    });
  }
});

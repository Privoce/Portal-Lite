// room id
console.log('room listener');
document.addEventListener('VERA_ROOM_EVENT', function (e) {
  let {
    detail: { rid, user }
  } = e;
  console.log('received', rid, user);
  if (user) {
    chrome.storage.sync.set({ user }, () => {
      // Notify that we saved.
      console.log('user saved', user);
    });
  }
  if (rid) {
    chrome.storage.sync.set({ room_id: rid }, () => {
      // Notify that we saved.
      console.log('room id saved', rid);
    });
  }
});

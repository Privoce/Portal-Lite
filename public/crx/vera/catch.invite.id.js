console.log('catch invite id');
let url = new URL(location.href);
let paths = url.pathname.split('/');
let decodedUrl = decodeURIComponent(paths[paths.length - 1]);
console.log('decodedUrl', decodedUrl);
let id = new URLSearchParams(new URL(decodedUrl).search).get('portal-vera-id');
console.log('catch the id', id);
if (id) {
  chrome.storage.sync.set({ pvid: id }, function () {
    // Notify that we saved.
    console.log('pvid saved', id);
    window.VERA_INVITE_ID = true;
  });
}

(async () => {
  const src = chrome.extension.getURL('crx/vemos/main.js');
  // const peerSrc = chrome.extension.getURL('crx/vemos/assets/peerjs.min.js');
  // const peerObj = await import(peerSrc);
  // console.log({ peerObj });
  const contentScript = await import(src);
  contentScript.main(/* chrome: no need to pass it */);
})();

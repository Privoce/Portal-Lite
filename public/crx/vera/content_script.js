(async () => {
  const src = chrome.extension.getURL('crx/vera/main.js');
  // const peerSrc = chrome.extension.getURL('crx/vera/assets/peerjs.min.js');
  // const peerObj = await import(peerSrc);
  // console.log({ peerObj });
  const contentScript = await import(src);
  await contentScript.main(/* chrome: no need to pass it */);
})();

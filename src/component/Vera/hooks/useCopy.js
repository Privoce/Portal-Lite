import { useState } from 'react';
const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
const hosts = ['figma.com', 'notion.so'];
const enableUnLocker = !!hosts.filter((h) => location.hostname.indexOf(h) > -1).length;
export default function useCopy(duration = 2000) {
  const [copied, setCopied] = useState(false);
  const copy = (content = '') => {
    if (copied || !content) return;
    if (enableUnLocker) {
      unlocker.enable();
    }
    copyToClipboard(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, duration);
    if (enableUnLocker) {
      unlocker.disable();
    }
  };

  return { copied, copy };
}

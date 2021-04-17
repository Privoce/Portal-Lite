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
export default function useCopy() {
  const [copied, setCopied] = useState(false);
  const copy = (content = '') => {
    if (copied || !content) return;
    copyToClipboard(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return { copied, copy };
}

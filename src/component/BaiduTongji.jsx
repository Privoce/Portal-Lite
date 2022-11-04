import { useEffect } from 'react';

export default function BaiduTongji() {
  useEffect(() => {
    let _hmt = _hmt || [];
    (function () {
      let hm = document.createElement('script');
      hm.src = 'https://hm.baidu.com/hm.js?912878cd3504d00b97c582bf438c79b9';
      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }, []);

  return null;
}

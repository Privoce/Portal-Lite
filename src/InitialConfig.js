import { useEffect } from 'react';
// import axios from 'axios';
import { hotjar } from 'react-hotjar';
import BaiduTongji from './component/BaiduTongji';

function gtag() {
  window.dataLayer.push(arguments);
}
const isProd = process.env.NODE_ENV == 'production';
const loadCollector = isProd && !window.IS_CHROME_EXT;
export default function InitialConfig() {
  useEffect(() => {
    // set req timeout
    // axios.defaults.timeout = 3000;
    if (loadCollector) {
      // google 统计
      const gs = document.createElement('script');
      gs.async = 1;
      gs.src = 'https://www.googletagmanager.com/gtag/js?id=G-D9W5MTES2G';
      const slot = document.getElementsByTagName('script')[0];
      slot.parentNode.insertBefore(gs, slot);
      window.dataLayer = window.dataLayer || [];
      gtag('js', new Date());
      gtag('config', 'G-D9W5MTES2G');
      // hotjar
      hotjar.initialize(2178003, 6);
    }
    const handleError = (evt) => {
      console.log('全局错误捕捉', evt);
      const { target } = evt;
      // 处理图片加载出错
      if (target?.tagName?.toUpperCase() === 'IMG') {
        target.src =
          target.dataset.default ||
          'https://gitee.com/zyanggc/oss/raw/master/works/loading.error.png';
      }
    };
    window.addEventListener('error', handleError, true);
    return () => {};
  }, []);
  return <>{loadCollector && <BaiduTongji />}</>;
}

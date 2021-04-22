import { useEffect } from 'react';
// import axios from 'axios';
import { hotjar } from 'react-hotjar';

import BaiduTongji from './component/BaiduTongji';

// authing config
export const appId = '6034a70af621af721e5320b9';
export const appHost = 'https://portal-lite-china.authing.cn';
export const GuardConfig = {
  mode: 'modal',
  logo: 'https://nicegoodthings.com/apple-touch-icon.png',
  title: 'Portal',
  socialConnections: ['github', 'google', 'dingtalk'],
  appHost,
  lang: navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US'
  // localesConfig: {
  //   defaultLang: navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US',
  //   isShowChange: true
  // }
};

function gtag() {
  window.dataLayer.push(arguments);
}
const isProd = process.env.NODE_ENV == 'production';
const isExt = process.env.REACT_APP_CHROME_EXT == 'true';
export default function InitialConfig() {
  useEffect(() => {
    if (isProd && !isExt) {
      // 浏览器扩展不需要加载这些
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
      // webpushr.com
      // (function (w, d, s, id) {
      //   if (typeof w.webpushr !== 'undefined') return;
      //   w.webpushr =
      //     w.webpushr ||
      //     function () {
      //       (w.webpushr.q = w.webpushr.q || []).push(arguments);
      //     };
      //   var js,
      //     fjs = d.getElementsByTagName(s)[0];
      //   js = d.createElement(s);
      //   js.id = id;
      //   js.async = 1;
      //   js.src = 'https://cdn.webpushr.com/app.min.js';
      //   fjs.parentNode.appendChild(js);
      // })(window, document, 'script', 'webpushr-jssdk');
      // webpushr('setup', {
      //   key:
      //     'BOr-0CF_kFjXgrzZHz5-qtkhjlk_7kfIYHHYIfrdQ1hsRgaDl9yp_a1yX8pHoOzSWwRnTe0EuItHU6a7QAnbsmE'
      // });
    }
    const handleError = (evt) => {
      console.log('全局图片错误捕捉', evt);
      const { target } = evt;
      // 处理图片加载出错
      if (target?.tagName?.toUpperCase() === 'IMG') {
        target.src =
          target.dataset.default || 'https://static.nicegoodthings.com/privoce/loading.error.png';
      }
    };
    window.addEventListener('error', handleError, true);
    return () => {
      window.removeEventListener('error', handleError, true);
    };
  }, []);
  return <>{isProd && !isExt && <BaiduTongji />}</>;
}

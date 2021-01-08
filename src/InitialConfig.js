import { useEffect } from 'react';
// import axios from 'axios';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';
import BaiduTongji from './component/BaiduTongji';

export default function InitialConfig() {
  useEffect(() => {
    // set req timeout
    // axios.defaults.timeout = 3000;
    if (process.env.NODE_ENV == 'production') {
      // 谷歌统计
      ReactGA.initialize('G-D9W5MTES2G');
      ReactGA.pageview(window.location.pathname + window.location.search);

      // hotjar
      hotjar.initialize(2178003, 6);
    }
    const handleError = (evt) => {
      console.log('全局错误捕捉', evt);
      const { target } = evt;
      // 处理图片加载出错
      if (target.tagName.toUpperCase() === 'IMG') {
        target.src =
          target.dataset.default ||
          'https://gitee.com/zyanggc/oss/raw/master/works/loading.error.png';
      }
    };
    window.addEventListener('error', handleError, true);
    return () => {};
  }, []);
  return <>{process.env.NODE_ENV == 'production' && <BaiduTongji />}</>;
}

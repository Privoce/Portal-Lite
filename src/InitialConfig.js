import { useEffect } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';
import BaiduTongji from './component/BaiduTongji';

export default function InitialConfig() {
  useEffect(() => {
    // set req timeout
    axios.defaults.timeout = 3000;
    if (process.env.NODE_ENV == 'production') {
      // 谷歌统计
      ReactGA.initialize('G-D9W5MTES2G');
      ReactGA.pageview(window.location.pathname + window.location.search);

      // hotjar
      hotjar.initialize(2178003, 6);
    }
    return () => {};
  }, []);
  return <>{process.env.NODE_ENV == 'production' && <BaiduTongji />}</>;
}

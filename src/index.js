import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import BaiduTongji from './component/BaiduTongji';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <StrictMode>
    {process.env.NODE_ENV == 'production' && <BaiduTongji />}
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
// 谷歌统计
if (process.env.NODE_ENV == 'production') {
  ReactGA.initialize('G-D9W5MTES2G');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

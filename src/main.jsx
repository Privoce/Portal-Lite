// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import InitialConfig from './InitialConfig';
// import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <InitialConfig />
    <GlobalStyle />
    <App />
  </>
);

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyle = createGlobalStyle`
  ${normalize};
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    position: relative;
    min-height: 100%;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
    font-family: PingFangSC-Regular, PingFang SC;
  }
  button{
    outline:none;
    border:none;
    background: none;
    cursor:pointer;
  }
  a{
    text-decoration:none;
  }
  #root{
    background:#fff;
    max-width:750px;
        margin: 0 auto;
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 60px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 70px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 80px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 90px;
      }
  }
  @media screen and (min-width: 1000px){
      html {
          font-size: 100px;
      }
  }
`;

export default GlobalStyle;

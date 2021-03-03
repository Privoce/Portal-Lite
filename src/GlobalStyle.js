import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset};
  *:not(:root):fullscreen{
    width:auto !important;
  }
  *{
    box-sizing:border-box;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    /* width */
    &::-webkit-scrollbar {
      width: 3px;
      /* visibility: hidden; */
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {

      /* background: #d8d8d8; */
      background: transparent;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #444;
    }
    &:hover {
      &::-webkit-scrollbar {
        display: block;
        /* visibility: visible; */
      }
    }
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior:smooth;
  }
  body{
    overflow:overlay;
    transition:background-image 1s;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  html,body{
    -webkit-overflow-scrolling: touch;
    /* overflow:hidden; */
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
  input,textarea{
    /* 去除safari内阴影 */
    -webkit-appearance: none;
  }
  a{
    text-decoration:none;
  }
  #root{
    /* background:#fff; */
    /* max-width:750px; */
    margin: 0 auto;
    .fork-me-on-github{
      font-size:0;
    }
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 55px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 60px;
      }
  }

  @media screen and (min-width: 768px){
      html {
          font-size: 65px;
      }
  }
  @media screen and (min-width: 1000px){
      html {
          font-size: 70px;
      }
  }
  @media screen and (min-width: 1200px){
      html {
          font-size: 85px;
      }
  }
  @media screen and (min-width: 1400px){
      html {
          font-size: 95px;
      }
  }
  @media screen and (min-width: 1920px){
      html {
          font-size: 100px;
      }
  }
  .react-loading-skeleton{
    font-size:.4rem;
    line-height:1.5;
  }
`;

export default GlobalStyle;

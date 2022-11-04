import{r,a as i,j as f,s as g}from"./index.adf820fb.js";const b=g.div`
  display: flex;
  /* flex-direction: column;
  align-items: flex-start; */
  /* width: 100%; */
  .input {
    width: 100%;
    position: relative;
    display: flex;
    input {
      width: 100%;
      border-radius: 0.06rem;
      border: 0.01rem solid #ababab;

      padding: 0.16rem 0.12rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: #222;
      line-height: 0.22rem;
      &:focus {
        border: 0.01rem solid #127ea8;
      }
    }
    .btn {
      position: absolute;
      right: 0.12rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.25rem;
      height: 0.25rem;
      background-image: url('https://static.nicegoodthings.com/privoce/icon.search.png');
      background-size: contain;
      background-repeat: no-repeat;
    }
    .drop_list {
      position: absolute;
      left: 0;
      top: 0.56rem;
      z-index: 999;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* padding: 0.04rem 0; */
      width: 100%;
      background: #ffffff;
      box-shadow: 0rem 0.02rem 0.09rem 0rem rgba(196, 196, 196, 0.5);
      border-radius: 0.01rem;
      border: 0.01rem solid #e2e2e2;

      .item {
        width: 100%;
        padding: 0.04rem 0.12rem;
        cursor: pointer;
        font-size: 0.16rem;
        font-weight: 400;
        color: #333;
        line-height: 0.22rem;
        &:hover {
          background: #f3f3f3;
        }
        &:first-child {
          padding-top: 0.08rem;
        }
        &:last-child {
          padding-bottom: 0.08rem;
        }
      }
    }
    &:not(:focus-within) .drop_list {
      display: none;
    }
  }
`;let c=0;function w({placeholder:l}){const[t,p]=r.exports.useState(""),[n,o]=r.exports.useState([]),[a,m]=r.exports.useState(!1),h=e=>{p(e.target.value)},d=(e=!1)=>{m(e)};return r.exports.useEffect(()=>{t?(clearTimeout(c),c=setTimeout(()=>{fetch(`https://api.yangerxiao.com/service/bing/ass?w=${t}`).then(e=>e.json()).then(e=>{const{code:s,data:u}=e;s==0&&o(u)}).catch(e=>{})},400)):o([])},[t]),r.exports.useEffect(()=>{const e=({keyCode:s})=>{s==13&&window.open(`https://cn.bing.com/search?q=${t}`,"_blank")};return t&&a&&window.addEventListener("keypress",e),()=>{window.removeEventListener("keypress",e)}},[t,a]),i(b,{children:f("div",{className:"input",children:[i("input",{placeholder:l,value:t,onFocus:d.bind(null,!0),onBlur:d.bind(null,!1),onChange:h}),i("a",{className:"btn",target:"_blank",href:`https://cn.bing.com/search?q=${t}`}),n.length!=0&&i("div",{className:"drop_list",children:n.map(e=>i("a",{className:"item",target:"_blank",href:`https://cn.bing.com/search?q=${e}`,children:e},e))})]})})}export{w as default};

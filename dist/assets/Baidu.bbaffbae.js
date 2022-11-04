import{r as s,j as d,a as t,s as b}from"./index.adf820fb.js";import{h as g}from"./util.430bf2a4.js";const w=b.div`
  display: flex;
  align-items: center;
  /* width: 100%; */
  .input {
    width: 100%;
    position: relative;
    display: flex;
    input {
      width: 100%;
      border-radius: 0.1rem 0rem 0rem 0.1rem;
      border: 0.02rem solid #c4c7ce;
      border-right: none;
      padding: 0.1rem 0.16rem;
      font-size: 0.16rem;
      height: 0.44rem;
      &:focus {
        border: 0.02rem solid #4e6ef3;
      }
    }
    .line {
      position: absolute;
      top: 0.44rem;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      height: 0.01rem;
      width: 94%;
      background-color: #f5f5f6;
      z-index: 888;
      display: none;
    }
    .list {
      height: 2rem;
      overflow: auto;
      overscroll-behavior: contain;
      background-color: #fff;
      width: 100%;
      position: absolute;
      font-size: 0.12rem;
      list-style: none;
      padding: 0.02rem 0.16rem 0.04rem 0.16rem;

      margin: 0;
      margin-top: -0.06rem;
      left: 0;
      top: 0.5rem;
      z-index: 886;
      border-radius: 0 0 0.1rem 0.1rem;
      border: 0.02rem solid #4e6ef3;
      border-top: none;
      display: none;

      .item {
        a {
          display: inline-block;
          font-size: 0.15rem;
          line-height: 0.21rem;
          padding: 0.07rem 0;
          color: #222;
          cursor: pointer;
          width: 100%;
          mark {
            background: none;
            color: #626676;
          }
        }
        &:hover a {
          mark {
            color: #4e6ef3;
          }
          color: #4e6ef3;
        }
      }
    }
    &.asses {
      input:focus {
        border-bottom: none;
        border-bottom-left-radius: unset;
      }
      .list,
      .line {
        display: initial;
      }
      &:not(:focus-within) .list {
        display: none;
      }
    }
  }
  .btn {
    min-width: 1.4rem;
    text-align: center;
    word-break: keep-all;
    background-color: #4e6ef3;
    border-radius: 0 0.1rem 0.1rem 0;
    padding: 0.1rem 0.34rem 0.09rem 0.35rem;
    font-size: 0.18rem;
    font-weight: 600;
    color: #fff;
    line-height: 0.25rem;
    &:hover {
      background-color: #4662d9;
    }
  }
`;let c=0;function v({lang:m}){const[r,u]=s.exports.useState(""),[i,n]=s.exports.useState([]),[a,p]=s.exports.useState(!1),f=e=>{u(e.target.value)},l=(e=!1)=>{p(e)};return s.exports.useEffect(()=>{r?(clearTimeout(c),c=setTimeout(()=>{fetch(`https://api.yangerxiao.com/service/baidu/ass?w=${r}`).then(e=>e.json()).then(e=>{const{code:o,data:h}=e;o==0&&n(h)}).catch(e=>{})},400)):n([])},[r]),s.exports.useEffect(()=>{const e=({keyCode:o})=>{o==13&&window.open(`https://www.baidu.com/s?wd=${r}`,"_blank")};return r&&a&&window.addEventListener("keypress",e),()=>{window.removeEventListener("keypress",e)}},[r,a]),d(w,{children:[d("div",{className:`input ${i.length?"asses":""}`,children:[t("input",{value:r,onFocus:l.bind(null,!0),onBlur:l.bind(null,!1),onChange:f}),t("div",{className:"line"}),t("ul",{className:"list",children:g(i,r).map((e,o)=>t("li",{className:"item",children:t("a",{target:"_blank",href:`https://www.baidu.com/s?wd=${i[o]}`,dangerouslySetInnerHTML:{__html:e}})},e))})]}),t("a",{className:"btn",target:"_blank",href:`https://www.baidu.com/s?wd=${r}`,children:m.baidu})]})}export{v as default};

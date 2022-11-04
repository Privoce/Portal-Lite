import{r as o,a as r,j as u,s as g}from"./index.adf820fb.js";const m=g.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  .input {
    width: 100%;
    position: relative;
    display: flex;
    input {
      width: 100%;
      border-radius: 0.22rem;
      border: 0.01rem solid #d9d9d9;
      padding: 0.12rem 0.16rem;
      font-size: 0.16rem;
      height: 0.44rem;
      padding-left: 0.5rem;
      background-image: url('https://static.nicegoodthings.com/privoce/icon.google.search.png');
      background-repeat: no-repeat;
      background-size: 0.22rem;
      background-position: 0.14rem;
      &:focus {
        /* border: 0.01rem solid #999999; */
        box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      }
    }
    .clear {
      width: 0.16rem;
      height: 0.16rem;
      cursor: pointer;
      position: absolute;
      right: 0.35rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;function f({placeholder:a}){const[t,n]=o.exports.useState(""),[s,c]=o.exports.useState(!1),d=e=>{n(e.target.value)},l=()=>{n("")},i=(e=!1)=>{c(e)};return o.exports.useEffect(()=>{const e=({keyCode:p})=>{p==13&&window.open(`https://google.com/search?q=${t}`,"_blank")};return t&&s&&window.addEventListener("keypress",e),()=>{window.removeEventListener("keypress",e)}},[t,s]),r(m,{children:u("div",{className:"input",children:[r("input",{placeholder:a,value:t,onFocus:i.bind(null,!0),onBlur:i.bind(null,!1),onChange:d}),t&&r("img",{onClick:l,className:"clear",src:"https://static.nicegoodthings.com/privoce/icon.google.remove.png",alt:"google clear icon"})]})})}export{f as default};

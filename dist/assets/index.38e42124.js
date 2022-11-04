import{r,u as k,i as p,b as v,d as G,a as e,j as i,s as N,l as I,G as C,F as A}from"./index.adf820fb.js";import{u as U}from"./hooks.a478aa3b.js";import{I as _}from"./icon.close.46ef2662.js";import{b as j}from"./index.esm.c817908c.js";/* empty css                  */import"./iconBase.a38ac1cb.js";const D=document.querySelector("#modal-root"),S=N.section`
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    position: relative;
    background: var(--modal-bg-color);
    color: var(--modal-font-color);
    border-radius: 0.04rem;
    padding: 0.3rem 0.5rem;
    /* padding: 0.7rem 0.25rem 0.35rem 0.25rem; */
    width: fit-content;
    .loading {
      font-size: 0.22rem;
    }
    .info {
      font-size: 0.2rem;
      img {
        width: 0.8rem;
        border-radius: 50%;
        border: 2px solid #ccc;
      }
      tr {
        display: flex;
        align-items: center;
        padding: 0.2rem 0;
        td:first-child {
          padding-right: 0.1rem;
          width: 1rem;
          color: #555;
          text-align: right;
          &:after {
            content: ':';
          }
        }
        td:last-child {
          font-weight: 800;
        }
      }
    }
    .opts {
      font-size: 0.2rem;
      margin-top: 0.2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .logout_btn {
        display: flex;
        background-color: #f88070;
        color: #fff;
        font-size: 0.18rem;
        border-radius: 4px;
        border: 1px solid #fff;
        padding: 0.1rem 0.15rem;
        align-items: center;
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 0.16rem;
      right: 0.16rem;
      width: 0.16rem;
      height: 0.16rem;
    }
    @media screen and (max-width: 414px) {
      width: 5rem;
    }
  }
`;function M({closeModal:o}){const{clearWidgetSettings:l}=U(),[a,s]=r.exports.useState(null),{language:{words:{profile:t}}}=k.useLanguage(),{authClient:h}=p.exports.useAuthing({appId:v,appHost:G});r.exports.useEffect(()=>{const f=async()=>{let b=await h.getCurrentUser();s(b)},g=()=>{document.visibilityState==="visible"&&f()};return f(),document.addEventListener("visibilitychange",g),()=>{document.removeEventListener("visibilitychange",g)}},[]);const d=()=>{confirm("\u786E\u5B9A\u9000\u51FA\uFF1F")&&(h.logout(),document.dispatchEvent(new CustomEvent("SPHERE_LOGOUT")),o(),l(),location.reload())};if(!a)return e(E,{children:e(S,{children:e("div",{className:"modal",children:e("div",{className:"loading",children:"loading"})})})});const{username:n,phone:c,email:u,photo:y}=a;return e(E,{children:e(S,{children:i("div",{className:"modal",children:[e("table",{className:"info",children:i("tbody",{children:[i("tr",{children:[e("td",{children:t.avatar}),e("td",{children:e("img",{src:y,alt:"\u5934\u50CF"})})]}),i("tr",{children:[e("td",{children:t.name}),e("td",{children:n||"\u6682\u672A\u8BBE\u7F6E"})]}),c&&i("tr",{children:[e("td",{children:t.mobile}),e("td",{children:c})]}),u&&i("tr",{children:[e("td",{children:t.email}),e("td",{children:u})]})]})}),i("div",{className:"opts",children:[e("a",{target:"_blank",href:"https://portal-lite-china.authing.cn/u",children:t.edit}),e("button",{className:"logout_btn",onClick:d,children:t.logout})]}),e("img",{src:_,onClick:o,className:"close"})]})})})}const E=({children:o})=>I.exports.createPortal(o,D),R=N.div`
  position: relative;
  cursor: pointer;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #c7beff;
  border-radius: 50%;
  padding: 0.14rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  .status {
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
    position: absolute;
    top: -0.05rem;
    right: -0.05rem;
    background-color: #aaa;
    &.logged {
      background-color: #07d302;
    }
  }
`;p.exports.initAuthClient({appId:v});function V({setSyncing:o,openModal:l}){const{widgetSettings:a,importWidgetSettings:s,updateWidgetSetting:t}=U(),[h,d]=r.exports.useState(!1),[n,c]=r.exports.useState(null),[u,y]=r.exports.useState(!1),{authClient:f}=p.exports.useAuthing(),{language:{value:g}}=k.useLanguage();r.exports.useEffect(()=>{C.lang=g=="en"?"en-US":"zh-CN"},[g]),r.exports.useEffect(()=>{n&&t({key:"user",data:n})},[n]),r.exports.useEffect(()=>{n&&(async()=>{let x=currAuthClient.current,{status:W}=await x.checkLoginStatus();if(!W)return;o(!0);let w=a,[z=null]=await x.listUdv("widget_data");u&&w?await x.setUdv("widget_data",JSON.stringify(w)):s(z.value),o(!1)})()},[n,u]),r.exports.useEffect(()=>{f.getCurrentUser().then(m=>{m&&c(m)})},[]);const b=()=>{n?l():d(!0)},F=async m=>{c(m),d(!1)},L=()=>{d(!1)};return i(A,{children:[h&&e(p.exports.AuthingGuard,{onClose:L,onLogin:F,appId:v,config:C}),i(R,{className:"icon profile",onClick:b,children:[e(j,{}),e("i",{className:`status ${n?"logged":""}`})]})]})}function T({setSyncing:o}){const[l,a]=r.exports.useState(!1),s=()=>{a(t=>!t)};return i(A,{children:[e(V,{setSyncing:o,openModal:s}),l?e(M,{closeModal:s}):null]})}export{T as default};

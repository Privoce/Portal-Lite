import{f as u,r as s,i as w,b as x,d as v,a as e,s as E,j as b}from"./index.adf820fb.js";import{c as k}from"./util.430bf2a4.js";import{D as R}from"./DownloadExtension.88e555ba.js";const V=E.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.15rem;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .txt {
    color: #555;
    padding: 0.5rem;
    line-height: 1.4;
    font-size: 0.4rem;
    font-weight: 800;
    white-space: pre-line;
    word-break: break-all;
    &.error {
      color: red;
    }
  }
`,h=({children:t})=>b(V,{children:[e("div",{className:"logo",children:e("img",{alt:"Vera Logo",src:"https://static.nicegoodthings.com/works/vera/vera.logo.png"})}),t]});function T(){const{id:t,dest:o}=u(),[i,m]=s.exports.useState(void 0),[c,g]=s.exports.useState(""),{authClient:f}=w.exports.useAuthing({appId:x,appHost:v});let l=new URLSearchParams(location.search).get("extid"),p=new URLSearchParams(location.search).get("wid");return s.exports.useEffect(()=>{const n=async()=>{let a=await k(l);m(a)};n();const r=()=>{document.hidden||n()};return document.addEventListener("visibilitychange",r,!1),()=>{document.removeEventListener("visibilitychange",r,!1)}},[l]),s.exports.useEffect(()=>{i&&(async()=>{let r=decodeURIComponent(o),a=new URL(r);if(t){let d=await f.getCurrentUser();d&&document.dispatchEvent(new CustomEvent("VERA_ROOM_EVENT",{detail:{user:d}})),document.dispatchEvent(new CustomEvent("VERA_ROOM_EVENT",{detail:{rid:t,wid:p}})),location.href=a}else g(`Vera Transfer error: 
\r ${t}`)})()},[o,t,i]),typeof i>"u"?e(h,{children:e("div",{className:"txt",children:"Checking Vera"})}):i===!1?e(R,{installLink:"https://chrome.google.com/webstore/detail/vera-cobrowse-doc-figma-p/ccegbnlnelhgaefimiaklaindffpfcmh?hl=en&authuser=1",installTitle:"Vera - watch party",tip:"Install Vera Extension First",logo:"https://static.nicegoodthings.com/works/vera/vera.logo.png"}):c?e(h,{children:e("div",{className:"txt error",children:c})}):null}export{T as default};

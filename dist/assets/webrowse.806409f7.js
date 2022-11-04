import{f,r,i as p,b as g,d as w,a as e,s as x,j as E}from"./index.adf820fb.js";import{c as b}from"./util.430bf2a4.js";import{D as v}from"./DownloadExtension.88e555ba.js";const y=x.section`
  width: 100%;
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
`,c=({children:t})=>E(y,{children:[e("div",{className:"logo",children:e("img",{alt:"Webrowse Logo",src:"https://static.nicegoodthings.com/works/vera/webrowse.logo.png"})}),t]}),R="https://webrow.se#howto";function S(){const{rid:t}=f(),[i,d]=r.exports.useState(void 0),[o,l]=r.exports.useState(""),{authClient:h}=p.exports.useAuthing({appId:g,appHost:w});let a=new URLSearchParams(location.search).get("extid"),m=new URLSearchParams(location.search).get("wid");return r.exports.useEffect(()=>{const n=async()=>{let u=await b(a);d(u)};n();const s=()=>{document.hidden||n()};return document.addEventListener("visibilitychange",s,!1),()=>{document.removeEventListener("visibilitychange",s,!1)}},[a]),r.exports.useEffect(()=>{i&&(async()=>{if(t){let s=await h.getCurrentUser();s&&document.dispatchEvent(new CustomEvent("WEBROWSE_ROOM_EVENT",{detail:{user:s}})),document.dispatchEvent(new CustomEvent("WEBROWSE_ROOM_EVENT",{detail:{rid:t,wid:m}})),location.href=R}else l(`Webrowse Transfer error: 
\r ${t}`)})()},[t,i]),typeof i>"u"?e(c,{children:e("div",{className:"txt",children:"Checking Webrowse"})}):i===!1?e(v,{}):o?e(c,{children:e("div",{className:"txt error",children:o})}):null}export{S as default};

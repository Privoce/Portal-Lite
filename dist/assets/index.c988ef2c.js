import{c as F,u as C,r as x,a,j as u,k as A,s as k,l as S,F as j}from"./index.adf820fb.js";import{M as R}from"./index.esm.01905522.js";import{d as L,e as M}from"./bodyScrollLock.esm.8c6ab430.js";import{I as D}from"./icon.close.46ef2662.js";import{u as N}from"./hooks.a478aa3b.js";import{f as O,g as T,h as U,i as W}from"./index.esm.95d4feb0.js";import{G as q}from"./index.esm.4b8699df.js";import{f as H}from"./index.7b8e2464.js";import"./iconBase.a38ac1cb.js";import"./index.76cc53c3.js";var B={exports:{}};(function(m,c){(function(l,d){d()})(F,function(){function l(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function d(e,t,s){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){b(o.response,t,s)},o.onerror=function(){},o.send()}function w(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function g(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof F=="object"&&F.global===F?F:void 0,h=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),b=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(e,t,s){var o=i.URL||i.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener",typeof e=="string"?(r.href=e,r.origin===location.origin?g(r):w(r.href)?d(e,t,s):g(r,r.target="_blank")):(r.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(r.href)},4e4),setTimeout(function(){g(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,s){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(l(e,s),t);else if(w(e))d(e,t,s);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){g(o)})}}:function(e,t,s,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return d(e,t,s);var r=e.type==="application/octet-stream",E=/constructor/i.test(i.HTMLElement)||i.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||r&&E||h)&&typeof FileReader<"u"){var n=new FileReader;n.onloadend=function(){var f=n.result;f=y?f:f.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=f:location=f,o=null},n.readAsDataURL(e)}else{var v=i.URL||i.webkitURL,p=v.createObjectURL(e);o?o.location=p:location.href=p,o=null,setTimeout(function(){v.revokeObjectURL(p)},4e4)}});i.saveAs=b.saveAs=b,m.exports=b})})(B);const _=document.querySelector("#modal-root"),z=k.section`
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
    border-radius: 0.04rem;
    padding: 0.3rem 0.5rem;
    /* padding: 0.7rem 0.25rem 0.35rem 0.25rem; */
    width: fit-content;
    .tip {
      font-size: 0.12rem;
      color: #aaa;
      margin-top: 0.5rem;
      &:before {
        content: 'ℹ️';
        padding-right: 0.06rem;
      }
    }
    .settings {
      display: flex;
      flex-direction: column;
      .setting {
        display: flex;
        &:not(:last-child) {
          margin-bottom: 0.2rem;
          padding-bottom: 0.2rem;
          border-bottom: 1px dashed #eee;
        }
        .btn {
          display: flex;
          background-color: #5072f0;
          color: #fff;
          font-size: 0.18rem;
          border-radius: 4px;
          border: 1px solid #fff;
          padding: 0.1rem 0.15rem;
          align-items: center;
          > svg {
            margin-left: 0.05rem;
            width: 0.2rem;
            height: 0.2rem;
          }
          &:not(:last-child) {
            margin-right: 0.15rem;
          }
          &.reset {
            background-color: #f88070;
            svg path {
              stroke: #fff;
            }
          }
          /* &.feedback {
            background-color: #2b7cfb;
          } */
          &.import {
            position: relative;
            cursor: pointer;
            input[type='file'] {
              opacity: 0;
              cursor: pointer;
              position: absolute;
              display: block;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
            }
          }
          &[disabled] {
            background-color: #999;
            color: #fff;
          }
        }
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
`;function G({closeModal:m}){const{language:{words:{setting:c}}}=C.useLanguage(),{widgetSettings:l,clearWidgetSettings:d,getWidgetSetting:w,updateWidgetSetting:g,importWidgetSettings:i}=N(),h=x.exports.useRef(null);x.exports.useEffect(()=>{let n=h||h.current;return n&&L(n),()=>{M(n)}},[]);const b=()=>{let n=new Blob([JSON.stringify(l)],{type:"application/json;charset=utf-8"});B.exports.saveAs(n,`portal.widget.data.${H(new Date,"yyyy-MM-dd-hh-mm-ss")}.json`)},e=()=>{confirm("\u60A8\u53EF\u4EE5\u5148\u5BFC\u51FA\u6570\u636E\u5907\u4EFD\u5230\u672C\u5730\uFF0C\u8BE5\u64CD\u4F5C\u5C06\u6E05\u9664\u672C\u5730\u5168\u90E8\u6570\u636E\uFF0C\u6062\u590D\u521D\u59CB\u72B6\u6001\uFF0C\u786E\u5B9A\u64CD\u4F5C\uFF1F")&&(d(),location.reload())},t=({target:{files:n}})=>{alert("\u6E29\u99A8\u63D0\u793A\uFF1A\u5982\u679C\u5F53\u524D\u6570\u636E\u672A\u5907\u4EFD\uFF0C\u5EFA\u8BAE\u5148\u5BFC\u51FA\u5907\u4EFD");const[v]=n;var p=new FileReader;p.onload=({target:{result:f}})=>{i(f),alert("\u5BFC\u5165\u6210\u529F\uFF0C\u5237\u65B0\u9875\u9762\u5373\u53EF\u52A0\u8F7D\u5BFC\u5165\u6570\u636E\uFF01")},p.readAsText(v)},s=()=>{confirm("\u60A8\u786E\u5B9A\u8981\u53BB\u6389\u9875\u9762\u80CC\u666F\u56FE\uFF1F")&&(g({key:"bg",data:""}),location.reload())},{language:o,setLanguage:r}=C.useLanguage(),E=n=>{const v=A.find(p=>p.value===n.target.value);r(v)};let y=w({key:"bg"});return a(I,{ref:h,children:a(z,{children:u("div",{className:"modal",children:[u("ul",{className:"settings",children:[a("li",{className:"setting",children:u("button",{className:"btn clearBg",disabled:!y,onClick:s,children:[c.clear,a(O,{})]})}),u("li",{className:"setting",children:[u("button",{className:"btn export",disabled:!l,onClick:b,children:[c.export,a(T,{})]}),u("button",{className:"btn import",children:[c.import,a(U,{}),a("input",{type:"file",accept:"application/*",onChange:t})]})]}),u("li",{className:"setting",children:[u("button",{className:"btn reset",disabled:!l,onClick:e,children:[c.reset,a(q,{})]}),u("a",{className:"btn feedback",href:"https://support.qq.com/product/303691",target:"_blank",children:[c.feedback,a(W,{})]})]}),a("li",{className:"setting",children:a("select",{className:"btn langs",onChange:E,value:o.value,children:A.map(n=>a("option",{value:n.value,children:n.title},n.value))})})]}),l?null:a("h2",{className:"tip",children:c.tip}),a("img",{src:D,onClick:m,className:"close"})]})})})}const I=({children:m})=>S.exports.createPortal(m,_),P=k.button`
  width: 0.6rem;
  height: 0.6rem;
  background-color: #badfff;
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  svg {
    width: 100%;
    height: 100%;
  }
`;function oe(){const[m,c]=x.exports.useState(!1),l=()=>{c(d=>!d)};return u(j,{children:[a(P,{onClick:l,children:a(R,{})}),m?a(G,{closeModal:l}):null]})}export{oe as default};

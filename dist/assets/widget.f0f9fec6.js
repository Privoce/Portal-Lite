import{a as e,r as o,j as s,s as p,e as b,f as v,L as W}from"./index.adf820fb.js";import{E as k,S as w}from"./ErrorTip.da34921b.js";import{W as B}from"./index.a7993bd8.js";import{W as F}from"./hooks.a478aa3b.js";import{R as j}from"./index.esm.9ed488a3.js";import{F as D}from"./Footer.531a8593.js";import{b as N}from"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";import"./index.esm.6c785b3e.js";import"./Close.4951d652.js";import"./index.esm.c817908c.js";const C=p.section`
  position: relative;
  width: 100%;
  padding-bottom: 0.6rem;
  min-height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  .widget {
    margin-top: 0;
    .tip {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 1.5rem;
        color: #ff9dac;
        margin-bottom: 0.2rem;
      }
      .txt {
        font-weight: bold;
        font-size: 0.25rem;
        color: #ccc;
      }
    }
  }
`;function L({widgetKey:r=null,data:a={}}){if(!r)return null;let t=F[r];return e(C,{children:e("div",{className:"widget",children:a.share?e(B,{data:a,readonly:!0,type:t.type,disableScroll:t.disableScroll,name:r,defaultSize:t.defaultSize,compact:t.compact,title:t.title,children:o.exports.Children.map(t.comp,i=>o.exports.cloneElement(i,{name:r}))}):s("div",{className:"tip",children:[e(j,{className:"icon"}),e("p",{className:"txt",children:"\u8BE5\u5C0F\u7EC4\u4EF6\u88AB\u8BBE\u7F6E\u4E3A\u4E0D\u53EF\u89C1"})]})})})}const z=p.div`
  cursor: pointer;
  margin-top: 0.5rem;
  position: fixed;
  right: 0.1rem;
  bottom: 0.1rem;
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
  &:after {
    color: #666;
    font-size: 0.12rem;
    content: '返回首页';
    position: absolute;
    left: -50%;
    transform: translateX(50%);
    bottom: -0.2rem;
  }
`;function H({path:r}){const a=b();return e(z,{onClick:()=>{a(r)},children:e(N,{})})}const P=(r,a)=>{let t={key:null,data:null};return t.key=a,t.data=r,t};function Q(){var m,d;const[r,a]=o.exports.useState(""),{username:t,widget:i=null}=v(),[u,n]=o.exports.useState(!0),[f,h]=o.exports.useState(null);if(o.exports.useEffect(()=>{(async()=>{n(!0);const g=await fetch(`https://api.yangerxiao.com/service/authing/${t}/udf`),{code:x,data:y,msg:E}=await g.json();if(x!=0){a(E);return}let S=P(y,i);h(S),n(!1)})()},[i,t]),r)return e(k,{tip:r});if(u)return e(W,{});const{key:l,data:c}=f;return s(w,{children:[s("h2",{className:"title",children:[`${(d=(m=c.common)==null?void 0:m.user)==null?void 0:d.username}'s`," Personal Widget"]}),e(L,{widgetKey:l,data:c[l]}),e(H,{path:`/p/${t}`}),e(D,{})]})}export{Q as default};

import{e as h,a as e,s,f as g,h as x,j as y,r as o,L as b}from"./index.adf820fb.js";import{b as w}from"./index.esm.95d4feb0.js";import{W}from"./hooks.a478aa3b.js";import{W as k}from"./index.a7993bd8.js";import"./iconBase.a38ac1cb.js";import"./index.esm.6c785b3e.js";import"./Close.4951d652.js";const S=s.div`
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
`;function j(){const t=h();return e(S,{onClick:()=>{t("/")},children:e(w,{})})}const v=s.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .widget {
    margin: 0 auto;
  }
  &.third {
    .widget {
      > .title {
        display: none;
      }
    }
  }
`;function N(){const{widget:t}=g(),{search:r}=x();let i=new URLSearchParams(r).get("from");const a=W[t]||null;if(!a)return"\u5C0F\u7EC4\u4EF6\u4E0D\u5B58\u5728";const{comp:n,title:l,compact:m=!1,disableScroll:c,sizes:d,defaultSize:p,type:u}=a;return y(v,{className:i,children:[e(k,{type:u,standalone:!0,disableScroll:c,name:t,defaultSize:p,sizes:d,compact:m,title:l,children:e(o.exports.Suspense,{fallback:e(b,{}),children:o.exports.Children.map(n,f=>o.exports.cloneElement(f,{name:t}))})}),i=="home"&&e(j,{})]})}export{N as default};

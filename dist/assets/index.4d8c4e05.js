import{a,s as S,r as d,f as x,L as W,j as u}from"./index.adf820fb.js";import{E as b,S as j}from"./ErrorTip.da34921b.js";import{W as v}from"./index.a7993bd8.js";import{W as D}from"./hooks.a478aa3b.js";import{F as k}from"./Footer.531a8593.js";import"./iconBase.a38ac1cb.js";import"./index.esm.95d4feb0.js";import"./index.esm.6c785b3e.js";import"./Close.4951d652.js";import"./index.esm.c817908c.js";const E=S.section`
  position: relative;
  width: 100%;
  padding-bottom: 0.6rem;
  min-height: 80vh;

  .widgets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.58rem;
    grid-auto-flow: row dense;
    grid-auto-rows: auto;
    > .widget {
      transition: transform 0.5s;
      &.ghost {
        opacity: 0.1;
      }
      &.choosen {
        cursor: grabbing;
        transform: scale(0.98);
      }
      &.large {
        grid-row: auto / span 2;
      }
      &[type='nav'] {
        grid-area: auto / span 2;
      }
      &[type='search'] {
        grid-area: span 1 / span 2;
      }
    }

    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: 1fr;
      grid-column-gap: 0.5rem;
      > .widget {
        margin: 0 auto;
        .container {
          width: 96%;
        }
        &[type='nav'] {
          /* width: 100%; */
          grid-area: auto / auto;
        }
        &[type='search'] {
          /* width: 100%; */
          grid-area: span 1 / auto;
        }
      }
    }
  }
`;function P({keys:e=[],data:r}){return a(E,{children:a("div",{className:"widgets",children:e.map(t=>{const o=D[t]||null;if(!o||!(r&&r[t]&&r[t].share))return null;const{type:i,comp:p,title:m,compact:n=!1,disableScroll:l,defaultSize:c}=o;return a(v,{data:r&&r[t],readonly:!0,type:i,disableScroll:l,name:t,defaultSize:c,compact:n,title:m,children:p},t)})})})}const F=e=>{var s;let r=Object.keys(e||{}).filter(i=>e[i].share);return{keys:[...new Set([...r,...((s=e.widgets)==null?void 0:s.local)||[]])],data:e}};function G(){var l,c;const[e,r]=d.exports.useState(""),{username:t}=x(),[o,s]=d.exports.useState(!0),[i,p]=d.exports.useState(null);if(d.exports.useEffect(()=>{(async()=>{s(!0);const g=await fetch(`https://api.yangerxiao.com/service/authing/${t}/udf`),{code:f,data:h,msg:y}=await g.json();if(f!=0){r(y);return}let w=F(h);p({...w}),s(!1)})()},[t]),e)return a(b,{tip:e});if(o)return a(W,{});const{keys:m,data:n}=i;return u(j,{children:[u("h2",{className:"title",children:[`${(c=(l=n.common)==null?void 0:l.user)==null?void 0:c.username}'s`," Personal Portal"]}),a(P,{keys:m,data:n}),a(k,{})]})}export{G as default};

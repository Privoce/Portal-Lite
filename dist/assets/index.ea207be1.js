import{u as h,r as t,i as b,b as x,d as y,a as e,j as i,s as m,l as k,F as w}from"./index.adf820fb.js";import{a as S}from"./index.esm.9ed488a3.js";import{l as C,I as v}from"./index.esm.6c785b3e.js";import"./iconBase.a38ac1cb.js";const N=document.querySelector("#modal-root"),z=m.section`
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
    border-radius: 0.05rem;
    background-color: var(--modal-bg-color, #fff);
    padding: 0.3rem 0.4rem;
    .title {
      font-size: 0.22rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .body {
      margin-top: 0.2rem;
      color: #333;
      font-size: 0.18rem;
      .tip {
        color: #666;
        line-height: 1.2;
        margin-bottom: 0.05rem;
      }
      .link {
        font-size: 0.12rem;
        user-select: text;
        white-space: nowrap;
        overflow: scroll;
        max-width: 3.5rem;
        line-height: 2;
        border: 1px solid #eee;
        padding: 0 0.05rem;
        &::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
      }
    }
    .btns {
      margin-top: 0.2rem;
      display: flex;
      .btn {
        border-radius: 0.5rem;
        border: 1px solid #7a3cf0;
        background-color: #fff;
        font-size: 0.18rem;
        padding: 0.08rem 0.12rem;
        color: #7e65c8;
        margin-right: 0.2rem;
        &.copy {
          background-color: #7a3cf0;
          color: #fff;
          &[disabled] {
            border-color: #ddd;
            background-color: #ccc;
          }
        }
        /* &.done {
          background-color: #fff;
        } */
      }
    }
    > .close {
      cursor: pointer;
      position: absolute;
      top: 0.05rem;
      right: 0.05rem;
      width: 0.2rem;
      height: 0.2rem;
    }
  }
`;let j=location.origin;function L({closeModal:r}){const{language:{words:{modal:{share:o}}}}=h.useLanguage(),a=t.exports.useRef(null),{authClient:s}=b.exports.useAuthing({appId:x,appHost:y}),[n,p]=t.exports.useState(null),[l,c]=t.exports.useState("Generating link..."),[u,d]=t.exports.useState(!1);return t.exports.useEffect(()=>{(async()=>{let{status:f}=await s.checkLoginStatus();if(!f){c("Please login first.");return}let g=await s.getCurrentUser();p(g.username)})()},[s]),t.exports.useEffect(()=>{n&&c(`${j}/p/${n}`)},[n]),e(M,{ref:a,children:e(z,{children:i("div",{className:"modal",children:[e("h3",{className:"title",children:o.title}),i("div",{className:"body",children:[e("p",{className:"tip",children:o.tip}),e("div",{className:"link",children:l})]}),i("div",{className:"btns",children:[e(C.CopyToClipboard,{text:l,onCopy:()=>{d(!0),setTimeout(()=>{d(!1)},2e3)},children:e("button",{className:"btn copy",children:u?o.copied:o.copy})}),e("button",{className:"btn done",onClick:r,children:o.done})]}),e(v,{className:"close",onClick:r})]})})})}const M=({children:r})=>k.exports.createPortal(r,N),U=m.button`
  width: 0.6rem;
  height: 0.6rem;
  background-color: #fc6a52;
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
`;function E(){const[r,o]=t.exports.useState(!1),a=()=>{o(s=>!s)};return i(w,{children:[e(U,{onClick:a,children:e(S,{color:"#fff"})}),r?e(L,{closeModal:a}):null]})}export{E as default};

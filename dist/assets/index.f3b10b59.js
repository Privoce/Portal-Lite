import{s as v,a as r,r as n,j as l}from"./index.adf820fb.js";import{L as F}from"./Loading.16593da1.js";import{I as B}from"./Close.4951d652.js";import{u as A}from"./hooks.a478aa3b.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const T=v.button`
  padding: 0.05rem;
  border-radius: 50%;
  line-height: 1;
  border: 1px solid #eee;
  position: absolute;
  top: 0.14rem;
  left: 0.14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
  font-size: 0.1rem;
  color: #fff;
  &:hover {
    opacity: 1;
  }
`;function C({children:i,...o}){return r(T,{...o,children:i})}const I={a:"\u52A8\u753B",b:"\u6F2B\u753B",c:"\u6E38\u620F",d:"\u6587\u5B66",e:"\u539F\u521B",f:"\u6765\u81EA\u7F51\u7EDC",h:"\u5F71\u89C6",i:"\u8BD7\u8BCD",k:"\u54F2\u5B66",l:"\u6296\u673A\u7075",g:"\u5176\u5B83"},W=v.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  z-index: 885;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  font-size: 0.2rem;
  display: flex;
  flex-direction: column;
  .set {
    padding: 0.05rem 0.1rem;
    user-select: none;
    .title {
      font-weight: 800;
      font-size: 0.2rem;
    }
    .content {
      font-size: 0.14rem;
      line-height: 1.5;
      margin: 0.2rem 0;
      .item {
        cursor: pointer;
        color: #fff;
        border: 1px solid #fff;
        &[data-selected='true'] {
          background: #fff;
          color: #333;
        }
      }
      &.intervals {
        .inter {
          margin-right: 0.2rem;
        }
      }
      &.cates {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-row-gap: 0.2rem;
        justify-items: flex-start;
        .cate {
          padding: 0.05rem 0.1rem;
        }
      }
    }
  }
  .icon_close {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
`,Y=[{inter:0,label:"\u624B\u52A8\u66F4\u65B0"},{inter:10,label:"10\u79D2"},{inter:60,label:"\u4E00\u5206\u949F"},{inter:60*30,label:"\u534A\u5C0F\u65F6"},{inter:60*60,label:"\u4E00\u5C0F\u65F6"}];function D({currCates:i,updateCurrCates:o,currInter:c,updateInter:f}){const[p,u]=n.exports.useState(!1),s=()=>{u(e=>!e)},g=({target:e})=>{const{selected:t,inter:a}=e.dataset;t!="true"&&f(Number(a))},d=({target:e})=>{const{selected:t,cate:a}=e.dataset;if(t=="true"){let h=i.filter(b=>b!=a);o(h)}else o([...i,a])};return p?l(W,{children:[r(B,{className:"icon_close",onClick:s}),l("div",{className:"set",children:[r("h2",{className:"title",children:"\u66F4\u65B0\u95F4\u9694"}),r("div",{className:"content intervals",children:Y.map(({inter:e,label:t})=>r("button",{"data-inter":e,"data-selected":e==c,onClick:g,className:"item inter",children:t},t))})]}),l("div",{className:"set",children:[r("h2",{className:"title",children:"\u5206\u7C7B"}),r("div",{className:"content cates",children:Object.entries(I).map(([e,t])=>r("div",{onClick:d,className:"item cate","data-cate":e,"data-selected":i.includes(e),children:t},e))})]})]}):r(C,{onClick:s,style:{left:".45rem"},children:"\u8BBE"})}const L=v.section`
  position: relative;
  height: 100%;
  background: url('https://static.nicegoodthings.com/privoce/widget.yiyan.bg.jpg') no-repeat;
  background-size: cover;
  background-position: bottom;
  .yiyan {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.1rem;
    padding: 0.25rem;
    background-color: rgba(2, 2, 2, 0.6);
    border-radius: 5px;
    color: #fff;
    width: 100%;
    height: 100%;
    .content {
      font-size: 0.3rem;
      font-weight: 800;
      line-height: 1.5;
      margin-bottom: 0.08rem;
    }
    .footer {
      color: #eee;
      font-size: 0.15rem;
      margin-bottom: 0.12rem;
      align-self: flex-end;
    }
    .lines {
      display: flex;
      flex-direction: column;
      align-items: center;
      .line {
        font-size: 0.16rem;
        line-height: 1.5;
        margin-bottom: 0.05rem;
        &.famous {
          font-weight: 800;
        }
      }
    }
  }
`;let y=0;function H({readonly:i,data:o,name:c}){const{getWidgetSetting:f,updateWidgetSetting:p}=A();let u=(o==null?void 0:o.local)||f({name:c});const[s,g]=n.exports.useState(u),[d,e]=n.exports.useState(Object.keys(I)),[t,a]=n.exports.useState(0),[h,b]=n.exports.useState(!u),[k,N]=n.exports.useState(""),m=n.exports.useCallback(async()=>{let z=d.map(x=>`c=${x}`).join("&");try{const w=await(await fetch(`https://v1.hitokoto.cn/?${z}&encode=json`)).json()||null;p({name:c,data:{...w,storedate:new Date().toDateString()}}),g(w),b(!1)}catch{N("\u51FA\u9519\u4E86~");return}},[d,c]);if(n.exports.useEffect(()=>{s||(clearInterval(y),m())},[s]),n.exports.useEffect(()=>(t!=0&&(y=setInterval(()=>{m()},t*1e3)),()=>{clearInterval(y)}),[t,m]),h)return r(F,{});if(k)throw new Error(k);const{hitokoto:S,from_who:E,from:j}=s;return l(L,{children:[!i&&r(D,{currCates:d,updateCurrCates:e,currInter:t,updateInter:a}),!i&&r(C,{className:"refresh",onClick:m,children:"\u6362"}),l("article",{className:"yiyan",children:[r("p",{className:"content",children:S}),l("footer",{className:"footer",children:["-- ",E||"\u6765\u81EA","\xB7",j]})]})]})}export{H as default};

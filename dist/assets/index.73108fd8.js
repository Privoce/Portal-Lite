import{s as m,a as n,r as a,j as c}from"./index.adf820fb.js";import{L as C}from"./Loading.16593da1.js";import{I}from"./Close.4951d652.js";import{u as T}from"./hooks.a478aa3b.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const d="jinrishici-token";function E(e,t){return window.localStorage&&window.localStorage.getItem(d)?D(e,t,window.localStorage.getItem(d)):L(e,t)}function L(e,t){return f(function(o){window.localStorage.setItem(d,o.token),e(o)},t,"https://v2.jinrishici.com/one.json?client=npm-sdk/1.0")}function D(e,t,r){return f(e,t,"https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token="+encodeURIComponent(r))}function f(e,t,r){var o=new XMLHttpRequest;o.open("get",r),o.withCredentials=!0,o.send(),o.onreadystatechange=function(){if(o.readyState===4){var i=JSON.parse(o.responseText);i.status==="success"?e(i):t&&t(i)}}}const W=m.button`
  padding: 0.05rem;
  border-radius: 50%;
  line-height: 1;
  border: 1px solid #666;
  position: absolute;
  top: 0.14rem;
  left: 0.14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.4;
  font-size: 0.1rem;
  &:hover {
    opacity: 1;
  }
`;function b({children:e,...t}){return n(W,{...t,children:e})}const B=m.div`
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
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .lines {
    padding: 0.05rem 0.1rem;
    .line {
      font-size: 0.14rem;
      line-height: 1.5;
      margin-bottom: 0.2rem;
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
`;function R({content:e}){const[t,r]=a.exports.useState(!1),o=()=>{r(i=>!i)};return t?c(B,{children:[n(I,{className:"icon_close",onClick:o}),n("div",{className:"lines",children:e.map(i=>n("p",{className:"line",children:i},i))})]}):n(b,{onClick:o,style:{left:".45rem"},children:"\u8BD1"})}const q=m.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.4rem;
  height: 100%;
  /* background-color: ; */
  background: url('https://static.nicegoodthings.com/privoce/shici.chuan.png') no-repeat,
    url('https://static.nicegoodthings.com/privoce/shici.ddh.png') no-repeat,
    url('https://colors.ichuantong.cn/static/media/bg.texture.dd29a028.png'), #eedeb0;
  background-size: 1.5rem auto, 0.5rem auto;
  background-position: left bottom, right bottom;
  .shici {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.1rem;
    padding: 0.2rem;
    background-color: rgba(2, 2, 2, 0.4);
    border-radius: 5px;
    color: #fff;
    max-height: 100%;
    overflow-y: overlay;
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #333;
    }
    .title {
      color: inherit;
      font-size: 0.25rem;
      font-weight: 800;
      margin-bottom: 0.08rem;
    }
    .author {
      color: #eee;
      font-size: 0.1rem;
      margin-bottom: 0.12rem;
    }
    .lines {
      display: flex;
      flex-direction: column;
      align-items: center;
      .line {
        font-size: 0.2rem;
        line-height: 1.5;
        margin-bottom: 0.05rem;
        &.famous {
          font-weight: 800;
        }
      }
    }
  }
`;function J({name:e}){const{getWidgetSetting:t,updateWidgetSetting:r}=T();let o=t({name:e});const[i,x]=a.exports.useState(o),[w,l]=a.exports.useState(!o),[p,y]=a.exports.useState(""),u=a.exports.useCallback(()=>{l(!0),E(s=>{const{status:z,data:h}=s;z=="success"&&(x(h),r({name:e,data:{...h,storedate:new Date().toDateString()}})),l(!1)},({errMessage:s})=>{l(!1),y(s)})},[e]);if(a.exports.useEffect(()=>{i||u()},[i]),w)return n(C,{});if(p)throw new Error(p);const{origin:{title:S,dynasty:k,author:v,content:N,translate:g}}=i,j=i.content;return c(q,{children:[g&&n(R,{content:g}),c("div",{className:"shici",children:[n("h2",{className:"title",children:S}),c("em",{className:"author",children:[v," \xB7 ",k]}),n("div",{className:"lines",children:N.map(s=>n("p",{className:`line ${s==j?"famous":""}`,children:s},s))})]}),n(b,{className:"refresh",onClick:u,children:"\u6362"})]})}export{J as default};

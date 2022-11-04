import{r as h,j as E,a as i,s as W,c as oe,l as _,U as ne,F as ie}from"./index.adf820fb.js";import{I as ae}from"./icon.logo.d6d18bf6.js";import{b as se}from"./index.esm.01905522.js";import{g as $,v as le}from"./util.430bf2a4.js";import{d as ee,e as te}from"./bodyScrollLock.esm.8c6ab430.js";import{I as ce}from"./icon.close.46ef2662.js";import{u as de}from"./hooks.a478aa3b.js";import{S as ue}from"./sortable.complete.esm.2f95bf31.js";import"./iconBase.a38ac1cb.js";const me=W.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 0.2rem;
  position: relative;
  padding-bottom: 0.32rem;
  width: 1.08rem;
  user-select: none;

  .icon {
    position: relative;
    width: 1.08rem;
    height: 1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({bgColor:n})=>n};

    box-shadow: 0rem 0rem 0.08rem 0rem #dfdfdf;
    border-radius: 0.24rem;
    transition: all 0.5s;
    img {
      height: 0.36rem;
    }
    .history {
      position: absolute;
      bottom: 6px;
      right: 6px;
    }
  }
  &:hover .icon {
    box-shadow: 0rem 0.08rem 0.16rem 0rem #ececec,
      0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5), 0rem 0.04rem 0.24rem 0rem #a8a8a8;
  }
  .title {
    margin: 0.1rem 0 0 0;
    font-size: 0.14rem;
    font-weight: 400;
    line-height: 0.2rem;
    text-align: center;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &.add {
    .icon {
      background: #f9f9f9;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        background-color: #999;
      }
      &:before {
        width: 0.28rem;
        height: 2px;
      }
      &:after {
        width: 2px;
        height: 0.28rem;
      }
    }
  }
`;function K({addTitle:n="\u6DFB\u52A0\u5BFC\u822A",data:f={},showMenu:l=null,add:a,className:u,...v}){const{themeColor:x="#333",icon:d="",title:y="\u6807\u9898",url:w="",history:N=!1,frame:p}=f,[c,m]=h.exports.useState(d),g=()=>{m(ae)},B=I=>{if(I.preventDefault(),l){let D=I.clientX,F=I.clientY;l({position:{left:D,top:F},widget:f})}return!1};return E(me,{className:`inside ${a&&"add"} ${u}`,bgColor:x,onContextMenu:N?null:B,title:w,...v,children:[E("div",{className:"icon",children:[!a&&i("img",{onError:g,src:c||`${$(w)}`,alt:"logo"}),N&&i(se,{className:"history",color:"#ddd"})]}),E("h2",{className:"title",children:[a?n:y," ",p?"\u{1F5A5}\uFE0F":""]})]})}var re={exports:{}};/**
* Generate unique and beautiful colors from any texts or numbers
 * @version v1.0.2
 * @link https://github.com/dastoori/uniqolor#README
 * @author Rasool Dastoori
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */(function(n,f){(function(l,a){n.exports=a()})(oe,function(){function l(r,e){return v(r)||d(r,e)||y(r,e)||p()}function a(r){return u(r)||x(r)||y(r)||N()}function u(r){if(Array.isArray(r))return w(r)}function v(r){if(Array.isArray(r))return r}function x(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function d(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var o=[],s=!0,k=!1,C,S;try{for(t=t.call(r);!(s=(C=t.next()).done)&&(o.push(C.value),!(e&&o.length===e));s=!0);}catch(M){k=!0,S=M}finally{try{!s&&t.return!=null&&t.return()}finally{if(k)throw S}}return o}}function y(r,e){if(!!r){if(typeof r=="string")return w(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(r,e)}}function w(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function N(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c=[0,100],m=[0,100],g=function(e){return"".concat(e.length===1?"0":"").concat(e)},B=function(e,t,o){return Math.max(Math.min(e,o),t)},I=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},D=function(e){for(var t=e.length,o=0,s=0;s<t;s++)o=(o<<5)-o+e.charCodeAt(s),o&=o;return o},F=function(e,t){return typeof t=="number"?t:e%Math.abs(t[1]-t[0])+t[0]},A=function(e,t){return typeof e=="number"?B.apply(void 0,[Math.abs(e)].concat(a(t))):e.length===1||e[0]===e[1]?B.apply(void 0,[Math.abs(e[0])].concat(a(t))):[Math.abs(B.apply(void 0,[e[0]].concat(a(t)))),B.apply(void 0,[Math.abs(e[1])].concat(a(t)))]},b=function(e,t,o){return o<0?o+=1:o>1&&(o-=1),o<1/6?e+(t-e)*6*o:o<1/2?t:o<2/3?e+(t-e)*(2/3-o)*6:e},Q=function(e,t,o){var s,k,C;if(e/=360,t/=100,o/=100,t===0)s=k=C=o;else{var S=o<.5?o*(1+t):o+t-o*t,M=2*o-S;s=b(M,S,e+1/3),k=b(M,S,e),C=b(M,S,e-1/3)}return[Math.round(s*255),Math.round(k*255),Math.round(C*255)]},R=function(e,t,o,s){return(e*299+t*587+o*114)/1e3>=s},H=function(e,t,o){return"hsl(".concat(e,", ").concat(t,"%, ").concat(o,"%)")},T=function(e,t,o,s){switch(s){case"rgb":return"rgb(".concat(e,", ").concat(t,", ").concat(o,")");case"hex":default:return"#".concat(g(e.toString(16))).concat(g(t.toString(16))).concat(g(o.toString(16)))}},P=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=t.format,s=o===void 0?"hex":o,k=t.saturation,C=k===void 0?[50,55]:k,S=t.lightness,M=S===void 0?[50,60]:S,O=t.differencePoint,Y=O===void 0?130:O,z=Math.abs(D(String(e))),q=F(z,[0,360]),U=F(z,A(C,c)),J=F(z,A(M,m)),V=Q(q,U,J),G=l(V,3),L=G[0],j=G[1],X=G[2];return{color:s==="hsl"?H(q,U,J):T(L,j,X,s),isLight:R(L,j,X,Y)}};return P.random=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.format,t=e===void 0?"hex":e,o=r.saturation,s=o===void 0?[50,55]:o,k=r.lightness,C=k===void 0?[50,60]:k,S=r.differencePoint,M=S===void 0?130:S;s=A(s,c),C=A(C,m);var O=I(0,360),Y=typeof s=="number"?s:I.apply(void 0,a(s)),z=typeof C=="number"?C:I.apply(void 0,a(C)),q=Q(O,Y,z),U=l(q,3),J=U[0],V=U[1],G=U[2];return{color:t==="hsl"?H(O,Y,z):T(J,V,G,t),isLight:R(J,V,G,M)}},P})})(re);const he=re.exports,fe=document.querySelector("#modal-root"),ge=W.section`
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
    background: var(--modal-bg-color, #fff);
    border-radius: 0.04rem;
    /* padding: 0.7rem 0.25rem 0.35rem 0.25rem; */
    padding: 0.7rem 0.25rem 0 0.25rem;
    width: 8.16rem;

    .add {
      padding: 0 0.2rem;
      padding-bottom: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .title {
        width: 1.42rem;
        margin-right: 0.44rem;
      }
      .url {
        width: 3.24rem;
        margin-right: 0.44rem;
      }
      .url,
      .title {
        background: none;
        margin-bottom: 0.1rem;
        font-size: 0.16rem;
        font-weight: 400;
        line-height: 0.22rem;
        padding: 0.1rem 0.08rem;
        border-radius: 0.04rem;
        border: 0.01rem solid #e0e0e0;
        border-color: var(--input-border-color, #e0e0e0);
        color: var(--input-font-color, #080008);
        &::placeholder {
          font-size: 0.14rem;
        }
      }
      .btn {
        display: inherit;
        position: relative;
        margin-bottom: 0.1rem;
        button {
          padding: 0.1rem 0.5rem;
          background: #4e6df2;
          border-radius: 0.04rem;
          font-size: 0.16rem;
          font-weight: 500;
          color: #ffffff;
          line-height: 0.22rem;
          white-space: nowrap;
        }
        .tip {
          position: absolute;
          left: 0;
          bottom: -0.26rem;
          font-size: 0.13rem;
          font-weight: 400;
          color: #ff2323;
          line-height: 0.18rem;
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
      .add {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;function Ae({lang:n,resetModalVisible:f,addApp:l}){const[a,u]=h.exports.useState(""),[v,x]=h.exports.useState(""),[d,y]=h.exports.useState(""),w=h.exports.useRef(null);h.exports.useEffect(()=>{let c=w||w.current;return c&&ee(c),()=>{te(c)}},[]);const N=()=>{let c=d;if(!v){u("\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A");return}if(!d){u("\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A");return}if(d.startsWith("http")||(c=`http://${d}`),!le(c)){u("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5730\u5740");return}const{color:m}=he.random({saturation:100,lightness:[70,80]});let{success:g,msg:B}=l({title:v,url:c,themeColor:m});if(!g){alert(B);return}f()},p=c=>{let{value:m}=c.target;c.target.className=="title"?x(m):y(m)};return i(pe,{ref:w,children:i(ge,{children:E("div",{className:"modal",children:[E("div",{className:"add",children:[i("input",{placeholder:n.placeholder.name,onChange:p,value:v,className:"title"}),i("input",{placeholder:n.placeholder.url,onChange:p,value:d,className:"url"}),E("div",{className:"btn",children:[i("button",{onClick:N,children:n.add}),a&&i("div",{className:"tip",children:a})]})]}),i("img",{src:ce,onClick:f,className:"close"})]})})})}const pe=({children:n})=>_.exports.createPortal(n,fe),be=W.ul`
  z-index: 999;
  position: fixed;
  background: #ffffff;

  box-shadow: 0rem 0.02rem 0.12rem 0rem rgba(153, 153, 153, 0.8);
  border-radius: 0.03rem;
  border: 0.01rem solid #e8e8e8;
  padding: 0.12rem 0.16rem;
  list-style: none;
  margin: 0;
  .item {
    cursor: pointer;
    font-size: 0.14rem;
    font-weight: 400;
    color: #333333;
    line-height: 0.2rem;
    &:not(:last-child) {
      margin-bottom: 0.12rem;
    }
  }
`,ve=({left:n=0,top:f=0,currApp:l={},removeApp:a})=>{const{url:u}=l;return E(be,{style:{left:n,top:f},children:[i("li",{className:"item",onClick:()=>{window.open(u,"_blank")},children:"\u65B0\u6807\u7B7E\u9875\u6253\u5F00"}),i("li",{className:"item",onClick:()=>{confirm("\u786E\u5B9A\u5220\u9664\uFF1F")&&a(l)},children:"\u5220\u9664"}),i("li",{className:"item",onClick:()=>{alert("\u6682\u672A\u5F00\u53D1..")},children:"\u7F16\u8F91"})]})},we=ve,xe=(n="",f)=>{const l=[],{getWidgetSetting:a,updateWidgetSetting:u}=de(),v=(f==null?void 0:f.local)||a({name:n})||[],[x,d]=h.exports.useState(v);return{data:x,histories:l,addNav:p=>x.filter(m=>m.url==p.url).length!=0?{success:!1,msg:"\u5730\u5740\u5DF2\u5B58\u5728"}:(d(m=>{let g=[...m,p];return u({name:n,data:g}),g}),{success:!0,data:x}),removeNav:p=>{d(c=>{let m=c.filter(g=>g.url!==p);return u({name:n,data:m}),m})},updateNavs:p=>{d(p),u({name:n,data:p})}}},ye=()=>{const[n,f]=h.exports.useState(!1),[l,a]=h.exports.useState({left:0,top:0}),[u,v]=h.exports.useState(void 0),x=({position:y,widget:w})=>{a(y),v(w),f(!0)},d=()=>{v(void 0),f(!1)};return h.exports.useEffect(()=>(document.onclick=()=>{d()},()=>{document.onclick=null}),[]),{menuVisible:n,position:l,widget:u,showMenu:x,hideMenu:d}},Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABSElEQVR4Xu2bzVHCQBiGHwqgAzuQDuBgERz0TCO24gm6QIYZOvBuDY53nTACy5oL7EjW/Z6cs0m+J9/P+2Y2I4Ifo+DxIwAzIDgBSyBLgGdgAdw1mhjvwAvQxbk/0gx4BJaNBp6H9QSscgBbYBYEwA6Y5gA+gHEQAJ+HWNMS+MqCb61B9sYngOStmwGWwDkBe0BjE8Em2FfiTgGnwImAY9Ax6Bg8I6AOUAe0RUAhpBDqafIqQZWgSvBIQCmsFFYKK4VTAnqBtpQwSmGlsFL4d5PXC+gF9AJ6gQOB8GYo/BaZ8Jukwm+T63pB6I2St/Y+VTTdIS2vAGr4BGcG3Lrwa/MeZoAZMByBfz8FOtE0B+6HY7i/8yuwSf8CueR5SnrAGni45GZ/eO4bMLnm+gK4htrPmvAlUMCunqUlJVBPFAVPIoACeE0s/QbNaWhB6t+ijAAAAABJRU5ErkJggg==",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACAElEQVR4Xu2bsS4FQRSGv1vTKhQaDYmaRkM8A8ELSCg1VKholCReAOEZhEZDLaHRKBRaajKxm9xcS86Zmbtrc/+tbvGfM3P+mdn5TrK3Q9xzAswCU3Hh2aMegFtgzZu54w0APiNi6gxx1eQSA/vAVp3VRIx1AGxb47wGPAIT1uQN6Z6ASevYXgP++/Yv6zbXZRYWmasMmLe63SfddUVec11m4R8GeHPk9qFqUcxzMgtlwLcDSW7nXvoci6Id4FwV7YCUN67TbKs8aVF0BKw253jhOMeyyrUDUo6ljoB1n+kICIREgkJh9QJqhtQNJlGX88q1ypPmJBCy2iwQEggJhARCAiGBkEAoCTqcV65VnjQngZDVZoGQQEggJBASCAmEBEJJ0OG8cq3ypDkJhKw2C4QEQgIhgZBAKD8IzRUv1xvny7hb3sprcAS4ALoNWALeIoxopQHrwFFPsRvA8aAYEL7wLle/rDkcg5gvz1u5A5aBs57VXgHOB2UHjAGHwGJR8CWwCbwMigFlnaPFj9eIwsuQVh6BhHp/hMqACjfNXa5ZqG7w924w5urKeQRq/dPUOzCUc/Z9yPUBDFvzeo/AHTBtTd6Q7h6YsY7tNWAX2LEmb0i3B4R5mh6vASFpaGJKgDENUqMoAFVoqsxPjAEh+SqwAIybR+qv8Bm4Ak69w3wBNR+OQUVD3m0AAAAASUVORK5CYII=",Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABmElEQVR4Xu2bO04EMRBE3x4CJETCHggyToEggXwhJwLBLUjgQBBBsCcgAlkaJI81H6weNFtMOVvJbrery9We9nrFwttq4evHAJgB3QjcAecBcN6AJ+AqYCMf+gCcAnsBey/ASTm+aws8A8eBifKhayCBEWkHwHvEQDb2HrjIbXUB8DXRZMnMrgGQfGqt+a8A2MUt8BPXagDUM0XJaANQqwFmwISiOIcpb4ECdWuANSBD4DfnAIvgHMo14ZwWQYtgGwFnAWeBkSzwChw1fdJ3+OGEgjSHqXw9W2B/jAHXwKbpdAOk38rtFrhsFvAInI0BoLzYPt8Toz+Bj7KD+iEnHCwDEIZQ3IAZIB7AsPtmQBhCcQNmgHgAw+6bAWEIxQ2YAeIBDLtvBoQhFDdgBvQEsLeAIBrwqoLIYAlJEIDqkthgEVEQgOqi6OBVkiAAvhorguabobGyuLfAEGWsAXoIWAQtgm0EnAWcBTIE/C+xDlH3OcDngHiu/1cPJiJwSD6ZWfyjqRTxRT+bi1BebqyrwnIhm9jhxTPgGx7dakGl+95+AAAAAElFTkSuQmCC",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADUklEQVR4Xu2aTchPQRTGf++KhaJEkoUsyIZSPgrFxgr5CCFFEflIiZDEQhZio1BSKCLybWMhlMJCPhZClLLCUrJR9Ojeuu/0vvfO3Jn78f//52zvmeec57ln7tw5M330uPX1OH+iALECelyBOAV6vADiR7BtU2AHsA8YG6AyvwAXgcN5WG0SYBTwPQBxEyKXY5sEmAK86WUBxP04sBwYH1CISitgKTAVmA7MBoZbJn4Z2AT8tvTPc1sBXMtxqEyAW8ASDwLnEhE8ICgiL+zgAmiuPgFG+GQOHAP2emDYkA8uwDDgp0fS6dB7wC7gU0mswcivHGA6BK2Aq8AqI+mXwBXgKfCiJCGXYXnkrwN/DbBgAmwBzhjgm4GzLtl7+haRF3xlAnwAJmYIaMna40nIZbgN+coEmAk8z2T7EZjkkr2nry35ygQ4ABzJkDgB7PYkZTvchXxlAjwC5mUyng88tmXg4edKvqsEKEO+awQoS74rBPAh3/EC+JLvaAFCkO9YAUKRNwX4AYzOW4VsO0JVLoMhyYureoCHEtKngW1tFiA0+ZTrhKQP8LnoH6TJCqiKfBHnfs+bEmAhoJ6AadrPa0tbmzUlgHp4qoCs1U5ewZsSYD1wPsPeh/xQQJuzr4AaNjoQsbamBFCCa4GNya5SXaWydhdYlAy+AGxwAWpSAJc883ydOkAmUBTA8jVU+SNkmcKgbrECDGlsq/r/MFvnWAENtcRspkecAnEK9FfAdlrHb0D8CDqsAjcBXYZITU0GNRuatnHJHiDN4z0w2SUp2/myFTiVAdamY7VLoIp8zZ7CJWCdSyxbAXQoqsPRrPns4FxyzPM1t9U7gZMu4LYCCFOHozokTe0bMMYlWGBfk/wvYC7wyiWOiwALgAcGuKpC289nLkE9fYckt8m2GzgHjQNcqzAuAghwP3B0AOSHwH3gtVXUck66OqcKnAFMMyBUnXr7f1yhXQUQvvnr6RoztL/uLOnDd6cMcBkBFOcGsKxMwMBjdESvJfldWdyyAijeGkCXm2eVDe4xTv3+2yEuafgIkOavQ4g5wGJgpAepoqG6m6i7xG+BwgOPIrD0eQgBbGO10i8K0MrXUmNSsQJqFLuVoWIFtPK11JhUrIAaxW5lqH868b9BHKQAVgAAAABJRU5ErkJggg==",Ne=document.querySelector("#modal-root"),Ie=ne`
from{
  opacity:0.1;
}
to{
  opacity:1;
}
`,ke=W.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 998;
  .modal {
    position: relative;
    border-radius: 0.04rem;
    padding: 0.08rem;
    min-height: 60vh;
    min-width: 375px;
    width: ${({width:n})=>n};
    height: ${({height:n})=>n};
    overflow: scroll;
    border: 1px solid rgba(22, 22, 22, 0.6);
    resize: horizontal;
    background: #fff;
    animation: ${Ie} 1s ease-in-out;
    .loading {
      color: ${({themeColor:n})=>n};
      z-index: 996;
      font-size: 0.22rem;
      font-weight: 800;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    .iframe-container {
      z-index: 998;
      overflow: hidden;
      /* 16:9 aspect ratio */
      /* padding-top: 56.25%; */
      height: 100%;
      position: relative;
      transition: all 0.5s ease-in-out;
      iframe {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border: 0;
      }
    }

    @media screen and (max-width: 414px) {
      width: 5rem;
      .add {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  &.loading .modal {
    background: rgba(2, 2, 2, 0.8);
  }
  .setting {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    font-size: 0.1rem;
    z-index: 999;
    .btn {
      background: #fff;
      width: 0.4rem;
      height: 0.4rem;
      padding: 0.1rem;
      border: 1px solid ${({themeColor:n})=>n};
      border-radius: 50%;
      box-shadow: 0 0 8px 2px #484848;
      &:not(:last-child) {
        margin-bottom: 0.1rem;
      }
      img {
        width: 100%;
      }
    }
  }
  .close {
    z-index: 999;
    cursor: pointer;
    width: 0.4rem;
    height: 0.4rem;
    background: #fff;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
    border-radius: 50%;
    border: 1px solid #222;
    box-shadow: 0 0 8px 2px #484848;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      display: block;
      background-color: #333;
    }
    &:before {
      width: 0.24rem;
      height: 2px;
    }
    &:after {
      width: 2px;
      height: 0.24rem;
    }
  }
  .info {
    position: absolute;
    left: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    .logo {
      width: 0.5rem;
      height: 0.5rem;
      border: 1px solid ${({themeColor:n})=>n};
      border-radius: 50%;
      padding: 0.12rem;
      margin-bottom: 0.2rem;
      img {
        width: 100%;
      }
    }
    .title {
      writing-mode: vertical-lr;
      letter-spacing: 0.05rem;
      text-shadow: 0 0 7px ${({themeColor:n})=>n};
    }
  }
`,Z={mobile:{width:"375px",height:"667px"},pc:{width:"100vw",height:"100vh"}};function Fe({app:n={},resetCurrApp:f}){const{url:l="",title:a="",icon:u="",themeColor:v,size:x="pc"}=n,d=Z[x]||{width:"8.16rem",height:"auto"},[y,w]=h.exports.useState(d),[N,p]=h.exports.useState(!0),[c,m]=h.exports.useState(!1),g=h.exports.useRef(null),B=h.exports.useRef(null),I=()=>{setTimeout(()=>{m(!0)},500)},D=()=>{let b=g.current;try{var Q=b.contentWindow.document.body.scrollHeight,R=b.contentWindow.document.documentElement.scrollHeight,H=Math.min(Q,R);b.height=H+50}catch{}finally{p(!1)}},F=b=>{let Q=Z[b]||{};w(Q)},A=()=>{g.current.requestFullscreen()};return h.exports.useEffect(()=>{const b=B||B.current;return ee(b),()=>{te(b)}},[]),l?i(Me,{ref:B,children:E(ke,{...y,themeColor:v,className:N?"loading":"",children:[E("div",{className:"modal",onAnimationEnd:I,children:[N&&i("div",{className:"loading",children:"\u52A0\u8F7D\u4E2D..."}),i("div",{className:"iframe-container",children:c&&i("iframe",{rel:"nofollow",ref:g,src:l,onLoad:D,frameBorder:"0"})})]}),i("div",{onClick:f,className:"close"}),E("div",{className:"info",children:[i("div",{className:"logo",children:i("img",{src:u||`${$(l)}`,alt:"\u56FE\u6807"})}),i("h2",{className:"title",children:a})]}),E("div",{className:"setting",children:[i("button",{className:"btn",onClick:()=>{F("mobile")},children:i("img",{src:Ce,alt:"\u624B\u673A\u89C6\u56FE"})}),i("button",{className:"btn",onClick:()=>{F("pc")},children:i("img",{src:Be,alt:"PC\u89C6\u56FE"})}),i("button",{className:"btn",onClick:A,children:i("img",{src:Ee,alt:"\u5168\u5C4F"})}),i("a",{className:"btn",href:l,target:"_blank",children:i("img",{src:Se,alt:"\u65B0\u7A97\u53E3\u6253\u5F00"})})]})]})}):null}const Me=({children:n})=>_.exports.createPortal(n,Ne),Qe=W.section`
  width: 100%;
  padding: 0.1rem 0;
  .boxes {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: max-content;
    grid-column-gap: 0.58rem;
    justify-items: center;
    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 0.4rem;
    }
    .box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s ease;
      &.droppable {
        transform: translateX(10px);
      }
      &.ghost {
        opacity: 0.1;
      }
      &.drag,
      &.choosen {
        cursor: grabbing;
        transform: scale(0.9);
        .nav-item:hover .icon {
          box-shadow: none;
          border: 2px solid #eee;
        }
      }
    }
  }
`;function Je({readonly:n=!0,data:f,name:l,lang:a}){const{menuVisible:u,position:v,widget:x,showMenu:d}=ye(),{data:y,histories:w,addNav:N,removeNav:p,updateNavs:c}=xe(l,f),[m,g]=h.exports.useState(!1),[B,I]=h.exports.useState(null),D=A=>{const{url:b}=A;p(b)},F=A=>{A.frame?I(A):window.open(A.url,"_blank")};return h.exports.useEffect(()=>{if(!n){window.WEBAPP_NAVS=y;let A=document.querySelector("#nav-container");ue.create(A,{draggable:".box",delay:300,filter:".add",invertSwap:!0,ghostClass:"ghost",chosenClass:"choosen",dragClass:"drag",onEnd:b=>{const{item:Q,to:R,from:H,oldIndex:T,newIndex:P}=b;if(T==P)return;let r=[...window.WEBAPP_NAVS],[e]=r.splice(T,1);e&&(r.splice(P,0,e),c(r))},onClone:function(b){const{item:Q,clone:R}=b;R.style.opacity=.2}})}},[y,n]),E(ie,{children:[E(Qe,{children:[u&&!n&&i(we,{...v,currApp:x,removeApp:D}),E("ul",{className:"boxes",id:"nav-container",children:[[...w,...y].map(A=>i("li",{className:"box",children:i(K,{className:"nav-item",onClick:F.bind(null,A),showMenu:d,data:A},A.url)},`nav-${A.id}`)),!n&&i(K,{addTitle:a.addNav,add:!0,onClick:g.bind(null,!0)})]})]}),m?i(Ae,{lang:a.modal,widgetName:l,addApp:N,resetModalVisible:g.bind(null,!1)}):null,B?i(Fe,{app:B,resetCurrApp:()=>{I(null)}}):null]})}export{Je as default};

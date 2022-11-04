import{s as x,c as A,g as E,r as f,j as y,F as L,a as c,W as C,u as M,_ as v}from"./index.adf820fb.js";import{B as P}from"./index.esm.95d4feb0.js";import{I as R}from"./index.esm.7e5f9504.js";import{u as W,a as I,S as w}from"./hooks.a478aa3b.js";import{F as T}from"./Footer.531a8593.js";import"./iconBase.a38ac1cb.js";import"./index.esm.c817908c.js";const j=x.section`
  position: relative;
  margin: 0 auto;
  padding-bottom: 0.6rem;
  padding-top: 0.3rem;
  width: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .settings {
    z-index: 999;
    position: fixed;
    right: 0.2rem;
    bottom: 0.15rem;
    .toggle {
      cursor: pointer;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      padding: 0.1rem;
      z-index: 996;
      display: flex;
      align-items: center;
      box-shadow: 0 0 5px var(--box-shadow-color, #333);
      svg {
        color: #606368;
        transition: all 0.5s;
        transform-origin: center;
      }
    }
    .setting {
      margin-bottom: 0.15rem;
      position: relative;
      display: none;
      .tip {
        visibility: hidden;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(-120%, -50%, 0);
        padding: 0.1rem 0.14rem;
        font-size: 0.14rem;
        font-weight: 800;
        color: #fff;
        background-color: #222;
        border-radius: 5px;
        white-space: nowrap;
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          right: -0.06rem;
          display: block;
          width: 0.12rem;
          height: 0.12rem;
          background-color: inherit;
          transform-origin: center;
          transform: translateY(-50%) rotate(45deg);
        }
      }
      &:hover .tip {
        visibility: visible;
      }
    }
    &.expanded {
      .setting {
        display: block;
      }
    }
  }
  /* 响应式布局 */
  @media (min-width: 320px) and (max-width: 480px) {
    .search {
      width: 4.68rem;
    }
  }
  @media (min-width: 320px) and (max-width: 768px) {
    width: 95%;
  }
`,z=j;var _={exports:{}};(function(k,h){(function(i,n){k.exports=n()})(typeof self<"u"?self:A,function(){return function(g){var i={};function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return g[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=g,n.c=i,n.d=function(e,o,u){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:u})},n.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(o&1&&(e=n(e)),o&8||o&4&&typeof e=="object"&&e&&e.__esModule)return e;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),o&2&&typeof e!="string")for(var a in e)n.d(u,a,function(p){return e[p]}.bind(null,a));return u},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s="./src/index.js")}({"./src/darkmode.js":function(g,i,n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=i.IS_BROWSER=void 0;function e(s,t){if(!(s instanceof t))throw new TypeError("Cannot call a class as a function")}function o(s,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(s,r.key,r)}}function u(s,t,l){return t&&o(s.prototype,t),l&&o(s,l),s}var a=typeof window<"u";i.IS_BROWSER=a;var p=function(){function s(t){if(e(this,s),!!a){var l={bottom:"32px",right:"32px",left:"unset",time:"0.3s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#100f2c",buttonColorLight:"#fff",label:"",saveInCookies:!0,autoMatchOsTheme:!0};t=Object.assign({},l,t);var r=`
      .darkmode-layer {
        position: fixed;
        pointer-events: none;
        background: `.concat(t.mixColor,`;
        transition: all `).concat(t.time,` ease;
        mix-blend-mode: difference;
      }

      .darkmode-layer--button {
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 50%;
        right: `).concat(t.right,`;
        bottom: `).concat(t.bottom,`;
        left: `).concat(t.left,`;
      }

      .darkmode-layer--simple {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(1) !important;
      }

      .darkmode-layer--expanded {
        transform: scale(100);
        border-radius: 0;
      }

      .darkmode-layer--no-transition {
        transition: none;
      }

      .darkmode-toggle {
        background: `).concat(t.buttonColorDark,`;
        width: 3rem;
        height: 3rem;
        position: fixed;
        border-radius: 50%;
        border:none;
        right: `).concat(t.right,`;
        bottom: `).concat(t.bottom,`;
        left: `).concat(t.left,`;
        cursor: pointer;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .darkmode-toggle--white {
        background: `).concat(t.buttonColorLight,`;
      }

      .darkmode-toggle--inactive {
        display: none;
      }

      .darkmode-background {
        background: `).concat(t.backgroundColor,`;
        position: fixed;
        pointer-events: none;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .darkmode-toggle {display: none !important}
      }

      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {
        .darkmode-toggle {display: none !important}
      }
    `),d=document.createElement("div"),m=document.createElement("button"),b=document.createElement("div");m.innerHTML=t.label,m.classList.add("darkmode-toggle--inactive"),d.classList.add("darkmode-layer"),b.classList.add("darkmode-background");var S=window.localStorage.getItem("darkmode")==="true",D=t.autoMatchOsTheme&&window.matchMedia("(prefers-color-scheme: dark)").matches,O=window.localStorage.getItem("darkmode")===null;(S===!0&&t.saveInCookies||O&&D)&&(d.classList.add("darkmode-layer--expanded","darkmode-layer--simple","darkmode-layer--no-transition"),m.classList.add("darkmode-toggle--white"),document.body.classList.add("darkmode--activated")),document.body.insertBefore(m,document.body.firstChild),document.body.insertBefore(d,document.body.firstChild),document.body.insertBefore(b,document.body.firstChild),this.addStyle(r),this.button=m,this.layer=d,this.saveInCookies=t.saveInCookies,this.time=t.time}}return u(s,[{key:"addStyle",value:function(l){var r=document.createElement("link");r.setAttribute("rel","stylesheet"),r.setAttribute("type","text/css"),r.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(l)),document.head.appendChild(r)}},{key:"showWidget",value:function(){var l=this;if(!!a){var r=this.button,d=this.layer,m=parseFloat(this.time)*1e3;r.classList.add("darkmode-toggle"),r.classList.remove("darkmode-toggle--inactive"),r.setAttribute("aria-label","Activate dark mode"),r.setAttribute("aria-checked","false"),r.setAttribute("role","checkbox"),d.classList.add("darkmode-layer--button"),r.addEventListener("click",function(){var b=l.isActivated();b?(d.classList.remove("darkmode-layer--simple"),r.setAttribute("disabled",!0),setTimeout(function(){d.classList.remove("darkmode-layer--no-transition"),d.classList.remove("darkmode-layer--expanded"),r.removeAttribute("disabled")},1)):(d.classList.add("darkmode-layer--expanded"),r.setAttribute("disabled",!0),setTimeout(function(){d.classList.add("darkmode-layer--no-transition"),d.classList.add("darkmode-layer--simple"),r.removeAttribute("disabled")},m)),r.classList.toggle("darkmode-toggle--white"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!b)})}}},{key:"toggle",value:function(){if(!!a){var l=this.layer,r=this.isActivated(),d=this.button;l.classList.toggle("darkmode-layer--simple"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!r),d.setAttribute("aria-label","De-activate dark mode"),d.setAttribute("aria-checked","true")}}},{key:"isActivated",value:function(){return a?document.body.classList.contains("darkmode--activated"):null}}]),s}();i.default=p},"./src/index.js":function(g,i,n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=o(n("./src/darkmode.js"));function o(a){if(a&&a.__esModule)return a;var p={};if(a!=null){for(var s in a)if(Object.prototype.hasOwnProperty.call(a,s)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,s):{};t.get||t.set?Object.defineProperty(p,s,t):p[s]=a[s]}}return p.default=a,p}var u=e.default;i.default=u,e.IS_BROWSER&&function(a){a.Darkmode=e.default}(window),g.exports=i.default}})})})(_);const B=E(_.exports),F=C`
  :root{
    /* common */
    --border-color:#efefef;
    --box-shadow-color:#dfdfdf;
    --input-bg-color:#fff;
    --input-font-color:#222;
    --input-border-color:#e0e0e0;
    /* widget */
    --widget-bg-color:#fff;
    --widget-setting-bg-color:#fff;
    --widget-title-font-color:#333;
    --widget-border-color:#ececec;
    --widget-link-color:#bbdaff;
    --widget-font-color:#000;
    --widget-box-shadow-color:#999;

    /* modal */
    --modal-bg-color:#fff;
    --modal-font-color:#222;
  }
  .darkmode--activated {
    /* common */
    --border-color:#666;
    --box-shadow-color:#333;
    --input-bg-color:#666;
    --input-font-color:#eee;
    --input-border-color:#ccc;
    /* widget */
    --widget-bg-color:#333;
    --widget-setting-bg-color:#aaa;
    --widget-title-font-color:#fff;
    --widget-border-color:#666;
    --widget-link-color:#bbdaff;
    --widget-font-color:#ccc;
    --widget-box-shadow-color:#999;
    /* modal */
    --modal-bg-color:#333;
    --modal-font-color:#fff;
  }
`,N=x.button`
  font-size: 0.26rem;
  transition: all 0.5s;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  padding: 0.1rem;
  z-index: 996;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #333;
  &.dark {
    background-color: #eee !important;
  }
  &.light {
    background-color: #003c71 !important;
  }
`,q={saveInCookies:!0};window.DARK_MODE=new B(q);function K(){const{getWidgetSetting:k}=W(),[h,g]=f.exports.useState(window.DARK_MODE.isActivated());let i=k({key:"bg"});if(i){let e=document.querySelector(".darkmode-background"),o=document.querySelector(".darkmode-layer");e&&e.remove(),o&&o.remove(),document.body.style.backgroundImage=`url(${i})`}return y(L,{children:[c(F,{}),c(N,{onClick:()=>{k({key:"bg"})?(g(o=>!o),document.body.classList.toggle("darkmode--activated")):(window.DARK_MODE.toggle(),g(window.DARK_MODE.isActivated()))},className:h?"dark":"light",children:h?"\u2600\uFE0F":"\u{1F319}"})]})}const V=f.exports.lazy(()=>v(()=>import("./index.c988ef2c.js"),["assets/index.c988ef2c.js","assets/index.adf820fb.js","assets/index.esm.01905522.js","assets/iconBase.a38ac1cb.js","assets/bodyScrollLock.esm.8c6ab430.js","assets/icon.close.46ef2662.js","assets/hooks.a478aa3b.js","assets/index.esm.95d4feb0.js","assets/index.esm.4b8699df.js","assets/index.7b8e2464.js","assets/index.76cc53c3.js"])),U=f.exports.lazy(()=>v(()=>import("./index.ea207be1.js"),["assets/index.ea207be1.js","assets/index.adf820fb.js","assets/index.esm.9ed488a3.js","assets/iconBase.a38ac1cb.js","assets/index.esm.6c785b3e.js"])),H=f.exports.lazy(()=>v(()=>import("./index.38e42124.js"),["assets/index.38e42124.js","assets/index.adf820fb.js","assets/hooks.a478aa3b.js","assets/icon.close.46ef2662.js","assets/index.esm.c817908c.js","assets/iconBase.a38ac1cb.js","assets/index.baa74f88.css"])),$=f.exports.lazy(()=>v(()=>import("./index.4803639f.js"),["assets/index.4803639f.js","assets/index.adf820fb.js","assets/index.esm.01905522.js","assets/iconBase.a38ac1cb.js","assets/index.esm.9ed488a3.js","assets/hooks.a478aa3b.js","assets/index.esm.4b8699df.js","assets/index.76cc53c3.js","assets/index.3e85e345.js"])),G=f.exports.lazy(()=>v(()=>import("./WidgetSection.8b16b488.js"),["assets/WidgetSection.8b16b488.js","assets/index.adf820fb.js","assets/hooks.a478aa3b.js","assets/index.a7993bd8.js","assets/iconBase.a38ac1cb.js","assets/index.esm.95d4feb0.js","assets/index.esm.6c785b3e.js","assets/Close.4951d652.js","assets/sortable.complete.esm.2f95bf31.js"]));function oe(){const{widgets:k,removeWidget:h,updateWidgetData:g,addWidget:i}=I(),[n,e]=f.exports.useState(!1),[o]=f.exports.useState(navigator.language=="zh-CN"?"zh-CN":"en-US"),[u,a]=f.exports.useState(!1),[p,s]=f.exports.useState(""),{language:t}=M.useLanguage(),l=()=>{e(d=>!d)},r=d=>{var m;if(d){let b=(m=window.DARK_MODE)==null?void 0:m.isActivated();s(b?"Light Mode":"Dark Mode")}};return f.exports.useEffect(()=>{r(!0)},[]),y(f.exports.Suspense,{fallback:c(w,{count:10}),children:[y(z,{children:[y("ul",{className:`settings ${n?"expanded":""}`,children:[[{comp:c(U,{}),tip:"Share My Portal"},{comp:c(H,{setSyncing:a}),tip:"Profile"},{comp:c($,{locale:o,addedWidgets:k,removeWidget:h,addWidget:i}),tip:"Widget Store"},{comp:c(V,{lang:t.words.setting}),tip:"Setting"},{type:"dark",comp:c(K,{}),tip:p}].map(({comp:d,tip:m,type:b})=>y("li",{className:"setting",onClick:r.bind(null,b=="dark"),children:[d,c("span",{className:"tip",children:m})]},m)),c("li",{className:"toggle",onClick:l,children:n?c(R,{}):c(P,{})})]}),c(f.exports.Suspense,{fallback:c(w,{count:5}),children:c(G,{reloading:u,widgets:k,removeWidget:h,updateWidgetData:g})})]}),c(T,{})]})}export{oe as default};

var J=Object.defineProperty;var K=(e,r,t)=>r in e?J(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var A=(e,r,t)=>(K(e,typeof r!="symbol"?r+"":r,t),t);import{r as s,j as u,a as i,s as W,i as Q,b as X,d as Y,u as Z,F as ee}from"./index.adf820fb.js";import{G as te}from"./iconBase.a38ac1cb.js";import{c as re,d as ie}from"./index.esm.95d4feb0.js";import{u as B,S as oe}from"./hooks.a478aa3b.js";import{l as ne,I as se}from"./index.esm.6c785b3e.js";import{I as ae}from"./Close.4951d652.js";var _=new Map,E=new WeakMap,T=0,le=void 0;function ce(e){return e?(E.has(e)||(T+=1,E.set(e,T.toString())),E.get(e)):"0"}function de(e){return Object.keys(e).sort().filter(function(r){return e[r]!==void 0}).map(function(r){return r+"_"+(r==="root"?ce(e.root):e[r])}).toString()}function ge(e){var r=de(e),t=_.get(r);if(!t){var o=new Map,g,n=new IntersectionObserver(function(h){h.forEach(function(c){var a,l=c.isIntersecting&&g.some(function(f){return c.intersectionRatio>=f});e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(a=o.get(c.target))==null||a.forEach(function(f){f(l,c)})})},e);g=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:n,elements:o},_.set(r,t)}return t}function he(e,r,t,o){if(t===void 0&&(t={}),o===void 0&&(o=le),typeof window.IntersectionObserver>"u"&&o!==void 0){var g=e.getBoundingClientRect();return r(o,{isIntersecting:o,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:g,intersectionRect:g,rootBounds:g}),function(){}}var n=ge(t),h=n.id,c=n.observer,a=n.elements,l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(r),c.observe(e),function(){l.splice(l.indexOf(r),1),l.length===0&&(a.delete(e),c.unobserve(e)),a.size===0&&(c.disconnect(),_.delete(h))}}function ue(e){var r,t=e===void 0?{}:e,o=t.threshold,g=t.delay,n=t.trackVisibility,h=t.rootMargin,c=t.root,a=t.triggerOnce,l=t.skip,f=t.initialInView,b=t.fallbackInView,C=t.onChange,v=s.exports.useState(null),m=v[0],x=v[1],w=s.exports.useRef(),p=s.exports.useState({inView:!!f,entry:void 0}),k=p[0],V=p[1];w.current=C,s.exports.useEffect(function(){if(!(l||!m)){var S=he(m,function($,N){V({inView:$,entry:N}),w.current&&w.current($,N),N.isIntersecting&&a&&S&&(S(),S=void 0)},{root:c,rootMargin:h,threshold:o,trackVisibility:n,delay:g},b);return function(){S&&S()}}},[Array.isArray(o)?o.toString():o,m,c,h,a,l,n,b,g]);var z=(r=k.entry)==null?void 0:r.target;s.exports.useEffect(function(){!m&&z&&!a&&!l&&V({inView:!!f,entry:void 0})},[m,z,a,l,f]);var y=[x,k.inView,k.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}function fe(e){return te({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(e)}const me=W.div`
  width: 100%;
  height: 100%;
  font-size: 0.18rem;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({bg:e})=>e};
  flex-direction: column;
  .icon {
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;
    width: 1rem;
    height: 1rem;
    opacity: 0.5;
  }
  .tip {
    line-height: 1.4;
    text-align: center;
    max-width: 90%;
  }
  .reload {
    padding: 0.06rem 0.12rem;
    border-radius: 5px;
    border: 1px solid #eee;
    margin-top: 0.4rem;
    font-size: 0.18rem;
    color: inherit;
  }
`;function pe({tip:e="\u63A5\u53E3\u51FA\u9519\u5566~~~",bg:r="inherit",reload:t=null,reloadTxt:o="Reload"}){return u(me,{bg:r,children:[i(re,{color:"#fe6b23",className:"icon"}),u("h3",{className:"tip",children:[" ",e]}),t&&i("button",{className:"reload",onClick:t,children:o})]})}class be extends s.exports.Component{constructor(t){super(t);A(this,"handleReload",()=>{this.setState({hasError:!1})});this.state={hasError:!1,msg:""}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,o){t!=null&&t.message&&this.setState({msg:t.message})}render(){if(this.state.hasError){const{error:t,reload:o}=this.props.lang;return i(pe,{tip:this.state.msg||t,reloadTxt:o,reload:this.handleReload})}return this.props.children}}const ve=W.div`
  /* content-visibility: auto; */
  width: 6.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .container {
    user-select: none;
    overflow-y: scroll;
    overflow-y: overlay;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    height: 3.1rem;
    color: var(--widget-font-color, #333);
    background-color: var(--widget-bg-color, #fff);
    box-shadow: 0rem 0rem 0.08rem 0rem var(--box-shadow-color, #dfdfdf);
    border-radius: 0.24rem;
    border: 0.01rem solid var(--widget-border-color, #ececec);
    padding: 0.29rem 0.21rem;
    transition: all 0.8s ease-in-out;
    .remove {
      cursor: pointer;
      bottom: 0.05rem;
    }
    .widget_setting_wrapper {
      z-index: 10;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &.visible {
        visibility: visible;
      }
      &.hidden {
        visibility: hidden;
      }
      > .close {
        z-index: 11;
        position: absolute;
        right: 0.14rem;
        top: 0.14rem;
        width: 0.2rem;
        height: 0.2rem;
        cursor: pointer;
      }
      .setting {
        width: 100%;
        height: 100%;
      }
    }
  }
  > .title {
    user-select: none;
    width: 100%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: var(--widget-title-font-color, #333);
    line-height: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.24rem;
  }
  > .setting {
    position: absolute;
    right: 0.1rem;
    top: 0.04rem;
    z-index: 9;
    display: flex;
    padding: 0.05rem;
    cursor: pointer;
    background-color: rgba(222, 222, 222, 0.4);
    border-radius: 50%;
    width: 0.4rem;
    height: 0.4rem;
    opacity: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  > .setting_list {
    z-index: 7;
    position: absolute;
    top: 0.5rem;
    right: 0.12rem;
    display: flex;
    flex-direction: column;
    font-size: 0.14rem;
    background-color: var(--widget-setting-bg-color, #fff);
    padding: 0.14rem;
    user-select: none;
    border-radius: 5px;
    box-shadow: 0rem 0rem 0.08rem 0rem #dfdfdf;
    .item {
      cursor: pointer;
      padding: 0.05rem;
      a {
        color: #000;
        &:hover {
          color: #fff;
        }
      }
      &:not(.sizes):hover {
        color: #fff;
        background: rgba(2, 2, 2, 0.6);
      }
      &.sizes {
        /* display: flex;
        justify-content: space-a; */
        .size {
          font-size: 0.1rem;
          border: 1px solid #333;
          padding: 0.02rem 0.04rem;
          &:not(:last-child) {
            margin-right: 0.04rem;
          }
          &.curr {
            background-color: #222;
            color: #fff;
          }
        }
      }
    }
  }
  &:hover .setting {
    opacity: 1;
  }
  &.large .container {
    height: 6.74rem;
  }
  &.fullscreen {
    width: 100vw;
    height: 100vh;
    .container {
      width: 100vw;
      height: 100vh;
    }
  }
  &.noscroll .container {
    overflow: hidden;
  }
  &.compact .container {
    padding: 0;
  }
  &[type='search'],
  &[type='nav'] {
    width: 100%;

    .container {
      background: none;
      height: 100%;
      width: 100%;
      max-width: none;
      overflow: visible;
      border: none;
      box-shadow: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &[type='nav'] {
    > .setting {
      right: 0;
      top: -0.5rem;
    }
    > .setting_list {
      top: 0;
      right: 0;
    }
  }

  &:fullscreen {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    .container {
      height: fit-content;
      max-width: 8rem;
      min-height: 2.4rem;
      min-width: 4.87rem;
    }
    &.largable .container {
      height: 6.74rem;
    }
    .setting,
    .setting_list {
      display: none;
    }
  }
`,we=ve,xe=W.div`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 2, 2, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    position: relative;
    border-radius: 0.05rem;
    color: var(--modal-font-color, #333);
    background-color: var(--modal-bg-color, #fff);
    padding: 0.3rem 0.4rem;
    .title {
      font-size: 0.22rem;
      font-weight: 800;
      display: flex;
      justify-content: space-between;
      width: 100%;

      .toggle {
        cursor: pointer;
        display: inline-block;
        .toggle-switch {
          display: inline-block;
          background: #ccc;
          border-radius: 16px;
          width: 0.52rem;
          height: 0.26rem;
          position: relative;
          vertical-align: middle;
          transition: background 0.25s;
          &:before,
          &:after {
            content: '';
          }
          &:before {
            display: block;
            background: linear-gradient(to bottom, #fff 0%, #eee 100%);
            border-radius: 50%;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
            width: 0.18rem;
            height: 0.18rem;
            position: absolute;
            top: 0.035rem;
            left: 0.06rem;
            transition: left 0.25s;
          }
        }
        .toggle-checkbox {
          position: absolute;
          visibility: hidden;
          &:checked + .toggle-switch {
            background: #56c080;
            &:before {
              left: 0.28rem;
            }
          }
        }
        &:hover &:before {
          background: linear-gradient(to bottom, #fff 0%, #fff 100%);
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
        }
      }
    }
    .body {
      margin-top: 0.2rem;
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
        overflow-y: hidden;
        overflow-x: scroll;
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
        font-size: 0.18rem;
        padding: 0.08rem 0.12rem;
        color: #7e65c8;
        margin-right: 0.2rem;

        &.copy,
        &.login {
          align-items: center;
          display: flex;
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
`;let ye=location.origin;function ke({name:e,lang:r,closeModal:t}){const{authClient:o}=Q.exports.useAuthing({appId:X,appHost:Y}),{getWidgetSetting:g,updateWidgetSetting:n}=B(),[h,c]=s.exports.useState(null),[a,l]=s.exports.useState("Generating link..."),[f,b]=s.exports.useState(!1),[C,v]=s.exports.useState(g({name:e,key:"share"})),m=({target:{checked:w}})=>{v(p=>!p),n({name:e,key:"share",data:w})},x=()=>{t();let w=document.querySelector(".settings .toggle"),p=document.querySelector(".settings .setting .icon.profile");w.click(),p&&p.click()};return s.exports.useEffect(()=>{(async()=>{let{status:p}=await o.checkLoginStatus();if(!p){l("Please login first.");return}let k=await o.getCurrentUser();c(k.username)})()},[o]),s.exports.useEffect(()=>{h&&l(`${ye}/p/${h}/${e}`)},[h,e]),i(xe,{children:u("div",{className:"modal",children:[u("h3",{className:"title",children:[i("span",{className:"txt",children:r.title}),u("label",{className:"toggle",children:[i("input",{className:"toggle-checkbox",type:"checkbox",defaultChecked:C,onChange:m}),i("div",{className:"toggle-switch"})]})]}),u("div",{className:"body",children:[i("p",{className:"tip",children:r.tip}),i("div",{className:"link",children:a})]}),u("div",{className:"btns",children:[i(ne.CopyToClipboard,{text:a,onCopy:()=>{b(!0),setTimeout(()=>{b(!1)},2e3)},children:h?u("button",{disabled:!C,className:"btn copy",children:[i(ie,{}),f?r.copied:r.copy]}):i("button",{className:"btn login",onClick:x,children:"Login/Reg"})}),i("button",{className:"btn done",onClick:t,children:r.done})]}),i(se,{className:"close",onClick:t})]})})}function Ie({data:e=null,readonly:r=!1,type:t="widget",enableSetting:o=!1,standalone:g=!1,name:n,disableScroll:h=!1,removeWidget:c,title:a="\u7EC4\u4EF6\u6807\u9898",compact:l,defaultSize:f="middle",sizes:b=null,children:C=null}){var L;const{language:{words:{widget:v,widgets:m}}}=Z.useLanguage(),{opts:x}=v,{getWidgetSetting:w,updateWidgetSetting:p}=B(),[k,V]=s.exports.useState(w({name:n,key:"size"})||f),[z,y]=s.exports.useState(!1),[S,$]=s.exports.useState(!1),[N,U]=s.exports.useState(!1),{ref:D,inView:G}=ue({threshold:.1,triggerOnce:!0}),q=(d,{size:R})=>{V(R),p({name:d,key:"size",data:R})},H=d=>{var O;confirm(`${v.removing}\uFF1A${((O=m[d])==null?void 0:O.title)||a}\uFF1F`)&&c()},P=()=>{M()},M=()=>{$(d=>!d)},j=()=>{y(d=>!d)},I=s.exports.useCallback(()=>{U(d=>!d)},[]),F=b&&b.length>1;return u(we,{className:`widget ${l?"compact":""} ${h?"noscroll":""}  ${k} ${F&&b.includes("large")?"largable":""} ${z?"setting":""}`,type:t,children:[u("div",{className:"container",ref:D,children:[i(be,{lang:{error:v.error,reload:v.reload},children:u(ee,{children:[G?i(s.exports.Suspense,{fallback:i(oe,{count:4}),children:s.exports.Children.map(C,d=>s.exports.cloneElement(d,{readonly:r,data:e,lang:m[n],name:n,toggleWidgetSettingVisible:I}))}):null,u("div",{className:`widget_setting_wrapper ${N?"visible":"hidden"}`,children:[i(ae,{className:"close",onClick:I}),i("div",{className:"setting",id:`widget-${n}-setting`})]})]})}),S&&i(ke,{name:n,lang:x.shareModal,closeModal:M})]}),!N&&!S&&!r&&i("div",{className:"setting",onClick:j,children:i(fe,{})}),z&&u("ul",{className:"setting_list",onMouseLeave:j,children:[o&&i("li",{className:"item",onClick:I,children:x.setting}),!g&&i("li",{className:"item",onClick:H.bind(null,n),children:x.remove}),!g&&i("li",{className:"item",children:i("a",{href:`/widgets/${n}?from=home`,target:"_blank",rel:"noopener noreferrer",children:x.open.newTab})}),i("li",{className:"item",onClick:P,children:x.share}),F&&i("li",{className:"item sizes",children:b.map(d=>i("span",{onClick:q.bind(null,n,{size:d}),className:`size ${k==d?"curr":""}`,children:v.opts.sizes[d]},d))})]}),t=="widget"&&i("h2",{className:"title",children:((L=m[n])==null?void 0:L.title)||a})]})}export{Ie as W};

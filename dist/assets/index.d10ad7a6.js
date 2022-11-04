import{a as u,j as v,c as N,r as $,s as ie,l as Fe,F as Pe}from"./index.adf820fb.js";import{d as Ie}from"./index.a19eac14.js";import{u as De}from"./hooks.a478aa3b.js";import{f as re}from"./index.7b8e2464.js";import"./index.76cc53c3.js";var c={exports:{}},Re="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ae=Re,Ue=Ae;function ce(){}function se(){}se.resetWarningCache=ce;var qe=function(){function e(n,o,a,i,l,s){if(s!==Ue){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:se,resetWarningCache:ce};return r.PropTypes=r,r};c.exports=qe();function Be(){return Array.prototype.slice.call(arguments).reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return typeof e=="string"}).join(" ")}function ne(e){if(e instanceof Date)return e.getHours();if(typeof e=="string"){var t=e.split(":");if(t.length>=2){var r=t[0],n=parseInt(r,10);if(!isNaN(n))return n}}throw new Error("Failed to get hours from date: ".concat(e,"."))}function F(e){if(e instanceof Date)return e.getMinutes();if(typeof e=="string"){var t=e.split(":");if(t.length>=2){var r=t[1]||0,n=parseInt(r,10);if(!isNaN(n))return n}}throw new Error("Failed to get minutes from date: ".concat(e,"."))}function P(e){if(e instanceof Date)return e.getSeconds();if(typeof e=="string"){var t=e.split(":");if(t.length>=2){var r=t[2]||0,n=parseInt(r,10);if(!isNaN(n))return n}}throw new Error("Failed to get seconds from date: ".concat(e,"."))}function ue(e){return typeof e<"u"}function k(e){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}var le=function(t,r){return function(n,o,a){var i=n[o];if(ue(i)){if(typeof i!="number")return new Error("Invalid prop `".concat(o,"` of type `").concat(k(i),"` supplied to `").concat(a,"`, expected `number`."));if(i<t||i>r)return new Error("Invalid prop `".concat(o,"` of type `").concat(k(i),"` supplied to `").concat(a,"`, length must be between ").concat(t," and ").concat(r,"."))}return null}},b=le(0,100),I=le(-100,100),C=function(t,r,n){var o=t[r];if(ue(o)){if(typeof o!="number")return new Error("Invalid prop `".concat(r,"` of type `").concat(k(o),"` supplied to `").concat(n,"`, expected `number`."));if(o<0)return new Error("Invalid prop `".concat(r,"` of type `").concat(k(o),"` supplied to `").concat(n,"`, width must be greater or equal to 0."))}return null},R=b,A=C;function W(e){var t=e.angle,r=t===void 0?0:t,n=e.name,o=e.length,a=o===void 0?100:o,i=e.oppositeLength,l=i===void 0?10:i,s=e.width,d=s===void 0?1:s;return u("div",{className:"react-clock__hand react-clock__".concat(n,"-hand"),style:{transform:"rotate(".concat(r,"deg)")},children:u("div",{className:"react-clock__hand__body react-clock__".concat(n,"-hand__body"),style:{width:"".concat(d,"px"),top:"".concat(50-a/2,"%"),bottom:"".concat(50-l/2,"%")}})})}W.propTypes={angle:c.exports.number,length:b,name:c.exports.string.isRequired,oppositeLength:b,width:c.exports.number};function U(e){var t=e.angle,r=t===void 0?0:t,n=e.length,o=n===void 0?10:n,a=e.name,i=e.width,l=i===void 0?1:i,s=e.number;return v("div",{className:"react-clock__mark react-clock__".concat(a,"-mark"),style:{transform:"rotate(".concat(r,"deg)")},children:[u("div",{className:"react-clock__mark__body react-clock__".concat(a,"-mark__body"),style:{width:"".concat(l,"px"),top:0,bottom:"".concat(100-o/2,"%")}}),s&&u("div",{className:"react-clock__mark__number",style:{transform:"rotate(-".concat(r,"deg)"),top:"".concat(o/2,"%")},children:s})]})}U.propTypes={angle:c.exports.number,length:R,name:c.exports.string.isRequired,number:c.exports.oneOfType([c.exports.number,c.exports.string]),width:A};function Ge(e){return u(U,{...e})}var Je="Expected a function",de="__lodash_hash_undefined__",Ye="[object Function]",Ke="[object GeneratorFunction]",Ve=/[\\^$.*+?()[\]{}|]/g,Ze=/^\[object .+?Constructor\]$/,Xe=typeof N=="object"&&N&&N.Object===Object&&N,Qe=typeof self=="object"&&self&&self.Object===Object&&self,pe=Xe||Qe||Function("return this")();function et(e,t){return e==null?void 0:e[t]}function tt(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var rt=Array.prototype,nt=Function.prototype,he=Object.prototype,D=pe["__core-js_shared__"],oe=function(){var e=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),fe=nt.toString,q=he.hasOwnProperty,ot=he.toString,at=RegExp("^"+fe.call(q).replace(Ve,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),it=rt.splice,ct=me(pe,"Map"),w=me(Object,"create");function g(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function st(){this.__data__=w?w(null):{}}function ut(e){return this.has(e)&&delete this.__data__[e]}function lt(e){var t=this.__data__;if(w){var r=t[e];return r===de?void 0:r}return q.call(t,e)?t[e]:void 0}function dt(e){var t=this.__data__;return w?t[e]!==void 0:q.call(t,e)}function pt(e,t){var r=this.__data__;return r[e]=w&&t===void 0?de:t,this}g.prototype.clear=st;g.prototype.delete=ut;g.prototype.get=lt;g.prototype.has=dt;g.prototype.set=pt;function H(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ht(){this.__data__=[]}function ft(e){var t=this.__data__,r=j(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():it.call(t,r,1),!0}function mt(e){var t=this.__data__,r=j(t,e);return r<0?void 0:t[r][1]}function gt(e){return j(this.__data__,e)>-1}function yt(e,t){var r=this.__data__,n=j(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}H.prototype.clear=ht;H.prototype.delete=ft;H.prototype.get=mt;H.prototype.has=gt;H.prototype.set=yt;function y(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function _t(){this.__data__={hash:new g,map:new(ct||H),string:new g}}function vt(e){return z(this,e).delete(e)}function bt(e){return z(this,e).get(e)}function kt(e){return z(this,e).has(e)}function Ht(e,t){return z(this,e).set(e,t),this}y.prototype.clear=_t;y.prototype.delete=vt;y.prototype.get=bt;y.prototype.has=kt;y.prototype.set=Ht;function j(e,t){for(var r=e.length;r--;)if(St(e[r][0],t))return r;return-1}function wt(e){if(!ge(e)||Lt(e))return!1;var t=Mt(e)||tt(e)?at:Ze;return t.test(Ot(e))}function z(e,t){var r=e.__data__;return xt(t)?r[typeof t=="string"?"string":"hash"]:r.map}function me(e,t){var r=et(e,t);return wt(r)?r:void 0}function xt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Lt(e){return!!oe&&oe in e}function Ot(e){if(e!=null){try{return fe.call(e)}catch{}try{return e+""}catch{}}return""}function B(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(Je);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i),i};return r.cache=new(B.Cache||y),r}B.Cache=y;function St(e,t){return e===t||e!==e&&t!==t}function Mt(e){var t=ge(e)?ot.call(e):"";return t==Ye||t==Ke}function ge(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}var ye=B;function _e(e){return JSON.stringify(e)}function Tt(e){return e.filter(function(t,r){return t&&e.indexOf(t)===r})}function Nt(e){return e.map(function(t){if(!t||t.indexOf("-")===-1||t.toLowerCase()!==t)return t;var r=t.split("-");return r[0]+"-"+r[1].toUpperCase()})}function $t(e){var t=e===void 0?{}:e,r=t.useFallbackLocale,n=r===void 0?!0:r,o=t.fallbackLocale,a=o===void 0?"en-US":o,i=[];if(typeof window<"u"){var l=window,s=l.navigator;i=i.concat(s.languages,s.language,s.userLanguage,s.browserLanguage,s.systemLanguage)}return n&&i.push(a),Nt(Tt(i))}var Ct=ye($t,_e);function Wt(e){return Ct(e)[0]||null}var jt=ye(Wt,_e);const zt=jt;var Et=function(t,r){return r.toLocaleString(t||zt())},Ft=["formatHour","locale","number"];function Pt(e,t){if(e==null)return{};var r=It(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function It(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function ve(e){var t=e.formatHour,r=t===void 0?Et:t,n=e.locale,o=e.number,a=Pt(e,Ft);return u(U,{number:o&&r(n,o),...a})}ve.propTypes={formatHour:c.exports.func,locale:c.exports.string,number:c.exports.oneOfType([c.exports.number,c.exports.string])};function be(e){var t=e.className,r=e.formatHour,n=e.hourHandLength,o=n===void 0?50:n,a=e.hourHandOppositeLength,i=e.hourHandWidth,l=i===void 0?4:i,s=e.hourMarksLength,d=s===void 0?10:s,x=e.hourMarksWidth,m=x===void 0?3:x,L=e.locale,O=e.minuteHandLength,_=O===void 0?70:O,S=e.minuteHandOppositeLength,M=e.minuteHandWidth,E=M===void 0?2:M,T=e.minuteMarksLength,ke=T===void 0?6:T,G=e.minuteMarksWidth,He=G===void 0?1:G,J=e.renderHourMarks,Y=J===void 0?!0:J,K=e.renderMinuteHand,we=K===void 0?!0:K,V=e.renderMinuteMarks,xe=V===void 0?!0:V,Le=e.renderNumbers,Z=e.renderSecondHand,Oe=Z===void 0?!0:Z,X=e.secondHandLength,Se=X===void 0?90:X,Me=e.secondHandOppositeLength,Q=e.secondHandWidth,Te=Q===void 0?1:Q,ee=e.size,te=ee===void 0?150:ee,p=e.value;function Ne(){if(!xe)return null;for(var h=[],f=1;f<=60;f+=1){var Ee=Y&&!(f%5);Ee||h.push(u(Ge,{angle:f*6,length:ke,name:"minute",width:He},"minute_".concat(f)))}return h}function $e(){if(!Y)return null;for(var h=[],f=1;f<=12;f+=1)h.push(u(ve,{angle:f*30,formatHour:r,length:d,locale:L,name:"hour",number:Le?f:null,width:m},"hour_".concat(f)));return h}function Ce(){return v("div",{className:"react-clock__face",children:[Ne(),$e()]})}function We(){var h=p?ne(p)*30+F(p)/2+P(p)/600:0;return u(W,{angle:h,length:o,name:"hour",oppositeLength:a,width:l})}function je(){if(!we)return null;var h=p?ne(p)*360+F(p)*6+P(p)/10:0;return u(W,{angle:h,length:_,name:"minute",oppositeLength:S,width:E})}function ze(){if(!Oe)return null;var h=p?F(p)*360+P(p)*6:0;return u(W,{angle:h,length:Se,name:"second",oppositeLength:Me,width:Te})}return v("time",{className:Be("react-clock",t),dateTime:p instanceof Date?p.toISOString():p,style:{width:"".concat(te,"px"),height:"".concat(te,"px")},children:[Ce(),We(),je(),ze()]})}be.propTypes={className:c.exports.oneOfType([c.exports.string,c.exports.arrayOf(c.exports.string)]),formatHour:c.exports.func,hourHandLength:b,hourHandOppositeLength:I,hourHandWidth:C,hourMarksLength:R,hourMarksWidth:A,locale:c.exports.string,minuteHandLength:b,minuteHandOppositeLength:I,minuteHandWidth:C,minuteMarksLength:R,minuteMarksWidth:A,renderHourMarks:c.exports.bool,renderMinuteHand:c.exports.bool,renderMinuteMarks:c.exports.bool,renderNumbers:c.exports.bool,renderSecondHand:c.exports.bool,secondHandLength:b,secondHandOppositeLength:I,secondHandWidth:C,size:c.exports.number,value:c.exports.oneOfType([c.exports.string,c.exports.instanceOf(Date)])};const Dt=ie.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;

  font-size: 0.2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  .tab {
    white-space: nowrap;
    font-size: 0.2rem;
    padding: 0.1rem;
    border: 1px solid #efe;
    margin-right: 0.1rem;
    cursor: pointer;
    &[data-selected='true'] {
      background-color: #eee;
      color: #222;
    }
  }
`,ae=(e=null)=>{if(!e)return[];const t={beijing:"Asia/Shanghai",tokyo:"Asia/Tokyo",london:"Europe/London",losAngeles:"America/Los_Angeles",moscow:"Europe/Moscow",paris:"Europe/Paris",newYork:"America/New_York",detroit:"America/Detroit",sydney:"Australia/Sydney",maputo:"Africa/Maputo"};return Object.keys(t).map(n=>({tz:t[n],city:e[n]}))};function Rt({name:e,city:t=null,currTimezones:r,updateTimezones:n}){const o=({target:a})=>{const{dataset:{tz:i,selected:l}}=a;if(l=="true"){let s=r.filter(d=>d.tz!=i);n(s)}else{if(r.length==3){alert("\u6700\u591A\u4E09\u4E2A\uFF0C\u8BF7\u5148\u53BB\u6389\u4E00\u4E2A");return}let s=ae(t).find(d=>d.tz==i);n([...r,s])}};return Fe.exports.createPortal(u(Dt,{children:ae(t).map(a=>{const{city:i,tz:l}=a;let s=!!r.find(d=>d.tz==l);return u("span",{className:"tab","data-selected":s,"data-tz":l,onClick:o,children:i},l)})}),document.querySelector(`#widget-${e}-setting`))}const At=$.exports.memo(Rt,(e,t)=>JSON.stringify(e.currTimezones)===JSON.stringify(t.currTimezones)),Ut=ie.section`
  position: relative;
  height: 100%;
  background-color: #1b1c1e;
  user-select: none;
  &:hover {
    .expand_icon {
      opacity: 1;
    }
  }
  .empty {
    font-size: 0.25rem;
    font-weight: 800;
    color: #999;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clocks {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    /* padding-left: 0.2rem; */
    .clock {
      display: flex;
      flex-direction: column;
      align-items: center;
      .react-clock {
        transition: all 0.6s;
      }
      .react-clock__hand {
        .react-clock__second-hand__body {
          background-color: #ef9829;
        }
      }
      .react-clock__face {
        background: #fff;
        border-color: #666;
        .react-clock__minute-mark .react-clock__mark__body {
          background-color: #ccc;
        }
      }
      &.dark {
        .react-clock__hand {
          .react-clock__minute-hand__body,
          .react-clock__hour-hand__body {
            background-color: #eef;
          }
        }
        .react-clock__face {
          border-color: #999;
          background: #333436;
          .react-clock__minute-mark {
            .react-clock__mark__body {
              background-color: #666;
            }
          }
          .react-clock__hour-mark {
            .react-clock__mark__body {
              border-radius: 4px;
              background-color: #fff;
            }
          }
        }
      }
      .city {
        font-weight: 800;
        color: #fff;
        font-size: 0.14rem;
        padding: 0.2rem;
      }
      .datetime {
        opacity: 0;
        transition: opacity 0.5s;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: -0.2rem;
        .item {
          font-size: 0.12rem;
          color: #aaa;
          line-height: 1.4;
        }
      }
      &:hover {
        .react-clock {
          transform: translateY(-10px);
        }
        .datetime {
          opacity: 1;
        }
      }
    }
  }
`;function Kt({readonly:e,lang:t,data:r,name:n}){const{getWidgetSetting:o,updateWidgetSetting:a}=De(),[i,l]=$.exports.useState(new Date),[s,d]=$.exports.useState((r==null?void 0:r.tzs)||o({name:n,key:"tzs"})||[]),x=m=>{a({key:"tzs",name:n,data:m}),d(m)};return $.exports.useEffect(()=>{const m=setInterval(()=>l(new Date),1e3);return()=>{clearInterval(m)}},[]),v(Pe,{children:[!e&&u(At,{city:t==null?void 0:t.city,name:n,currTimezones:s,updateTimezones:x}),u(Ut,{children:s.length==0?u("div",{className:"empty",children:t.addTip}):u("div",{className:"clocks",children:s.map(m=>{const{tz:L,city:O}=m,_=Ie.utcToZonedTime(i.getTime(),L);let S=_.getHours(),M=S<6||S>=18,E=re(_,"pp"),T=re(_,"PPPP");return v("div",{className:`clock ${M?"dark":""}`,children:[u(be,{size:window.innerWidth<860?110:120,value:_}),u("h2",{className:"city",children:O}),v("h3",{className:"datetime",children:[u("span",{className:"item",children:T}),u("span",{className:"item",children:E})]})]},L)})})})]})}export{Kt as default};

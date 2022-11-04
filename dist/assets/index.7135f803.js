import{U as Ue,s as styled,r as react,j as jsxs,a as jsx,l as reactDom,F as Fragment}from"./index.adf820fb.js";import{d as RiRefreshLine}from"./index.esm.9ed488a3.js";import{u as useWidgetSettings}from"./hooks.a478aa3b.js";import{G as GoAuth}from"./GoAuth.9e5b15b9.js";import{a as addDays}from"./index.7e33b9da.js";import{f as format}from"./index.7b8e2464.js";import{k as AiOutlineDelete,l as AiOutlineLink}from"./index.esm.95d4feb0.js";import{c as GrLocation}from"./index.esm.4b8699df.js";import{a as IoAddCircleOutline}from"./index.esm.7e5f9504.js";import{r as requiredArgs,t as toDate,d as defaultLocale,f as getTimezoneOffsetInMilliseconds,k as getDefaultOptions}from"./index.76cc53c3.js";import{a as assign}from"./index.3e85e345.js";import"./iconBase.a38ac1cb.js";function startOfDay(e){requiredArgs(1,arguments);var r=toDate(e);return r.setHours(0,0,0,0),r}function compareAsc(e,r){requiredArgs(2,arguments);var n=toDate(e),o=toDate(r),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}function isSameDay(e,r){requiredArgs(2,arguments);var n=startOfDay(e),o=startOfDay(r);return n.getTime()===o.getTime()}function cloneObject(e){return assign({},e)}var MILLISECONDS_IN_MINUTE=1e3*60,MINUTES_IN_DAY=60*24,MINUTES_IN_MONTH=MINUTES_IN_DAY*30,MINUTES_IN_YEAR=MINUTES_IN_DAY*365;function formatDistanceStrict(e,r,n){var o,i,s;requiredArgs(2,arguments);var l=getDefaultOptions(),c=(o=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:l.locale)!==null&&o!==void 0?o:defaultLocale;if(!c.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var u=compareAsc(e,r);if(isNaN(u))throw new RangeError("Invalid time value");var d=assign(cloneObject(n),{addSuffix:Boolean(n==null?void 0:n.addSuffix),comparison:u}),p,f;u>0?(p=toDate(r),f=toDate(e)):(p=toDate(e),f=toDate(r));var g=String((s=n==null?void 0:n.roundingMethod)!==null&&s!==void 0?s:"round"),h;if(g==="floor")h=Math.floor;else if(g==="ceil")h=Math.ceil;else if(g==="round")h=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var y=f.getTime()-p.getTime(),_=y/MILLISECONDS_IN_MINUTE,Se=getTimezoneOffsetInMilliseconds(f)-getTimezoneOffsetInMilliseconds(p),j=(y-Se)/MILLISECONDS_IN_MINUTE,Ne=n==null?void 0:n.unit,M;if(Ne?M=String(Ne):_<1?M="second":_<60?M="minute":_<MINUTES_IN_DAY?M="hour":j<MINUTES_IN_MONTH?M="day":j<MINUTES_IN_YEAR?M="month":M="year",M==="second"){var Ie=h(y/1e3);return c.formatDistance("xSeconds",Ie,d)}else if(M==="minute"){var Le=h(_);return c.formatDistance("xMinutes",Le,d)}else if(M==="hour"){var J=h(_/60);return c.formatDistance("xHours",J,d)}else if(M==="day"){var _e=h(j/MINUTES_IN_DAY);return c.formatDistance("xDays",_e,d)}else if(M==="month"){var k=h(j/MINUTES_IN_MONTH);return k===12&&Ne!=="month"?c.formatDistance("xYears",1,d):c.formatDistance("xMonths",k,d)}else if(M==="year"){var $=h(j/MINUTES_IN_YEAR);return c.formatDistance("xYears",$,d)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function formatDistanceToNowStrict(e,r){return requiredArgs(1,arguments),formatDistanceStrict(e,Date.now(),r)}function isAfter(e,r){requiredArgs(2,arguments);var n=toDate(e),o=toDate(r);return n.getTime()>o.getTime()}const AniRotate=Ue`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }

`,StyledWrapper$2=styled.div`
  font-size: 0.12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  .topbar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.1rem;
    .today {
      display: flex;
      align-items: center;
      .btn {
        background-color: #5c4ddf;
        color: #fff;
        border-radius: 0.06rem;
        padding: 0.06rem 0.1rem;
        &[disabled] {
          background-color: #aaa;
        }
      }
      .update {
        /* display: flex; */
        svg {
          width: 0.28rem;
          height: 0.28rem;
          transform-origin: center;
          &.reloading {
            animation: ${AniRotate} 1s infinite linear;
          }
        }
      }
      .date {
        font-weight: 800;
        font-size: 0.16rem;
        /* color: #333; */
        padding: 0 0.2rem;
      }
    }
  }
  .list {
    margin-top: 0.12rem;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      width: 100%;
      position: relative;
      > .title {
        font-size: 0.2rem;
        color: #ccc;
        margin-top: 0.2rem;
        padding-bottom: 0.1rem;
        position: sticky;
        top: 0;
        /* text-shadow: 0 0 10px black; */
        z-index: 2;
      }
      > .evts {
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
      }
    }
  }

  .loading,
  .empty {
    font-size: 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,StyledWrapper$3=StyledWrapper$2;var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(e,r,n){return e==Array.prototype||e==Object.prototype||(e[r]=n.value),e},da=function(e){e=[typeof globalThis=="object"&&globalThis,e,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var r=0;r<e.length;++r){var n=e[r];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")},ea=da(this),fa=function(e,r){if(r)e:{var n=ea;e=e.split(".");for(var o=0;o<e.length-1;o++){var i=e[o];if(!(i in n))break e;n=n[i]}e=e[e.length-1],o=n[e],r=r(o),r!=o&&r!=null&&aa(n,e,{configurable:!0,writable:!0,value:r})}},ha=function(e){var r=0;return function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}}};fa("Symbol",function(e){if(e)return e;var r=function(i,s){this.ba=i,aa(this,"description",{configurable:!0,writable:!0,value:s})};r.prototype.toString=function(){return this.ba};var n=0,o=function(i){if(this instanceof o)throw new TypeError("Symbol is not a constructor");return new r("jscomp_symbol_"+(i||"")+"_"+n++,i)};return o}),fa("Symbol.iterator",function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var r="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),n=0;n<r.length;n++){var o=ea[r[n]];typeof o=="function"&&typeof o.prototype[e]!="function"&&aa(o.prototype,e,{configurable:!0,writable:!0,value:function(){return ia(ha(this))}})}return e});var ia=function(e){return e={next:e},e[Symbol.iterator]=function(){return this},e},ja=function(e,r){e instanceof String&&(e+="");var n=0,o=!1,i={next:function(){if(!o&&n<e.length){var s=n++;return{value:r(s,e[s]),done:!1}}return o=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i};fa("Array.prototype.keys",function(e){return e||function(){return ja(this,function(r){return r})}});var m=this||self,ka=function(e){var r=typeof e;return r!="object"?r:e?Array.isArray(e)?"array":r:"null"},la=function(e,r,n){return e.call.apply(e.bind,arguments)},ma=function(e,r,n){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,o),e.apply(r,i)}}return function(){return e.apply(r,arguments)}},na=function(e,r,n){return na=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?la:ma,na.apply(null,arguments)},oa=function(e,r){function n(){}n.prototype=r.prototype,e.ma=r.prototype,e.prototype=new n,e.prototype.constructor=e,e.A=function(o,i,s){for(var l=Array(arguments.length-2),c=2;c<arguments.length;c++)l[c-2]=arguments[c];return r.prototype[i].apply(o,l)}},pa=function(e){return e},qa=function(e){var r=null,n=m.trustedTypes;if(!n||!n.createPolicy)return r;try{r=n.createPolicy(e,{createHTML:pa,createScript:pa,createScriptURL:pa})}catch(o){m.console&&m.console.error(o.message)}return r};function q(e){if(Error.captureStackTrace)Error.captureStackTrace(this,q);else{var r=Error().stack;r&&(this.stack=r)}e&&(this.message=String(e))}oa(q,Error),q.prototype.name="CustomError";var ra=function(e,r){e=e.split("%s");for(var n="",o=e.length-1,i=0;i<o;i++)n+=e[i]+(i<r.length?r[i]:"%s");q.call(this,n+e[o])};oa(ra,q),ra.prototype.name="AssertionError";var sa=function(e,r,n,o){var i="Assertion failed";if(n){i+=": "+n;var s=o}else e&&(i+=": "+e,s=r);throw new ra(""+i,s||[])},ta=function(e,r,n){return e||sa("",null,r,Array.prototype.slice.call(arguments,2)),e},ua=function(e,r){throw new ra("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))},va=function(e,r,n){typeof e!="string"&&sa("Expected string but got %s: %s.",[ka(e),e],r,Array.prototype.slice.call(arguments,2))},xa=function(e,r){e:{try{var n=e&&e.ownerDocument,o=n&&(n.defaultView||n.parentWindow);if(o=o||m,o.Element&&o.Location){var i=o;break e}}catch{}i=null}if(i&&typeof i[r]<"u"&&(!e||!(e instanceof i[r])&&(e instanceof i.Location||e instanceof i.Element))){if(i=typeof e,i=="object"&&e!=null||i=="function")try{var s=e.constructor.displayName||e.constructor.name||Object.prototype.toString.call(e)}catch{s="<object could not be stringified>"}else s=e===void 0?"undefined":e===null?"null":typeof e;ua("Argument is not a %s (or a non-Element, non-Location mock); got: %s",r,s)}return e},ya,t=function(e,r){this.P=e===za&&r||"",this.ca=Aa};t.prototype.J=!0,t.prototype.H=function(){return this.P},t.prototype.toString=function(){return"Const{"+this.P+"}"};var Ba=function(e){return e instanceof t&&e.constructor===t&&e.ca===Aa?e.P:(ua("expected object of type Const, got '"+e+"'"),"type_error:Const")},Aa={},za={},v=function(e,r){this.N=r===Ca?e:""};v.prototype.J=!0,v.prototype.H=function(){return this.N.toString()},v.prototype.toString=function(){return"SafeUrl{"+this.N+"}"};var Da=function(e){return e instanceof v&&e.constructor===v?e.N:(ua("expected object of type SafeUrl, got '"+e+"' of type "+ka(e)),"type_error:SafeUrl")},Ea=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Fa=function(e){return e instanceof v?e:(e=typeof e=="object"&&e.J?e.H():String(e),ta(Ea.test(e),"%s does not match the safe URL pattern",e)||(e="about:invalid#zClosurez"),new v(e,Ca))},Ca={},w=function(e,r,n){this.M=n===Ga?e:""};w.prototype.J=!0,w.prototype.H=function(){return this.M.toString()},w.prototype.toString=function(){return"SafeHtml{"+this.M+"}"};var Ha=function(e){return e instanceof w&&e.constructor===w?e.M:(ua("expected object of type SafeHtml, got '"+e+"' of type "+ka(e)),"type_error:SafeHtml")},Ga={},Ia=new w(m.trustedTypes&&m.trustedTypes.emptyHTML||"",0,Ga),Ja={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ka=function(e){var r=!1,n;return function(){return r||(n=e(),r=!0),n}}(function(){if(typeof document>"u")return!1;var e=document.createElement("div"),r=document.createElement("div");return r.appendChild(document.createElement("div")),e.appendChild(r),e.firstChild?(r=e.firstChild.firstChild,e.innerHTML=Ha(Ia),!r.parentElement):!1}),x=window,z=document,La=x.location,Ma=function(){},Na=/\[native code\]/,A=function(e,r,n){return e[r]=e[r]||n},Oa=function(e){for(var r=0;r<this.length;r++)if(this[r]===e)return r;return-1},Pa=function(e){e=e.sort();for(var r=[],n=void 0,o=0;o<e.length;o++){var i=e[o];i!=n&&r.push(i),n=i}return r},Qa=/&/g,Ra=/</g,Sa=/>/g,Ua=/"/g,Va=/'/g,Wa=function(e){return String(e).replace(Qa,"&amp;").replace(Ra,"&lt;").replace(Sa,"&gt;").replace(Ua,"&quot;").replace(Va,"&#39;")},B=function(){var e;if((e=Object.create)&&Na.test(e))e=e(null);else{e={};for(var r in e)e[r]=void 0}return e},C=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},Xa=function(e){if(Na.test(Object.keys))return Object.keys(e);var r=[],n;for(n in e)C(e,n)&&r.push(n);return r},D=function(e,r){e=e||{};for(var n in e)C(e,n)&&(r[n]=e[n])},Ya=function(e){return function(){x.setTimeout(e,0)}},E=function(e,r){if(!e)throw Error(r||"")},F=A(x,"gapi",{}),H=function(e,r,n){var o=new RegExp("([#].*&|[#])"+r+"=([^&#]*)","g");if(r=new RegExp("([?#].*&|[?#])"+r+"=([^&#]*)","g"),e=e&&(o.exec(e)||r.exec(e)))try{n=decodeURIComponent(e[2])}catch{}return n},Za=new RegExp(/^/.source+/([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source+/(\/\/[^\/?#]*)?/.source+/([^?#]*)?/.source+/(\?([^#]*))?/.source+/(#((#|[^#])*))?/.source+/$/.source),$a=/[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,ab=new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source+/%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,"g"),bb=/%([a-f]|[0-9a-fA-F][a-f])/g,cb=/^(https?|ftp|file|chrome-extension):$/i,I=function(e){e=String(e),e=e.replace($a,function(i){try{return encodeURIComponent(i)}catch{return encodeURIComponent(i.replace(/^[^%]+$/g,"\uFFFD"))}}).replace(ab,function(i){return i.replace(/%/g,"%25")}).replace(bb,function(i){return i.toUpperCase()}),e=e.match(Za)||[];var r=B(),n=function(i){return i.replace(/\\/g,"%5C").replace(/\^/g,"%5E").replace(/`/g,"%60").replace(/\{/g,"%7B").replace(/\|/g,"%7C").replace(/\}/g,"%7D")},o=!!(e[1]||"").match(cb);return r.A=n((e[1]||"")+(e[2]||"")+(e[3]||(e[2]&&o?"/":""))),o=function(i){return n(i.replace(/\?/g,"%3F").replace(/#/g,"%23"))},r.query=e[5]?[o(e[5])]:[],r.g=e[7]?[o(e[7])]:[],r},db=function(e){return e.A+(0<e.query.length?"?"+e.query.join("&"):"")+(0<e.g.length?"#"+e.g.join("&"):"")},eb=function(e,r){var n=[];if(e){for(var o in e)if(C(e,o)&&e[o]!=null){var i=r?r(e[o]):e[o];n.push(encodeURIComponent(o)+"="+encodeURIComponent(i))}}return n},fb=function(e,r,n,o){return e=I(e),e.query.push.apply(e.query,eb(r,o)),e.g.push.apply(e.g,eb(n,o)),db(e)},gb=new RegExp(/\/?\??#?/.source+"("+/[\/?#]/i.source+"|"+/[\uD800-\uDBFF]/i.source+"|"+/%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source+"|"+/%[0-9a-f]?/i.source+")$","i"),hb=function(e,r){var n=I(r);r=n.A,n.query.length&&(r+="?"+n.query.join("")),n.g.length&&(r+="#"+n.g.join(""));var o="";2e3<r.length&&(o=r,r=r.substr(0,2e3),r=r.replace(gb,""),o=o.substr(r.length));var i=e.createElement("div");if(e=e.createElement("a"),n=I(r),r=n.A,n.query.length&&(r+="?"+n.query.join("")),n.g.length&&(r+="#"+n.g.join("")),r=new v(r,Ca),xa(e,"HTMLAnchorElement"),r=r instanceof v?r:Fa(r),e.href=Da(r),i.appendChild(e),r=i.innerHTML,n=new t(za,"Assignment to self."),va(Ba(n),"must provide justification"),ta(!/^[\s\xa0]*$/.test(Ba(n)),"must provide non-empty justification"),ya===void 0&&(ya=qa("gapi#html")),r=(n=ya)?n.createHTML(r):r,r=new w(r,null,Ga),i.tagName&&Ja[i.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+i.tagName+".");if(Ka())for(;i.lastChild;)i.removeChild(i.lastChild);return i.innerHTML=Ha(r),r=String(i.firstChild.href),i.parentNode&&i.parentNode.removeChild(i),n=I(r+o),o=n.A,n.query.length&&(o+="?"+n.query.join("")),n.g.length&&(o+="#"+n.g.join("")),o},ib=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i,jb=function(e,r,n,o){x[n+"EventListener"]?x[n+"EventListener"](e,r,!1):x[o+"tachEvent"]&&x[o+"tachEvent"]("on"+e,r)},kb=function(){var e=z.readyState;return e==="complete"||e==="interactive"&&navigator.userAgent.indexOf("MSIE")==-1},nb=function(e){var r=lb;if(!kb())try{r()}catch{}mb(e)},mb=function(e){if(kb())e();else{var r=!1,n=function(){if(!r)return r=!0,e.apply(this,arguments)};x.addEventListener?(x.addEventListener("load",n,!1),x.addEventListener("DOMContentLoaded",n,!1)):x.attachEvent&&(x.attachEvent("onreadystatechange",function(){kb()&&n.apply(this,arguments)}),x.attachEvent("onload",n))}},ob=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},pb={button:!0,div:!0,span:!0},K;K=A(x,"___jsl",B()),A(K,"I",0),A(K,"hel",10);var qb=function(e){return K.dpo?K.h:H(e,"jsh",K.h)},rb=function(e){var r=A(K,"sws",[]);r.push.apply(r,e)},sb=function(e){return A(K,"watt",B())[e]},tb=function(e){var r=A(K,"PQ",[]);K.PQ=[];var n=r.length;if(n===0)e();else for(var o=0,i=function(){++o===n&&e()},s=0;s<n;s++)r[s](i)},ub=function(e){return A(A(K,"H",B()),e,B())},vb=A(K,"perf",B()),wb=A(vb,"g",B()),xb=A(vb,"i",B());A(vb,"r",[]),B(),B();var yb=function(e,r,n){var o=vb.r;typeof o=="function"?o(e,r,n):o.push([e,r,n])},L=function(e,r,n){wb[e]=!r&&wb[e]||n||new Date().getTime(),yb(e)},Ab=function(e,r,n){r&&0<r.length&&(r=zb(r),n&&0<n.length&&(r+="___"+zb(n)),28<r.length&&(r=r.substr(0,28)+(r.length-28)),n=r,r=A(xb,"_p",B()),A(r,n,B())[e]=new Date().getTime(),yb(e,"_p",n))},zb=function(e){return e.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")},Bb=B(),N=[],O=function(e){throw Error("Bad hint"+(e?": "+e:""))};N.push(["jsl",function(e){for(var r in e)if(C(e,r)){var n=e[r];typeof n=="object"?K[r]=A(K,r,[]).concat(n):A(K,r,n)}(r=e.u)&&(e=A(K,"us",[]),e.push(r),(r=/^https:(.*)$/.exec(r))&&e.push("http:"+r[1]))}]);var Cb=/^(\/[a-zA-Z0-9_\-]+)+$/,Db=[/\/amp\//,/\/amp$/,/^\/amp$/],Eb=/^[a-zA-Z0-9\-_\.,!]+$/,Fb=/^gapi\.loaded_[0-9]+$/,Gb=/^[a-zA-Z0-9,._-]+$/,Kb=function(e,r,n,o){var i=e.split(";"),s=i.shift(),l=Bb[s],c=null;return l?c=l(i,r,n,o):O("no hint processor for: "+s),c||O("failed to generate load url"),r=c,n=r.match(Hb),(o=r.match(Ib))&&o.length===1&&Jb.test(r)&&n&&n.length===1||O("failed sanity: "+e),c},Nb=function(e,r,n,o){e=Lb(e),Fb.test(n)||O("invalid_callback"),r=Mb(r),o=o&&o.length?Mb(o):null;var i=function(s){return encodeURIComponent(s).replace(/%2C/g,",")};return[encodeURIComponent(e.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",i(e.version),"/m=",i(r),o?"/exm="+i(o):"","/rt=j/sv=1/d=1/ed=1",e.S?"/am="+i(e.S):"",e.Z?"/rs="+i(e.Z):"",e.aa?"/t="+i(e.aa):"","/cb=",i(n)].join("")},Lb=function(e){e.charAt(0)!=="/"&&O("relative path");for(var r=e.substring(1).split("/"),n=[];r.length;){if(e=r.shift(),!e.length||e.indexOf(".")==0)O("empty/relative directory");else if(0<e.indexOf("=")){r.unshift(e);break}n.push(e)}e={};for(var o=0,i=r.length;o<i;++o){var s=r[o].split("="),l=decodeURIComponent(s[0]),c=decodeURIComponent(s[1]);s.length==2&&l&&c&&(e[l]=e[l]||c)}for(r="/"+n.join("/"),Cb.test(r)||O("invalid_prefix"),n=0,o=Db.length;n<o;++n)Db[n].test(r)&&O("invalid_prefix");return n=Ob(e,"k",!0),o=Ob(e,"am"),i=Ob(e,"rs"),e=Ob(e,"t"),{pathPrefix:r,version:n,S:o,Z:i,aa:e}},Mb=function(e){for(var r=[],n=0,o=e.length;n<o;++n){var i=e[n].replace(/\./g,"_").replace(/-/g,"_");Gb.test(i)&&r.push(i)}return r.join(",")},Ob=function(e,r,n){if(e=e[r],!e&&n&&O("missing: "+r),e){if(Eb.test(e))return e;O("invalid: "+r)}return null},Jb=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ib=/\/cb=/g,Hb=/\/\//g,Pb=function(){var e=qb(La.href);if(!e)throw Error("Bad hint");return e};Bb.m=function(e,r,n,o){return(e=e[0])||O("missing_hint"),"https://apis.google.com"+Nb(e,r,n,o)};var Qb=decodeURI("%73cript"),Rb=/^[-+_0-9\/A-Za-z]+={0,2}$/,Sb=function(e,r){for(var n=[],o=0;o<e.length;++o){var i=e[o];i&&0>Oa.call(r,i)&&n.push(i)}return n},Tb=function(){var e=K.nonce;return e!==void 0?e&&e===String(e)&&e.match(Rb)?e:K.nonce=null:z.querySelector&&(e=z.querySelector("script[nonce]"))?(e=e.nonce||e.getAttribute("nonce")||"",e&&e===String(e)&&e.match(Rb)?K.nonce=e:K.nonce=null):null},Wb=function(e){if(z.readyState!="loading")Ub(e);else{var r=Tb(),n="";r!==null&&(n=' nonce="'+r+'"'),e="<"+Qb+' src="'+encodeURI(e)+'"'+n+"></"+Qb+">",z.write(Vb?Vb.createHTML(e):e)}},Ub=function(e){var r=z.createElement(Qb);r.setAttribute("src",Vb?Vb.createScriptURL(e):e),e=Tb(),e!==null&&r.setAttribute("nonce",e),r.async="true",(e=z.getElementsByTagName(Qb)[0])?e.parentNode.insertBefore(r,e):(z.head||z.body||z.documentElement).appendChild(r)},Xb=function(e,r){var n=r&&r._c;if(n)for(var o=0;o<N.length;o++){var i=N[o][0],s=N[o][1];s&&C(n,i)&&s(n[i],e,r)}},Zb=function(e,r,n){Yb(function(){var o=r===qb(La.href)?A(F,"_",B()):B();o=A(ub(r),"_",o),e(o)},n)},ac=function(e,r){var n=r||{};typeof r=="function"&&(n={},n.callback=r),Xb(e,n),r=e?e.split(":"):[];var o=n.h||Pb(),i=A(K,"ah",B());if(i["::"]&&r.length){e=[];for(var s=null;s=r.shift();){var l=s.split(".");l=i[s]||i[l[1]&&"ns:"+l[0]||""]||o;var c=e.length&&e[e.length-1]||null,u=c;c&&c.hint==l||(u={hint:l,V:[]},e.push(u)),u.V.push(s)}var d=e.length;if(1<d){var p=n.callback;p&&(n.callback=function(){--d==0&&p()})}for(;r=e.shift();)$b(r.V,n,r.hint)}else $b(r||[],n,o)},$b=function(e,r,n){e=Pa(e)||[];var o=r.callback,i=r.config,s=r.timeout,l=r.ontimeout,c=r.onerror,u=void 0;typeof c=="function"&&(u=c);var d=null,p=!1;if(s&&!l||!s&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";c=A(ub(n),"r",[]).sort();var f=A(ub(n),"L",[]).sort(),g=[].concat(c),h=function(Ne,M){if(p)return 0;x.clearTimeout(d),f.push.apply(f,y);var Ie=((F||{}).config||{}).update;if(Ie?Ie(i):i&&A(K,"cu",[]).push(i),M){Ab("me0",Ne,g);try{Zb(M,n,u)}finally{Ab("me1",Ne,g)}}return 1};0<s&&(d=x.setTimeout(function(){p=!0,l()},s));var y=Sb(e,f);if(y.length){y=Sb(e,c);var _=A(K,"CP",[]),Se=_.length;if(_[Se]=function(Ne){if(!Ne)return 0;Ab("ml1",y,g);var M=function(Le){_[Se]=null,h(y,Ne)&&tb(function(){o&&o(),Le()})},Ie=function(){var Le=_[Se+1];Le&&Le()};0<Se&&_[Se-1]?_[Se]=function(){M(Ie)}:M(Ie)},y.length){var j="loaded_"+K.I++;F[j]=function(Ne){_[Se](Ne),F[j]=null},e=Kb(n,y,"gapi."+j,c),c.push.apply(c,y),Ab("ml0",y,g),r.sync||x.___gapisync?Wb(e):Ub(e)}else _[Se](Ma)}else h(y)&&o&&o()},Vb=qa("gapi#gapi"),Yb=function(e,r){if(K.hee&&0<K.hel)try{return e()}catch(n){r&&r(n),K.hel--,ac("debug_error",function(){try{window.___jsl.hefn(n)}catch{throw n}})}else try{return e()}catch(n){throw r&&r(n),n}};F.load=function(e,r){return Yb(function(){return ac(e,r)})};var bc=function(e){var r=window.___jsl=window.___jsl||{};return r[e]=r[e]||[],r[e]},cc=function(e){var r=window.___jsl=window.___jsl||{};return r.cfg=!e&&r.cfg||{},r.cfg},dc=function(e){return typeof e=="object"&&/\[native code\]/.test(e.push)},P=function(e,r,n){if(r&&typeof r=="object")for(var o in r)!Object.prototype.hasOwnProperty.call(r,o)||n&&o==="___goc"&&typeof r[o]>"u"||(e[o]&&r[o]&&typeof e[o]=="object"&&typeof r[o]=="object"&&!dc(e[o])&&!dc(r[o])?P(e[o],r[o]):r[o]&&typeof r[o]=="object"?(e[o]=dc(r[o])?[]:{},P(e[o],r[o])):e[o]=r[o])},ec=function(e){if(e&&!/^\s+$/.test(e)){for(;e.charCodeAt(e.length-1)==0;)e=e.substring(0,e.length-1);try{var r=window.JSON.parse(e)}catch{}if(typeof r=="object")return r;try{r=new Function("return ("+e+`
)`)()}catch{}if(typeof r=="object")return r;try{r=new Function("return ({"+e+`
})`)()}catch{}return typeof r=="object"?r:{}}},fc=function(e,r){var n={___goc:void 0};e.length&&e[e.length-1]&&Object.hasOwnProperty.call(e[e.length-1],"___goc")&&typeof e[e.length-1].___goc>"u"&&(n=e.pop()),P(n,r),e.push(n)},gc=function(e){cc(!0);var r=window.___gcfg,n=bc("cu"),o=window.___gu;r&&r!==o&&(fc(n,r),window.___gu=r),r=bc("cu");var i=document.scripts||document.getElementsByTagName("script")||[];o=[];var s=[];s.push.apply(s,bc("us"));for(var l=0;l<i.length;++l)for(var c=i[l],u=0;u<s.length;++u)c.src&&c.src.indexOf(s[u])==0&&o.push(c);for(o.length==0&&0<i.length&&i[i.length-1].src&&o.push(i[i.length-1]),i=0;i<o.length;++i)o[i].getAttribute("gapi_processed")||(o[i].setAttribute("gapi_processed",!0),(s=o[i])?(l=s.nodeType,s=l==3||l==4?s.nodeValue:s.textContent||s.innerText||s.innerHTML||""):s=void 0,(s=ec(s))&&r.push(s));for(e&&fc(n,e),o=bc("cd"),e=0,r=o.length;e<r;++e)P(cc(),o[e],!0);for(o=bc("ci"),e=0,r=o.length;e<r;++e)P(cc(),o[e],!0);for(e=0,r=n.length;e<r;++e)P(cc(),n[e],!0)},Q=function(e){var r=cc();if(!e)return r;e=e.split("/");for(var n=0,o=e.length;r&&typeof r=="object"&&n<o;++n)r=r[e[n]];return n===e.length&&r!==void 0?r:void 0},hc=function(e,r){var n;if(typeof e=="string"){var o=n={};e=e.split("/");for(var i=0,s=e.length;i<s-1;++i){var l={};o=o[e[i]]=l}o[e[i]]=r}else n=e;gc(n)},ic=function(){var e=window.__GOOGLEAPIS;e&&(e.googleapis&&!e["googleapis.config"]&&(e["googleapis.config"]=e.googleapis),A(K,"ci",[]).push(e),window.__GOOGLEAPIS=void 0)},jc={callback:1,clientid:1,cookiepolicy:1,openidrealm:-1,includegrantedscopes:-1,requestvisibleactions:1,scope:1},kc=!1,lc=B(),mc=function(){if(!kc){for(var e=document.getElementsByTagName("meta"),r=0;r<e.length;++r){var n=e[r].name.toLowerCase();if(n.lastIndexOf("google-signin-",0)==0){n=n.substring(14);var o=e[r].content;jc[n]&&o&&(lc[n]=o)}}if(window.self!==window.top){e=document.location.toString();for(var i in jc)0<jc[i]&&(r=H(e,i,""))&&(lc[i]=r)}kc=!0}return i=B(),D(lc,i),i},nc=function(e){return!!(e.clientid&&e.scope&&e.callback)},oc=window.console,pc=function(e){oc&&oc.log&&oc.log(e)},qc=function(){return!!K.oa},rc=function(){},R=A(K,"rw",B()),sc=function(e){for(var r in R)e(R[r])},tc=function(e,r){(e=R[e])&&e.state<r&&(e.state=r)},vc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,wc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,xc=function(e){var r=Q("googleapis.config/sessionIndex");if(typeof r=="string"&&254<r.length&&(r=null),r==null&&(r=window.__X_GOOG_AUTHUSER),typeof r=="string"&&254<r.length&&(r=null),r==null){var n=window.google;n&&(r=n.authuser)}return typeof r=="string"&&254<r.length&&(r=null),r==null&&(e=e||window.location.href,r=H(e,"authuser")||null,r==null&&(r=(r=e.match(vc))?r[1]:null)),r==null?null:(r=String(r),254<r.length&&(r=null),r)},yc=function(e){var r=Q("googleapis.config/sessionDelegate");return typeof r=="string"&&21<r.length&&(r=null),r==null&&(r=(e=(e||window.location.href).match(wc))?e[1]:null),r==null?null:(r=String(r),21<r.length&&(r=null),r)},zc,S,T=void 0,U=function(e){try{return m.JSON.parse.call(m.JSON,e)}catch{return!1}},V=function(e){return Object.prototype.toString.call(e)},Ac=V(0),Bc=V(new Date(0)),Cc=V(!0),Dc=V(""),Ec=V({}),Fc=V([]),W=function(e,r){if(r){for(var n=0,o=r.length;n<o;++n)if(e===r[n])throw new TypeError("Converting circular structure to JSON")}if(o=typeof e,o!=="undefined"){n=Array.prototype.slice.call(r||[],0),n[n.length]=e,r=[];var i=V(e);if(e!=null&&typeof e.toJSON=="function"&&(Object.prototype.hasOwnProperty.call(e,"toJSON")||(i!==Fc||e.constructor!==Array&&e.constructor!==Object)&&(i!==Ec||e.constructor!==Array&&e.constructor!==Object)&&i!==Dc&&i!==Ac&&i!==Cc&&i!==Bc))return W(e.toJSON.call(e),n);if(e==null)r[r.length]="null";else if(i===Ac)e=Number(e),isNaN(e)||isNaN(e-e)?e="null":e===-0&&0>1/e&&(e="-0"),r[r.length]=String(e);else if(i===Cc)r[r.length]=String(!!Number(e));else{if(i===Bc)return W(e.toISOString.call(e),n);if(i===Fc&&V(e.length)===Ac){r[r.length]="[";var s=0;for(o=Number(e.length)>>0;s<o;++s)s&&(r[r.length]=","),r[r.length]=W(e[s],n)||"null";r[r.length]="]"}else if(i==Dc&&V(e.length)===Ac){for(r[r.length]='"',s=0,n=Number(e.length)>>0;s<n;++s)o=String.prototype.charAt.call(e,s),i=String.prototype.charCodeAt.call(e,s),r[r.length]=o==="\b"?"\\b":o==="\f"?"\\f":o===`
`?"\\n":o==="\r"?"\\r":o==="	"?"\\t":o==="\\"||o==='"'?"\\"+o:31>=i?"\\u"+(i+65536).toString(16).substr(1):32<=i&&65535>=i?o:"\uFFFD";r[r.length]='"'}else if(o==="object"){r[r.length]="{",o=0;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i=W(e[s],n),i!==void 0&&(o++&&(r[r.length]=","),r[r.length]=W(s),r[r.length]=":",r[r.length]=i));r[r.length]="}"}else return}return r.join("")}},Gc=/[\0-\x07\x0b\x0e-\x1f]/,Hc=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,Ic=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,Jc=/^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,Kc=/"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,Lc=/-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,Mc=/[ \t\n\r]+/g,Nc=/[^"]:/,Oc=/""/g,Pc=/true|false|null/g,Qc=/00/,Rc=/[\{]([^0\}]|0[^:])/,Sc=/(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,Tc=/[^\[,:][\[\{]/,Uc=/^(\{|\}|\[|\]|,|:|0)+/,Vc=/\u2028/g,Wc=/\u2029/g,Xc=function(a){if(a=String(a),Gc.test(a)||Hc.test(a)||Ic.test(a)||Jc.test(a))return!1;var b=a.replace(Kc,'""');if(b=b.replace(Lc,"0"),b=b.replace(Mc,""),Nc.test(b)||(b=b.replace(Oc,"0"),b=b.replace(Pc,"0"),Qc.test(b)||Rc.test(b)||Sc.test(b)||Tc.test(b)||!b||(b=b.replace(Uc,""))))return!1;a=a.replace(Vc,"\\u2028").replace(Wc,"\\u2029"),b=void 0;try{b=T?[U(a)]:eval(`(function (var_args) {
  return Array.prototype.slice.call(arguments, 0);
})(
`+a+`
)`)}catch(e){return!1}return b&&b.length===1?b[0]:!1},Yc=function(){var e=((m.document||{}).scripts||[]).length;if((zc===void 0||T===void 0||S!==e)&&S!==-1){zc=T=!1,S=-1;try{try{T=!!m.JSON&&m.JSON.stringify.call(m.JSON,{a:[3,!0,new Date(0)],c:function(){}})==='{"a":[3,true,"1970-01-01T00:00:00.000Z"]}'&&U("true")===!0&&U('[{"a":3}]')[0].a===3}catch{}zc=T&&!U("[00]")&&!U('"\x07"')&&!U('"\\0"')&&!U('"\\v"')}finally{S=e}}},Zc=function(e){return S===-1?!1:(Yc(),(zc?U:Xc)(e))},$c=function(e){if(S!==-1)return Yc(),T?m.JSON.stringify.call(m.JSON,e):W(e)},ad=!Date.prototype.toISOString||typeof Date.prototype.toISOString!="function"||new Date(0).toISOString()!=="1970-01-01T00:00:00.000Z",bd=function(){var e=Date.prototype.getUTCFullYear.call(this);return[0>e?"-"+String(1e6-e).substr(1):9999>=e?String(1e4+e).substr(1):"+"+String(1e6+e).substr(1),"-",String(101+Date.prototype.getUTCMonth.call(this)).substr(1),"-",String(100+Date.prototype.getUTCDate.call(this)).substr(1),"T",String(100+Date.prototype.getUTCHours.call(this)).substr(1),":",String(100+Date.prototype.getUTCMinutes.call(this)).substr(1),":",String(100+Date.prototype.getUTCSeconds.call(this)).substr(1),".",String(1e3+Date.prototype.getUTCMilliseconds.call(this)).substr(1),"Z"].join("")};Date.prototype.toISOString=ad?bd:Date.prototype.toISOString;var cd=function(){this.j=-1},dd=function(){this.j=64,this.b=[],this.G=[],this.da=[],this.C=[],this.C[0]=128;for(var e=1;e<this.j;++e)this.C[e]=0;this.D=this.o=0,this.reset()};oa(dd,cd),dd.prototype.reset=function(){this.b[0]=1732584193,this.b[1]=4023233417,this.b[2]=2562383102,this.b[3]=271733878,this.b[4]=3285377520,this.D=this.o=0};var ed=function(e,r,n){n||(n=0);var o=e.da;if(typeof r=="string")for(var i=0;16>i;i++)o[i]=r.charCodeAt(n)<<24|r.charCodeAt(n+1)<<16|r.charCodeAt(n+2)<<8|r.charCodeAt(n+3),n+=4;else for(i=0;16>i;i++)o[i]=r[n]<<24|r[n+1]<<16|r[n+2]<<8|r[n+3],n+=4;for(i=16;80>i;i++){var s=o[i-3]^o[i-8]^o[i-14]^o[i-16];o[i]=(s<<1|s>>>31)&4294967295}r=e.b[0],n=e.b[1];var l=e.b[2],c=e.b[3],u=e.b[4];for(i=0;80>i;i++){if(40>i)if(20>i){s=c^n&(l^c);var d=1518500249}else s=n^l^c,d=1859775393;else 60>i?(s=n&l|c&(n|l),d=2400959708):(s=n^l^c,d=3395469782);s=(r<<5|r>>>27)+s+u+d+o[i]&4294967295,u=c,c=l,l=(n<<30|n>>>2)&4294967295,n=r,r=s}e.b[0]=e.b[0]+r&4294967295,e.b[1]=e.b[1]+n&4294967295,e.b[2]=e.b[2]+l&4294967295,e.b[3]=e.b[3]+c&4294967295,e.b[4]=e.b[4]+u&4294967295};dd.prototype.update=function(e,r){if(e!=null){r===void 0&&(r=e.length);for(var n=r-this.j,o=0,i=this.G,s=this.o;o<r;){if(s==0)for(;o<=n;)ed(this,e,o),o+=this.j;if(typeof e=="string"){for(;o<r;)if(i[s]=e.charCodeAt(o),++s,++o,s==this.j){ed(this,i),s=0;break}}else for(;o<r;)if(i[s]=e[o],++s,++o,s==this.j){ed(this,i),s=0;break}}this.o=s,this.D+=r}},dd.prototype.digest=function(){var e=[],r=8*this.D;56>this.o?this.update(this.C,56-this.o):this.update(this.C,this.j-(this.o-56));for(var n=this.j-1;56<=n;n--)this.G[n]=r&255,r/=256;for(ed(this,this.G),n=r=0;5>n;n++)for(var o=24;0<=o;o-=8)e[r]=this.b[n]>>o&255,++r;return e};var fd=function(){this.O=new dd};fd.prototype.reset=function(){this.O.reset()};var gd=x.crypto,hd=!1,id=0,jd=0,kd=1,ld=0,md="",nd=function(e){e=e||x.event;var r=e.screenX+e.clientX<<16;r+=e.screenY+e.clientY,r*=new Date().getTime()%1e6,kd=kd*r%ld,0<id&&++jd==id&&jb("mousemove",nd,"remove","de")},od=function(e){var r=new fd;e=unescape(encodeURIComponent(e));for(var n=[],o=0,i=e.length;o<i;++o)n.push(e.charCodeAt(o));for(r.O.update(n),r=r.O.digest(),e="",n=0;n<r.length;n++)e+="0123456789ABCDEF".charAt(Math.floor(r[n]/16))+"0123456789ABCDEF".charAt(r[n]%16);return e};hd=!!gd&&typeof gd.getRandomValues=="function",hd||(ld=1e6*(screen.width*screen.width+screen.height),md=od(z.cookie+"|"+z.location+"|"+new Date().getTime()+"|"+Math.random()),id=Q("random/maxObserveMousemove")||0,id!=0&&jb("mousemove",nd,"add","at"));var pd=function(){var e=kd;return e+=parseInt(md.substr(0,20),16),md=od(md),e/(ld+Math.pow(16,20))},qd=function(){var e=new x.Uint32Array(1);return gd.getRandomValues(e),Number("0."+e[0])},rd=function(){var e=K.onl;if(!e){e=B(),K.onl=e;var r=B();e.e=function(n){var o=r[n];o&&(delete r[n],o())},e.a=function(n,o){r[n]=o},e.r=function(n){delete r[n]}}return e},sd=function(e,r){return r=r.onload,typeof r=="function"?(rd().a(e,r),r):null},td=function(e){return E(/^\w+$/.test(e),"Unsupported id - "+e),rd(),'onload="window.___jsl.onl.e(&#34;'+e+'&#34;)"'},ud=function(e){rd().r(e)},vd={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},wd={allowtransparency:!0,onload:!0},xd=0,yd=function(e){E(!e||ib.test(e),"Illegal url for new iframe - "+e)},zd=function(e,r,n,o,i){yd(n.src);var s,l=sd(o,n),c=l?td(o):"";try{document.all&&(s=e.createElement('<iframe frameborder="'+Wa(String(n.frameborder))+'" scrolling="'+Wa(String(n.scrolling))+'" '+c+' name="'+Wa(String(n.name))+'"/>'))}catch{}finally{s||(s=e.createElement("iframe"),l&&(s.onload=function(){s.onload=null,l.call(this)},ud(o)))}s.setAttribute("ng-non-bindable","");for(var u in n)e=n[u],u==="style"&&typeof e=="object"?D(e,s.style):wd[u]||s.setAttribute(u,String(e));return(u=i&&i.beforeNode||null)||i&&i.dontclear||ob(r),r.insertBefore(s,u),s=u?u.previousSibling:r.lastChild,n.allowtransparency&&(s.allowTransparency=!0),s},Ad=/^:[\w]+$/,Bd=/:([a-zA-Z_]+):/g,Cd=function(){var e=xc()||"0",r=yc(),n=xc(void 0)||e,o=yc(void 0),i="";n&&(i+="u/"+encodeURIComponent(String(n))+"/"),o&&(i+="b/"+encodeURIComponent(String(o))+"/"),n=i||null,(i=(o=Q("isLoggedIn")===!1)?"_/im/":"")&&(n="");var s=Q("iframes/:socialhost:"),l=Q("iframes/:im_socialhost:");return{socialhost:s,ctx_socialhost:o?l:s,session_index:e,session_delegate:r,session_prefix:n,im_prefix:i}},Dd=function(e,r){return Cd()[r]||""},Ed=function(e){return function(r,n){return e?Cd()[n]||e[n]||"":Cd()[n]||""}},Fd=function(e){var r;return e.match(/^https?%3A/i)&&(r=decodeURIComponent(e)),hb(document,r||e)},Gd=function(e){e=e||"canonical";for(var r=document.getElementsByTagName("link"),n=0,o=r.length;n<o;n++){var i=r[n],s=i.getAttribute("rel");if(s&&s.toLowerCase()==e&&(i=i.getAttribute("href"))&&(i=Fd(i))&&i.match(/^https?:\/\/[\w\-_\.]+/i)!=null)return i}return window.location.href},Hd={se:"0"},Id={post:!0},Jd={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},Kd="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),Ld=A(K,"WI",B()),Md=function(e,r,n){var o,i={},s=o=e;e=="plus"&&r.action&&(o=e+"_"+r.action,s=e+"/"+r.action),(o=Q("iframes/"+o+"/url"))||(o=":im_socialhost:/:session_prefix::im_prefix:_/widget/render/"+s+"?usegapi=1");for(var l in Hd)i[l]=l+"/"+(r[l]||Hd[l])+"/";if(i=hb(z,o.replace(Bd,Ed(i))),l="iframes/"+e+"/params/",s={},D(r,s),(o=Q("lang")||Q("gwidget/lang"))&&(s.hl=o),Id[e]||(s.origin=window.location.origin||window.location.protocol+"//"+window.location.host),s.exp=Q(l+"exp"),l=Q(l+"location"))for(o=0;o<l.length;o++){var c=l[o];s[c]=x.location[c]}switch(e){case"plus":case"follow":l=s.href,o=r.action?void 0:"publisher",l=(l=typeof l=="string"?l:void 0)?Fd(l):Gd(o),s.url=l,delete s.href;break;case"plusone":l=(l=r.href)?Fd(l):Gd(),s.url=l,l=r.db,o=Q(),l==null&&o&&(l=o.db,l==null&&(l=o.gwidget&&o.gwidget.db)),s.db=l||void 0,l=r.ecp,o=Q(),l==null&&o&&(l=o.ecp,l==null&&(l=o.gwidget&&o.gwidget.ecp)),s.ecp=l||void 0,delete s.href;break;case"signin":s.url=Gd()}K.ILI&&(s.iloader="1"),delete s["data-onload"],delete s.rd;for(var u in Hd)s[u]&&delete s[u];s.gsrc=Q("iframes/:source:"),u=Q("inline/css"),typeof u<"u"&&0<n&&u>=n&&(s.ic="1"),u=/^#|^fr-/,n={};for(var d in s)C(s,d)&&u.test(d)&&(n[d.replace(u,"")]=s[d],delete s[d]);d=Q("iframes/"+e+"/params/si")=="q"?s:n,u=mc();for(var p in u)!C(u,p)||C(s,p)||C(n,p)||(d[p]=u[p]);p=[].concat(Kd),(d=Q("iframes/"+e+"/methods"))&&typeof d=="object"&&Na.test(d.push)&&(p=p.concat(d));for(var f in r)C(r,f)&&/^on/.test(f)&&(e!="plus"||f!="onconnect")&&(p.push(f),delete s[f]);return delete s.callback,n._methods=p.join(","),fb(i,s,n)},Nd=["style","data-gapiscan"],Pd=function(e){for(var r=B(),n=e.nodeName.toLowerCase().indexOf("g:")!=0,o=0,i=e.attributes.length;o<i;o++){var s=e.attributes[o],l=s.name,c=s.value;0<=Oa.call(Nd,l)||n&&l.indexOf("data-")!=0||c==="null"||"specified"in s&&!s.specified||(n&&(l=l.substr(5)),r[l.toLowerCase()]=c)}return e=e.style,(n=Od(e&&e.height))&&(r.height=String(n)),(e=Od(e&&e.width))&&(r.width=String(e)),r},Od=function(e){var r=void 0;return typeof e=="number"?r=e:typeof e=="string"&&(r=parseInt(e,10)),r},Rd=function(){var e=K.drw;sc(function(r){if(e!==r.id&&r.state!=4&&r.type!="share"){var n=r.id,o=r.type,i=r.url;r=r.userParams;var s=z.getElementById(n);if(s){var l=Md(o,r,0);l?(s=s.parentNode,i.replace(/#.*/,"").replace(/(\?|&)ic=1/,"")!==l.replace(/#.*/,"").replace(/(\?|&)ic=1/,"")&&(r.dontclear=!0,r.rd=!0,r.ri=!0,r.type=o,Qd(s,r),(o=R[s.lastChild.id])&&(o.oid=n),tc(n,4))):delete R[n]}else delete R[n]}})},Sd,Td,X,Ud,Vd,Wd=/(?:^|\s)g-((\S)*)(?:$|\s)/,Xd={plusone:!0,autocomplete:!0,profile:!0,signin:!0,signin2:!0};Sd=A(K,"SW",B()),Td=A(K,"SA",B()),X=A(K,"SM",B()),Ud=A(K,"FW",[]),Vd=null;var Zd=function(e,r){Yd(void 0,!1,e,r)},Yd=function(e,r,n,o){L("ps0",!0),n=(typeof n=="string"?document.getElementById(n):n)||z;var i=z.documentMode;if(n.querySelectorAll&&(!i||8<i)){i=o?[o]:Xa(Sd).concat(Xa(Td)).concat(Xa(X));for(var s=[],l=0;l<i.length;l++){var c=i[l];s.push(".g-"+c,"g\\:"+c)}i=n.querySelectorAll(s.join(","))}else i=n.getElementsByTagName("*");for(n=B(),s=0;s<i.length;s++){l=i[s];var u=l;c=o;var d=u.nodeName.toLowerCase(),p=void 0;if(u.getAttribute("data-gapiscan"))c=null;else{var f=d.indexOf("g:");f==0?p=d.substr(2):(f=(f=String(u.className||u.getAttribute("class")))&&Wd.exec(f))&&(p=f[1]),c=!p||!(Sd[p]||Td[p]||X[p])||c&&p!==c?null:p}c&&(Xd[c]||l.nodeName.toLowerCase().indexOf("g:")==0||Xa(Pd(l)).length!=0)&&(l.setAttribute("data-gapiscan",!0),A(n,c,[]).push(l))}if(r)for(var g in n)for(r=n[g],o=0;o<r.length;o++)r[o].setAttribute("data-onload",!0);for(var h in n)Ud.push(h);if(L("ps1",!0),(g=Ud.join(":"))||e)try{F.load(g,e)}catch(_){pc(_);return}if($d(Vd||{}))for(var y in n){for(e=n[y],h=0,r=e.length;h<r;h++)e[h].removeAttribute("data-gapiscan");ae(y)}else{o=[];for(y in n)for(e=n[y],h=0,r=e.length;h<r;h++)i=e[h],be(y,i,Pd(i),o,r);ce(g,o)}},de=function(e){var r=A(F,e,{});r.go||(r.go=function(n){return Zd(n,e)},r.render=function(n,o){return o=o||{},o.type=e,Qd(n,o)})},ee=function(e){Sd[e]=!0},fe=function(e){Td[e]=!0},ge=function(e){X[e]=!0},ae=function(e,r){var n=sb(e);r&&n?(n(r),(n=r.iframeNode)&&n.setAttribute("data-gapiattached",!0)):F.load(e,function(){var o=sb(e),i=r&&r.iframeNode,s=r&&r.userParams;i&&o?(o(r),i.setAttribute("data-gapiattached",!0)):(o=F[e].go,e=="signin2"?o(i,s):o(i&&i.parentNode,s))})},$d=function(){return!1},ce=function(){},be=function(e,r,n,o,i,s,l){switch(he(r,e,s)){case 0:e=X[e]?e+"_annotation":e,o={},o.iframeNode=r,o.userParams=n,ae(e,o);break;case 1:if(r.parentNode){for(var c in n)if((s=C(n,c))&&(s=n[c],s=!!s&&typeof s=="object"&&(!s.toString||s.toString===Object.prototype.toString||s.toString===Array.prototype.toString)),s)try{n[c]=$c(n[c])}catch{delete n[c]}if(s=!0,n.dontclear&&(s=!1),delete n.dontclear,rc(),c=Md(e,n,i),i=l||{},i.allowPost=1,i.attributes=Jd,i.dontclear=!s,l={},l.userParams=n,l.url=c,l.type=e,n.rd)var u=r;else u=document.createElement("div"),r.setAttribute("data-gapistub",!0),u.style.cssText="position:absolute;width:450px;left:-10000px;",r.parentNode.insertBefore(u,r);l.siteElement=u,u.id||(r=u,A(Ld,e,0),s="___"+e+"_"+Ld[e]++,r.id=s),r=B(),r[">type"]=e,D(n,r),s=c,n=u,c=i||{},r=c.attributes||{},E(!(c.allowPost||c.forcePost)||!r.onload,"onload is not supported by post iframe (allowPost or forcePost)"),i=r=s,Ad.test(r)&&(i=Q("iframes/"+i.substring(1)+"/url"),E(!!i,"Unknown iframe url config for - "+r)),s=hb(z,i.replace(Bd,Dd)),r=n.ownerDocument||z,u=0;do i=c.id||["I",xd++,"_",new Date().getTime()].join("");while(r.getElementById(i)&&5>++u);E(5>u,"Error creating iframe id"),u={};var d={};r.documentMode&&9>r.documentMode&&(u.hostiemode=r.documentMode),D(c.queryParams||{},u),D(c.fragmentParams||{},d);var p=c.pfname,f=B();Q("iframes/dropLegacyIdParam")||(f.id=i),f._gfid=i,f.parent=r.location.protocol+"//"+r.location.host;var g=H(r.location.href,"parent");if(p=p||"",!p&&g&&(g=H(r.location.href,"_gfid","")||H(r.location.href,"id",""),p=H(r.location.href,"pfname",""),p=g?p+"/"+g:""),p||(g=Zc(H(r.location.href,"jcp","")))&&typeof g=="object"&&(p=(p=g.id)?g.pfname+"/"+p:""),f.pfname=p,c.connectWithJsonParam&&(g={},g.jcp=$c(f),f=g),g=H(s,"rpctoken")||u.rpctoken||d.rpctoken,g||(g=c.rpctoken||String(Math.round(1e8*(hd?qd():pd()))),f.rpctoken=g),c.rpctoken=g,D(f,c.connectWithQueryParams?u:d),g=r.location.href,f=B(),(p=H(g,"_bsh",K.bsh))&&(f._bsh=p),(g=qb(g))&&(f.jsh=g),c.hintInFragment?D(f,d):D(f,u),s=fb(s,u,d,c.paramsSerializer),d=B(),D(vd,d),D(c.attributes,d),d.name=d.id=i,d.src=s,c.eurl=s,u=c||{},f=!!u.allowPost,u.forcePost||f&&2e3<s.length){if(u=I(s),d.src="",c.dropDataPostorigin||(d["data-postorigin"]=s),s=zd(r,n,d,i),navigator.userAgent.indexOf("WebKit")!=-1){var h=s.contentWindow.document;h.open(),d=h.createElement("div"),f={},g=i+"_inner",f.name=g,f.src="",f.style="display:none",zd(r,d,f,g,c)}for(d=(c=u.query[0])?c.split("&"):[],c=[],f=0;f<d.length;f++)g=d[f].split("=",2),c.push([decodeURIComponent(g[0]),decodeURIComponent(g[1])]);for(u.query=[],d=db(u),E(ib.test(d),"Invalid URL: "+d),u=r.createElement("form"),u.method="POST",u.target=i,u.style.display="none",i=d instanceof v?d:Fa(d),xa(u,"HTMLFormElement").action=Da(i),i=0;i<c.length;i++)d=r.createElement("input"),d.type="hidden",d.name=c[i][0],d.value=c[i][1],u.appendChild(d);n.appendChild(u),u.submit(),u.parentNode.removeChild(u),h&&h.close(),h=s}else h=zd(r,n,d,i,c);l.iframeNode=h,l.id=h.getAttribute("id"),h=l.id,n=B(),n.id=h,n.userParams=l.userParams,n.url=l.url,n.type=l.type,n.state=1,R[h]=n,h=l}else h=null;h&&((l=h.id)&&o.push(l),ae(e,h))}},he=function(e,r,n){if(e&&e.nodeType===1&&r){if(n)return 1;if(X[r]){if(pb[e.nodeName.toLowerCase()])return(e=e.innerHTML)&&e.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(Td[r])return 0;if(Sd[r])return 1}}return null},Qd=function(e,r){var n=r.type;delete r.type;var o=(typeof e=="string"?document.getElementById(e):e)||void 0;if(o){e={};for(var i in r)C(r,i)&&(e[i.toLowerCase()]=r[i]);e.rd=1,(r=!!e.ri)&&delete e.ri,i=[],be(n,o,e,i,0,r,void 0),ce(n,i)}else pc("gapi."+n+".render: missing element "+typeof e=="string"?e:"")};A(F,"platform",{}).go=Zd,$d=function(e){for(var r=["_c","jsl","h"],n=0;n<r.length&&e;n++)e=e[r[n]];return r=qb(La.href),!e||e.indexOf("n;")!=0&&r.indexOf("n;")!=0&&e!==r},ce=function(e,r){ie(e,r)};var lb=function(e){Yd(e,!0)},je=function(e,r){r=r||[];for(var n=0;n<r.length;++n)e(r[n]);for(e=0;e<r.length;e++)de(r[e])};N.push(["platform",function(e,r,n){if(Vd=n,r&&Ud.push(r),je(ee,e),je(fe,n._c.annotation),je(ge,n._c.bimodal),ic(),gc(),Q("parsetags")!="explicit"){if(rb(e),nc(mc())&&!Q("disableRealtimeCallback")&&rc(),n&&(e=n.callback)){var o=Ya(e);delete n.callback}nb(function(){lb(o)})}}]),F._pl=!0;var ke=function(e){if(e=(e=R[e])?e.oid:void 0,e){var r=z.getElementById(e);r&&r.parentNode.removeChild(r),delete R[e],ke(e)}},le=/^\{h:'/,me=/^!_/,ne="",ie=function(e,r){function n(){jb("message",o,"remove","de")}function o(s){var l=s.data,c=s.origin;if(oe(l,r)){var u=i;i=!1,u&&L("rqe"),pe(e,function(){u&&L("rqd"),n();for(var d=A(K,"RPMQ",[]),p=0;p<d.length;p++)d[p]({data:l,origin:c})})}}if(r.length!==0){ne=H(La.href,"pfname","");var i=!0;jb("message",o,"add","at"),ac(e,n)}},oe=function(e,r){if(e=String(e),le.test(e))return!0;var n=!1;if(me.test(e)&&(n=!0,e=e.substr(2)),!/^\{/.test(e))return!1;var o=Zc(e);if(!o)return!1;if(e=o.f,o.s&&e&&Oa.call(r,e)!=-1){if((o.s==="_renderstart"||o.s===ne+"/"+e+"::_renderstart")&&(o=o.a&&o.a[n?0:1],r=z.getElementById(e),tc(e,2),o&&r&&o.width&&o.height)){e:{if(n=r.parentNode,e=o||{},qc()){var i=r.id;if(i){if(o=(o=R[i])?o.state:void 0,o===1||o===4)break e;ke(i)}}(o=n.nextSibling)&&o.getAttribute&&o.getAttribute("data-gapistub")&&(n.parentNode.removeChild(o),n.style.cssText=""),o=e.width;var s=e.height,l=n.style;l.textIndent="0",l.margin="0",l.padding="0",l.background="transparent",l.borderStyle="none",l.cssFloat="none",l.styleFloat="none",l.lineHeight="normal",l.fontSize="1px",l.verticalAlign="baseline",n=n.style,n.display="inline-block",l=r.style,l.position="static",l.left="0",l.top="0",l.visibility="visible",o&&(n.width=l.width=o+"px"),s&&(n.height=l.height=s+"px"),e.verticalAlign&&(n.verticalAlign=e.verticalAlign),i&&tc(i,3)}r["data-csi-wdt"]=new Date().getTime()}return!0}return!1},pe=function(e,r){ac(e,r)},qe=function(e,r){this.L=e,e=r||{},this.fa=Number(e.maxAge)||0,this.U=e.domain,this.X=e.path,this.ga=!!e.secure};qe.prototype.read=function(){for(var e=this.L+"=",r=document.cookie.split(/;\s*/),n=0;n<r.length;++n){var o=r[n];if(o.indexOf(e)==0)return o.substr(e.length)}},qe.prototype.write=function(e,r){if(!re.test(this.L))throw"Invalid cookie name";if(!se.test(e))throw"Invalid cookie value";if(e=this.L+"="+e,this.U&&(e+=";domain="+this.U),this.X&&(e+=";path="+this.X),r=typeof r=="number"?r:this.fa,0<=r){var n=new Date;n.setSeconds(n.getSeconds()+r),e+=";expires="+n.toUTCString()}return this.ga&&(e+=";secure"),document.cookie=e,!0},qe.prototype.clear=function(){this.write("",0)};var se=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,re=/^[A-Z_][A-Z0-9_]{0,63}$/;qe.iterate=function(e){for(var r=document.cookie.split(/;\s*/),n=0;n<r.length;++n){var o=r[n].split("="),i=o.shift();e(i,o.join("="))}};var te=function(e){this.B=e};te.prototype.read=function(){if(Y.hasOwnProperty(this.B))return Y[this.B]},te.prototype.write=function(e){return Y[this.B]=e,!0},te.prototype.clear=function(){delete Y[this.B]};var Y={};te.iterate=function(e){for(var r in Y)Y.hasOwnProperty(r)&&e(r,Y[r])};var ue=window.location.protocol==="https:",ve=ue||window.location.protocol==="http:"?qe:te,we=function(e){var r=e.substr(1),n="",o=window.location.hostname;if(r!==""){if(n=parseInt(r,10),isNaN(n)||(r=o.split("."),r.length<n-1))return null;r.length==n-1&&(o="."+o)}else o="";return{i:e.charAt(0)=="S",domain:o,l:n}},xe=function(){var e,r=null;return ve.iterate(function(n,o){n.indexOf("G_AUTHUSER_")===0&&(n=we(n.substring(11)),!e||n.i&&!e.i||n.i==e.i&&n.l>e.l)&&(e=n,r=o)}),{ea:e,F:r}},ye=function(e){if(e.indexOf("GCSC")!==0)return null;var r={W:!1};if(e=e.substr(4),!e)return r;var n=e.charAt(0);e=e.substr(1);var o=e.lastIndexOf("_");if(o==-1)return r;var i=we(e.substr(o+1));return i==null||(e=e.substring(0,o),e.charAt(0)!=="_")?r:(o=n==="E"&&i.i,!o&&(n!=="U"||i.i)||o&&!ue?r:{W:!0,i:o,ja:e.substr(1),domain:i.domain,l:i.l})},ze=function(e){return e?(e=e.split("="),e[1]?e[1].split("|"):[]):[]},Ae=function(e){return e=e.split(":"),{clientId:e[0].split("=")[1],ia:ze(e[1]),la:ze(e[2]),ka:ze(e[3])}},Be=function(){var e=xe(),r=e.ea;if(e=e.F,e!==null){var n;if(ve.iterate(function(s,l){(s=ye(s))&&s.W&&s.i==r.i&&s.l==r.l&&(n=l)}),n){var o=Ae(n),i=o&&o.ia[Number(e)];if(o=o&&o.clientId,i)return{F:e,ha:i,clientId:o}}}return null},Z=function(){this.T=Ce};Z.prototype.$=function(){this.K||(this.v=0,this.K=!0,this.Y())},Z.prototype.Y=function(){this.K&&(this.T()?this.v=this.R:this.v=Math.min(2*(this.v||this.R),120),window.setTimeout(na(this.Y,this),1e3*this.v))},Z.prototype.v=0,Z.prototype.R=2,Z.prototype.T=null,Z.prototype.K=!1;var Ee=null;qc=function(){return K.oa=!0},rc=function(){K.oa=!0;var e=Be();(e=e&&e.F)&&hc("googleapis.config/sessionIndex",e),Ee||(Ee=A(K,"ss",new Z)),e=Ee,e.$&&e.$()};var Ce=function(){var e=Be(),r=e&&e.ha||null,n=e&&e.clientId;return ac("auth",{callback:function(){var o=x.gapi.auth,i={client_id:n,session_state:r};o.checkSessionState(i,function(s){var l=i.session_state,c=Q("isLoggedIn");s=Q("debug/forceIm")?!1:l&&s||!l&&!s,(c=c!=s)&&(hc("isLoggedIn",s),rc(),Rd(),s||((s=o.signOut)?s():(s=o.setToken)&&s(null))),s=mc();var u=Q("savedUserState");l=o._guss(s.cookiepolicy),u=u!=l&&typeof u<"u",hc("savedUserState",l),(c||u)&&nc(s)&&!Q("disableRealtimeCallback")&&o._pimf(s,!0)})}}),!0};L("bs0",!0,window.gapi._bs),L("bs1",!0),delete window.gapi._bs}).call(globalThis);gapi.load("",{callback:window.gapi_onload,_c:{jsl:{ci:{deviceType:"desktop","oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:.05,forceIm:!1,rethrowException:!1,host:"https://apis.google.com"},enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0}},isPlusUser:!1,inline:{css:1},disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{cors:!1},isLoggedIn:!0,signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"pt",iframes:{youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},plus_share:{params:{url:""},url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},savetoandroidpay:{url:"https://pay.google.com/gp/v/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll","openwindow"]},evwidget:{params:{url:""},url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},dataconnector:{url:"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",shortlists:{url:""},hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},plus_followers:{params:{url:""},url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},":gplus_url:":"https://plus.google.com",signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},plusone:{params:{count:"",size:"",url:""},url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},additnow:{url:"https://apis.google.com/marketplace/button?usegapi=1",methods:["launchurl"]},":signuphost:":"https://plus.google.com",ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},sharetoclassroom:{url:"https://classroom.google.com/sharewidget?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},appfinder:{url:"https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},savetowallet:{url:"https://pay.google.com/gp/v/widget/save"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"}}},h:"m;/_/scs/apps-static/_/js/k=oz.gapi.pt_BR.l4Bv_WkVC6g.O/am=wQE/d=1/ct=zgms/rs=AGLTcCOuH5S2uqmF6E8zOW7n3yiqiwhzNQ/m=__features__",u:"https://apis.google.com/js/platform.js",hee:!0,fp:"821a251b140e4add32f87f4a7a08f044a59aa0e9",dpo:!1},platform:["additnow","backdrop","blogger","comments","commentcount","community","donation","family_creation","follow","hangout","health","page","partnersbadge","person","playemm","playreview","plus","plusone","post","ratingbadge","savetoandroidpay","savetodrive","savetowallet","sharetoclassroom","shortlists","signin2","surveyoptin","visibility","youtube","ytsubscribe","zoomableimage"],fp:"821a251b140e4add32f87f4a7a08f044a59aa0e9",annotation:["interactivepost","recobar","signin2","autocomplete","profile"],bimodal:["signin","share"]}});const loadAuth2=async function(e,r,n){return new Promise(o=>{e.load("auth2",()=>{o(e.auth2.init({client_id:r,scope:n}))})})},formatEvents=(e=[],r)=>{if(e.length==0)return null;let n=e.map(i=>{const{id:s,start:l,end:c,summary:u,description:d,htmlLink:p,attachments:f,location:g,creator:h,organizer:y}=i;let{email:_}=h||y||{};const{id:Se,backgroundColor:j,foregroundColor:Ne,readOnly:M}=r.find(({id:Ie})=>Ie==_)||{};return{id:s,foregroundColor:Ne,backgroundColor:j,calendarId:Se,readOnly:M,htmlLink:p,isAllDay:!!(l!=null&&l.date),start:(l==null?void 0:l.dateTime)||(l==null?void 0:l.date),end:(c==null?void 0:c.dateTime)||(c==null?void 0:c.date),summary:u,description:d,attachments:f,location:g}}).sort((i,s)=>{try{const l=new Date(i.start),c=new Date(s.start);return l-c}catch{return 0}}),o={};return n.forEach(i=>{addToGroup(o,i)}),o},addToGroup=(e,r)=>{let{start:n}=r,o=null;try{o=format(new Date(n),"P")}catch{o="Not Yet Classified"}let i=e[o];return e[o]=i?[...i,r]:[r],e},calendarListAPI="https://www.googleapis.com/calendar/v3/users/me/calendarList",cid="1034738316090-tf816ulnekevogf577eron4d6iktdu01.apps.googleusercontent.com",scopes="https://www.googleapis.com/auth/calendar",useGoogleAuth=(e=null,r=!1)=>{const[n,o]=react.exports.useState(null),[i,s]=react.exports.useState(!1),[l,c]=react.exports.useState(!r),[u,d]=react.exports.useState(!1),[p,f]=react.exports.useState([]),[g,h]=react.exports.useState([]),[y,_]=react.exports.useState(e||null),[Se,j]=react.exports.useState(null);react.exports.useEffect(()=>{r||(async()=>{try{let k=await loadAuth2(gapi,cid,scopes);o(k)}catch(k){c(!1);const{result:{error:{message:$}}}=k;j($||"Google\u8BA4\u8BC1\u5F02\u5E38")}})();const _e=k=>{var De;const{target:$}=k;((De=$==null?void 0:$.tagName)==null?void 0:De.toUpperCase())==="SCRIPT"&&$.src.indexOf("apis.google.com/_/scs/apps-static")>-1&&j("\u8C37\u6B4CAPI\u811A\u672C\u52A0\u8F7D\u51FA\u9519\uFF0C\u8BF7\u68C0\u67E5\u80FD\u5426\u79D1\u5B66\u4E0A\u7F51\u{1F60A}")};return window.addEventListener("error",_e,!0),()=>{window.removeEventListener("error",_e,!0)}},[r]),react.exports.useEffect(()=>{n&&(n.isSignedIn.listen(k=>{s(!!k)}),n.currentUser.get().hasGrantedScopes(scopes)&&s(!0))},[n]);const Ne=async()=>{c(!0);try{await gapi.client.init({clientId:cid,scope:scopes});const J=await gapi.client.request({path:calendarListAPI});if(J.status==200){const{items:_e}=J.result;let k=_e.map($=>{let{id:De,summary:G,description:Oe,backgroundColor:Te,foregroundColor:Pe,primary:Re,accessRole:Me}=$;return{id:De,summary:G,description:Oe,backgroundColor:Te,foregroundColor:Pe,checked:!0,primary:Re,readOnly:Me=="reader"?!0:Me!="owner"}});f(k),h(k)}else c(!1),j("\u62C9\u53D6\u65E5\u5386\u5217\u8868\u6570\u636E\u5F02\u5E38")}catch(J){c(!1);const{result:{error:{message:_e}}}=J;j(_e||"Google\u63A5\u53E3\u5F02\u5E38")}};return react.exports.useEffect(()=>{i&&gapi.load("client",Ne)},[i]),react.exports.useEffect(()=>{const J=async()=>{let k=g.map(({id:$})=>`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent($)}/events?orderBy=startTime&singleEvents=true&maxResults=30&timeMin=${new Date().toISOString()}&&timeMax=${addDays(new Date,30).toISOString()}`).map($=>gapi.client.request({path:$}));try{d(!0);const $=await Promise.all(k);let De=[];$.forEach(Oe=>{if(Oe.status==200){const{items:Te}=Oe.result;De.push(...Te)}});let G=formatEvents(De,p);_(G),d(!1),c(!1)}catch{d(!1),c(!1),j("\u62C9\u53D6\u65E5\u7A0B\u6570\u636E\u5F02\u5E38")}};g.length&&J()},[g]),{auth:n,syncData:Ne,addEvent:async J=>{let _e="https://www.googleapis.com/calendar/v3/calendars/primary/events/quickAdd",{status:k,result:$,statusText:De}=await gapi.client.request({path:_e,method:"POST",params:{text:J}}),G={};if(k==200){let{foregroundColor:Oe,backgroundColor:Te,id:Pe}=p.find(Qe=>Qe.primary==!0),{start:Re,end:Me}=$,{id:$e,htmlLink:Fe,summary:He}=$;G={id:$e,foregroundColor:Oe,backgroundColor:Te,calendarId:Pe,htmlLink:Fe,start:(Re==null?void 0:Re.dateTime)||(Re==null?void 0:Re.date),end:(Me==null?void 0:Me.dateTime)||(Me==null?void 0:Me.date),summary:He,readOnly:!1};let Ke=addToGroup(y,G);_({...Ke})}return{success:k==200,msg:De,data:G}},removeEvent:async({cid:J,eid:_e})=>{let k=`https://www.googleapis.com/calendar/v3/calendars/${J}/events/${_e}`,{status:$,statusText:De}=await gapi.client.request({path:k,method:"DELETE"});if($==204){let G=Object.fromEntries(Object.entries(y).map(([Oe,Te])=>{let Pe=Te.filter(Re=>Re.id!==_e);return[Oe,Pe]}).filter(([,Oe])=>Oe.length!==0));_(G)}return{success:$==204,msg:De}},signedIn:i,loading:l,reloading:u,error:Se,groupEvents:y,calendars:p,updateCalendars:J=>{f(J);let _e=J.filter(k=>k.checked==!0);h(_e)}}},AniFading=Ue`
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
`,StyledEvent=styled.li`
  font-size: 0.16rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  width: 99%;

  padding: 0.2rem 0.12rem;
  margin-bottom: 0.15rem;
  position: relative;
  border-left: 0.14rem solid ${({themeColor:e})=>e};
  display: flex;
  &.removing {
    animation: ${AniFading} 1s infinite alternate;
  }
  &.highlight {
    color: #fff;
    background-color: #5c46e3;
    .link .content .desc,
    .link .content .title {
      color: #eee;
    }
  }
  .time_span {
    display: flex;
    flex-direction: column;
    margin-right: 0.2rem;
    white-space: nowrap;
    /* color: #eee; */
    .start {
      margin-bottom: 0.1rem;
    }
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    .title {
      font-size: 0.2rem;
      font-weight: 800;
      margin-bottom: 0.08rem;
    }
    .desc {
      font-size: 0.12rem;
      color: #999;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-all;
      a {
        text-decoration: underline;
      }
    }
    > .opts {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      visibility: hidden;
      .opt {
        padding: 0;
        width: 0.2rem;
        height: 0.2rem;
        &:not(:last-child) {
          margin-right: 0.1rem;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        &.link svg {
          fill: ${({themeColor:e})=>e};
        }
      }
    }

    .aside {
      display: flex;
      margin-top: 0.12rem;
      > .block {
        display: flex;
        padding: 0.04rem 0.08rem 0.04rem 0;
        &:not(:last-child) {
          border-right: 1px solid #eee;
        }
        &:not(:first-child) {
          padding-left: 0.06rem;
        }
        &.atts {
          .att {
            .link {
              display: flex;
              .icon {
                width: 0.2rem;
                height: 0.2rem;
              }
            }
            &:not(:last-child) {
              margin-right: 0.08rem;
            }
          }
        }
        &.location {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  &:hover .content > .opts {
    visibility: visible;
  }
`,mock={start:"2021-02-24T14:00:00+08:00",end:"2021-02-24T15:00:00+08:00",summary:"\u6D4B\u8BD5",htmlLink:"https://www.google.com/calendar/event?eid=NTg1a21uNHBzOTBxYXU5ZWZpa3NwZmozZWIgeWFuZ2djODg4QG0"},getText=e=>{let r=[],n=document.createElement("p");n.innerHTML=e,[...n.querySelectorAll("a")].forEach(i=>{r.push(i.innerText)});let o=n.innerText;return r.forEach(i=>{o=o.replace(i,`${i} `)}),o};function Event({readonly:e,highlight:r=!1,deleteEvent:n,data:o=mock}){const[i,s]=react.exports.useState(!1),{id:l,calendarId:c,isAllDay:u,readOnly:d=!0,backgroundColor:p,summary:f,start:g,end:h,htmlLink:y,description:_,location:Se,attachments:j=[]}=o,Ne=j.length||Se,M=async({currentTarget:Ie})=>{const{eid:Le,cid:J}=Ie.dataset;if(confirm("Are you sure to remove this event?")){s(!0);let{success:_e,msg:k}=await n({eid:Le,cid:J});_e||alert(k),s(!1)}};return jsxs(StyledEvent,{id:`e-${l}`,themeColor:p,className:`${i?"removing":""} ${(new Date(g)-new Date<=0||r)&&"highlight"}`,children:[!u&&jsxs("div",{className:"time_span",children:[jsx("span",{className:"start",children:format(new Date(g),"p")}),jsx("span",{className:"end",children:format(new Date(h),"p")})]}),jsxs("article",{className:"content",children:[!e&&jsxs("div",{className:"opts",children:[!d&&jsx("button",{disabled:i,onClick:M,className:"opt delete","data-eid":l,"data-cid":c,children:jsx(AiOutlineDelete,{color:"#fe6b23"})}),jsx("a",{href:y,title:"Jump to event detail",target:"_blank",rel:"noopener noreferrer",className:"opt link",children:jsx(AiOutlineLink,{})})]}),jsx("h2",{className:"title",children:f}),_&&jsx("div",{className:"desc",children:getText(_)}),Ne&&jsxs("div",{className:"aside",children:[jsx("div",{className:"block atts",children:j.map(Ie=>{const{fileId:Le,fileUrl:J,title:_e,iconLink:k}=Ie;return jsx("span",{className:"att",children:jsx("a",{className:"link",href:J,title:_e,target:"_blank",rel:"noopener noreferrer",children:jsx("img",{className:"icon",src:k,alt:"file icon"})})},Le)})}),Se&&jsx("div",{className:"block location",children:jsx("a",{title:Se,href:`https://www.google.com/maps?q=${Se}`,target:"_blank",rel:"noopener noreferrer",children:jsx(GrLocation,{})})})]})]})]})}const StyledWrapper$1=styled.div`
  position: relative;
  .add {
    svg {
      transition: all 0.3s;
      width: 0.3rem;
      height: 0.3rem;
      transform-origin: center;
    }
    &.expand svg {
      transform: rotate(45deg);
    }
  }

  .panel {
    background-color: #fff;
    padding: 0.1rem 0.14rem;
    border: 1px solid #eee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 99;
    position: absolute;
    right: 0;
    top: 0.5rem;
    transform: translateX(50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .calendar {
      font-size: 0.16rem;
      color: #999;
    }
    .input {
      margin: 0.1rem 0;
      border: 1px solid #eee;
      font-size: 0.14rem;
      min-height: 1.5rem;
      padding: 0.05rem;
    }
    .submit {
      border-radius: 5px;
      margin: 0.14rem 0;
      color: #fff;
      background-color: #5c4ddf;
      font-size: 0.16rem;
      padding: 0.04rem 0.15rem;
      &[disabled] {
        background-color: #aaa;
      }
    }
  }
`;function AddEvent$1({lang:e,calendar:r=null,addEvent:n}){const[o,i]=react.exports.useState(!1),[s,l]=react.exports.useState(""),[c,u]=react.exports.useState(!1),d=()=>{u(g=>!g)},p=g=>{const{value:h}=g.target;l(h)},f=async()=>{var _;i(!0);let{success:g,msg:h,data:{id:y}}=await n(s);g||alert(h),i(!1),u(!1),l(""),(_=document.querySelector(`#e-${y}`))==null||_.scrollIntoView({behavior:"smooth",block:"center"})};return jsxs(StyledWrapper$1,{children:[jsx("button",{className:`add ${c?"expand":""}`,onClick:d,children:jsx(IoAddCircleOutline,{color:"#5c4ddf"})}),c&&jsxs("div",{className:"panel",children:[jsx("textarea",{className:"input",onChange:p,value:s,cols:"30",rows:"10"}),r&&jsxs("h3",{className:"calendar",style:{color:r.backgroundColor},children:[e.addTo,": ",r.summary]}),jsx("button",{disabled:!s||!r||o,className:"submit",onClick:f,children:e.submit})]})]})}const StyledWrapper=styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 22, 22, 0.2);
  .panel {
    background-color: var(--modal-bg-color, #fff);
    color: var(--modal-font-color);
    padding: 0.1rem 0.14rem;
    border: 1px solid #eee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 99;
    max-height: 90%;
    overflow: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    .calendars {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0.08rem 0.1rem;
      z-index: 99;
      .calendar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 0.2rem;
        width: 2.5rem;
        padding-bottom: 0.2rem;

        &:not(:last-child) {
          border-bottom: 1px dashed #eee;
        }
        .top {
          display: flex;
          align-items: center;
          > .title {
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            padding: 0.05rem 0.1rem;
            border-radius: 4px;
            white-space: nowrap;
            .check {
              position: relative;
              width: 0.2rem;
              height: 0.2rem;
              border-radius: 50%;
              border: 1px solid #fff;
              margin-right: 0.1rem;
              &:before {
                content: '';
                transform: rotateX(180deg);
                position: absolute;
                top: -0.02rem;
                font-size: 0.22rem;
                color: #eee;
              }
              &.checked:before {
                content: 'ヘ';
              }
            }
            .txt {
              font-weight: 800;
              line-height: 1.4;
              font-size: 0.18rem;
            }
          }
          .flag {
            margin-left: 0.1rem;
            font-size: 0.08rem;
            padding: 0.03rem 0.06rem;
            border-radius: 4px;
            background: #aaa;
            color: #fff;
            white-space: nowrap;
          }
        }

        > .desc {
          line-height: 1.4;
          margin-top: 0.1rem;
          font-size: 0.12rem;
          color: #999;
        }
      }
    }
  }
`;function AddEvent({name:e,calendars:r=[],updateCalendars:n}){const o=({currentTarget:i})=>{const{cid:s}=i.dataset;let l=r.map(c=>(c.id==s&&(c.checked=!c.checked),c));n([...l])};return reactDom.exports.createPortal(jsx(StyledWrapper,{children:jsx("div",{className:"panel",children:jsx("ul",{className:"calendars",children:r.sort((i,s)=>Number(s.primary||!1)-Number(i.primary||!1)).map(i=>{const{summary:s,description:l,id:c,backgroundColor:u,foregroundColor:d,readOnly:p,checked:f}=i;return jsxs("li",{className:"calendar",children:[jsxs("div",{className:"top",children:[jsxs("h3",{"data-cid":c,onClick:o,className:`title ${p?"readonly":""}`,style:{backgroundColor:u,color:d},children:[jsx("i",{style:{backgroundColor:u},className:`check ${f?"checked":""}`}),jsx("span",{className:"txt",children:s})]}),p&&jsx("i",{className:"flag",children:"Read Only"})]}),l&&jsx("p",{className:"desc",children:l})]},c)})})})}),document.querySelector(`#widget-${e}-setting`))}const googleAuthHook=useGoogleAuth,filterOutPassed=e=>{if(!e)return null;let r=[];Object.entries(e).forEach(([,o])=>{r.push(...o)}),r=r.filter(o=>o.isAllDay&&isSameDay(new Date(o.start),new Date)||isAfter(new Date(o.end),new Date));let n={};return r.forEach(o=>{let{start:i}=o,s=null;try{s=format(new Date(i),"P")}catch{s="Not Yet Classified"}let l=n[s];n[s]=l?[...l,o]:[o]}),n};function MyAgenda({data:e,readonly:r,name:n,lang:o}){const{getWidgetSetting:i,updateWidgetSetting:s}=useWidgetSettings();let l=r?e==null?void 0:e.groupEvents:i({name:n,key:"groupEvents"});const c=react.exports.useRef(null),[u,d]=react.exports.useState(!!l),[p,f]=react.exports.useState(void 0),{auth:g,signedIn:h,loading:y,reloading:_,error:Se,groupEvents:j,calendars:Ne,syncData:M,addEvent:Ie,removeEvent:Le,updateCalendars:J}=googleAuthHook(l,r),_e=()=>{g.signIn()},k=()=>{d(!1),M()},$=G=>(d(!1),Ie(G)),De=()=>{let G=c.current.querySelector(".highlight");G==null||G.scrollIntoView({behavior:"smooth",block:"center"})};if(react.exports.useEffect(()=>{if(u||s({name:n,key:"groupEvents",data:j}),j){const G=Object.entries(j).sort(([Pe],[Re])=>new Date(Pe)-new Date(Re)),[Oe=[null,null]]=G,[,Te]=Oe;f(Te?Te[0]:null)}},[j,u]),Se)throw new Error(Se);return!h&&!r?jsx(GoAuth,{disabled:!g,auth:_e}):jsxs(Fragment,{children:[!r&&jsx(AddEvent,{calendars:Ne,updateCalendars:J,name:n}),jsxs(StyledWrapper$3,{children:[jsx("div",{className:"topbar",children:jsxs("div",{className:"today",children:[jsx("button",{disabled:y||r,onClick:De,className:"btn",children:p&&formatDistanceToNowStrict(new Date(p.start))}),jsx("span",{className:"date",children:new Date().toLocaleDateString(o.locale)}),!r&&jsxs(Fragment,{children:[jsx("button",{disabled:y||r,onClick:k,className:"update",children:jsx(RiRefreshLine,{className:_?"reloading":"",color:y?"#aaa":"#5c4ddf"})}),jsx(AddEvent$1,{lang:o.addEvent,calendar:Ne.find(G=>G.primary==!0),addEvent:$})]})]})}),y&&!j?jsx("div",{className:"loading",children:o.fetching}):j==null?jsx("div",{className:"empty",children:o.empty}):jsx("ul",{className:"list",ref:c,children:Object.entries(filterOutPassed(j)||{}).sort(([G],[Oe])=>new Date(G)-new Date(Oe)).map(([G,Oe])=>jsxs("li",{className:"item",children:[jsx("h3",{className:"title",children:new Date(G).toLocaleDateString(o.locale)}),jsx("ul",{className:"evts",children:Oe.map(Te=>jsx(Event,{readonly:r,highlight:(p==null?void 0:p.id)==Te.id,data:Te,deleteEvent:Le},Te.summary))})]},G))})]})]})}export{MyAgenda as default};

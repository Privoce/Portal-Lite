import{r as b,t as N,g as I,a as A,b as F,c as V,d as K,e as Y,f as j,s as Z,l as J,i as z,h as P,j as ee,k as te}from"./index.76cc53c3.js";function y(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?y=function(e){return typeof e}:y=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(n)}function re(n){return b(1,arguments),n instanceof Date||y(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function ae(n){if(b(1,arguments),!re(n)&&typeof n!="number")return!1;var r=N(n);return!isNaN(Number(r))}var ne=864e5;function ie(n){b(1,arguments);var r=N(n),e=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var t=r.getTime(),a=e-t;return Math.floor(a/ne)+1}function u(n,r){for(var e=n<0?"-":"",t=Math.abs(n).toString();t.length<r;)t="0"+t;return e+t}var oe={y:function(r,e){var t=r.getUTCFullYear(),a=t>0?t:1-t;return u(e==="yy"?a%100:a,e.length)},M:function(r,e){var t=r.getUTCMonth();return e==="M"?String(t+1):u(t+1,2)},d:function(r,e){return u(r.getUTCDate(),e.length)},a:function(r,e){var t=r.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(r,e){return u(r.getUTCHours()%12||12,e.length)},H:function(r,e){return u(r.getUTCHours(),e.length)},m:function(r,e){return u(r.getUTCMinutes(),e.length)},s:function(r,e){return u(r.getUTCSeconds(),e.length)},S:function(r,e){var t=e.length,a=r.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,t-3));return u(i,e.length)}};const d=oe;var l={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ue={G:function(r,e,t){var a=r.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(a,{width:"abbreviated"});case"GGGGG":return t.era(a,{width:"narrow"});case"GGGG":default:return t.era(a,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){var a=r.getUTCFullYear(),i=a>0?a:1-a;return t.ordinalNumber(i,{unit:"year"})}return d.y(r,e)},Y:function(r,e,t,a){var i=I(r,a),o=i>0?i:1-i;if(e==="YY"){var m=o%100;return u(m,2)}return e==="Yo"?t.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(r,e){var t=A(r);return u(t,e.length)},u:function(r,e){var t=r.getUTCFullYear();return u(t,e.length)},Q:function(r,e,t){var a=Math.ceil((r.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return t.ordinalNumber(a,{unit:"quarter"});case"QQQ":return t.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(a,{width:"wide",context:"formatting"})}},q:function(r,e,t){var a=Math.ceil((r.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return t.ordinalNumber(a,{unit:"quarter"});case"qqq":return t.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(a,{width:"wide",context:"standalone"})}},M:function(r,e,t){var a=r.getUTCMonth();switch(e){case"M":case"MM":return d.M(r,e);case"Mo":return t.ordinalNumber(a+1,{unit:"month"});case"MMM":return t.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(a,{width:"wide",context:"formatting"})}},L:function(r,e,t){var a=r.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return t.ordinalNumber(a+1,{unit:"month"});case"LLL":return t.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(a,{width:"wide",context:"standalone"})}},w:function(r,e,t,a){var i=F(r,a);return e==="wo"?t.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(r,e,t){var a=V(r);return e==="Io"?t.ordinalNumber(a,{unit:"week"}):u(a,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getUTCDate(),{unit:"date"}):d.d(r,e)},D:function(r,e,t){var a=ie(r);return e==="Do"?t.ordinalNumber(a,{unit:"dayOfYear"}):u(a,e.length)},E:function(r,e,t){var a=r.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(a,{width:"short",context:"formatting"});case"EEEE":default:return t.day(a,{width:"wide",context:"formatting"})}},e:function(r,e,t,a){var i=r.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(r,e,t,a){var i=r.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(r,e,t){var a=r.getUTCDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(a,{width:"short",context:"formatting"});case"iiii":default:return t.day(a,{width:"wide",context:"formatting"})}},a:function(r,e,t){var a=r.getUTCHours(),i=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(r,e,t){var a=r.getUTCHours(),i;switch(a===12?i=l.noon:a===0?i=l.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(r,e,t){var a=r.getUTCHours(),i;switch(a>=17?i=l.evening:a>=12?i=l.afternoon:a>=4?i=l.morning:i=l.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){var a=r.getUTCHours()%12;return a===0&&(a=12),t.ordinalNumber(a,{unit:"hour"})}return d.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getUTCHours(),{unit:"hour"}):d.H(r,e)},K:function(r,e,t){var a=r.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(r,e,t){var a=r.getUTCHours();return a===0&&(a=24),e==="ko"?t.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getUTCMinutes(),{unit:"minute"}):d.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getUTCSeconds(),{unit:"second"}):d.s(r,e)},S:function(r,e){return d.S(r,e)},X:function(r,e,t,a){var i=a._originalDate||r,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return Q(o);case"XXXX":case"XX":return f(o);case"XXXXX":case"XXX":default:return f(o,":")}},x:function(r,e,t,a){var i=a._originalDate||r,o=i.getTimezoneOffset();switch(e){case"x":return Q(o);case"xxxx":case"xx":return f(o);case"xxxxx":case"xxx":default:return f(o,":")}},O:function(r,e,t,a){var i=a._originalDate||r,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+G(o,":");case"OOOO":default:return"GMT"+f(o,":")}},z:function(r,e,t,a){var i=a._originalDate||r,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+G(o,":");case"zzzz":default:return"GMT"+f(o,":")}},t:function(r,e,t,a){var i=a._originalDate||r,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(r,e,t,a){var i=a._originalDate||r,o=i.getTime();return u(o,e.length)}};function G(n,r){var e=n>0?"-":"+",t=Math.abs(n),a=Math.floor(t/60),i=t%60;if(i===0)return e+String(a);var o=r||"";return e+String(a)+o+u(i,2)}function Q(n,r){if(n%60===0){var e=n>0?"-":"+";return e+u(Math.abs(n)/60,2)}return f(n,r)}function f(n,r){var e=r||"",t=n>0?"-":"+",a=Math.abs(n),i=u(Math.floor(a/60),2),o=u(a%60,2);return t+i+e+o}const ce=ue;var se=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,de=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fe=/^'([^]*?)'?$/,le=/''/g,me=/[a-zA-Z]/;function ve(n,r,e){var t,a,i,o,m,x,T,O,C,M,p,S,D,E,U,_,k,q;b(2,arguments);var $=String(r),g=te(),h=(t=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:g.locale)!==null&&t!==void 0?t:K,L=Y((i=(o=(m=(x=e==null?void 0:e.firstWeekContainsDate)!==null&&x!==void 0?x:e==null||(T=e.locale)===null||T===void 0||(O=T.options)===null||O===void 0?void 0:O.firstWeekContainsDate)!==null&&m!==void 0?m:g.firstWeekContainsDate)!==null&&o!==void 0?o:(C=g.locale)===null||C===void 0||(M=C.options)===null||M===void 0?void 0:M.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=Y((p=(S=(D=(E=e==null?void 0:e.weekStartsOn)!==null&&E!==void 0?E:e==null||(U=e.locale)===null||U===void 0||(_=U.options)===null||_===void 0?void 0:_.weekStartsOn)!==null&&D!==void 0?D:g.weekStartsOn)!==null&&S!==void 0?S:(k=g.locale)===null||k===void 0||(q=k.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&p!==void 0?p:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!h.localize)throw new RangeError("locale must contain localize property");if(!h.formatLong)throw new RangeError("locale must contain formatLong property");var v=N(n);if(!ae(v))throw new RangeError("Invalid time value");var H=j(v),B=Z(v,H),X={firstWeekContainsDate:L,weekStartsOn:W,locale:h,_originalDate:v},R=$.match(de).map(function(c){var s=c[0];if(s==="p"||s==="P"){var w=J[s];return w(c,h.formatLong)}return c}).join("").match(se).map(function(c){if(c==="''")return"'";var s=c[0];if(s==="'")return ge(c);var w=ce[s];if(w)return!(e!=null&&e.useAdditionalWeekYearTokens)&&z(c)&&P(c,r,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&ee(c)&&P(c,r,String(n)),w(B,c,h.localize,X);if(s.match(me))throw new RangeError("Format string contains an unescaped latin alphabet character `"+s+"`");return c}).join("");return R}function ge(n){var r=n.match(fe);return r?r[1].replace(le,"'"):n}export{ve as f};

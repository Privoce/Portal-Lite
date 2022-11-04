import{r as i,l as z,a as e,s as y,j as c,F as N}from"./index.adf820fb.js";import{L as j}from"./Loading.16593da1.js";import{u as T}from"./hooks.a478aa3b.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const B=y.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  .tab {
    font-size: 0.2rem;
    padding: 0.05rem 0.1rem;
    border: 1px solid #efe;
    margin-right: 0.1rem;
    cursor: pointer;
    &.active {
      background-color: #eee;
      color: #222;
    }
  }
`;function $({currTab:o,updateCurrTab:g,name:p,toggleWidgetSettingVisible:u}){const[a,f]=i.exports.useState(null);i.exports.useEffect(()=>{(async()=>{const r=await fetch("https://api.yangerxiao.com/service/zhihu/hot/tabs"),{code:n,data:s}=await r.json();n==0&&f(s)})()},[]);const d=({target:{dataset:{id:t}}})=>{t!==o&&(g(t),u())};return!a||a.length==0?null:z.exports.createPortal(e(B,{children:a.map(t=>{const{identifier:r,name:n}=t;return e("span",{className:`tab ${o==r?"active":""}`,"data-id":r,onClick:d,children:n},r)})}),document.querySelector(`#widget-${p}-setting`))}const C=y.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .empty {
    font-size: 0.2rem;
  }
  .wrapper {
    margin: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.13rem;
      font-weight: 400;
      line-height: 0.18rem;
      padding: 0.14rem 0.18rem;
      padding-left: 0.3rem;
      position: relative;
      border-bottom: 1px solid #eee;
      transition: all 0.5s;
      &:last-child {
        margin-bottom: 0.6rem;
        &:after {
          content: '没有啦~';
          color: #aaa;
          position: absolute;
          bottom: -0.4rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &:hover {
        background-color: #eee;
        .block .left .title {
          color: rgb(0, 132, 255);
        }
      }
      &:before {
        position: absolute;
        left: 0.08rem;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-seq);
        font-size: 0.12rem;
        font-weight: 400;
        color: #f26e5f;
        line-height: 0.2rem;
        text-align: center;
        width: 0.1rem;
        height: 0.1rem;
      }
      .block {
        display: flex;
        flex-direction: row;
        align-items: center;
        .left {
          display: flex;
          flex: 2;
          flex-direction: column;
          line-height: 1.2;
          padding-right: 0.14rem;
          .title {
            font-size: 0.18rem;
            font-weight: 800;
            width: 3rem;
            padding-right: 0.1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.06rem;
          }
          .intro {
            padding-right: 0.1rem;
            line-height: 1.3;
            text-align: justify;
            font-size: 0.1rem;
            margin-bottom: 0.12rem;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          .hot {
            font-size: 0.08rem;
            color: #999;
          }
        }
        .right {
          flex: 1;
          img {
            width: 100%;
            border-radius: 5px;
            max-height: 1rem;
            object-fit: cover;
          }
        }
      }
    }
  }
`;function L({name:o,toggleWidgetSettingVisible:g}){const{getWidgetSetting:p,updateWidgetSetting:u}=T(),[a,f]=i.exports.useState([]),[d,t]=i.exports.useState(!0),[r,n]=i.exports.useState(""),[s,v]=i.exports.useState(p({name:o,key:"tab"})||"total"),k=l=>{u({name:o,key:"tab",data:l}),v(l)};if(i.exports.useEffect(()=>{t(!0),(async()=>{const b=await fetch(`https://api.yangerxiao.com/service/zhihu/hot/${s}`),{code:m,data:x,msg:h}=await b.json();if(t(!1),m!=0){n(h);return}f(x)})()},[s]),r)throw new Error(r);return c(N,{children:[e($,{name:o,toggleWidgetSettingVisible:g,currTab:s,updateCurrTab:k}),c(C,{children:[d&&e(j,{}),!d&&(a.length==0?e("div",{className:"empty",children:"\u6682\u65E0\u5185\u5BB9\uFF0C\u8BD5\u8BD5\u5176\u5B83\u5206\u7C7B\u5427~"}):e("ul",{className:"wrapper",children:a.map((l,b)=>{const{title:m,url:x,intro:h,id:E,thumbnail:w,hot_count:S}=l;return e("li",{className:"item","data-seq":b+1,children:c("a",{className:"block",href:x,target:"_blank",rel:"noopener noreferrer",children:[c("div",{className:"left",children:[e("h2",{className:"title darkmode-ignore",title:m,children:m}),e("p",{className:"intro",title:h,children:h}),c("span",{className:"hot",children:[S," \u4E07\u70ED\u5EA6"]})]}),w&&e("div",{className:"right",children:e("img",{src:w,alt:"\u77E5\u4E4E\u914D\u56FE"})})]})},E)})}))]})]})}export{L as default};

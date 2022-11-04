import{j as o,a as t,r as n,s as g}from"./index.adf820fb.js";import{S as u,a as w,b as v,N as f,P as b}from"./swiper-bundle.min.dcb7f685.js";import{u as x}from"./hooks.a478aa3b.js";import{L as y}from"./Loading.16593da1.js";import{u as H}from"./useData.fb1067fc.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";import"./index.esm.31b1f64b.js";function z(i){return o("svg",{t:"1611311514437",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3789",width:"48",height:"48",...i,children:[t("path",{d:"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",fill:"#EBEDF3","p-id":"3790"}),t("path",{d:"M519.314286 256a43.885714 43.885714 0 0 1 43.885714 43.885714l-0.036571 296.301715 71.387428-71.314286a43.885714 43.885714 0 1 1 62.098286 62.061714l-146.285714 146.285714a44.251429 44.251429 0 0 1-27.501715 12.690286 45.348571 45.348571 0 0 1-3.547428 0.146286h-0.731429c-0.950857 0-1.865143-0.073143-2.816-0.146286l3.547429 0.146286a44.288 44.288 0 0 1-26.038857-8.557714 43.739429 43.739429 0 0 1-5.010286-4.278858l-146.285714-146.285714a43.885714 43.885714 0 1 1 62.098285-62.098286l71.314286 71.350858L475.428571 299.885714A43.885714 43.885714 0 0 1 519.314286 256z",fill:"#3484F5","p-id":"3791"})]})}function N(i){return t("svg",{t:"1611563290478",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3243",width:"48",height:"48",...i,children:t("path",{d:"M113.534375 147.115625h294.765v150.5184375H113.534375z m344.9371875 0H753.2375v150.5184375H458.4715625zM113.534375 347.80625h100.3453125v150.5184375H113.534375z m150.5175 0H558.81875v150.5184375H264.051875z m344.938125 0h294.765v150.5184375H608.99zM113.534375 542.2259375h294.765v150.5184375H113.534375z m344.9371875 0H753.2375v150.5184375H458.4715625z m344.938125 0h100.3453125v150.5184375H803.4096875zM113.534375 742.9165625h100.3453125v150.519375H113.534375z m150.5175 0H558.81875v150.519375H264.051875z m344.938125 0h294.765v150.519375H608.99z","p-id":"3244",fill:"#3484F5"})})}v.use([f,b]);const S=g.section`
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-pagination,
    .swiper-button-next,
    .swiper-button-prev,
    .swiper-wrapper .swiper-slide .pic .opts {
      opacity: 0;
    }
    .swiper-wrapper {
      /* height: 100%; */
      .swiper-slide {
        /* height: 100%; */
        .pic {
          width: 100%;
          height: 100%;
          position: relative;
          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .opts {
            z-index: 99;
            position: absolute;
            top: 0.2rem;
            left: 0.2rem;
            display: flex;
            .opt {
              display: flex;
              &:not(:last-child) {
                margin-right: 0.1rem;
              }
              .icon {
                cursor: pointer;
                width: 0.32rem;
                height: 0.32rem;
              }
            }
          }
          .cr {
            transition: transform 0.5s;
            transform: translateY(100%);
            padding: 0.1rem 0.2rem;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, #000, transparent);
            .txt {
              font-size: 0.16rem;
              line-height: 1.4;
              color: #fff;
            }
          }
        }
      }
    }
    &:hover {
      .swiper-pagination,
      .swiper-button-next,
      .swiper-button-prev,
      .swiper-wrapper .swiper-slide .pic .opts {
        opacity: 0.8;
      }
      .swiper-slide .pic .cr {
        transform: translateY(0);
      }
    }
  }
`;function C(){const{getWidgetSetting:i,updateWidgetSetting:p}=x(),[a,l]=n.exports.useState(i({key:"bg"})),{data:c,loading:d,error:s}=H("https://api.yangerxiao.com/service/bing/wp/7"),h=e=>{l(e),p({key:"bg",data:e})};if(n.exports.useEffect(()=>{a&&(document.body.style.backgroundImage=`url(${a})`)},[a]),d)return t(y,{});if(s)throw new Error(s);return t(S,{children:t(u,{autoplay:{delay:1e3},navigation:!0,pagination:{clickable:!0},keyboard:!0,loop:!0,spaceBetween:30,onSwiper:e=>{e.update()},children:c.map(e=>{const{url:r,copyright:m}=e;return t(w,{children:o("div",{className:"pic",children:[o("div",{className:"opts",children:[t("div",{className:"opt wall",title:"\u8BBE\u7F6E\u4E3A\u58C1\u7EB8",onClick:h.bind(null,`https://cn.bing.com${r}`),children:t(N,{className:"icon"})}),t("a",{target:"_blank",href:`https://cn.bing.com${r}`,download:!0,title:"\u4E0B\u8F7D",className:"opt download",children:t(z,{className:"icon"})})]}),t("img",{className:"img",src:`https://cn.bing.com${r}&w=600`,alt:"\u5FC5\u5E94\u58C1\u7EB8"}),t("div",{className:"cr",children:t("p",{className:"txt",children:m})})]})},r)})})})}export{C as default};

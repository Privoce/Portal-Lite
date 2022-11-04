import{a as r,j as t,s as p}from"./index.adf820fb.js";import{L as f}from"./Loading.16593da1.js";import{u as h}from"./useData.fb1067fc.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";import"./index.esm.31b1f64b.js";const g=p.section`
  height: fit-content;
  > .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    > .item {
      font-size: 0.16rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      margin: 0 0.1rem 0.1rem 0;
      position: relative;
      .link {
        padding: 0.15rem;
        border-radius: 4px;
        border: 1px solid rgb(59, 169, 77, 0.3);
        color: #3ba94d;
        display: flex;
        flex-direction: column;
        &:hover {
          border-color: #3ba94d;
        }
        .txt {
          margin-bottom: 0.1rem;
          &:before,
          &:after {
            content: '#';
          }
        }
        .info {
          display: flex;
          .views {
            color: #ccc;
            font-size: 0.12rem;
            margin-right: 0.1rem;
          }
          .trends {
            display: flex;
            .bar {
              width: 2px;
              height: 100%;
              background-color: #157dfb;
              margin-right: 1px;
              &.gray {
                opacity: 0.3;
              }
            }
          }
        }
      }
    }
  }
`;function N(){const{data:o,loading:n,error:e}=h("https://api.yangerxiao.com/service/douban/topic/hot");if(n)return r(f,{});if(e)throw new Error(e);return r(g,{children:r("ul",{className:"wrapper",children:o.map((s,i)=>{const{topic:l,link:d,views:c,trends:m}=s;return r("li",{className:"item","data-seq":i+1,children:t("a",{className:"link",href:d,target:"_blank",rel:"noopener noreferrer",children:[r("div",{className:"txt",children:l}),t("div",{className:"info",children:[r("div",{className:"views",children:c}),r("div",{className:"trends",children:[1,2,3,4,5].map(a=>r("i",{className:`bar ${a>m?"gray":""}`},a))})]})]})},i)})})})}export{N as default};

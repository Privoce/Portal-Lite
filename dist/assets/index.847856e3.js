import{r as u,a as e,j as l,s as v}from"./index.adf820fb.js";import{L as w}from"./Loading.16593da1.js";import{I as b}from"./Close.4951d652.js";import{u as x}from"./useData.fb1067fc.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";import"./index.esm.31b1f64b.js";const y=v.section`
  height: 100%;
  padding: 0.1rem 0.15rem;
  position: relative;
  overflow: hidden;
  > .title {
    font-weight: 800;
    font-size: 0.3rem;
    color: #555;
    position: relative;
    top: 0;
    padding: 0.1rem 0 0.2rem 0.2rem;
    margin-left: 0.4rem;
    z-index: 3;
    &:before {
      position: absolute;
      left: -0.3rem;
      top: 40%;
      transform: translateY(-50%);
      content: '今';
      font-size: 0.2rem;
      /* width:.2rem;
      height:.2rem; */
      padding: 0.1rem;
      border-radius: 50%;
      background-color: #f26e5f;
      color: #fff;
    }
  }
  .list {
    z-index: 2;
    height: 100%;
    overflow: scroll;
    overflow: overlay;
    .item {
      cursor: pointer;
      margin-bottom: 0.02rem;
      position: relative;
      font-size: 0.16rem;
      padding: 0.1rem 0.04rem 0.1rem 0.12rem;
      display: flex;
      justify-content: space-between;

      &:hover {
        background-color: #f26e5f;
        .date {
          color: #eee;
        }
        .txt {
          color: #fff;
          transform: translateX(5px);
        }
      }
      .txt {
        white-space: nowrap;
        /* padding-right: 0.2rem; */
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.5s;
      }
      .date {
        color: #666;
        font-size: 0.12rem;
        padding-left: 0.2rem;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: '';
        background-color: #f26e5f;
        width: 0.05rem;
        height: 60%;
        opacity: 0.8;
      }
    }
  }
  .details {
    z-index: 8;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 0.14rem;
    background: #fff;
    padding: 0.12rem;
    overflow: scroll;
    overflow: overlay;
    overscroll-behavior: contain;
    article {
      > .title {
        font-size: 0.22rem;
        font-weight: 800;
        padding: 0.2rem 0 0.15rem 0;
        text-align: center;
      }
      > p {
        line-height: 1.4;
        margin-bottom: 0.12rem;
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      right: 0.1rem;
      bottom: 0.1rem;
    }
  }
`,d=(t=!1)=>{let r=new Date,i=`${r.getMonth()+1}\u6708${r.getDate()}\u65E5`;return t&&(i=`${r.getFullYear()}\u5E74${i}`),i};function j(){const[t,r]=u.exports.useState(null),{data:i,loading:f,error:c}=x("https://api.yangerxiao.com/service/history/today"),p=({link:o,detail:a})=>{if(a){const{title:n,content:s}=a;r({link:o,title:n,content:s})}},h=()=>{r(null)};if(f)return e(w,{});if(c)throw new Error(c);return l(y,{children:[e("h2",{className:"title",children:d(!0)}),e("ul",{className:"list",children:i.map(o=>{const{date:a,event:n,link:s,detail:g}=o;let m=`${a}${d()}`;return l("li",{className:"item",onClick:p.bind(null,{detail:g,link:s}),children:[e("span",{className:"txt",children:n.replace(m,"")}),e("span",{className:"date",children:m})]},n)})}),t&&l("aside",{className:"details",children:[l("article",{children:[e("h3",{className:"title",children:t.title}),t.content.map(o=>e("p",{children:o},o)),e("a",{href:t.link,target:"_blank",className:"link",children:"\u53C2\u8003\u94FE\u63A5"})]}),e(b,{className:"close",onClick:h})]})]})}export{j as default};

import{a as e,s}from"./index.adf820fb.js";import{L as m}from"./Loading.16593da1.js";import{u as p}from"./useData.fb1067fc.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";import"./index.esm.31b1f64b.js";const f=s.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .wrapper {
    padding: 0.02rem;
    margin: 0;
    list-style: none;
    /* overflow: scroll; */
    /* overscroll-behavior: contain; */
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.16rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      /* margin-bottom: 0.1rem; */
      margin-bottom: 0.24rem;
      white-space: nowrap;
      padding-left: 0.3rem;
      /* padding-right: 0.2rem; */
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      a {
        color: #2ba245;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-seq);
        font-size: 0.14rem;
        font-weight: 400;
        color: #f26e5f;
        line-height: 0.2rem;
        text-align: center;
        width: 0.1rem;
      }
    }
  }
`;function y(){const{data:o,error:t,loading:i}=p("https://api.yangerxiao.com/service/mp/hot");if(i)return e(m,{});if(t)throw new Error(t);return e(f,{children:e("ul",{className:"wrapper",children:o.map((n,r)=>{const{title:a,link:l}=n;return e("li",{className:"item","data-seq":r+1,children:e("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:a})},r)})})})}export{y as default};

import{a as t,s as l}from"./index.adf820fb.js";import{u as m}from"./useData.fb1067fc.js";import{L as d}from"./Loading.16593da1.js";import"./index.esm.31b1f64b.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const g=l.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  .wrapper {
    padding: 0.02rem;
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.15rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #1193d7;
      line-height: 0.21rem;

      white-space: nowrap;
      padding-left: 0.3rem;
      padding-right: 0.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      &:not(:last-child) {
        margin-bottom: 0.23rem;
      }
      a {
        color: #0178b6;
        .heat {
          padding-left: 0.15rem;
          font-size: 0.1rem;
          color: #666;
          text-transform: lowercase;
          .hot {
            height: 0.16rem;
            padding-left: 0.05rem;
            padding-top: 0.02rem;
          }
        }
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
      &:after {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-tag);
        font-size: 0.12rem;
        color: #ffffff;
        line-height: 0.17rem;
        border-radius: 0.02rem;
        width: 0.18rem;
        text-align: center;
      }
      &[data-tag-type='hotest']:after {
        background: #f86300;
      }
      &[data-tag-type='hot']:after {
        background: #fe9404;
      }
      &[data-tag-type='new']:after {
        background: #ff3852;
      }
      &[data-tag-type='recomm']:after {
        background: #00b7ee;
      }
    }
  }
`,p={\u70ED:"hot",\u6CB8:"hotest",\u65B0:"new",\u8350:"recomm"};function x(){const{error:e,loading:o,data:i}=m("https://api.yangerxiao.com/service/weibo/hot");if(e)throw new Error(e);return o?t(d,{}):t(g,{children:t("ul",{className:"wrapper",children:i.map((n,r)=>{const{title:s,link:f,hot:a}=n;return t("li",{className:"item","data-seq":r+1,"data-tag-type":p[a],"data-tag":a,children:t("a",{href:`https://s.weibo.com${f}`,target:"_blank",rel:"noopener noreferrer",children:s})},r)})})})}export{x as default};

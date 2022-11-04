import{u as s,j as l,a as t,s as g}from"./index.adf820fb.js";const c=g.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0;
  .tip {
    font-size: 0.14rem;
    font-weight: 400;
    color: #333333;
    line-height: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .btn {
    background: #4e6df2;
    border-radius: 0.04rem;

    font-size: 0.16rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 0.22rem;
    padding: 0.11rem 0.46rem;
    &[disabled] {
      background: #aaa;
    }
  }
`;function f({auth:e="",disabled:i=!1}){const{language:{words:{widget:{goAuth:n}}}}=s.useLanguage();let a=typeof e=="function";const o=()=>{e()},r=i?n.initializing:n.btnTxt;return l(c,{children:[t("p",{className:"tip",children:n.tip}),a?t("button",{disabled:i,className:"btn",onClick:o,children:r}):t("a",{className:"btn",href:e,target:"_blank",rel:"noopener noreferrer",children:r})]})}export{f as G};

import{j as t,a as e,s as r}from"./index.adf820fb.js";const n=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  .input {
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 0.13rem;
    font-weight: 400;
    line-height: 0.18rem;
    padding: 0.22rem 0.25rem;
  }
  .btn {
    position: absolute;
    bottom: 0.15rem;
    left: 50%;
    transform: translateX(-50%);

    background: #2fd132;
    border-radius: 0.03rem;
    padding: 0.04rem 0.2rem;
    font-size: 0.12rem;
    font-weight: 400;
    color: #ffffff;
    line-height: 0.17rem;
  }
`;function u(){return t(n,{children:[e("textarea",{className:"input",name:"",id:"",cols:"30",rows:"10",placeholder:"\u5728\u6B64\u8F93\u5165\u6587\u5B57\uFF0C\u5FEB\u901F\u8BB0\u5F55"}),e("button",{className:"btn",onClick:()=>{alert("\u6682\u672A\u5F00\u53D1~")},children:"\u4FDD\u5B58\u5230\u5370\u8C61\u7B14\u8BB0"})]})}export{u as default};

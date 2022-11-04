import{r as t,j as _,F as h,a as e,L as u,_ as r,s as g}from"./index.adf820fb.js";import{u as m}from"./hooks.a478aa3b.js";const x=t.exports.lazy(()=>r(()=>import("./Baidu.bbaffbae.js"),["assets/Baidu.bbaffbae.js","assets/index.adf820fb.js","assets/util.430bf2a4.js"])),S=t.exports.lazy(()=>r(()=>import("./Duckduck.6b4ebe80.js"),["assets/Duckduck.6b4ebe80.js","assets/index.adf820fb.js","assets/iconBase.a38ac1cb.js"])),f=t.exports.lazy(()=>r(()=>import("./Google.a60538cd.js"),["assets/Google.a60538cd.js","assets/index.adf820fb.js"])),v=t.exports.lazy(()=>r(()=>import("./Bing.358c6e54.js"),["assets/Bing.358c6e54.js","assets/index.adf820fb.js"])),y=t.exports.lazy(()=>r(()=>import("./Setting.363d25f0.js"),["assets/Setting.363d25f0.js","assets/index.adf820fb.js"])),E={baidu:e(x,{}),google:e(f,{}),bing:e(v,{}),duckduck:e(S,{})},b=g.section`
  /* display: flex;
  justify-content: center; */
  padding: 0.4rem 0;
  position: relative;
  width: 6rem;
  .setting {
    visibility: hidden;
  }
  .search {
    margin: 0 auto;
    width: 100%;
    input {
      background-color: rgba(255, 255, 255, 0.8);
      &:focus {
        background-color: #fff;
      }
    }
  }
  &:hover {
    .setting {
      visibility: visible;
    }
  }
  @media (min-width: 320px) and (max-width: 860px) {
    width: 80%;
  }
`;function P({data:i,lang:o,name:s,toggleWidgetSettingVisible:n}){const{getWidgetSetting:d,updateWidgetSetting:l}=m(),[a,p]=t.exports.useState((i==null?void 0:i.local)||d({name:s})||"google");return _(h,{children:[e(y,{lang:o,name:s,toggleWidgetSettingVisible:n,search:a,updateSearch:c=>{l({name:s,data:c}),p(c)}}),e(b,{children:e(t.exports.Suspense,{fallback:e(u,{}),children:e("div",{className:"search",children:t.exports.cloneElement(E[a],{placeholder:o.placeholder[a],lang:o})})})})]})}export{P as default};

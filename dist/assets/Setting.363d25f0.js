import{l as s,a as t,j as n,s as r}from"./index.adf820fb.js";const u=r.div`
  width: 100%;
  height: 100%;
  padding: 0.28rem 0.45rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  .opts {
    display: flex;
    /* justify-content: space-evenly; */
    .opt {
      cursor: pointer;
      font-size: 0.14rem;
      font-weight: 400;
      line-height: 0.2rem;
      margin-right: 0.4rem;
      &[data-selected='true'] {
        color: #4e6df2;
      }
    }
  }
`;function p({lang:a,name:l,search:e,updateSearch:c,toggleWidgetSettingVisible:o}){const d=({target:{dataset:{s:i}}})=>{i!==e&&(c(i),o())};return s.exports.createPortal(t(u,{children:n("ul",{className:"opts",children:[t("li",{className:"opt",onClick:d,"data-s":"google","data-selected":e=="google",children:a.google}),t("li",{className:"opt",onClick:d,"data-s":"baidu","data-selected":e=="baidu",children:a.baidu}),t("li",{className:"opt",onClick:d,"data-s":"bing","data-selected":e=="bing",children:a.bing}),t("li",{className:"opt",onClick:d,"data-s":"duckduck","data-selected":e=="duckduck",children:a.duckduck})]})}),document.querySelector(`#widget-${l}-setting`))}export{p as default};

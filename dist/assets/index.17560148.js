import{j as i,a as t,s as f,r as l,F as N}from"./index.adf820fb.js";import{d as z}from"./index.a19eac14.js";import{L as S}from"./Loading.16593da1.js";import{f as j}from"./index.7b8e2464.js";import{a as T}from"./index.7e33b9da.js";import{r as F,e as L}from"./index.76cc53c3.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";function $(e,r){F(2,arguments);var n=L(r);return T(e,-n)}const A=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  &:hover {
    > .num {
      transform: scale(1.2);
    }
    .title {
      transform: scale(0.8);
    }
  }
  .compare {
    padding-top: 0.1rem;
    font-size: 0.1rem;
    color: #7c7c7c;
  }
  > .num {
    font-size: 0.24rem;
    font-weight: 800;
    transition: all 0.2s ease-in;
    font-family: sans-serif;
  }
  .title {
    color: #222;
    font-size: 0.18rem;
    transition: all 0.2s ease-in;
  }
  &.confirmed {
    background-color: rgba(253, 241, 241);
    .num {
      color: #cc1e1e;
    }
  }
  &.maybe {
    background-color: rgba(252, 244, 240);
    .num {
      color: #ca3f81;
    }
  }
  &.serious {
    background-color: rgba(250, 242, 246);
    .num {
      color: #f05926;
    }
  }
  &.testing {
    background-color: rgba(241, 248, 244);
    .num {
      color: #178b50;
    }
  }
  &.dead {
    background-color: rgba(243, 246, 248);
    .num {
      color: #4e5a65;
    }
  }
  &.hospital {
    background-color: rgba(243, 246, 240);
    .num {
      color: #fe6b23;
    }
  }
  .others {
    width: 100%;
    display: flex;
    justify-content: center;
    dl {
      display: flex;
      flex-direction: column;
      padding: 0.04rem;
      &:not(:last-child) {
        border-right: 1px dashed #eee;
        margin-right: 0.02rem;
      }
      dt {
        color: #999;
        padding-bottom: 0.06rem;
        font-size: 0.08rem;
      }
      dd {
        color: #000;
        font-size: 0.11rem;
        text-align: center;
      }
    }
  }
`,E=e=>Number(e).toLocaleString("en");function C({lang:e,type:r,title:n,data:c}){const{value:d,calculated:{change_from_prior_day:s,seven_day_change_percent:m}}=c;return i(A,{className:`block ${r}`,children:[i("div",{className:"compare",children:[e.comparePrev," ",t("span",{className:"num",children:Number(s)>0?`+ ${s}`:s})]}),t("div",{className:"num",children:E(d)}),t("div",{className:"title",children:n}),t("div",{className:"others",children:i("dl",{children:[t("dt",{children:e.sevenDayChange}),i("dd",{children:[m,"%"]})]})})]},r)}const M=f.section`
  width: 100%;
  height: 100%;
  font-size: 0.15rem;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 0.01rem;
  grid-row-gap: 0.01rem;
  .covid_icon {
    display: none;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
  &:hover .covid_icon,
  &:hover .date_time {
    display: block;
  }
  .date_time {
    display: none;
    position: absolute;
    left: 0.1rem;
    bottom: 0.1rem;
    padding: 0.05rem 0.06rem;
    border-radius: 0.04rem;
    background-color: rgba(2, 2, 2, 0.5);
    color: #fff;
    font-size: 0.1rem;
  }
`;function H({lang:e}){const[r,n]=l.exports.useState(!0),[c,d]=l.exports.useState(""),[s,m]=l.exports.useState(null);if(l.exports.useEffect(()=>{const a=z.utcToZonedTime(new Date().getTime(),"America/New_York");(async()=>{const p=await fetch(`https://api.covidtracking.com/v2/us/daily/${j($(a,1),"yyyy-MM-dd")}.json`);if(p.status==404){d(e.noData);return}const{error:k,data:u,message:D="covidtracking api error"}=await p.json();if(k||!u){d(D);return}m(u),n(!1)})()},[]),c)throw new Error(c);if(r)return t(S,{});const{date:g,cases:h,outcomes:{death:y,hospitalized:{currently:b,in_icu:v,on_ventilator:w}},testing:x}=s||{},{blockTitle:o}=e,_=[{type:"confirmed",title:o.confirmed,data:h.total},{type:"testing",title:o.verifying,data:x.total},{type:"dead",title:o.death,data:y.total},{type:"hospital",title:o.hospital,data:b},{type:"serious",title:o.icu,data:v.currently},{type:"maybe",title:o.ventilator,data:w.currently}];return i(M,{children:[i("div",{className:"date_time",children:[e.closingDate,"\uFF1A",g]}),t(N,{children:_.map(a=>t(C,{lang:e,type:a.type,title:a.title,data:a.data},a.type))})]})}export{H as default};

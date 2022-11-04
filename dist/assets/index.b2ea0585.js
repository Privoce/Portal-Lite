import{s as f,j as r,a as e,r as m}from"./index.adf820fb.js";import{c as w}from"./index.esm.c817908c.js";import{G as x,a as b}from"./index.esm.183302e8.js";import{L as y}from"./Loading.16593da1.js";import"./iconBase.a38ac1cb.js";import"./index.esm.95d4feb0.js";const v=f.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.1rem 0.15rem;
  border-bottom: 1px solid #e6e6e6;
  transition: all 0.2s;
  flex-wrap: wrap;
  &:hover {
    background-color: #eee;
  }
`,N=f(v)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 34%;
    margin-right: 0.1rem;

    .info {
      display: flex;
      .avatar {
        width: 0.5rem;
        height: 0.5rem;
        border: 1px solid #666;
        border-radius: 50%;
        margin: 0;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .call {
        display: flex;
        flex-direction: column;
        /* width: 1.8rem; */
        margin-left: 0.1rem;
        .name {
          font-size: 0.18rem;
          margin-bottom: 0.05rem;
          width: 1rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .un {
          font-size: 0.12rem;
          color: #666;
          width: 1rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .detail {
    display: flex;
    .popular {
      display: flex;
      flex-direction: column;
      .repo_name {
        font-size: 0.2rem;
        margin-bottom: 0.05rem;
      }
      .desc {
        padding-top: 0.04rem;
        font-size: 0.12rem;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
`;function k({developer:i={},...a}){const{username:l,name:n,avatar:s,url:o,repo:{repo_name:t,description:d}}=i;return r(N,{...a,children:[e("div",{className:"profile",children:r("a",{className:"info",href:o,target:"_blank",children:[e("div",{className:"avatar",children:e("img",{"data-default":"https://static.nicegoodthings.com/privoce/developer.png",src:`${s}`,alt:"\u5F00\u53D1\u8005\u5934\u50CF"})}),r("div",{className:"call",children:[r("span",{className:"name",children:[" ",n]}),r("span",{className:"un",children:[" ",l]})]})]})}),e("div",{className:"detail",children:r("div",{className:"popular",children:[r("div",{className:"repo_name",children:["\u{1F525}",e("a",{href:`https://github.com/${l}/${t}`,target:"_blank",children:t}),"\u{1F525}"]}),e("div",{className:"desc",children:d})]})})]})}const F=f(v)`
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    width: 3rem;
    .title {
      display: flex;
      align-items: center;
      font-size: 0.16rem;
      margin: 0;
      .icon {
        width: 0.16rem;
        margin-right: 0.04rem;
      }
      a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .desc {
      color: #666;
      font-size: 0.11rem;
      margin: 0.08rem 0;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .items {
      display: flex;
      flex-direction: row;
      .item {
        font-size: 0.1rem;
        display: flex;
        align-items: center;
        &:not(:last-child) {
          margin-right: 0.1rem;
        }
        &.lang:before {
          content: '';
          margin-right: 0.05rem;
          display: block;
          width: 0.1rem;
          height: 0.1rem;
          border-radius: 50%;
          background-color: ${({langColor:i})=>i};
        }
        &.author {
          .icon {
            width: 0.1rem;
            margin-right: 0.04rem;
          }
          .head {
            border: 1px solid #333;
            width: 0.15rem;
            height: 0.15rem;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    .star {
      font-size: 0.12rem;
      padding: 0.04rem 0.08rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 0.2rem;
    }
    .period_stars {
      font-size: 0.1rem;
    }
  }
`;function C({isFirst:i,repo:a,...l}){const{url:n,author:s,name:o,languageColor:t,language:d,forks:p,stars:c,avatar:u,currentPeriodStars:h,description:g}=a;return r(F,{langColor:`${t}`,...l,children:[r("div",{className:"left",children:[r("h2",{className:"title",children:[e(x,{className:"icon"}),r("a",{target:"_blank",title:`${s}/${o}`,href:n,children:[s,"/",o]})]}),e("div",{className:"desc",title:g,children:g||"\u6682\u65E0\u63CF\u8FF0"}),r("ul",{className:"items",children:[d&&e("li",{className:"item lang",children:d}),r("li",{className:"item",children:["\u2B50 ",c]}),r("li",{className:"item",children:["\u{1F374} ",p]}),r("li",{className:"item author",children:[e(w,{className:"icon"}),e("a",{className:"head",href:`http://github.com/${s}`,target:"_blank",rel:"noopener noreferrer",children:e("img",{src:u,alt:"\u4F5C\u8005\u5934\u50CF"})})]})]})]}),r("div",{className:"right",children:[e("a",{target:"_blank",className:"star",href:n,children:"\u6807\u661F"}),r("div",{className:"period_stars",children:["\u{1F195} ",h," \u2B50"]})]})]})}function z(i){return r("svg",{t:"1610095096791",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4863",width:"128",height:"128",...i,children:[e("path",{d:"M851.688727 642.792727a317.626182 317.626182 0 0 0-85.876363-68.654545l-136.145455-56.180364s-19.828364-19.828364-22.574545-46.545454l0.977454-18.804364c31.976727-21.131636 55.947636-52.875636 71.214546-90.437818 45.847273-1.210182 46.731636-108.962909 24.017454-120.552727 7.959273-87.691636 7.633455-238.452364-200.517818-240.54691V0.930909L500.736 0.930909 498.641455 0.930909v0.186182C290.490182 3.258182 290.071273 154.065455 298.030545 241.710545c-22.667636 11.636364-21.922909 119.482182 24.017455 120.552728 15.173818 37.422545 39.284364 69.306182 71.214545 90.484363l0.977455 18.757819c-2.792727 26.810182-22.574545 46.545455-22.574545 46.545454l-136.238546 56.180364C51.479273 676.165818 71.354182 875.613091 71.354182 875.613091s94.580364 101.981091 428.264727 102.4h2.187636c31.418182 0 60.229818-1.163636 87.598546-2.932364a284.439273 284.439273 0 0 1-4.235636-46.545454c0-149.271273 117.061818-271.965091 266.519272-285.742546z","p-id":"4864"}),e("path",{d:"M931.095273 866.210909l-5.352728-2.792727a27.648 27.648 0 0 1-14.056727-23.970909c0-10.24 5.678545-19.176727 14.056727-23.970909l5.352728-2.792728a14.894545 14.894545 0 0 0 7.633454-15.36c-1.070545-3.025455-2.187636-6.190545-3.490909-9.262545a169.890909 169.890909 0 0 0-4.189091-8.936727 15.36 15.36 0 0 0-16.430545-5.585455l-5.771637 1.768727a28.951273 28.951273 0 0 1-27.275636-7.214545 27.322182 27.322182 0 0 1-7.307636-26.717091l1.861818-5.678545a14.754909 14.754909 0 0 0-5.678546-16.151273 163.374545 163.374545 0 0 0-18.52509-7.633455 15.127273 15.127273 0 0 0-15.639273 7.540364l-2.792727 5.259636a28.392727 28.392727 0 0 1-48.872728 0l-2.885818-5.259636a15.127273 15.127273 0 0 0-15.592727-7.540364c-3.165091 0.977455-6.330182 2.187636-9.495273 3.397818a116.829091 116.829091 0 0 0-9.169454 4.142546 14.848 14.848 0 0 0-5.632 16.151273l1.861818 5.678545c2.466909 9.262545 0 19.549091-7.354182 26.717091a28.346182 28.346182 0 0 1-27.275636 7.214545l-5.771637-1.861818a15.034182 15.034182 0 0 0-16.337454 5.585455 94.580364 94.580364 0 0 0-4.189091 8.936727 106.868364 106.868364 0 0 0-3.444364 9.262546 14.801455 14.801455 0 0 0 7.633455 15.36l5.306181 2.746181c8.378182 4.794182 14.103273 13.730909 14.103273 23.970909 0 10.24-5.678545 19.223273-14.103273 24.017455l-5.306181 2.746182a14.894545 14.894545 0 0 0-7.633455 15.36c1.070545 3.072 2.141091 6.237091 3.490909 9.309091 1.303273 3.025455 2.699636 6.050909 4.142546 8.936727a15.36 15.36 0 0 0 16.477091 5.585455l5.771636-1.768728a28.951273 28.951273 0 0 1 27.275636 7.168 27.461818 27.461818 0 0 1 7.400728 26.763637l-1.861819 5.771636a14.754909 14.754909 0 0 0 5.678546 16.151273 163.374545 163.374545 0 0 0 18.525091 7.633454 15.127273 15.127273 0 0 0 15.639272-7.540363l2.792728-5.259637a28.392727 28.392727 0 0 1 24.482909-13.824c10.472727 0 19.549091 5.585455 24.436363 13.730909l2.792728 5.352728c2.978909 5.585455 9.495273 8.517818 15.639272 7.540363 3.165091-0.977455 6.330182-2.187636 9.355637-3.490909a116.829091 116.829091 0 0 0 9.169454-4.189091 14.754909 14.754909 0 0 0 5.678546-16.104727l-1.861818-5.678545c-2.513455-9.309091 0-19.549091 7.307636-26.856728a28.485818 28.485818 0 0 1 27.182545-7.168l5.771637 1.861818a15.266909 15.266909 0 0 0 16.477091-5.585454c1.536-2.932364 2.932364-5.911273 4.142545-8.936727 1.303273-3.072 2.513455-6.237091 3.490909-9.309091a14.754909 14.754909 0 0 0-7.633454-15.266909m-122.181818 40.96a68.282182 68.282182 0 0 1-68.840728-67.770182c0-37.422545 30.859636-67.770182 68.840728-67.770182 38.074182 0 68.840727 30.347636 68.840727 67.770182 0 37.422545-30.766545 67.723636-68.887273 67.723636","p-id":"4865"})]})}const $=f.div`
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    font-size: 0.18rem;
    list-style: none;
    padding-left: 0;
  }
  .list {
    padding-bottom: 0.4rem;
    margin: 0;
  }
  .tabs {
    position: absolute;
    bottom: 0.05rem;
    left: 0.2rem;
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #888;
    margin: 0;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
    .tab {
      background-color: #fff;
      cursor: pointer;
      padding: 0.02rem 0.14rem;
      transition: all 0.5s;
      color: #000;
      &.active {
        background-color: #333;
        color: #fff;
        svg {
          fill: #eee;
        }
      }
      svg {
        width: 0.14rem;
        height: 0.14rem;
      }
    }
  }
`,_=({data:i})=>e("ul",{className:"list",children:i.map((a,l)=>e(C,{isFirst:l==0,repo:a},a.url))}),S=({data:i=[]})=>e("ul",{className:"list",children:i.map(a=>e(k,{developer:a},a.username))});function T(){const[i,a]=m.exports.useState([]),[l,n]=m.exports.useState([]),[s,o]=m.exports.useState(!0),[t,d]=m.exports.useState("repositories");m.exports.useEffect(()=>{(async()=>{const h=await(await fetch(`https://hackertab.pupubird.com/${t}`)).json();o(!1),t=="developers"?n(h):a(h)})()},[t]);const p=c=>{c!==t&&(d(c),o(!0))};return s?e(y,{}):r($,{children:[r("ul",{className:"tabs",children:[e("li",{onClick:p.bind(null,"repositories"),className:`tab ${t=="repositories"&&"active"}`,children:e(b,{})}),e("li",{onClick:p.bind(null,"developers"),className:`tab ${t=="developers"&&"active"}`,children:e(z,{})})]}),t=="developers"?e(S,{data:l}):e(_,{data:i})]})}export{T as default};

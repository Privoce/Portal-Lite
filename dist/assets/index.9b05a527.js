import{s as h,j as n,a,Y as g,r as f}from"./index.adf820fb.js";import{L as v}from"./Loading.16593da1.js";import{G as b}from"./GoAuth.9e5b15b9.js";import{b as w,c as x,a as y,d as N,e as D}from"./index.esm.183302e8.js";import{a as _,g as k}from"./useLazyQuery.cb0b2edd.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const C=h.div`
  font-size: 0.12rem;
  overflow: auto;
  height: 100%;
  padding: 0.1rem;
  display: flex;
  .auth {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    padding: 0.1rem;
    background: #07d302;
    color: #fff;
  }
  .head {
    width: 1rem;
    border-radius: 50%;
    border: 1px solid #eee;
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    width: 0.5rem;
    height: 0.5rem;
    overflow: hidden;
    background-color: #fff;
    .avatar {
      width: 100%;
      height: 100%;
    }
  }
  .list {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`,E=C;var S=["second","minute","hour","day","week","month","year"];function A(e,r){if(r===0)return["just now","right now"];var t=S[Math.floor(r/2)];return e>1&&(t+="s"),[e+" "+t+" ago","in "+e+" "+t]}var $=["\u79D2","\u5206\u949F","\u5C0F\u65F6","\u5929","\u5468","\u4E2A\u6708","\u5E74"];function U(e,r){if(r===0)return["\u521A\u521A","\u7247\u523B\u540E"];var t=$[~~(r/2)];return[e+" "+t+"\u524D",e+" "+t+"\u540E"]}var m={},p=function(e,r){m[e]=r},z=function(e){return m[e]||m.en_US},d=[60,60,24,7,365/7/12,12];function u(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function G(e,r){var t=e<0?1:0;e=Math.abs(e);for(var i=e,o=0;e>=d[o]&&o<d.length;o++)e/=d[o];return e=Math.floor(e),o*=2,e>(o===0?9:1)&&(o+=1),r(e,o,i)[t].replace("%s",e.toString())}function L(e,r){var t=r?u(r):new Date;return(+t-+u(e))/1e3}var T=function(e,r,t){var i=L(e,t&&t.relativeDate);return G(i,z(r))};p("en_US",A);p("zh_CN",U);const j=h.li`
  font-size: 0.16rem;
  padding: 0.1rem 0.08rem;
  border-radius: 0.06rem;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.05rem;
  min-width: 1.8rem;
  a {
    color: #555;
  }
  &:hover {
    background-color: #eee;
    a {
      color: #000;
      text-decoration: underline;
    }
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .name {
      padding: 0.02rem 0;
      max-width: 90%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .home {
      margin-left: 0.1rem;
      display: flex;
      align-items: center;
      svg {
        width: 0.14rem;
        height: 0.14rem;
      }
    }
  }
  .bottom {
    display: flex;
    font-size: 0.1rem;
    color: #666;
    .item {
      user-select: none;
      display: flex;
      align-items: center;
      padding: 2px 4px;
      margin-right: 4px;
      /* border-radius: 4px; */
      border: 1px solid #aaa;
      svg {
        width: 0.12rem;
        height: 0.12rem;
        fill: #666;
        /* color: #666; */
      }
    }
    .timeago {
      /* font-size: 0.1rem;
      color: #666; */
    }
  }
`;function F({url:e,pushedAt:r,name:t,forkCount:i,stargazerCount:o,homepageUrl:s,object:l}){return n(j,{children:[n("div",{className:"top",children:[a("a",{className:"name",title:`\u4ED3\u5E93:${t}`,href:e,target:"_blank",children:t}),s&&a("a",{title:"\u9879\u76EE\u4E3B\u9875",className:"home",href:s,target:"_blank",children:a(w,{})})]}),n("div",{className:"bottom",children:[n("span",{title:"\u6700\u65B0\u66F4\u65B0",className:"item timeago",children:[a(x,{}),T(new Date(r),"zh_CN")]}),n("span",{title:"Fork\u6570",className:"item fork",children:[a(y,{}),i]}),n("span",{title:"\u6807\u661F\u6570",className:"item star",children:[a(N,{}),o]}),l&&n("span",{title:"\u63D0\u4EA4\u6570",className:"item commit",children:[a(D,{}),l.history.totalCount]})]})]},t)}const R="f3505bc46977fad4bb33",B=`https://github.com/login/oauth/authorize?client_id=${R}&scope=repo&redirect_uri=${encodeURI("http://nicegoodthings.com/oauth/github")}`,I=k`
  query {
    viewer {
      avatarUrl
      name
      login
      repositories(
        isFork: false
        isLocked: false
        first: 100
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          pushedAt
          name
          stargazerCount
          forkCount
          url
          homepageUrl
          isArchived
          object(expression: "master") {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;let M=B;function J(){const{token:e}=g(),[r,{loading:t,data:i}]=_(I);if(f.exports.useEffect(()=>{e&&r()},[e,r]),!e)return a(b,{auth:M});if(t||!i)return a(v,{});const{viewer:{avatarUrl:o,login:s,repositories:{nodes:l}}}=i;return n(E,{children:[a("a",{href:`https://github.com/${s}/`,target:"_blank",className:"head",children:a("img",{"data-default":"https://static.nicegoodthings.com/privoce/developer.png",className:"avatar",title:s,src:`${o}`,alt:"\u7528\u6237\u5934\u50CF"})}),a("ul",{className:"list",children:l.filter(c=>!c.isArchived).map(c=>a(F,{...c},c.url))})]})}export{J as default};

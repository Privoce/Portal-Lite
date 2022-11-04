import{s as b,f as x,r as n,j as a,a as s,F as y}from"./index.adf820fb.js";import{a as w}from"./index.esm.c817908c.js";import"./iconBase.a38ac1cb.js";const v=b.section`
  font-size: 0.14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .app {
    margin-bottom: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name {
      font-size: 0.25rem;
    }
    .logo {
      width: 0.5rem;
      height: 0.5rem;
      img {
        width: 100%;
      }
    }
  }
  .status {
    font-size: 0.2rem;
    margin-bottom: 0.4rem;
  }
  .tip {
    margin-bottom: 0.2rem;
  }
  .close_btn {
    padding: 0.1rem 0.2rem;
    font-size: 0.22rem;
    color: #fff;
    border-radius: 0.05rem;
    background-color: #2ea043;
  }
`,S=v,N=async(o="")=>{let e=null;try{e=await(await fetch("https://api.yangerxiao.com/oauth/github/portal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:o})})).json()}catch{e={code:-1,msg:"\u51FA\u9519\u5566"}}return e},T=N,m={github:{name:"Github OAuth",logo:s(w,{})}};let d=null;function C(){let{app:o}=x();const[e,r]=n.exports.useState(!0),[p,i]=n.exports.useState(null);let[t,l]=n.exports.useState(null);n.exports.useEffect(()=>{if(t!==null){if(t===0){window.close();return}return d=setInterval(()=>{l(t-1)},1e3),()=>clearInterval(d)}},[t]),n.exports.useEffect(()=>{let c=new URLSearchParams(location.search).get("code");c&&T(c).then(f=>{r(!0);const{code:g,data:u}=f;g==0&&u.access_token?(r(!1),i("\u6388\u6743\u6210\u529F"),localStorage.setItem("GITHUB_OAUTH_TOKEN",u.access_token),l(3)):i("\u6388\u6743\u5931\u8D25")})},[]);const h=()=>{window.close()};return a(S,{children:[a("div",{className:"app",children:[s("div",{className:"name",children:m[o].name}),s("div",{className:"logo",children:m[o].logo})]}),s("div",{className:"status",children:e?"\u6388\u6743\u4E2D...":p}),!e&&a(y,{children:[a("div",{className:"tip",children:[t,"\u79D2\u540E\u5C06\u5173\u95ED\u9875\u9762"]}),s("button",{onClick:h,className:"close_btn",children:"\u7ACB\u5373\u5173\u95ED"})]})]})}export{C as default};

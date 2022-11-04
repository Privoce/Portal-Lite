import{f as w,i as l,b as d,d as x,r as s,a as e,j as o,F as v,G as N,s as b}from"./index.adf820fb.js";import{e as k}from"./index.esm.95d4feb0.js";/* empty css                  */import{F as E}from"./Footer.531a8593.js";import"./iconBase.a38ac1cb.js";import"./index.esm.c817908c.js";const p=b.section`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:.5rem;
  justify-content: center;
  align-items: center;
  font-size: .24rem;
  padding-top:.4rem;
  overflow: scroll;
  >.title{
    font-size: .4rem;
    font-weight: 800;
  }
  .trans{
    display: flex;
    align-items: center;
    gap: .3rem;
    .product{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: .2rem;
      .logo{
        width:1rem;
        height:1rem;
        border-radius: 50%;
        border:1px solid #eee;
        padding:.14rem;
      }
      .title{
        font-size: .3rem;
        font-weight: 800;
      }
    }
    .arrows{
      margin-top: -30px;
    }
  }
  .btn{
    padding:.12rem .18rem;
    font-size: .34rem;
    background:#5072f0;
    color:#fff;
    border-radius: 5px;
  }
  .tip{
    color:#999;
  }
`,C={webrowse:{title:"Webrowse",logo:"https://static.nicegoodthings.com/works/vera/webrowse.logo.png"},vera:{title:"Vera",logo:"https://static.nicegoodthings.com/works/vera/vera.logo.png"},sphere:{title:"Sphere Youtube",logo:"https://static.nicegoodthings.com/works/vera/vera.logo.png"}};function L(){const{product:a=""}=w(),{authClient:g}=l.exports.useAuthing({appId:d,appHost:x}),[m,u]=s.exports.useState(!0),[t,i]=s.exports.useState(null);s.exports.useEffect(()=>{(async()=>{let c=await g.getCurrentUser();c&&i(c),u(!1)})()},[]),s.exports.useEffect(()=>{if(t){switch(a){case"sphere":document.dispatchEvent(new CustomEvent("SPHERE_LOGIN",{detail:{user:t}}));break}document.dispatchEvent(new CustomEvent("SPHERE_LOGIN",{detail:{user:t}}))}},[t]);const f=async r=>{i(r)},h=r=>{i(r)};if(m)return e(p,{children:"Checking"});const n=C[a];return n?o(v,{children:[o(p,{children:[t&&e("h1",{className:"title",children:"Login Success!"}),o("div",{className:"trans",children:[o("div",{className:"product",children:[e("img",{className:"logo",src:n.logo,alt:"transfer product logo"}),e("h3",{className:"title",children:n.title})]}),e(k,{className:"arrows",size:"70",color:"#ddd"}),o("div",{className:"product",children:[e("img",{className:"logo",src:"https://static.nicegoodthings.com/privoce/works.portal.logo.png",alt:"transfer product logo"}),e("h3",{className:"title",children:"Portal"})]})]}),t?e("div",{className:"tip",children:"You can close this window and continue ..."}):e("div",{className:"login",children:e(l.exports.AuthingGuard,{onRegisterInfoCompleted:h,onLogin:f,appId:d,config:{...N,mode:"normal"}})})]}),e(E,{})]}):null}export{L as default};

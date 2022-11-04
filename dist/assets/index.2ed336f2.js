import{r as n,e as u,j as g,a as o,s as d}from"./index.adf820fb.js";import{I as m}from"./icon.logo.d6d18bf6.js";const r="AUTHING_OAUTH_TOKEN",p=()=>{const[s,t]=n.exports.useState(localStorage.getItem(r)||"");return n.exports.useEffect(()=>{const e=i=>{const{newValue:a,oldValue:c,key:l}=i;l==r&&a!=c&&t(a)};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[]),{token:s,setToken:t,localKey:r}},h=p,f=d.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eee;
  .logo {
    margin-top: -0.8rem;
    width: 2rem;
    height: 2rem;
    border: 2px solid #ccc;
    border-radius: 50%;
    padding: 0.16rem;
    img {
      width: 100%;
    }
  }
  .tip {
    font-weight: 800;
    margin-top: 0.2rem;
    color: #333;
    font-size: 0.6rem;
  }
  .subtip {
    color: #666;
    margin-top: 0.14rem;
    font-size: 0.3rem;
  }
`;function x(){const{localKey:s}=h(),t=u();return n.exports.useEffect(()=>{let e=new URLSearchParams(location.search).get("code");e&&localStorage.setItem(s,e),setTimeout(()=>{t("/")},2e3)},[]),g(f,{children:[o("div",{className:"logo",children:o("img",{src:m,alt:"Logo"})}),o("span",{className:"tip",children:"\u767B\u5F55\u6210\u529F"}),o("span",{className:"subtip",children:"\u5373\u5C06\u8DF3\u8F6C..."})]})}export{x as default};

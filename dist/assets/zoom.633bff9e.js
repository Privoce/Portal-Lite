import{i as c,b as u,d as g,r,a as n,G as m,s as x}from"./index.adf820fb.js";/* empty css                  */const s=x.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,a=t=>{!t||setTimeout(()=>{location.href=`https://wechat.okeydemo.com/author?token=${t}`},2e3)};function C(){const{authClient:t}=c.exports.useAuthing({appId:u,appHost:g}),[l,d]=r.exports.useState(!0),[h,o]=r.exports.useState(null);r.exports.useEffect(()=>{(async()=>{let i=await t.getCurrentUser();i&&(o(i),a(i.token)),d(!1)})()},[]);const f=async e=>{o(e),a(e.token)},p=e=>{o(e),a(e.token)};return l?n(s,{children:"Checking"}):h?n(s,{children:"redirecting to zoom...."}):n(s,{children:n(c.exports.AuthingGuard,{visible:!0,onRegisterInfoCompleted:p,onLogin:f,appId:u,config:m})})}export{C as default};

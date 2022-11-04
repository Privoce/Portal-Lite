import{r,a as e,s as n}from"./index.adf820fb.js";import{L as s}from"./Loading.16593da1.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const d=n.div`
  width: 100% !important;
  height: 100% !important;
  #he-plugin-standard {
    width: 100% !important;
    height: 100% !important;
    .wv-v-h-row {
      display: flex;
      position: relative;
      /* justify-content: center; */
      align-items: center;
      .wv-v-h-location {
        position: absolute;
        top: 5px;
        left: 0;
        width: 100%;
        padding-left: 0.2rem;
      }
    }
  }
`;function h(){const[i,o]=r.exports.useState(!0);return r.exports.useEffect(()=>{window.WIDGET={CONFIG:{layout:1,background:1,dataColor:"FFFFFF",language:"zh",key:"cb838cfcaf634a45a7151df4dd9d998f"}};let t=document.createElement("script");t.src="https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";let a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a),t.onload=()=>{o(!1),setTimeout(()=>{},2e3)}},[]),i?e(s,{}):e(d,{children:e("div",{id:"he-plugin-standard"})})}export{h as default};

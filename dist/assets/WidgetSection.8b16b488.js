import{r as f,a as s,s as h}from"./index.adf820fb.js";import{W as w,S as y}from"./hooks.a478aa3b.js";import{W as S}from"./index.a7993bd8.js";import{S as W}from"./sortable.complete.esm.2f95bf31.js";import"./iconBase.a38ac1cb.js";import"./index.esm.95d4feb0.js";import"./index.esm.6c785b3e.js";import"./Close.4951d652.js";const b=h.section`
  position: relative;
  min-height: 80vh;
  width: 100%;
  padding-bottom: 0.6rem;

  .widgets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.58rem;
    grid-auto-flow: row dense;
    grid-auto-rows: auto;
    > .widget {
      transition: transform 0.5s;
      &.ghost {
        opacity: 0.1;
      }
      &.choosen {
        cursor: grabbing;
        transform: scale(0.98);
      }
      &.large {
        grid-row: auto / span 2;
      }
      &[type='nav'] {
        grid-area: auto / span 2;
      }
      &[type='search'] {
        grid-area: span 1 / span 2;
      }
    }

    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: 1fr;
      grid-column-gap: 0.5rem;
      > .widget {
        margin: 0 auto;
        .container {
          width: 96%;
        }
        &[type='nav'] {
          /* width: 100%; */
          grid-area: auto / auto;
        }
        &[type='search'] {
          /* width: 100%; */
          grid-area: span 1 / auto;
        }
      }
    }
  }
`;function G({reloading:p,widgets:d,updateWidgetData:c,removeWidget:g}){return f.exports.useEffect(()=>{window.WIDGET_LIST=d;let t=document.querySelector("#widget-container");W.create(t,{delay:300,ghostClass:"ghost",dragClass:"drag",chosenClass:"choosen",onEnd:function(e){const{item:l,to:i,from:m,oldIndex:r,newIndex:a}=e;if(r==a)return;let o=[...window.WIDGET_LIST],[n]=o.splice(r,1);n&&(o.splice(a,0,n),c(o))},onClone:function(e){const{item:l,clone:i}=e;i.style.opacity=.2}})},[d]),s(b,{children:s("div",{className:"widgets",id:"widget-container",children:d.map(t=>{const e=w[t]||null;if(!e)return null;const{type:l,comp:i,enableSetting:m,title:r,compact:a=!1,disableScroll:o,sizes:n,defaultSize:u}=e;return s(S,{enableSetting:m,type:l,disableScroll:o,name:t,defaultSize:u,sizes:n,update:c,removeWidget:g.bind(null,t),compact:a,title:r,children:p?s(y,{count:5}):i},t)})})})}export{G as default};

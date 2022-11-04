import{l as h,a as i,s as u,r as m,j as w,F as f}from"./index.adf820fb.js";import{S as b,a as y,b as k,N as P,P as S}from"./swiper-bundle.min.dcb7f685.js";import{u as v}from"./hooks.a478aa3b.js";import{u as x}from"./index.esm.31b1f64b.js";import{L as j}from"./Loading.16593da1.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const $=u.div`
  position: relative;
  padding: 0.2rem;
  background-color: #333;
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 0.2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;

  .tab {
    font-size: 0.2rem;
    padding: 0.1rem;
    border: 1px solid #efe;
    margin-right: 0.1rem;
    cursor: pointer;
    &[data-selected='true'] {
      background-color: #eee;
      color: #222;
    }
  }
`,F=[{pet:"shibes",title:"\u72D7\u72D7"},{pet:"cats",title:"\u732B\u54AA"},{pet:"birds",title:"\u5C0F\u9E1F"}];function N({currPet:t,updatePet:e,name:a,toggleWidgetSettingVisible:n}){const p=({target:s})=>{const{dataset:{pet:r,selected:c}}=s;t!=r&&(e(r),n())};return h.exports.createPortal(i($,{children:F.map(s=>{const{pet:r,title:c}=s;let d=r==t;return i("span",{className:"tab","data-selected":d,"data-pet":r,onClick:p,children:c},r)})}),document.querySelector(`#widget-${a}-setting`))}const W=(...t)=>fetch(...t).then(e=>e.json());function z(t,e){const[a,n]=m.exports.useState(t),{data:p,error:s}=x(`https://api.yangerxiao.com/service/animals/${a}`,W),{code:r,data:c,msg:d}=p||{};return{updatePet:n,pet:a,pets:c||e,loading:!s&&!p,error:r!==0?d:s}}k.use([P,S]);const A=u.section`
  height: 100%;
  .swiper-container {
    height: 100%;
    .swiper-pagination,
    .swiper-button-next,
    .swiper-button-prev,
    .swiper-wrapper .swiper-slide .pic .opts {
      opacity: 0;
    }
    .swiper-wrapper {
      /* height: 100%; */
      .swiper-slide {
        /* height: 100%; */
        .pic {
          width: 100%;
          height: 100%;
          position: relative;
          background-color: #333;
          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          .img {
            border-radius: 0.24rem;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
            backdrop-filter: blur(8px);
          }
        }
      }
    }
    &:hover {
      .swiper-pagination,
      .swiper-button-next,
      .swiper-button-prev,
      .swiper-wrapper .swiper-slide .pic .opts {
        opacity: 0.8;
      }
      .swiper-slide .pic .cr {
        transform: translateY(0);
      }
    }
  }
`;function I({name:t,data:e,toggleWidgetSettingVisible:a}){const{getWidgetSetting:n}=v();let p=n({name:t,key:"pics"});const{updatePet:s,loading:r,pet:c,pets:d,error:l}=z((e==null?void 0:e.pet)||n({name:t,key:"pet"})||"shibes",(e==null?void 0:e.pics)||p||[]),g=o=>{s(o)};if(r)return i(j,{});if(l)throw new Error(l);return w(f,{children:[i(N,{currPet:c,updatePet:g,name:t,toggleWidgetSettingVisible:a}),i(A,{children:i(b,{autoplay:{delay:1e3},navigation:!0,pagination:{clickable:!0},keyboard:!0,loop:!0,spaceBetween:30,onSwiper:o=>{o.update()},children:d.map(o=>i(y,{children:i("div",{className:"pic",style:{backgroundImage:`url(${o})`},children:i("div",{className:"img",children:i("img",{src:o,alt:"\u5BA0\u7269\u56FE"})})})},o))})})]})}export{I as default};

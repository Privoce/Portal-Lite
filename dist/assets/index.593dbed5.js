import{i as f,b as u,d as g,r as m,a as e,j as n,s as b}from"./index.adf820fb.js";import{L as x}from"./Loading.16593da1.js";import"./index.esm.95d4feb0.js";import"./iconBase.a38ac1cb.js";const w=b.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .empty {
    font-size: 0.2rem;
  }
  .wrapper {
    margin: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.13rem;
      font-weight: 400;
      line-height: 0.18rem;
      padding: 0.14rem 0.18rem;
      padding-left: 0.3rem;
      position: relative;
      border-bottom: 1px solid #eee;
      transition: all 0.5s;
      &:last-child {
        margin-bottom: 0.6rem;
        &:after {
          content: '没有啦~';
          color: #aaa;
          position: absolute;
          bottom: -0.4rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &:hover {
        background-color: #eee;
        .block .left .title {
          color: rgb(0, 132, 255);
        }
      }
      &:before {
        position: absolute;
        left: 0.08rem;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-seq);
        font-size: 0.12rem;
        font-weight: 400;
        color: #f26e5f;
        line-height: 0.2rem;
        text-align: center;
        width: 0.1rem;
        height: 0.1rem;
      }
      .block {
        display: flex;
        flex-direction: row;
        align-items: center;
        .left {
          display: flex;
          flex: 2;
          flex-direction: column;
          line-height: 1.2;
          padding-right: 0.14rem;
          .title {
            font-size: 0.18rem;
            font-weight: 800;
            width: 3rem;
            padding-right: 0.1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.06rem;
          }
          .intro {
            max-width: 3.2rem;
            padding-right: 0.1rem;
            line-height: 1.3;
            text-align: justify;
            font-size: 0.1rem;
            margin-bottom: 0.12rem;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          .hot {
            font-size: 0.08rem;
            color: #999;
          }
        }
        .right {
          flex: 1;
          img {
            width: 100%;
            border-radius: 5px;
            max-height: 1rem;
            object-fit: cover;
          }
        }
      }
    }
  }
`;function j(){const{authClient:r}=f.exports.useAuthing({appId:u,appHost:g}),[o,d]=m.exports.useState(null);return m.exports.useEffect(()=>{r&&(async()=>{let i=await r.getCurrentUser();if(i){let t=await fetch(`https://social.qmcurtis.me/api/user/connect/liked?userId=${i.id}&num=50`);t=await t.json(),d(t)}})()},[r]),o?e(w,{children:o.length==0?e("div",{className:"empty",children:"\u6682\u65E0\u5185\u5BB9\uFF0C\u8BD5\u8BD5\u6DFB\u52A0\u597D\u53CB\u5427~"}):e("ul",{className:"wrapper",children:o.map((a,i)=>{const{videoTitle:t,videoUrl:c,id:h,videoThumbnail:l,nickname:p,videoDescription:s}=a;return e("li",{className:"item","data-seq":i+1,children:n("a",{className:"block",href:c,target:"_blank",rel:"noopener noreferrer",children:[n("div",{className:"left",children:[e("h2",{className:"title darkmode-ignore",title:t,children:t}),e("p",{className:"intro",title:s,children:s}),n("span",{className:"hot",children:["liked by ",p.toString()]})]}),l&&e("div",{className:"right",children:e("img",{src:l,alt:"\u89C6\u9891\u5C01\u9762"})})]})},h)})})}):e(x,{})}export{j as default};

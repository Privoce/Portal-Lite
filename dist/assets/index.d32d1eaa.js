import{r as l,m as S,n as z,A as O,o as I,s as _,j as h,a as e,i as j,b as A,d as T,p as D,q,H as B,I as V}from"./index.adf820fb.js";import{c as U}from"./util.430bf2a4.js";import{c as L}from"./index.esm.9ed488a3.js";import{u as F,v as H,D as P,g as M,a as Q}from"./useLazyQuery.cb0b2edd.js";import"./iconBase.a38ac1cb.js";function G(n,a){var d=F(a==null?void 0:a.client);H(n,P.Mutation);var r=l.exports.useState({called:!1,loading:!1,client:d}),p=r[0],o=r[1],t=l.exports.useRef({result:p,mutationId:0,isMounted:!0,client:d,mutation:n,options:a});Object.assign(t.current,{client:d,options:a,mutation:n});var g=l.exports.useCallback(function(i){i===void 0&&(i={});var w=t.current,s=w.client,u=w.options,b=w.mutation,f=S(S({},u),{mutation:b});!t.current.result.loading&&!f.ignoreResults&&t.current.isMounted&&o(t.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:s});var N=++t.current.mutationId,y=z(f,i);return s.mutate(y).then(function(m){var v,x,E,C=m.data,k=m.errors,$=k&&k.length>0?new O({graphQLErrors:k}):void 0;if(N===t.current.mutationId&&!y.ignoreResults){var W={called:!0,loading:!1,data:C,error:$,client:s};t.current.isMounted&&!I(t.current.result,W)&&o(t.current.result=W)}return(x=(v=t.current.options)===null||v===void 0?void 0:v.onCompleted)===null||x===void 0||x.call(v,m.data,y),(E=i.onCompleted)===null||E===void 0||E.call(i,m.data,y),m}).catch(function(m){var v,x,E,C;if(N===t.current.mutationId&&t.current.isMounted){var k={loading:!1,error:m,data:void 0,called:!0,client:s};I(t.current.result,k)||o(t.current.result=k)}if(((v=t.current.options)===null||v===void 0?void 0:v.onError)||y.onError)return(E=(x=t.current.options)===null||x===void 0?void 0:x.onError)===null||E===void 0||E.call(x,m,y),(C=i.onError)===null||C===void 0||C.call(i,m,y),{data:void 0,errors:m};throw m})},[]),c=l.exports.useCallback(function(){t.current.isMounted&&o({called:!1,loading:!1,client:d})},[]);return l.exports.useEffect(function(){return t.current.isMounted=!0,function(){t.current.isMounted=!1}},[]),[g,S({reset:c},p)]}const J=_.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 0.16rem;
    font-weight: 800;
    color: inherit;
    margin-bottom: 0.3rem;
  }
  .login {
    font-size: 0.12rem;
    background: #5c46e3;
    color: #fff;
    border-radius: 0.06rem;
    padding: 0.08rem 0.25rem;
  }
`,K=()=>h(J,{children:[e("div",{className:"tip",children:"Login First"}),e("button",{className:"login",onClick:()=>{let a=document.querySelector(".settings .toggle"),d=document.querySelector(".settings .setting .icon.profile");d&&(a.click(),d.click())},children:"Login"})]}),X=K,Y=_.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tip {
    font-size: 0.16rem;
    font-weight: 800;
    color: inherit;
    margin-bottom: 0.3rem;
  }
  .link {
    font-size: 0.12rem;
    background: #5c46e3;
    color: #fff;
    border-radius: 0.06rem;
    padding: 0.08rem 0.25rem;
  }
`,Z=({tip:n="Install Webrowse on Chrome store for free."})=>h(Y,{children:[e("div",{className:"tip",children:n}),e("a",{className:"link",href:"https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn",target:"_blank",children:"Install"})]}),ee=Z,te=_.div`
  padding: 0;
  height: 100%;
  .loading {
    font-size: 0.2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ne=te,ie=_.div`
  width: 100%;
  height: 100%;
  font-size: 0.18rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,R=ie,re=M`
  query RoomList {
    portal_room {
      active
      name
      id
      members
      windows {
        id
        title
        tabs {
          id
          title
          icon
          url
          window
        }
      }
      host
      creator
      id
    }
  }
`;function oe(n){const[a,d]=l.exports.useState([]),[r,{loading:p,data:o,error:t}]=Q(re,{pollInterval:15e3});return l.exports.useEffect(()=>{n&&r()},[n]),l.exports.useEffect(()=>{if(o&&n){let c=((o==null?void 0:o.portal_room)||[]).filter(i=>i.host==n||i.creator==n||i.members&&i.members.some(w=>w.username==n));d(c)}},[o,n]),{username:n,data:a,loading:p,error:t}}const se=_.section`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 0.2rem;
  .col{
    height: 100%;
    display: flex;
    flex-direction: column;
    padding:.14rem .12rem;
    >.title{
      font-weight: 800;
      color:#000;
      margin-bottom: .14rem;
    }
    .box{
      padding:.15rem;
      border-radius: .1rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      &:not(:last-child){
        margin-bottom: .14rem;
      }
    }
  }
  .rooms{
    background-color:  #f3f3f3;
    flex: 1;
    overflow-y: scroll;
    .room{
      position: relative;
      cursor: pointer;
      font-size: .22rem;
      &.curr{
        background-color: #333;
        color:#f3f3f3;
      }
      &.active:after{
        content: "";
        display: block;
        width:8px;
        height: 8px;
        border-radius: 50%;
        background-color: green;
        position: absolute;
        top:5px;
        right:5px;
      }
      .members{
        margin-top: .15rem;
        display: flex;
        .member{
          transition: margin .5s ease-in-out;
          width: .2rem;
          height: .2rem;
          overflow: hidden;
          img{
          border-radius: 50%;
            border:1px solid #eee;
            width:100%
          }
          &:not(:first-child){
            margin-left: -.1rem;
          }
        }
          &:hover .member:not(:first-child){
            margin-left: 0;
          }
      }
    }
  }
  .windows{
    flex:2;
    .window{
      padding:0 .1rem;
      >.title{
        display: flex;
        justify-content: space-between;
        padding-top:0.2rem;
        font-size: .22rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 0.1rem;
        .co{
          padding:.05rem;
          border-radius: .1rem;
          background-color:  rgb(117, 217, 157);
          color:#f3f3f3;
        }
      }
      .tabs{
        display: flex;
        flex-direction: column;
        padding:.1rem 0;
        .tab{
          margin-bottom:.1rem;
          padding-top:.1rem;
          display: flex;
          align-items: center;
          .icon{
            width:.2rem;
            height:.2rem;
            margin-right: .1rem;
          }
          .title{
            white-space: nowrap;
            max-width: 3.4rem;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
    .add{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;function ae({username:n,lang:a={},toggleAddPopup:d}){const[r,p]=l.exports.useState(null),{data:o,error:t,loading:g}=oe(n);l.exports.useEffect(()=>{if(!g){const[s]=o;p(s)}},[g,o]);const c=s=>{let u=o.find(b=>b.id==s);p(u)},i=s=>{const{idx:u,id:b}=s.target.dataset,f=r.windows[u].tabs.map(({url:N})=>N);document.dispatchEvent(new CustomEvent("WEBROWSE_ROOM_NEW_WINDOW_EVENT",{detail:{wid:b,urls:f,rid:r.id}}))},w=()=>{document.dispatchEvent(new CustomEvent("WEBROWSE_ROOM_NEW_WINDOW_EVENT",{detail:{urls:[],rid:r.id}}))};return g||!o?e(R,{children:a.fetching}):t?e(R,{children:"error"}):h(se,{children:[h("div",{className:"col rooms",children:[e("h2",{className:"title",children:"Room"}),o.map(s=>{const{name:u,members:b=[]}=s;return h("div",{onClick:c.bind(null,s.id),className:`box room ${(r==null?void 0:r.id)==s.id?"curr":""} ${s.active?"active":""}`,children:[e("h3",{className:"name",children:u}),b&&b.length!==0&&e("ul",{className:"members",children:b.map(f=>e("li",{className:"member",title:f.username,children:e("img",{src:f.photo||f.avator,alt:"member photo"})},f.id))})]},s.id)}),e("button",{className:"box add",onClick:d,children:e(L,{size:20})})]}),r&&h("div",{className:"col windows",children:[e("h2",{className:"title",children:"Window"}),r.windows.map((s,u)=>{const{tabs:b,id:f,title:N}=s;return h("div",{className:"box window",children:[h("h3",{className:"title",children:[e("span",{children:N}),e("button",{"data-idx":u,"data-id":f,onClick:i,className:"co",children:"Co-Browse"})]}),e("ul",{className:"tabs",children:b.map(y=>{const{id:m,title:v,icon:x}=y;return h("li",{className:"tab",children:[e("img",{className:"icon",src:x,alt:"icon"}),e("span",{className:"title",children:v})]},m)})})]},f)}),e("button",{onClick:w,className:"box add",children:e(L,{size:20})})]})]})}const le=_.div`
  font-size: 1.2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #333;
  padding: 0.2rem;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    .input {
      border: none;
      padding: 0.2rem 0.4rem;
      border-radius: 0.3rem;
      margin-bottom: 0.2rem;
    }
    .btns {
      display: flex;
      .btn {
        color: #fff;
        padding: 0.4rem;
      }
    }
  }
`,de=M`
  mutation AddRoom(
    $creator: String!
    $host: String!
    $id: String!
    $name: String!
  ) {
    insert_portal_room(
      objects: { creator: $creator, host: $host, id: $id, name: $name }
    ) {
      returning {
        id
        name
        host
        active
        members
      }
    }
  }
`;function ce({username:n,togglePopupVisible:a}){const[d]=G(de),[r,p]=l.exports.useState({id:Math.random().toString(36).substring(7),host:n,creator:n}),o=async c=>{c.preventDefault(),await d({variables:{...r}})&&a()},t=c=>{const{target:i}=c;let{name:w,value:s}=i;p(u=>(u[w]=s,{...u}))},{name:g}=r;return e(le,{children:e("div",{className:"form",children:h("form",{onSubmit:o,children:[e("input",{type:"text",className:"input name",placeholder:"Room Name",name:"name",value:g,onChange:t}),h("div",{className:"btns",children:[e("button",{type:"submit",className:"btn submit",children:"Create"}),e("button",{className:"btn close",onClick:a,children:"Close"})]})]})})})}const me=new q({link:new B({uri:"https://g.nicegoodthings.com/v1/graphql",headers:{"x-hasura-admin-secret":"tristan@privoce"}}),cache:new V});function be(){const{authClient:n}=j.exports.useAuthing({appId:A,appHost:T}),[a,d]=l.exports.useState(void 0),[r,p]=l.exports.useState(null),[o,t]=l.exports.useState(!1),g=()=>{t(c=>!c)};return l.exports.useEffect(()=>{(async()=>{let i=await U("nnbkebemeehfhiimeghnkdocfbeogenn");d(i)})()},[]),l.exports.useEffect(()=>{n&&(async()=>{let i=await n.getCurrentUser();i&&(document.dispatchEvent(new CustomEvent("WEBROWSE_ROOM_EVENT",{detail:{user:i}})),p(i.username))})()},[n]),typeof a>"u"?e(R,{children:"Checking Extension"}):a?r?e(D,{client:me,children:h(ne,{children:[o&&e(ce,{username:r,togglePopupVisible:g}),e(ae,{username:r,toggleAddPopup:g})]})}):e(X,{}):e(ee,{})}export{be as default};

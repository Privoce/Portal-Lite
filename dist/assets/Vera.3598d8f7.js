import{a as e,j as t,U as i,s as a}from"./index.adf820fb.js";const n=i`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,s=a.section`

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${n} 15s ease infinite;
  .content{
    user-select: none;
    color:#fff;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  .title{
    text-transform: uppercase;
    font-size: .6rem;
    font-weight: 800;
    padding-bottom: .8rem;
  }
  .sub_title{
    font-size: .4rem;
    padding-bottom: .1rem;
  }
  .feats{
    font-size: .3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0.3rem;
    list-style: circle;
    .feat{
      font-size: .2rem;
      padding-bottom: .1rem;
    }
  }
  }
`;function l(){return e(s,{children:t("div",{className:"content",children:[e("h1",{className:"title",children:"Welcome to Vera world!"}),e("h2",{className:"sub_title",children:"Vera can help you:"}),t("ul",{className:"feats",children:[e("li",{className:"feat",children:"Real-time audio and video communication with others"}),e("li",{className:"feat",children:"Sharing the workspace"}),e("li",{className:"feat",children:"Real-time display others' mouse position"}),e("li",{className:"feat",children:"Chat with others"})]})]})})}export{l as default};

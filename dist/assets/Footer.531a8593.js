import{r as l,R as r,a as t,_ as c,j as i,s}from"./index.adf820fb.js";import{A as h,a as d}from"./index.esm.95d4feb0.js";import{F as p}from"./index.esm.c817908c.js";class m extends l.exports.PureComponent{constructor(e){super(e),this.$=r.createRef(),this._=r.createRef()}render(){return t("span",{ref:this.$,children:t("a",{...this.props,ref:this._,children:this.props.children})})}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));c(()=>import("./buttons.esm.fbc01805.js"),[]).then(({render:a})=>{this._.current!=null&&a(e.appendChild(this._.current),function(n){try{e.parentNode.replaceChild(n,e)}catch{}})})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}const o=m,g=s.footer`
  width: 100%;
  padding: 0.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 0.4rem;
    img {
      width: 100%;
    }
  }
  .txt {
    font-size: 0.14rem;
    color: #ccc;
    text-align: center;
  }
  .github {
    font-size: 0.12rem;
    display: flex;
    justify-content: center;
    margin-top: 0.15rem;
    span {
      display: flex;
      align-items: center;
    }
    > span:not(:last-child) {
      margin-right: 0.1rem;
    }
  }
  .socials {
    display: flex;
    padding: 0.15rem;
    .item {
      width: 30px;
      height: 30px;
      &.linkedin {
        /* background-color: rgb(0, 127, 177); */
      }
      &:not(:last-child) {
        margin-right: 0.15rem;
      }
      .link {
        display: flex;
        svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;function v(){return i(g,{children:[t("div",{className:"logo",children:t("img",{alt:"Portal Logo",src:"https://static.nicegoodthings.com/privoce/works.portal.logo.png"})}),i("div",{className:"txt",children:["\xA9 2020 - 2021 Provided by"," ",t("a",{href:"//privoce.com/#our-team",target:"_blank",children:"Privoce Team"})," ","with \u2764\uFE0F"]}),i("div",{className:"github",children:[t(o,{href:"https://github.com/Privoce/Portal-Lite","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star Privoce/Portal-Lite on GitHub",children:"Star"}),t(o,{href:"https://github.com/Privoce/Portal-Lite/fork","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-repo-forked","data-show-count":"true","aria-label":"Fork Privoce/Portal-Lite on GitHub",children:"Fork"})]}),i("ul",{className:"socials",children:[t("li",{className:"item",children:t("a",{href:"https://twitter.com/Privoce1",target:"_blank",className:"link",children:t(h,{color:"rgb(0, 172, 237)"})})}),t("li",{className:"item linkedin",children:t("a",{href:"https://www.linkedin.com/company/privoce",className:"link",target:"_blank",children:t(d,{color:"rgb(0, 127, 177)"})})}),t("li",{className:"item",children:t("a",{href:"https://www.facebook.com/privoce",className:"link",target:"_blank",children:t(p,{color:"rgb(59, 89, 152)"})})})]})]})}export{v as F};

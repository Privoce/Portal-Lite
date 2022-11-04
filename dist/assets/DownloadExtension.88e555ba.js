import{j as s,a as e,s as a}from"./index.adf820fb.js";const d=a.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:1rem 0;
  .logo {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.15rem;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-bottom: 0.4rem;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .tip {
    color: #999;
    font-size: 0.25rem;
    font-weight: 800;
    margin-bottom: 0.2rem;
  }
  .download {
    font-size: 0.34rem;
    text-decoration: underline;
  }
  &.widget {
    .logo {
      width: 1rem;
      height: 1rem;
      margin-bottom: 0.3rem;
    }
    .tip {
      font-size: 0.2rem;
    }
    .download {
      font-size: 0.25rem;
    }
  }
`;function m({page:o=!0,logo:t="https://static.nicegoodthings.com/privoce/works.portal.logo.png",tip:i="Install Webrowse Extension First",installLink:r="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn",installTitle:n="Webrowse - cobrowse together"}){return s(d,{className:o?"":"widget",children:[e("div",{className:"logo",children:e("img",{alt:"Extension Logo",src:t})}),e("div",{className:"tip",children:i}),e("a",{target:"_blank",href:r,className:"download",children:n})]})}export{m as D};

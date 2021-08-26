// import React from 'react'
import styled from 'styled-components';
const StyledWrapper = styled.section`
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
`;
export default function DownloadExtension({ page = true, logo = "https://static.nicegoodthings.com/privoce/works.portal.logo.png", tip = "Install Webrowse Extension First", installLink = "https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn", installTitle = "Webrowse - cobrowse together" }) {
  return (
    <StyledWrapper className={page ? '' : 'widget'}>
      <div className="logo">
        <img
          alt="Extension Logo"
          src={logo}
        />
      </div>
      <div className="tip">
        {tip}
      </div>
      <a
        target="_blank"
        href={installLink}
        className="download"
      >
        {installTitle}
      </a>
    </StyledWrapper>
  );
}

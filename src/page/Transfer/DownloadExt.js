// import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.section`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.15rem;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-bottom: 0.4rem;
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
`;
export default function DownloadExt() {
  return (
    <StyledWrapper>
      <div className="logo">
        <img
          alt="Portal Logo"
          src="https://gitee.com/zyanggc/oss/raw/master/works/works.portal.logo.png"
        />
      </div>
      <div className="tip">Install Portal Extension First</div>
      <a
        href="https://chrome.google.com/webstore/detail/portal-home-of-your-web-a/ccegbnlnelhgaefimiaklaindffpfcmh?hl=en&authuser=1"
        className="download"
      >
        Portal - Home of Your Web Apps
      </a>
    </StyledWrapper>
  );
}

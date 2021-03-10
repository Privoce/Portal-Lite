import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.2rem 0 0.3rem 0;
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
`;
export default function Footer() {
  return (
    <StyledFooter>
      <div className="logo">
        <img
          alt="Portal Logo"
          src="https://gitee.com/zyanggc/oss/raw/master/works/works.portal.logo.png"
        />
      </div>
      <div className="txt">
        © 2020 - 2021 Provided by{' '}
        <a href="//privoce.com/#our-team" target="_blank">
          Privoce Team
        </a>{' '}
        with ❤️
      </div>
      <div className="github">
        <GitHubButton
          href="https://github.com/Privoce/Portal-Lite"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star Privoce/Portal-Lite on GitHub"
        >
          Star
        </GitHubButton>
        <GitHubButton
          href="https://github.com/Privoce/Portal-Lite/fork"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-repo-forked"
          data-show-count="true"
          aria-label="Fork Privoce/Portal-Lite on GitHub"
        >
          Fork
        </GitHubButton>
      </div>
    </StyledFooter>
  );
}

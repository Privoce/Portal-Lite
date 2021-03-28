import React from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
const StyledFooter = styled.footer`
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
`;
export default function Footer() {
  return (
    <StyledFooter>
      <div className="logo">
        <img
          alt="Portal Logo"
          src="https://static.nicegoodthings.com/privoce/works.portal.logo.png"
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
      <ul className="socials">
        <li className="item">
          <a href="https://twitter.com/Privoce1" target="_blank" className="link">
            <AiFillTwitterCircle color="rgb(0, 172, 237)" />
          </a>
        </li>
        <li className="item linkedin">
          <a href="https://www.linkedin.com/company/privoce" className="link" target="_blank">
            <AiFillLinkedin color="rgb(0, 127, 177)" />
          </a>
        </li>
        <li className="item">
          <a href="https://www.facebook.com/privoce" className="link" target="_blank">
            <FaFacebook color="rgb(59, 89, 152)" />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}

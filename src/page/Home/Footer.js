import React from 'react';
import styled from 'styled-components';
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
    </StyledFooter>
  );
}

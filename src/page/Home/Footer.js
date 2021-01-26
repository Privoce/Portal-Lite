import React from 'react';
import styled from 'styled-components';
const StyledFooter = styled.footer`
  width: 100%;
  padding: 0.6rem 0 0.3rem 0;
  font-size: 0.14rem;
  color: #ccc;
  text-align: center;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <div className="txt">
        © 2020 - 2021 Provided by{' '}
        <a href="//privoce.com/#our-team" target="_blank">
          Privoce
        </a>{' '}
        with ❤️
      </div>
    </StyledFooter>
  );
}

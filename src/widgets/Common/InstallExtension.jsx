import styled from 'styled-components';

const StyledWrapper = styled.section`
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
`;

const InstallExtension = ({ tip = 'Install Webrowse on Chrome store for free.' }) => {
  return (
    <StyledWrapper>
      <div className="tip">{tip}</div>
      <a
        className="link"
        href="https://chrome.google.com/webstore/detail/webrowse-sync-tabs-with-y/nnbkebemeehfhiimeghnkdocfbeogenn"
        target="_blank"
      >
        Install
      </a>
    </StyledWrapper>
  );
};
export default InstallExtension;

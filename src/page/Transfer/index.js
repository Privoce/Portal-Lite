import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DownloadExt from './DownloadExt';
const StyledWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
  .logo {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.15rem;
    border-radius: 50%;
    border: 1px solid #eee;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .id {
    margin-bottom: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 0.4rem;
      margin-bottom: 0.12rem;
      font-weight: 800;
    }
    .value {
      color: #333;
      font-size: 0.3rem;
      padding: 0.1rem 0.2rem;
      border: 1px dashed #ccc;
      text-shadow: 0px 2px 3px #5c46e3;
      white-space: nowrap;
    }
  }
  .tip {
    margin-bottom: 0.1rem;
    line-height: 1.5;
    .redirect {
      font-size: 0.2rem;
    }
    .click {
      font-size: 0.16rem;
      color: #555;
    }
  }
  .link {
    font-size: 0.16rem;
    max-width: 5.6rem;
    word-break: break-all;
    line-height: 1.5;
  }
`;
let inter = 0;
export default function Transfer() {
  const { dest } = useParams();
  const [checkResult, setCheckResult] = useState(undefined);
  const [countdown, setCountdown] = useState(undefined);
  const [tip, setTip] = useState('');
  const [jumpUrl, setJumpUrl] = useState(null);
  const [portalVemosId, setPortalVemosId] = useState(null);
  useEffect(() => {
    const checkExtInstalled = () => {
      let extInstalled = !!document.documentElement.getAttribute('ext-portal');
      setCheckResult(extInstalled);
    };
    window.onload = checkExtInstalled;
    return () => {
      window.onload = null;
    };
  }, []);
  useEffect(() => {
    let decoded = decodeURIComponent(dest);
    let id = new URLSearchParams(new URL(decoded).search).get('portal-vemos-id');
    if (id) {
      setJumpUrl(decoded);
      setPortalVemosId(id);
      setTip('Redirecting...');
      setCountdown(5);
    }
    return () => {
      clearTimeout(inter);
    };
  }, [dest]);
  useEffect(() => {
    if (typeof countdown !== 'undefined') {
      if (countdown > 0) {
        setTimeout(() => {
          setCountdown((prev) => --prev);
        }, 1000);
      } else {
        location.href = jumpUrl;
      }
    }
  }, [countdown, jumpUrl]);
  if (typeof checkResult == 'undefined') return 'checking';
  if (checkResult === false) return <DownloadExt />;
  return (
    <StyledWrapper>
      <div className="logo">
        <img
          alt="Portal Logo"
          src="https://gitee.com/zyanggc/oss/raw/master/works/works.portal.logo.png"
        />
      </div>
      {portalVemosId && (
        <article className="id">
          <h2 className="title">Your Portal Vemos Invite ID:</h2>
          <p className="value">{portalVemosId}</p>
        </article>
      )}
      {tip && (
        <div className="tip">
          <p className="redirect">
            {tip} ({countdown}s)
          </p>
          <p className="click">↓ Click to jump now ↓</p>
        </div>
      )}
      {jumpUrl && (
        <a className="link" href={jumpUrl}>
          {jumpUrl}
        </a>
      )}
    </StyledWrapper>
  );
}

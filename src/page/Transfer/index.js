import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DownloadExt from '../../component/DownloadExtension';
const StyledTip = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .txt {
    color: #555;
    padding: 0.5rem;
    line-height: 1.4;
    font-size: 0.4rem;
    font-weight: 800;
    white-space: pre-line;
    &.error {
      color: red;
    }
  }
`;
const Result = ({ children }) => (
  <StyledTip>
    <div className="logo">
      <img
        alt="Portal Logo"
        src="https://static.nicegoodthings.com/privoce/works.portal.logo.png"
      />
    </div>
    {children}
  </StyledTip>
);
const checkUrl = `chrome-extension://ccegbnlnelhgaefimiaklaindffpfcmh/crx/vera/assets/icon/logo.png`;
const urlParamKey = 'portal-vera-id';
export default function Transfer() {
  const { dest } = useParams();
  const [checkResult, setCheckResult] = useState(undefined);
  const [tip, setTip] = useState('');
  useEffect(() => {
    let img = document.createElement('img');
    img.src = checkUrl;
    img.onload = () => {
      setCheckResult(true);
    };
    img.onerror = () => {
      setCheckResult(false);
    };
  }, []);
  useEffect(() => {
    let decodedUrl = decodeURIComponent(dest);
    let id = new URLSearchParams(new URL(decodedUrl).search).get(urlParamKey);
    if (id && checkResult == true) {
      location.href = decodedUrl;
    } else if (checkResult === false || !id) {
      setTip(`Transfer error: \n\r ${decodedUrl}`);
    }
  }, [dest, checkResult]);

  //  location.href = jumpUrl;
  console.log({ checkResult });
  // 暂未检测
  if (typeof checkResult == 'undefined') {
    return (
      <Result>
        <div className="txt">Checking Portal Vera</div>
      </Result>
    );
  }

  // 检测状态为未安装
  if (checkResult === false) return <DownloadExt />;
  if (tip)
    return (
      <Result>
        <div className="txt error">{tip}</div>
      </Result>
    );
  return null;
}

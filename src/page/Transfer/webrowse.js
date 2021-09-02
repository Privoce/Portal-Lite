import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useAuthing } from '@authing/react-ui-components';

import { checkExtensionInstalled } from '../../util';
import DownloadExt from '../../component/DownloadExtension';
import { appId, appHost } from '../../InitialConfig';
const StyledTip = styled.section`
  width: 100%;
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
    word-break: break-all;
    &.error {
      color: red;
    }
  }
`;
const Result = ({ children }) => (
  <StyledTip>
    <div className="logo">
      <img
        alt="Webrowse Logo"
        src="https://static.nicegoodthings.com/works/vera/webrowse.logo.png"
      />
    </div>
    {children}
  </StyledTip>
);
const LandingUrl = 'https://webrow.se/landing/';
export default function WebrowseTransfer() {
  const { rid } = useParams();
  const [checkResult, setCheckResult] = useState(undefined);
  const [tip, setTip] = useState('');
  const { authClient } = useAuthing({
    appId,
    appHost
  });

  let extId = new URLSearchParams(location.search).get('extid');
  let wid = new URLSearchParams(location.search).get('wid');
  useEffect(() => {
    const startCheck = async () => {
      let installed = await checkExtensionInstalled(extId);
      console.log({ extId, installed });
      setCheckResult(installed);
      // // 如果没安装，循环检测
      // if (!installed) {
      //   setTimeout(startCheck, 1000)
      // }
    };
    startCheck();
    const handleVisibleChange = () => {
      // 激活一次，执行一次
      if (!document.hidden) {
        startCheck()
      }
    }
    document.addEventListener('visibilitychange', handleVisibleChange, false);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibleChange, false)
    }
  }, [extId]);
  useEffect(() => {
    const init = async () => {
      if (rid) {
        let user = await authClient.getCurrentUser();
        if (user) {
          // 把用户信息同步到webrowse扩展
          document.dispatchEvent(new CustomEvent('WEBROWSE_ROOM_EVENT', { detail: { user } }));
        }
        document.dispatchEvent(new CustomEvent('WEBROWSE_ROOM_EVENT', { detail: { rid, wid } }));
        // 注入成功
        location.href = LandingUrl;
      } else {
        setTip(`Webrowse Transfer error: \n\r ${rid}`);
      }
    };
    if (checkResult) {
      init();
    }
  }, [rid, checkResult]);

  //  location.href = jumpUrl;
  console.log({ checkResult });
  // 暂未检测
  if (typeof checkResult == 'undefined') {
    return (
      <Result>
        <div className="txt">Checking Webrowse</div>
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

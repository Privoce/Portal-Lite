import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './Panel';
// import { reset } from 'styled-reset';

const StyledWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const GlobalStyle = createGlobalStyle`

  :root {
      --vera-widget-bg-color: #000;
      --panel-bg-color: #323639;
      --camera-bg-color: #5f6368;
      --button-bg-color: #000;
      --font-color: #fff;
      --border-radius: 5px;
    }
`;
export default function Vera() {
  const [invitePeerId, setInvitePeerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.TOGGLE_VERA_PANEL = () => {
      console.log('toggle visible', { visible });
      if (visible) {
        // 去除标记
        document.documentElement.removeAttribute('invite-expand');
      } else {
        // 添加标记
        document.documentElement.setAttribute('invite-expand', 1);
      }
      setVisible((prev) => !prev);
    };
    if (invitePeerId && !visible) {
      window.TOGGLE_VERA_PANEL();
    }
  }, [invitePeerId, visible]);
  useEffect(() => {
    const getPvid = () => {
      chrome.storage.sync.get(['pvid'], function (res) {
        // Notify that we saved.
        const { pvid = null } = res;
        console.log('pvid from storage', pvid);
        if (pvid) {
          // 立即删掉，防止下次访问依然存在
          chrome.storage.sync.remove('pvid', () => {
            console.log('pvid removed');
          });
          setInvitePeerId(pvid);
        }
        setLoading(false);
      });
    };
    // 显示的时候 再执行
    getPvid();
  }, []);
  if (!visible) return null;
  return (
    <StyledWrapper>
      <GlobalStyle />
      {!loading && <Panel invitePeerId={invitePeerId} />}
    </StyledWrapper>
  );
}

import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './Panel';
import { reset } from 'styled-reset';

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
 ${reset}
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
  window.TOGGLE_VERA_PANEL = () => {
    setVisible((prev) => !prev);
  };
  useEffect(() => {
    if (invitePeerId) {
      setVisible(true);
    }
  }, [invitePeerId]);
  useEffect(() => {
    const getPvid = () => {
      chrome.storage.sync.get(['pvid'], function (res) {
        // Notify that we saved.
        const { pvid = null } = res;
        console.log('pvid from storage', pvid);
        if (pvid) {
          // 立即删掉，方式下次访问依然存在
          chrome.storage.sync.remove('pvid', () => {
            console.log('pvid removed');
          });
          setInvitePeerId(pvid);
        }
        setLoading(false);
      });
    };
    if (visible) {
      getPvid();
    }
  }, [visible]);
  if (!visible) return null;
  return (
    <StyledWrapper>
      <GlobalStyle />
      {!loading && <Panel invitePeerId={invitePeerId} />}
    </StyledWrapper>
  );
}

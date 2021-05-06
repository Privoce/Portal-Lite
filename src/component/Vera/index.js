import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './Panel';
import Widget from './Widget';
import ChatBox from './Chat';

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
  line-height: 1;
`;
const GlobalStyle = createGlobalStyle`
  ol, ul {
    list-style: none;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  :root {
      --vera-widget-bg-color: #000;
      --vera-panel-bg-color: rgba(50, 54, 57,90%);
      --vera-camera-bg-color: #5f6368;
      --vera-button-bg-color: #000;
      --vera-font-color: #fff;
      --vera-border-radius: 5px;
      --vera-box-border-radius: 50%;
    }
`;
export default function Vera() {
  const [channelId, setChannelId] = useState(undefined);
  const [invitePeerId, setInvitePeerId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const openPanel = () => {
    setVisible(true);
  };
  const closePanel = () => {
    setVisible(false);
  };
  const specifyChannelId = (id) => {
    setChannelId(id);
  };
  useEffect(() => {
    const getPvid = () => {
      chrome.storage.sync.get(['pvid'], (res) => {
        // Notify that we saved.
        const { pvid = null } = res;
        console.log('pvid from storage', pvid);
        if (pvid) {
          // 立即删掉，防止下次访问依然存在
          chrome.storage.sync.remove('pvid', () => {
            console.log('pvid removed');
          });
          setInvitePeerId(pvid);
          setVisible(true);
        }
        setLoading(false);
      });
    };
    // 显示的时候 再执行
    getPvid();
  }, []);
  // if (!visible) return null;
  return (
    <StyledWrapper id="VERA_FULLSCREEN_CONTAINER">
      <GlobalStyle />
      {!loading && <Widget openPanel={openPanel} />}
      {!loading && visible && (
        <Panel
          closePanel={closePanel}
          invitePeerId={invitePeerId}
          updateChannelId={specifyChannelId}
        />
      )}
      {!loading && visible && <ChatBox channelId={channelId} />}
    </StyledWrapper>
  );
}

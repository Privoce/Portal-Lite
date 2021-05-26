import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './Panel';
import Widget from './Widget';
import ChatBox from './Chat';
import useRoom from './hooks/useRoom';

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
      --vera-panel-bg-color: rgba(250,250,250,.8);
      --vera-panel-border-radius: 20px;
      --vera-button-bg-color: #7B5EA8;
      --vera-button-font-color: #fff;
      --vera-layout-bg-color: #5D6063;
      --vera-hr-bg-color:#DEE1E6;
      --vera-font-color: #464646;
      --vera-camera-bg-color: #fff;
      --vera-border-radius: 5px;
    }
  .vera-dark-theme{
    --vera-widget-bg-color: #000;
    --vera-panel-bg-color: rgba(51,51,51,.8);
    --vera-panel-border-radius: 20px;
    --vera-button-bg-color: #FFBD2E;
    --vera-button-font-color: #000;
    --vera-layout-bg-color: #fff;
    --vera-hr-bg-color:#DEE1E6;
    --vera-camera-bg-color: #5D6063;
    --vera-font-color: #fff;
    --vera-border-radius: 5px;
  }

`;
export default function Vera() {
  const { setRoom, appendMember, updateRoomActive, data, loading } = useRoom();
  const [chatVisible, setChatVisible] = useState(false);
  // room id
  const [fetchRoomId, setFetchRoomId] = useState(true);
  const [visible, setVisible] = useState(false);
  const openPanel = () => {
    setVisible(true);
  };
  const closePanel = () => {
    setVisible(false);
  };
  const toggleChatVisible = () => {
    setChatVisible((prev) => !prev);
  };
  useEffect(() => {
    const getRoomId = () => {
      chrome.storage.sync.get(['room_id'], (res) => {
        // Notify that we saved.
        const { room_id = null } = res;
        console.log('room_id from storage', room_id);
        if (room_id) {
          // 立即删掉，防止下次访问依然存在
          chrome.storage.sync.remove('room_id', () => {
            console.log('room_id removed');
          });
          setRoom(room_id);
          setVisible(true);
        }
        setFetchRoomId(false);
      });
    };
    // 显示的时候 再执行
    getRoomId();
  }, []);
  // if (!visible) return null;
  console.log('sub data', data);
  if (fetchRoomId || loading) return null;
  const { id, active, connect_id } = data || {};
  return (
    <StyledWrapper id="VERA_FULLSCREEN_CONTAINER">
      <GlobalStyle />
      {<Widget openPanel={openPanel} />}
      {visible && data && (
        <Panel
          updateRoomActive={updateRoomActive}
          appendMember={appendMember}
          closePanel={closePanel}
          roomId={id}
          peerId={active ? null : connect_id}
          invitePeerId={active ? connect_id : null}
          chatVisible={chatVisible}
          toggleChatVisible={toggleChatVisible}
        />
      )}
      {visible && id && (
        <ChatBox channelId={id} visible={chatVisible} toggleVisible={toggleChatVisible} />
      )}
    </StyledWrapper>
  );
}

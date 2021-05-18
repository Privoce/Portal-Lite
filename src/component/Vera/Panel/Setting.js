import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUser } from '../hooks/utils';
import IconSetting from '../icons/Setting';
import IconFeedback from '../icons/Feedback';
import IconSun from '../icons/Sun';
import IconMoon from '../icons/Moon';
import IconLogout from '../icons/Logout';
const StyledWrapper = styled.div`
  position: absolute;
  right: 13px;
  bottom: 13px;
  .icon {
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    > svg {
      width: 100%;
      height: 100%;
    }
  }
  .list {
    position: absolute;
    left: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    white-space: nowrap;
    padding: 4px 10px;
    border-radius: 5px;
    background-color: var(--vera-panel-bg-color);
    color: var(--vera-font-color);
    .item {
      cursor: pointer;
      padding: 6px 0;
      font-size: 12px;
      display: flex;
      align-items: center;
      a {
        color: inherit;
        text-decoration: none;
      }
      svg {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
    }
  }
`;
export default function Setting() {
  const [logined, setLogined] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggleList = () => {
    setExpanded((prev) => !prev);
  };
  const toggleThemeMode = () => {
    setDark((prev) => !prev);
    setExpanded(false);
  };
  const handleLogout = () => {
    chrome.storage.sync.remove('user', () => {
      console.log('user removed');
    });
    setExpanded(false);
  };
  useEffect(() => {
    let PANEL = document.querySelector('#PORTAL_VERA_PANEL');
    if (dark) {
      PANEL.classList.add('vera-dark-theme');
    } else {
      PANEL.classList.remove('vera-dark-theme');
    }
  }, [dark]);
  useEffect(() => {
    const checkLogin = async () => {
      let user = await getUser();
      setLogined(!!user);
    };
    if (expanded) {
      checkLogin();
    }
  }, [expanded]);
  return (
    <StyledWrapper className="setting">
      <div className="icon" onClick={toggleList}>
        <IconSetting />
      </div>
      {expanded && (
        <ul className="list">
          <li className="item fb">
            <IconFeedback />
            <a
              href="https://www.surveymonkey.com/r/RMGZDW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us your feedback
            </a>
          </li>
          {logined && (
            <li className="item logout" onClick={handleLogout}>
              <IconLogout />
              Log out
            </li>
          )}
          <li className="item mode" onClick={toggleThemeMode}>
            {dark ? <IconSun /> : <IconMoon />}
            {dark ? 'Light' : 'Dark'} Mode
          </li>
        </ul>
      )}
    </StyledWrapper>
  );
}

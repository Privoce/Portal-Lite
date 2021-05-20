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
export default function Setting({ logoutVisible }) {
  const [logined, setLogined] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const initDarkMode = () => {
      let initIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      chrome.storage.local.get(['DARK_MODE'], (result) => {
        if (typeof result.DARK_MODE !== undefined) {
          console.log('dark mode', result.DARK_MODE);
          initIsDark = result.DARK_MODE;
        }
        setDark(initIsDark);
      });
    };
    initDarkMode();
  }, []);
  useEffect(() => {
    let PANEL = document.querySelector('#PORTAL_VERA_PANEL');
    if (dark) {
      PANEL.classList.add('vera-dark-theme');
    } else {
      PANEL.classList.remove('vera-dark-theme');
    }
  }, [dark]);
  useEffect(() => {
    const handleMouseUp = (evt) => {
      let { target } = evt;
      let { settingClickable = false } = target.dataset;
      let tags = ['svg', 'path'];
      if (!tags.includes(target.tagName) && !settingClickable) {
        setExpanded(false);
      }
      console.log({ target, settingClickable });
    };

    if (expanded) {
      document.addEventListener('mouseup', handleMouseUp, false);
    } else {
      document.removeEventListener('mouseup', handleMouseUp, false);
    }
  }, [expanded]);
  const toggleList = () => {
    setExpanded((prev) => !prev);
  };
  const toggleThemeMode = () => {
    chrome.storage.local.set({ DARK_MODE: !dark });
    setDark((prev) => !prev);
  };
  const handleLogout = () => {
    chrome.storage.sync.remove('user', () => {
      console.log('user removed');
    });
    setExpanded(false);
  };
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
      <div data-setting-clickable={true} className="icon" onClick={toggleList}>
        <IconSetting />
      </div>
      {expanded && (
        <ul data-setting-clickable={true} className="list">
          <li data-setting-clickable={true} className="item fb">
            <IconFeedback />
            <a
              href="https://www.surveymonkey.com/r/RMGZDW8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us your feedback
            </a>
          </li>
          {logoutVisible && logined && (
            <li data-setting-clickable={true} className="item logout" onClick={handleLogout}>
              <IconLogout />
              Log out
            </li>
          )}
          <li data-setting-clickable={true} className="item mode" onClick={toggleThemeMode}>
            {dark ? <IconSun /> : <IconMoon />}
            {dark ? 'Light' : 'Dark'} Mode
          </li>
        </ul>
      )}
    </StyledWrapper>
  );
}

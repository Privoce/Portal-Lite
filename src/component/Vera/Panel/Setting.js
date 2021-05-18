import { useState } from 'react';
import styled from 'styled-components';
import IconSetting from '../icons/Setting';
import IconFeedback from '../icons/Feedback';
import IconMode from '../icons/Mode';
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
    background-color: #5d6063;
    color: #fff;
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
        margin-right: 6px;
      }
    }
  }
`;
export default function Setting() {
  const [expanded, setExpanded] = useState(false);
  const toggleList = () => {
    setExpanded((prev) => !prev);
  };
  const handleLogout = () => {
    chrome.storage.sync.remove('user', () => {
      console.log('user removed');
    });
    toggleList();
  };
  return (
    <StyledWrapper>
      <div className="icon" onClick={toggleList}>
        <IconSetting />
      </div>
      {expanded && (
        <ul className="list" onClick={toggleList}>
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
          <li className="item logout" onClick={handleLogout}>
            <IconLogout />
            Log out
          </li>
          <li className="item mode">
            <IconMode />
            Light Mode
          </li>
        </ul>
      )}
    </StyledWrapper>
  );
}

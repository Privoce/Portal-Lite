import { useEffect, useState } from 'react';
// import { RiRefreshLine } from 'react-icons/ri';
import { useWidgetSettings } from '../../hooks';
// import { formatDistanceToNowStrict } from 'date-fns';
import styled from 'styled-components';
import { useAuthing } from '@authing/react-ui-components';
import { appId, appHost } from '../../InitialConfig';
import DownloadExt from '../../component/DownloadExtension';

import StyledWrapper from './styled';
import HistoryItem from './HistoryItem';
import useHistory from './useHistory';
const StyledTip = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.18rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function VeraHistory({ data, name, lang, readonly }) {
  const { authClient } = useAuthing({
    appId,
    appHost
  });
  const [extInstalled, setExtInstalled] = useState(undefined);
  const [checkingLogin, setCheckingLogin] = useState(true);
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  let localItems = getWidgetSetting({ name });
  const { data: list, error, loading, username, setUsername } = useHistory(localItems);
  console.log({ list });
  useEffect(() => {
    if (process.env.REACT_APP_CHROME_EXT == 'true') {
      chrome.storage.local.get(['installed'], function (result) {
        let tmp = result.installed || false;
        setExtInstalled(tmp);
      });
    } else {
      window.onload = () => {
        let webpageCheck = !!document.documentElement.getAttribute('ext-portal');
        setExtInstalled(webpageCheck);
      };
    }
    return () => {
      window.onlaod = null;
    };
  }, []);
  useEffect(() => {
    const initLoginStatus = async () => {
      let user = await authClient.getCurrentUser();
      setCheckingLogin(false);
      if (user) {
        setUsername(user.username);
      }
    };
    if (!readonly) {
      initLoginStatus();
    }
  }, [authClient, readonly]);
  useEffect(() => {
    if (!readonly) {
      updateWidgetSetting({ name, data: list });
    }
  }, [list, readonly]);
  if (typeof extInstalled == 'undefined') return <StyledTip>Checking Extension</StyledTip>;
  if (!extInstalled) return <DownloadExt page={false}></DownloadExt>;
  if (!username && !checkingLogin && !readonly) return <StyledTip>Login first</StyledTip>;
  if (loading && !readonly) return <StyledTip>{lang.fetching}</StyledTip>;
  if (error) return <StyledTip>error</StyledTip>;
  const items = readonly ? data.local : list;
  console.log({ items, localItems });
  return (
    <>
      <StyledWrapper>
        {items ? (
          <ul className="list">
            {items.map((item) => {
              return <HistoryItem key={item.peer} data={item} />;
            })}
          </ul>
        ) : (
          <StyledTip>Empty</StyledTip>
        )}
      </StyledWrapper>
    </>
  );
}

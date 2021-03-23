import { useEffect, useState } from 'react';
// import { RiRefreshLine } from 'react-icons/ri';
// import { useWidgetSettings } from '../../hooks';
// import { formatDistanceToNowStrict } from 'date-fns';
import styled from 'styled-components';
import { useAuthing } from '@authing/react-ui-components';
import { appId } from '../../InitialConfig';

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
export default function VeraHistory({ lang }) {
  const { authClient } = useAuthing({ appId });
  const [checkingLogin, setCheckingLogin] = useState(true);
  // const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const { data: list, error, loading, username, setUsername } = useHistory();
  console.log({ list });
  useEffect(() => {
    const initLoginStatus = async () => {
      let user = await authClient.getCurrentUser();
      setCheckingLogin(false);
      if (user) {
        setUsername(user.username);
      }
    };
    initLoginStatus();
  }, [authClient]);
  if (!username && !checkingLogin) return <StyledTip>Login first</StyledTip>;
  if (error) return <StyledTip>error</StyledTip>;
  return (
    <>
      <StyledWrapper>
        {loading ? (
          <div className="loading">{lang.fetching}</div>
        ) : list ? (
          <ul className="list">
            {list.map((item) => {
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

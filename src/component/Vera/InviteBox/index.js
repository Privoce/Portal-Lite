import { useState, useEffect } from 'react';
import StyledBox from './styled';
import Button from '../Button';
import Loading from '../Loading';
import InviteList from './InviteList';
import LoginArea from './LoginArea';
import useCopy from '../hooks/useCopy';
import { selectText } from '../hooks/utils';

import useUsername from '../hooks/useUsername';
const copyTxt = chrome.i18n.getMessage('copy');
const copiedTxt = chrome.i18n.getMessage('copied');

export default function InviteBox({ peerId = '' }) {
  const [inviteUrl, setInviteUrl] = useState('');
  const { username } = useUsername();
  const { copied, copy } = useCopy();
  useEffect(() => {
    if (peerId) {
      let obj = new URL(location.href);
      obj.searchParams.append('portal-vera-id', peerId);
      //  if (PORTAL_USER_NAME) {
      //    obj.searchParams.append(userKey, PORTAL_USER_NAME);
      //  }
      const url = `https://nicegoodthings.com/transfer/${encodeURIComponent(obj.href)}?extid=${
        chrome.runtime.id
      }`;
      setInviteUrl(url);
    }
  }, [peerId]);
  const handleLinkClick = ({ target }) => {
    selectText(target);
  };
  const handleCopyClick = () => {
    unlocker.enable();
    copy(inviteUrl);
    unlocker.disable();
  };
  if (!inviteUrl) return <Loading />;

  return (
    <StyledBox>
      <div className="link">
        <span className="url" onClick={handleLinkClick}>
          {inviteUrl}
        </span>
        <Button className="blue" onClick={handleCopyClick}>
          {copied ? copiedTxt : copyTxt}
        </Button>
      </div>
      {username ? <InviteList username={username} link={inviteUrl} /> : <LoginArea />}
    </StyledBox>
  );
}

import { useState, useEffect } from 'react';
import StyledBox from './styled';
import Button from '../Button';
import Loading from '../Loading';
import InviteList from './InviteList';
import useCopy from '../hooks/useCopy';
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
  if (!inviteUrl) return <Loading />;

  return (
    <StyledBox>
      <div className="link">
        <span className="url" contentEditable>
          {inviteUrl}
        </span>
        <Button className="btn copy" onClick={copy.bind(null, inviteUrl)}>
          {copied ? copiedTxt : copyTxt}
        </Button>
      </div>
      <InviteList username={username} link={inviteUrl} />
    </StyledBox>
  );
}

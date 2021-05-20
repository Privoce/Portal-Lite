import { useState, useEffect } from 'react';
import StyledBox from './styled';
import IconCopied from '../icons/Copied';
import IconCopy from '../icons/Copy';
import Loading from '../Loading';
import InviteList from './InviteList';
import LoginArea from './LoginArea';
import useCopy from '../hooks/useCopy';
import { selectText, getInviteUrl } from '../hooks/utils';

import useUsername from '../hooks/useUsername';

export default function InviteBox({ peerId = '', float = false }) {
  const [inviteUrl, setInviteUrl] = useState('');
  const { username, fake } = useUsername();
  const { copied, copy } = useCopy();
  useEffect(() => {
    if (peerId) {
      setInviteUrl(getInviteUrl(peerId));
    }
  }, [peerId]);
  const handleLinkClick = ({ target }) => {
    selectText(target);
  };
  const handleCopyClick = () => {
    copy(inviteUrl);
  };
  if (!inviteUrl) return <Loading />;

  return (
    <StyledBox className={float ? 'float' : ''}>
      <h3 className="title">Invite</h3>
      <div className="link">
        <span className="url" onClick={handleLinkClick}>
          {inviteUrl}
        </span>
        <div className="copy" onClick={handleCopyClick}>
          {copied ? <IconCopied /> : <IconCopy />}
        </div>
      </div>
      {!fake && username ? <InviteList username={username} link={inviteUrl} /> : <LoginArea />}
    </StyledBox>
  );
}

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import Loading from '../Loading';

import Button from '../Button';
const inviteTxt = chrome.i18n.getMessage('invite');
const invitingTxt = chrome.i18n.getMessage('inviting');
const failTxt = chrome.i18n.getMessage('fail');
const successTxt = chrome.i18n.getMessage('success');
// const invitedTxt = chrome.i18n.getMessage('invited');
const StyledList = styled.ul`
  height: fit-content;
  max-height: 9.5em;
  overflow: scroll;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  background-color: var(--vera-panel-bg-color);
  padding: 0.6em 0.4em;
  border-radius: var(--vera-border-radius);
  color: var(--vera-font-color);
  &::-webkit-scrollbar {
    display: none;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      padding-bottom: 0.4em;
      border-bottom: 1px dashed #333;
    }
    .avator {
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }
    .name {
      color: inherit;
      font-size: 1em;
    }
  }
`;
const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((resp) => resp.data);

const PUSH_API =
  'https://api.pushy.me/push?api_key=f827c5a08c5cc9dc01d697ba652d02ae30e090242f396561e3ed059642ec6d58';
const pushNotify = async (host, id, url) => {
  if (!id) return { success: false };
  // TODO[eric]: put apikey here fornow, should move to a private place when in production
  // add custom icon
  const resp = await fetch(PUSH_API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      to: [id],
      data: {
        message: `${host} invites you to vera!`,
        url
      },
      time_to_live: 2000
    })
  });

  return resp.json();
};

export default function InviteList({ link = '', username = '' }) {
  // const { copied, copy } = useCopy();
  const { data, error, loading } = useSWR(
    username
      ? `https://api.yangerxiao.com/service/authing/vera/${encodeURIComponent(username)}/userlist`
      : null,
    fetcher
  );
  const [userStatus, setUserStatus] = useState([]);

  useEffect(() => {}, [username]);
  useEffect(() => {
    data && setUserStatus(data.map(() => inviteTxt));
  }, [data]);

  // using a temp array is not the best solution ...
  const handleInvite = async (idx, finalName, id, url) => {
    const temp = [...userStatus];
    temp[idx] = invitingTxt;
    setUserStatus(temp);

    // should only use one...
    // pushy notification
    const result = await pushNotify('fixed', id, url);
    // ws notification
    chrome.runtime.sendMessage({
      action: 'SEND_NOTIFY',
      finalName,
      url
    });

    if (result.success) {
      const temp = [...userStatus];
      temp[idx] = successTxt;
      setUserStatus(temp);
    } else {
      // if invite fail, we should also use copy later
      const temp = [...userStatus];
      temp[idx] = failTxt;
      setUserStatus(userStatus);
    }
    setTimeout(() => {
      const temp = [...userStatus];
      temp[idx] = inviteTxt;
      setUserStatus(temp);
    }, 1500);
  };

  // loading
  if (loading) return <Loading size={90} />;
  if (error) return 'error';
  if (!data) return 'No Contacts';
  return (
    <StyledList>
      {data.map((user, idx) => {
        const { username, name, nickname, photo, tracerId } = user;
        const finalName = username || name || nickname;
        return (
          <li key={`${finalName}-${idx}-${userStatus[idx]}`} className="user">
            <img src={photo} alt="avator" className="avator" />
            <span className="name">{finalName}</span>
            <Button onClick={() => handleInvite(idx, finalName, tracerId, link)}>
              {userStatus[idx]}
            </Button>
          </li>
        );
      })}
    </StyledList>
  );
}

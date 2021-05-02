import { useEffect } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import useCopy from '../hooks/useCopy';

import Button from '../Button';
const inviteTxt = chrome.i18n.getMessage('invite');
const invitedTxt = chrome.i18n.getMessage('invited');
const StyledList = styled.ul`
  height: fit-content;
  overflow: scroll;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #1f1f1f;
  padding: 6px 4px;
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
      padding-bottom: 4px;
      border-bottom: 1px dashed #333;
    }
    .avator {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
    .name {
      color: inherit;
      font-size: 10px;
    }
  }
`;
const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((resp) => resp.data);
export default function InviteList({ link = '', username = '' }) {
  const { copied, copy } = useCopy();
  const { data, error } = useSWR(
    username
      ? `https://api.yangerxiao.com/service/authing/vera/${encodeURIComponent(username)}/userlist`
      : null,
    fetcher
  );
  useEffect(() => {}, [username]);
  const handleCopy = ({ target }) => {
    console.log('copy invite link');
    if (copied) return;
    target.innerText = invitedTxt;
    copy(link);
    console.log('copied invite link');
    setTimeout(() => {
      target.innerText = inviteTxt;
    }, 1500);
  };
  // loading
  if (!data) return null;
  if (error) return 'error';
  if (data)
    return (
      <StyledList>
        {data.map((user) => {
          const { username, name, nickname, photo } = user;
          const finalName = username || name || nickname;
          return (
            <li key={user.finalName} className="user">
              <img src={photo} alt="avator" className="avator" />
              <span className="name">{finalName}</span>

              <Button onClick={handleCopy}>{inviteTxt}</Button>
            </li>
          );
        })}
      </StyledList>
    );
}

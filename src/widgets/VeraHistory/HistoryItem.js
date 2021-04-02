// import { useState } from 'react';
// import { format } from 'timeago.js';
import { format } from 'date-fns';
import styled from 'styled-components';
import { IoIosMic } from 'react-icons/io';
const StyledItem = styled.li`
  font-size: 0.16rem;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.15rem;
  height: 100%;
  width: 100%;

  padding: 0.15rem 0.1rem;
  margin-bottom: 0.15rem;
  position: relative;
  display: flex;
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    .title {
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 0.2rem;
      font-weight: 800;
      margin-bottom: 0.08rem;
    }
    .link {
      text-decoration: underline;
      font-size: 0.14rem;
      color: #666;
      line-height: 1.5;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .time {
      margin: 0.14rem 0;
      font-size: 0.1rem;
    }
    .participants {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 0.14rem;
      color: #999;
      height: 1rem;
      overflow-y: scroll;
      .user {
        display: flex;
        align-items: center;
        padding: 0.05rem;
        border-radius: 2px;
        border: 1px solid #eee;
        &:not(:last-child) {
          margin-bottom: 0.08rem;
        }
        /* &:first-child {
          padding-left: 0;
        } */
      }
    }
    .btn {
      background: #606368;
      color: #fff;
      padding: 0.1rem 0.15rem;
    }
  }
`;

export default function HistoryItem({ data = {} }) {
  const { peerId, title, url, timestamp, host, username, participants = [] } = data;
  return (
    <StyledItem id={timestamp}>
      <article className="content" data-peer={peerId}>
        <h2 className="title">{title}</h2>
        <a className="link" href={url} target="_blank">
          {url}
        </a>
        <time className="time">{format(new Date(timestamp), 'PPp')}</time>
        <div className="participants">
          {[...new Set([host, username, ...participants])].map((p, idx) => {
            return (
              <span className="user" key={p}>
                {idx === 0 && <IoIosMic />}
                {p}
              </span>
            );
          })}
        </div>
        <button className="btn">Meet Again</button>
      </article>
    </StyledItem>
  );
}

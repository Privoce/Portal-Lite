// import { useState } from 'react';
// import { format } from 'timeago.js';
import { format } from 'date-fns';
import styled from 'styled-components';
import { IoIosMic } from 'react-icons/io';
const StyledEvent = styled.li`
  font-size: 0.16rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  width: 99%;

  padding: 0.15rem 0.1rem;
  margin-bottom: 0.15rem;
  position: relative;
  border-left: 0.14rem solid rgb(92, 70, 227);
  display: flex;
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    .title {
      font-size: 0.2rem;
      font-weight: 800;
      margin-bottom: 0.08rem;
    }
    .link {
      text-decoration: underline;
      font-size: 0.14rem;
      color: #666;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-all;
    }
    .participants {
      display: flex;
      font-size: 0.14rem;
      color: #999;
      padding-top: 0.1rem;
      .user {
        display: flex;
        align-items: center;
        padding: 0.05rem;
        border-radius: 2px;
        border: 1px solid #eee;
        &:not(:last-child) {
          margin-right: 5px;
        }
        /* &:first-child {
          padding-left: 0;
        } */
      }
    }
    .time {
      position: absolute;
      top: 0;
      right: 0;
    }
    > .opts {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      visibility: hidden;
      .opt {
        padding: 0;
        width: 0.2rem;
        height: 0.2rem;
        &:not(:last-child) {
          margin-right: 0.1rem;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        &.link svg {
          fill: ${({ themeColor }) => themeColor};
        }
      }
    }
  }
`;

export default function HistoryItem({ data = {} }) {
  const { peer, title, url, timestamp, participants } = data;
  return (
    <StyledEvent id={`${peer}`}>
      <article className="content">
        <time className="time">{format(new Date(timestamp), 'PPp')}</time>
        <h2 className="title">{title}</h2>
        <a className="link" href={url} target="_blank">
          {url}
        </a>
        <div className="participants">
          {participants.map((p, idx) => {
            return (
              <span className="user" key={p}>
                {idx === 0 && <IoIosMic />}
                {p}
              </span>
            );
          })}
        </div>
      </article>
    </StyledEvent>
  );
}

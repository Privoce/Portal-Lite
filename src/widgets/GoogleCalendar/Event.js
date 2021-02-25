// import React from 'react'
// import { format } from 'timeago.js';
import { format, isToday } from 'date-fns';
import styled from 'styled-components';
import Linkify from 'linkifyjs/react';
import IconLocation from './IconLocation';
const StyledEvent = styled.li`
  font-size: 0.16rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  width: 99%;

  padding: 0.2rem 0.12rem;
  margin-bottom: 0.15rem;
  position: relative;
  &.today {
    color: #fff;
    background-color: #5c46e3;
    .link .content .desc {
      color: #eee;
    }
  }
  .link {
    display: flex;
    width: 100%;
    height: 100%;
    color: inherit;
    .time_span {
      display: flex;
      flex-direction: column;
      margin-right: 0.2rem;
      white-space: nowrap;
      /* color: #eee; */
      .start {
        margin-bottom: 0.1rem;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 0.2rem;
        font-weight: 800;
        margin-bottom: 0.08rem;
      }
      .desc {
        font-size: 0.12rem;
        color: #999;
        line-height: 1.5;
        a {
          color: #eee;
          text-decoration: underline;
        }
      }
    }
  }
  .aside {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .atts {
      display: flex;
      .att {
        padding: 0.05rem;
      }
    }
    .location {
      padding: 0.05rem;
    }
  }
`;
const mock = {
  start: '2021-02-24T14:00:00+08:00',
  end: '2021-02-24T15:00:00+08:00',
  summary: '\u6d4b\u8bd5',
  htmlLink:
    'https://www.google.com/calendar/event?eid=NTg1a21uNHBzOTBxYXU5ZWZpa3NwZmozZWIgeWFuZ2djODg4QG0'
};
const getText = (htmlText) => {
  let linkStrs = [];
  let p = document.createElement('p');
  p.innerHTML = htmlText;
  [...p.querySelectorAll('a')].forEach((node) => {
    linkStrs.push(node.innerText);
  });
  let tmpText = p.innerText;
  console.log({ tmpText });
  console.log({ linkStrs });
  linkStrs.forEach((str) => {
    tmpText = tmpText.replace(str, `${str} `);
  });
  console.log('after:', tmpText);
  return tmpText;
};
export default function Event({ data = mock }) {
  const { summary, start, end, htmlLink, description, location, attachments = [] } = data;
  return (
    <StyledEvent className={isToday(new Date(start)) && 'today'}>
      <a className="link" href={htmlLink} target="_blank" rel="noopener noreferrer">
        <div className="time_span">
          <span className="start">{format(new Date(start), 'p')}</span>
          <span className="end">{format(new Date(end), 'p')}</span>
        </div>
        <article className="content">
          <h2 className="title">{summary}</h2>
          {description && (
            <div className="desc">
              <Linkify options={{ ignoreTags: ['a'] }}>{getText(description)}</Linkify>
            </div>
          )}
        </article>
      </a>
      <div className="aside">
        {/* {attachments && ( */}
        <ul className="atts">
          {attachments.map((att) => {
            const { fileId, fileUrl, title, iconLink } = att;
            return (
              <li className="att" key={fileId}>
                <a href={fileUrl} title={title} target="_blank" rel="noopener noreferrer">
                  <img src={iconLink} alt="file icon" />
                </a>
              </li>
            );
          })}
        </ul>
        {/* )} */}
        <div className="location">
          {location && (
            <a
              title={location}
              href={`https://www.google.com/maps?q=${location}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLocation />
            </a>
          )}
        </div>
      </div>
    </StyledEvent>
  );
}

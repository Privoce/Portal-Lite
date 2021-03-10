import { useState } from 'react';
// import { format } from 'timeago.js';
import { format } from 'date-fns';
import styled, { keyframes } from 'styled-components';
import Linkify from 'linkifyjs/react';
import { AiOutlineLink, AiOutlineDelete } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
const AniFading = keyframes`
  from {
    opacity:1;
  }
  to {
    opacity:0;
  }
`;
const StyledEvent = styled.li`
  font-size: 0.16rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.05rem;
  width: 99%;

  padding: 0.2rem 0.12rem;
  margin-bottom: 0.15rem;
  position: relative;
  border-left: 0.14rem solid ${({ themeColor }) => themeColor};
  display: flex;
  &.removing {
    animation: ${AniFading} 1s infinite alternate;
  }
  &.highlight {
    color: #fff;
    background-color: #5c46e3;
    .link .content .desc,
    .link .content .title {
      color: #eee;
    }
  }
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
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
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

    .aside {
      display: flex;
      margin-top: 0.12rem;
      > .block {
        display: flex;
        padding: 0.04rem 0.08rem 0.04rem 0;
        &:not(:last-child) {
          border-right: 1px solid #eee;
        }
        &:not(:first-child) {
          padding-left: 0.06rem;
        }
        &.atts {
          .att {
            .link {
              display: flex;
              .icon {
                width: 0.2rem;
                height: 0.2rem;
              }
            }
            &:not(:last-child) {
              margin-right: 0.08rem;
            }
          }
        }
        &.location {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  &:hover .content > .opts {
    visibility: visible;
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
export default function Event({ readonly, highlight = false, deleteEvent, data = mock }) {
  const [removing, setRemoving] = useState(false);
  const {
    id,
    calendarId,
    isAllDay,
    readOnly = true,
    backgroundColor,
    summary,
    start,
    end,
    htmlLink,
    description,
    location,
    attachments = []
  } = data;
  const asideVisible = attachments.length || location;
  const handleEventDelete = async ({ currentTarget }) => {
    const { eid, cid } = currentTarget.dataset;
    if (confirm('Are you sure to remove this event?')) {
      setRemoving(true);
      let { success, msg } = await deleteEvent({ eid, cid });
      if (!success) {
        alert(msg);
      }
      setRemoving(false);
    }
  };
  return (
    <StyledEvent
      id={`e-${id}`}
      themeColor={backgroundColor}
      className={`${removing ? 'removing' : ''} ${
        (new Date(start) - new Date() <= 0 || highlight) && 'highlight'
      }`}
    >
      {!isAllDay && (
        <div className="time_span">
          <span className="start">{format(new Date(start), 'p')}</span>
          <span className="end">{format(new Date(end), 'p')}</span>
        </div>
      )}
      <article className="content">
        {!readonly && (
          <div className="opts">
            {/* TO DO: 3D transform */}
            {!readOnly && (
              <button
                disabled={removing}
                onClick={handleEventDelete}
                className="opt delete"
                data-eid={id}
                data-cid={calendarId}
              >
                <AiOutlineDelete color="#fe6b23" />
              </button>
            )}
            <a
              href={htmlLink}
              title="Jump to event detail"
              target="_blank"
              rel="noopener noreferrer"
              className="opt link"
            >
              <AiOutlineLink />
            </a>
          </div>
        )}
        <h2 className="title">{summary}</h2>
        {description && (
          <div className="desc">
            <Linkify options={{ ignoreTags: ['a'] }}>{getText(description)}</Linkify>
          </div>
        )}
        {asideVisible && (
          <div className="aside">
            {/* {attachments && ( */}
            <div className="block atts">
              {attachments.map((att) => {
                const { fileId, fileUrl, title, iconLink } = att;
                return (
                  <span className="att" key={fileId}>
                    <a
                      className="link"
                      href={fileUrl}
                      title={title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="icon" src={iconLink} alt="file icon" />
                    </a>
                  </span>
                );
              })}
            </div>
            {/* )} */}
            {location && (
              <div className="block location">
                <a
                  title={location}
                  href={`https://www.google.com/maps?q=${location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrLocation />
                </a>
              </div>
            )}
          </div>
        )}
      </article>
    </StyledEvent>
  );
}

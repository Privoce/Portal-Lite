import { useState } from 'react';
import styled from 'styled-components';
import Loading from '../Common/Loading';
import IconClose from '../Common/Icons/Close';
import useData from '../Common/hooks/useData';

const StyledWrapper = styled.section`
  height: 100%;
  padding: 0.1rem 0.15rem;
  position: relative;
  overflow: hidden;
  > .title {
    font-weight: 800;
    font-size: 0.3rem;
    color: #555;
    position: relative;
    top: 0;
    padding: 0.1rem 0 0.2rem 0.2rem;
    margin-left: 0.4rem;
    z-index: 3;
    &:before {
      position: absolute;
      left: -0.3rem;
      top: 40%;
      transform: translateY(-50%);
      content: '今';
      font-size: 0.2rem;
      /* width:.2rem;
      height:.2rem; */
      padding: 0.1rem;
      border-radius: 50%;
      background-color: #f26e5f;
      color: #fff;
    }
  }
  .list {
    z-index: 2;
    height: 100%;
    overflow: scroll;
    overflow: overlay;
    .item {
      cursor: pointer;
      margin-bottom: 0.02rem;
      position: relative;
      font-size: 0.16rem;
      padding: 0.1rem 0.04rem 0.1rem 0.12rem;
      display: flex;
      justify-content: space-between;

      &:hover {
        background-color: #f26e5f;
        .date {
          color: #eee;
        }
        .txt {
          color: #fff;
          transform: translateX(5px);
        }
      }
      .txt {
        white-space: nowrap;
        /* padding-right: 0.2rem; */
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.5s;
      }
      .date {
        color: #666;
        font-size: 0.12rem;
        padding-left: 0.2rem;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: '';
        background-color: #f26e5f;
        width: 0.05rem;
        height: 60%;
        opacity: 0.8;
      }
    }
  }
  .details {
    z-index: 8;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 0.14rem;
    background: #fff;
    padding: 0.12rem;
    overflow: scroll;
    overflow: overlay;
    overscroll-behavior: contain;
    article {
      > .title {
        font-size: 0.22rem;
        font-weight: 800;
        padding: 0.2rem 0 0.15rem 0;
        text-align: center;
      }
      > p {
        line-height: 1.4;
        margin-bottom: 0.12rem;
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      right: 0.1rem;
      bottom: 0.1rem;
    }
  }
`;
const getCNDate = (year = false) => {
  let tmp = new Date();
  let dateStr = `${tmp.getMonth() + 1}月${tmp.getDate()}日`;
  if (year) {
    dateStr = `${tmp.getFullYear()}年${dateStr}`;
  }
  return dateStr;
};
export default function TodayInHistory() {
  const [details, setDetails] = useState(null);
  const { data: events, loading, error } = useData(
    `${process.env.REACT_APP_SERVICE_DOMAIN}/service/history/today`
  );
  const handleEventClick = ({ link, detail }) => {
    if (detail) {
      const { title, content } = detail;
      setDetails({ link, title, content });
    }
  };
  const handleCloseDetails = () => {
    setDetails(null);
  };
  if (loading) return <Loading />;
  // 抛错
  if (error) {
    throw new Error(error);
  }
  return (
    <StyledWrapper>
      <h2 className="title">{getCNDate(true)}</h2>
      <ul className="list">
        {events.map((n) => {
          const { date, event, link, detail } = n;
          let removeStr = `${date}${getCNDate()}`;
          return (
            <li
              className="item"
              key={event}
              onClick={handleEventClick.bind(null, { detail, link })}
            >
              <span className="txt">{event.replace(removeStr, '')}</span>
              <span className="date">{removeStr}</span>
            </li>
          );
        })}
      </ul>
      {details && (
        <aside className="details">
          <article>
            <h3 className="title">{details.title}</h3>
            {details.content.map((p) => {
              return <p key={p}>{p}</p>;
            })}
            <a href={details.link} target="_blank" className="link">
              参考链接
            </a>
          </article>
          <IconClose className="close" onClick={handleCloseDetails} />
        </aside>
      )}
    </StyledWrapper>
  );
}

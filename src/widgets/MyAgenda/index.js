import { useRef } from 'react';
import { format } from 'date-fns';

import IconUpdate from '../Common/Icons/Update';
import GoAuth from '../Common/GoAuth';
import ErrorTip from '../Common/ErrorTip';
import StyledWrapper from './styled';
import useGoogleAuth from './useGoogleAuth';
import Event from './Event';
import AddEvent from './AddEvent';

export default function MyAgenda() {
  const listEle = useRef(null);
  const {
    auth,
    signedIn,
    loading,
    error,
    groupEvents,
    calendars,
    syncData,
    addEvent
  } = useGoogleAuth();
  // 去授权
  const getGoogleAuth = () => {
    auth.signIn();
  };
  const handleSyncData = () => {
    syncData();
  };
  const handleTodayClick = () => {
    let todayBlock = listEle.current.querySelector('.today');
    todayBlock?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  if (error) return <ErrorTip tip={error} bg="transparent" />;
  if (!signedIn)
    return <GoAuth txt={!auth && '初始化中...'} disabled={!auth} auth={getGoogleAuth} />;
  return (
    <StyledWrapper>
      <div className="topbar">
        <div className="today">
          <button disabled={loading} onClick={handleTodayClick} className="btn">
            Today
          </button>
          <span className="date">{format(new Date(), 'PPPP')}</span>
          <button disabled={loading} onClick={handleSyncData} className="update">
            <IconUpdate color={loading ? '#aaa' : '#5c4ddf'} bgColor="transparent" />
          </button>
          <AddEvent
            calendar={(calendars || []).find((c) => c.primary == true)}
            addEvent={addEvent}
          />
        </div>
        {/* <a className="link" href="http://baidu.com" target="_blank" rel="noopener noreferrer">
          link
        </a> */}
      </div>
      {loading ? (
        <div className="loading">正在获取日程数据，请耐心等候...</div>
      ) : (
        <ul className="list" ref={listEle}>
          {Object.entries(groupEvents).map(([dateKey, events]) => {
            return (
              <li className="item" key={dateKey}>
                <h3 className="title">{dateKey}</h3>
                <ul className="evts">
                  {events.map((evt) => {
                    return <Event key={evt.summary} data={evt} />;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
      {calendars && (
        <ul className="calendars">
          {calendars.map((c) => {
            const { summary, description, id, backgroundColor } = c;
            return (
              <li className="calendar" title={description} key={id}>
                <span className="sqr" style={{ background: backgroundColor }}></span>
                <span className="title">{summary}</span>
              </li>
            );
          })}
        </ul>
      )}
    </StyledWrapper>
  );
}

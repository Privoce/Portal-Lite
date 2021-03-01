import { useRef } from 'react';
import { format } from 'date-fns';

import IconUpdate from '../Common/Icons/Update';
import GoAuth from '../Common/GoAuth';
import ErrorTip from '../Common/ErrorTip';
import StyledWrapper from './styled';
import useGoogleAuth from './useGoogleAuth';
import Event from './Event';
import AddEvent from './AddEvent';
import Setting from './Setting';

export default function MyAgenda({ name }) {
  const listEle = useRef(null);
  const {
    auth,
    signedIn,
    loading,
    reloading,
    error,
    groupEvents,
    calendars,
    syncData,
    addEvent,
    removeEvent,
    updateCalendars
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
  if (!signedIn) return <GoAuth disabled={!auth} auth={getGoogleAuth} />;
  return (
    <>
      <Setting
        calendars={calendars}
        updateCalendars={updateCalendars}
        name={name}
        // addEvent={addEvent}
      />
      <StyledWrapper>
        <div className="topbar">
          <div className="today">
            <button disabled={loading} onClick={handleTodayClick} className="btn">
              Today
            </button>
            <span className="date">{format(new Date(), 'PPPP')}</span>
            <button disabled={loading} onClick={handleSyncData} className="update">
              <IconUpdate
                className={reloading ? 'reloading' : ''}
                color={loading ? '#aaa' : '#5c4ddf'}
                bgColor="transparent"
              />
            </button>
            <AddEvent calendar={calendars.find((c) => c.primary == true)} addEvent={addEvent} />
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
              if (events.length == 0) return null;
              return (
                <li className="item" key={dateKey}>
                  <h3 className="title">{dateKey}</h3>
                  <ul className="evts">
                    {events.map((evt) => {
                      return <Event key={evt.summary} data={evt} deleteEvent={removeEvent} />;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </StyledWrapper>
    </>
  );
}

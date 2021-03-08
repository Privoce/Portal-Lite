import { useRef } from 'react';
// import { format } from 'date-fns';

import IconUpdate from '../Common/Icons/Update';
import GoAuth from '../Common/GoAuth';
import ErrorTip from '../Common/ErrorTip';
import StyledWrapper from './styled';
import useGoogleAuth from './useGoogleAuth';
import useGoogleExtAuth from './useGoogleExtAuth';
import Event from './Event';
import AddEvent from './AddEvent';
import Setting from './Setting';
const googleAuthHook =
  process.env.REACT_APP_CHROME_EXT == 'true' ? useGoogleExtAuth : useGoogleAuth;
export default function MyAgenda({ name, lang }) {
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
  } = googleAuthHook();
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
              {lang.today}
            </button>
            <span className="date">{new Date().toLocaleDateString(lang.locale)}</span>
            <button disabled={loading} onClick={handleSyncData} className="update">
              <IconUpdate
                className={reloading ? 'reloading' : ''}
                color={loading ? '#aaa' : '#5c4ddf'}
                bgColor="transparent"
              />
            </button>
            <AddEvent
              lang={lang.addEvent}
              calendar={calendars.find((c) => c.primary == true)}
              addEvent={addEvent}
            />
          </div>
        </div>
        {loading ? (
          <div className="loading">{lang.fetching}</div>
        ) : (
          <ul className="list" ref={listEle}>
            {Object.entries(groupEvents)
              .sort(([a], [b]) => {
                return new Date(a) - new Date(b);
              })
              .map(([dateKey, events]) => {
                if (events.length == 0) return null;
                return (
                  <li className="item" key={dateKey}>
                    <h3 className="title">{new Date(dateKey).toLocaleDateString(lang.locale)}</h3>
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

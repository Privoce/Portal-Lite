import { useRef, useEffect, useState } from 'react';
// import { format } from 'date-fns';
import { RiRefreshLine } from 'react-icons/ri';
import { useWidgetSettings } from '../../hooks';
import { formatDistanceToNowStrict } from 'date-fns';
import GoAuth from '../Common/GoAuth';
import StyledWrapper from './styled';
import useGoogleAuth from './useGoogleAuth';
import useGoogleExtAuth from './useGoogleExtAuth';
import Event from './Event';
import AddEvent from './AddEvent';
import Setting from './Setting';
const googleAuthHook =
  process.env.REACT_APP_CHROME_EXT == 'true' ? useGoogleExtAuth : useGoogleAuth;
export default function MyAgenda({ readonly, name, lang }) {
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  let localEvents = getWidgetSetting({ name, key: 'groupEvents' });
  const listEle = useRef(null);
  const [latestEvent, setLatestEvent] = useState(null);
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
  } = googleAuthHook(localEvents);
  // 去授权
  const getGoogleAuth = () => {
    auth.signIn();
  };
  const handleSyncData = () => {
    syncData();
  };
  const handleHighlightClick = () => {
    let hlBlock = listEle.current.querySelector('.highlight');
    hlBlock?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  // 同步一份到本地
  useEffect(() => {
    updateWidgetSetting({ name, key: 'groupEvents', data: groupEvents });
    // 设置最新事件
    if (groupEvents) {
      const sortedArr = Object.entries(groupEvents).sort(([a], [b]) => {
        return new Date(a) - new Date(b);
      });
      const [firstArr] = sortedArr;
      const [, events] = firstArr;
      if (events) {
        setLatestEvent(events[0]);
        console.log('wtfff', sortedArr, events[0]);
      }
    }
  }, [groupEvents]);
  // 抛错
  if (error) {
    throw new Error(error);
  }
  if (!signedIn && !readonly) return <GoAuth disabled={!auth} auth={getGoogleAuth} />;
  return (
    <>
      <Setting calendars={calendars} updateCalendars={updateCalendars} name={name} />
      <StyledWrapper>
        <div className="topbar">
          <div className="today">
            <button disabled={loading || readonly} onClick={handleHighlightClick} className="btn">
              {latestEvent && formatDistanceToNowStrict(new Date(latestEvent.start))}
            </button>
            <span className="date">{new Date().toLocaleDateString(lang.locale)}</span>
            {!readonly && (
              <>
                <button disabled={loading || readonly} onClick={handleSyncData} className="update">
                  <RiRefreshLine
                    className={reloading ? 'reloading' : ''}
                    color={loading ? '#aaa' : '#5c4ddf'}
                  />
                </button>
                <AddEvent
                  lang={lang.addEvent}
                  calendar={calendars.find((c) => c.primary == true)}
                  addEvent={addEvent}
                />
              </>
            )}
          </div>
        </div>
        {loading && !groupEvents && !readonly ? (
          <div className="loading">{lang.fetching}</div>
        ) : (
          <ul className="list" ref={listEle}>
            {Object.entries(groupEvents)
              .sort(([a], [b]) => {
                return new Date(a) - new Date(b);
              })
              .map(([dateKey, events]) => {
                return (
                  <li className="item" key={dateKey}>
                    <h3 className="title">{new Date(dateKey).toLocaleDateString(lang.locale)}</h3>
                    <ul className="evts">
                      {events.map((evt) => {
                        return (
                          <Event
                            readonly={readonly}
                            highlight={latestEvent?.id == evt.id}
                            key={evt.summary}
                            data={evt}
                            deleteEvent={removeEvent}
                          />
                        );
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

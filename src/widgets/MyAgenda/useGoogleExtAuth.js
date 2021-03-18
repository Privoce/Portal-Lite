import { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
const formatEvents = (evts, calendars) => {
  console.log({ calendars });
  let items = evts
    .map((evt) => {
      const {
        id,
        start,
        end,
        summary,
        description,
        htmlLink,
        attachments,
        location,
        creator,
        organizer
      } = evt;
      let { email } = creator || organizer || {};
      const { id: calendarId, backgroundColor, foregroundColor, readOnly } =
        calendars.find(({ id }) => id == email) || {};
      return {
        id,
        foregroundColor,
        backgroundColor,
        calendarId,
        readOnly,
        htmlLink,
        isAllDay: !!start?.date,
        start: start?.dateTime || start?.date,
        end: end?.dateTime || end?.date,
        summary,
        description,
        attachments,
        location
      };
    })
    .sort((a, b) => {
      try {
        const aStart = new Date(a.start);
        const bStart = new Date(b.start);
        return aStart - bStart;
      } catch (error) {
        return 0;
      }
    });
  let group = {};
  items.forEach((itm) => {
    addToGroup(group, itm);
  });
  return group;
};
const addToGroup = (group, evt) => {
  let { start } = evt;
  let dateKey = null;
  try {
    dateKey = format(new Date(start), 'P');
  } catch (error) {
    dateKey = 'Not Yet Classified';
  }
  let tmp = group[dateKey];
  group[dateKey] = tmp ? [...tmp, evt] : [evt];
  return group;
};
const calendarListAPI = 'https://www.googleapis.com/calendar/v3/users/me/calendarList';
const quickAddEventAPI = `https://www.googleapis.com/calendar/v3/calendars/primary/events/quickAdd`;
// test token:ya29.a0AfH6SMAzOFJjV0HizciyTQ0ARlwWipiAND-k5OTEVYiWXANj36qVzppZKGwcrY5qlZh0wzWWztvI_VDLWlH7D0PDIwEzJOhKDcyLMb71g0O5_J5SPxc1xbCrSH5fNre2peehhZHwlONKuRzqVwCvhPzTo5w7
const useGoogleExtAuth = (localEvents = null, readonly = false) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(!localEvents || !readonly);
  const [reloadEvents, setReloadEvents] = useState(false);
  const [calendars, setCalendars] = useState([]);
  const [checkedCalendars, setCheckedCalendars] = useState([]);
  const [groupEvents, setGroupEvents] = useState(localEvents || null);
  const [error, setError] = useState(null);
  const authFunction = () => {
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError) {
        setError(chrome.runtime.lastError.message);
        return;
      }
      console.log('ext get token', token);
      setAuth(token);
    });
  };
  const fetchCalendarList = async () => {
    setLoading(true);
    try {
      let init = {
        headers: {
          Authorization: 'Bearer ' + auth,
          'Content-Type': 'application/json'
        },
        contentType: 'json'
      };

      fetch(calendarListAPI, init)
        .then((response) => response.json()) // Transform the data into json
        .then(function (data) {
          const { items, error } = data;
          if (error && error.code == 401) {
            setAuth('');
            return;
          }
          // let { id } = items.find((it) => it.primary);
          let initialCalendars = items.map((c) => {
            let {
              id,
              summary,
              description,
              backgroundColor,
              foregroundColor,
              primary,
              accessRole
            } = c;
            // 首次load均设置checked为true
            return {
              id,
              summary,
              description,
              backgroundColor,
              foregroundColor,
              checked: true,
              primary,
              readOnly: accessRole == 'reader' ? true : accessRole == 'owner' ? false : true
            };
          });
          setCalendars(initialCalendars);
          setCheckedCalendars(initialCalendars);
        });
    } catch (error) {
      setLoading(false);
      const {
        result: {
          error: { message }
        }
      } = error;
      setError(message || 'Google接口异常');
    }
  };
  useEffect(() => {
    authFunction();
  }, []);
  useEffect(() => {
    if (auth) {
      fetchCalendarList();
    }
  }, [auth]);
  useEffect(() => {
    const fetchEventList = async () => {
      let paths = checkedCalendars.map(({ id }) => {
        let encodeID = encodeURIComponent(id);
        return `https://www.googleapis.com/calendar/v3/calendars/${encodeID}/events?orderBy=startTime&singleEvents=true&maxResults=30&timeMin=${new Date().toISOString()}&&timeMax=${addDays(
          new Date(),
          30
        ).toISOString()}`;
      });
      let promises = paths.map((p) => {
        let opt = {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + auth,
            'Content-Type': 'application/json'
          },
          contentType: 'json'
        };
        return fetch(p, opt).then((resp) => resp.json());
      });
      console.log({ paths });
      try {
        setReloadEvents(true);
        const resps = await Promise.all(promises);

        let events = [];
        resps.forEach((data) => {
          console.log({ data });
          const { items } = data;
          events.push(...items);
        });
        console.log({ events });
        let tmps = formatEvents(events, calendars);
        console.log({ tmps });
        setGroupEvents(tmps);
        setReloadEvents(false);
        setLoading(false);
      } catch (error) {
        console.log('pull events error', error);
        setReloadEvents(false);
        setLoading(false);
        setError('拉取日程数据异常');
      }
    };
    // 有日历数据则去拉取events
    if (checkedCalendars.length) {
      fetchEventList();
    }
  }, [checkedCalendars, calendars, auth]);
  const addEvent = async (text) => {
    let opt = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + auth,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    };
    let resp = await fetch(quickAddEventAPI, opt);
    let addData = await resp.json();
    console.log({ addData });
    let { status, ...result } = addData;
    let data = {};
    if (status == 'confirmed') {
      let { foregroundColor, backgroundColor, id: cid } = calendars.find((c) => c.primary == true);
      let { start, end } = result;
      let { id, htmlLink, summary } = result;
      data = {
        id,
        foregroundColor,
        backgroundColor,
        calendarId: cid,
        htmlLink,
        start: start?.dateTime || start?.date,
        end: end?.dateTime || end?.date,
        summary,
        readOnly: false
      };
      let newGroup = addToGroup(groupEvents, data);
      setGroupEvents({ ...newGroup });
    }
    return { success: status == 'confirmed', msg: status, data };
  };
  const removeEvent = async ({ cid, eid }) => {
    let path = `https://www.googleapis.com/calendar/v3/calendars/${cid}/events/${eid}`;
    let opt = {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + auth,
        'Content-Type': 'application/json'
      }
    };
    let { status } = await fetch(path, opt);
    if (status == 204) {
      let newGroup = Object.fromEntries(
        Object.entries(groupEvents)
          .map(([date, list]) => {
            let tmps = list.filter((evt) => evt.id !== eid);
            return [date, tmps];
          })
          .filter(([, eventList]) => eventList.length !== 0)
      );
      setGroupEvents(newGroup);
      console.log({ newGroup });
    }
    return { success: status == 204, msg: '删除成功' };
  };
  const updateCalendars = (calendars) => {
    setCalendars(calendars);
    let checkeds = calendars.filter((c) => c.checked == true);
    setCheckedCalendars(checkeds);
  };
  return {
    auth,
    syncData: fetchCalendarList,
    addEvent,
    removeEvent,
    signedIn: !!auth,
    loading,
    reloading: reloadEvents,
    error,
    groupEvents,
    calendars,
    updateCalendars
  };
};

export default useGoogleExtAuth;

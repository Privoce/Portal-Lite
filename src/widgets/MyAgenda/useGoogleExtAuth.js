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
// GOOGLE CALENDAR Token
// const StorageKey = 'GOOGLE_CALENAR_OAUTH_TOKEN';
const useGoogleExtAuth = () => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reloadEvents, setReloadEvents] = useState(false);
  const [calendars, setCalendars] = useState([]);
  const [checkedCalendars, setCheckedCalendars] = useState([]);
  const [groupEvents, setGroupEvents] = useState(null);
  const [error, setError] = useState(null);
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
          console.log(data);
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
    chrome.identity.getAuthToken({ interactive: true }, function (token) {
      if (chrome.runtime.lastError) {
        setError(chrome.runtime.lastError.message);
        return;
      }
      setAuth(token);
    });
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
        return fetch(p, opt);
      });
      console.log({ paths });
      try {
        setReloadEvents(true);
        const resps = await Promise.all(promises);

        let events = [];
        resps.forEach((resp) => {
          if (resp.status == 200) {
            const { items } = resp.result;
            events.push(...items);
          }
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
  }, [checkedCalendars, auth]);
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
    let { status, result, statusText } = await resp.json();
    let data = {};
    if (status == 200) {
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
    return { success: status == 200, msg: statusText, data };
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
    let resp = await fetch(path, opt);
    let { status, statusText } = await resp.json();
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
    return { success: status == 204, msg: statusText };
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

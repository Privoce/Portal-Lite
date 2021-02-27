import { useState, useEffect } from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
import { format } from 'date-fns';
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
      const { backgroundColor, foregroundColor } = calendars.find(({ id }) => id == email) || {};
      return {
        id,
        foregroundColor,
        backgroundColor,
        calendarId: email,
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
    dateKey = format(new Date(start), 'PPPP');
  } catch (error) {
    dateKey = 'Not Yet Classified';
  }
  let tmp = group[dateKey];
  group[dateKey] = tmp ? [...tmp, evt] : [evt];
  return group;
};
const calendarListAPI = 'https://www.googleapis.com/calendar/v3/users/me/calendarList';
const cid = process.env.REACT_APP_GOOGLE_CALENDAR_CID;
const scopes = 'https://www.googleapis.com/auth/calendar';
// GOOGLE CALENDAR Token
// const StorageKey = 'GOOGLE_CALENAR_OAUTH_TOKEN';
const useGoogleAuth = () => {
  const [auth, setAuth] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [calendars, setCalendars] = useState(null);
  const [groupEvents, setGroupEvents] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const init = async () => {
      try {
        let googleAuth = await loadAuth2(gapi, cid, scopes);
        setAuth(googleAuth);
      } catch (error) {
        setLoading(false);
        const {
          result: {
            error: { message }
          }
        } = error;
        setError(message || 'Google认证异常');
        console.error({ error });
      }
    };
    init();
    // 处理脚本加载出错的情况，很可能被墙了
    const handleError = (evt) => {
      console.log('错误捕捉', evt);
      const { target } = evt;
      // 处理脚本加载出错
      console.log({ target });
      if (target?.tagName?.toUpperCase() === 'SCRIPT') {
        //利用路径来判断是否是脚本加载出错
        if (target.src.indexOf('apis.google.com/_/scs/apps-static') > -1) {
          setError('谷歌API脚本加载出错，请检查能否科学上网😊');
        }
      }
    };
    window.addEventListener('error', handleError, true);
    return () => {
      window.removeEventListener('error', handleError, true);
    };
  }, []);
  useEffect(() => {
    if (auth) {
      auth.isSignedIn.listen((isSignIn) => {
        console.log({ isSignIn });
        if (isSignIn) {
          setSignedIn(true);
        } else {
          setSignedIn(false);
        }
      });
      let user = auth.currentUser.get();
      let isAuthorized = user.hasGrantedScopes(scopes);
      if (isAuthorized) {
        // auth2.disconnect();
        console.log('authed!');
        setSignedIn(true);
      }
    }
  }, [auth]);
  const fetchCalendarList = async () => {
    setLoading(true);
    try {
      // 2. Initialize the JavaScript client library.
      await gapi.client.init({
        // clientId and scope are optional if auth is not required.
        clientId: cid,
        scope: scopes
      });
      // 3. Initialize and make the API request.
      const calendarResp = await gapi.client.request({
        path: calendarListAPI
      });
      if (calendarResp.status == 200) {
        const { items } = calendarResp.result;
        // let { id } = items.find((it) => it.primary);
        setCalendars(
          items.map((c) => {
            let { id, summary, description, backgroundColor, foregroundColor, primary } = c;
            return { id, summary, description, backgroundColor, foregroundColor, primary };
          })
        );
      } else {
        setLoading(false);
        setError('拉取日历列表数据异常');
      }
    } catch (error) {
      setLoading(false);
      const {
        result: {
          error: { message }
        }
      } = error;
      setError(message || 'Google接口异常');
      console.error({ error });
    }
  };

  useEffect(() => {
    if (signedIn) {
      gapi.load('client', fetchCalendarList);
    }
  }, [signedIn]);
  useEffect(() => {
    const fetchEventList = async () => {
      let paths = calendars.map(({ id }) => {
        let encodeID = encodeURIComponent(id);
        return `https://www.googleapis.com/calendar/v3/calendars/${encodeID}/events?orderBy=startTime&singleEvents=true&maxResults=30&timeMin=${new Date().toISOString()}`;
      });
      let promises = paths.map((p) => {
        // let path = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?orderBy=startTime&singleEvents=true&maxResults=30&timeMin=${new Date().toISOString()}`;
        // paths.push(path);
        return gapi.client.request({
          path: p
        });
      });
      console.log({ paths });
      try {
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
        setLoading(false);
      } catch (error) {
        console.log('pull events error', error);
        setLoading(false);
        setError('拉取日程数据异常');
      }
    };
    if (calendars) {
      fetchEventList();
    }
  }, [calendars]);
  const addEvent = async (text) => {
    let path = `https://www.googleapis.com/calendar/v3/calendars/primary/events/quickAdd`;
    // let path = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/quickAdd`;
    let { status, result, statusText } = await gapi.client.request({
      path,
      method: 'POST',
      params: { text }
    });
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
        summary
      };
      let newGroup = addToGroup(groupEvents, data);
      setGroupEvents({ ...newGroup });
    }
    return { success: status == 200, msg: statusText, data };
  };
  return {
    auth,
    syncData: fetchCalendarList,
    addEvent,
    signedIn,
    loading,
    error,
    groupEvents,
    calendars
  };
};

export default useGoogleAuth;

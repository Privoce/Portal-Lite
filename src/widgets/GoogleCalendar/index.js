import { useEffect, useState, useRef } from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
import { format } from 'date-fns';

import Loading from '../Common/Loading';
import GoAuth from '../Common/GoAuth';
import StyledWrapper from './styled';
import useToken from './useToken';
import Event from './Event';

const cid = process.env.REACT_APP_GOOGLE_CALENDAR_CID;
const scopes = 'https://www.googleapis.com/auth/calendar';
window.GOOGLE_AUTH = null;
const groupEvents = (evts) => {
  let items = evts.map((evt) => {
    const { start, end, summary, description, htmlLink, attachments, location } = evt;
    return {
      htmlLink,
      start: start.dateTime || start.date,
      end: end.dateTime || end.date,
      summary,
      description,
      attachments,
      location
    };
  });
  let group = {};
  items.forEach((itm) => {
    let { start } = itm;
    let dateKey = format(new Date(start), 'PPPP');
    let tmp = group[dateKey];
    group[dateKey] = tmp ? [...tmp, itm] : [itm];
  });
  return group;
};
export default function GoogleCalendar() {
  const listEle = useRef(null);
  const { token, updateToken } = useToken();
  // const [events, setEvents] = useState(null);
  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const wtf = async () => {
      window.GOOGLE_AUTH = await loadAuth2(gapi, cid, scopes);
      // let inst = auth2.getAuthInstance();
      window.GOOGLE_AUTH.isSignedIn.listen((isSignIn) => {
        console.log({ isSignIn });
        if (isSignIn) {
          updateToken(1);
        } else {
          updateToken('');
        }
      });
      let user = window.GOOGLE_AUTH.currentUser.get();
      let isAuthorized = user.hasGrantedScopes(scopes);
      if (isAuthorized) {
        // auth2.disconnect();
        console.log('authed!');
        updateToken(1);
      }
    };
    wtf();
  }, []);
  useEffect(() => {
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client
        .init({
          // clientId and scope are optional if auth is not required.
          clientId: cid,
          scope: scopes
        })
        .then(() => {
          // 3. Initialize and make the API request.
          return gapi.client.request({
            path: 'https://www.googleapis.com/calendar/v3/users/me/calendarList'
          });
        })
        .then(
          (response) => {
            console.log({ response });
            const { status, result } = response;
            if (status == 200) {
              const { items } = result;
              let { id } = items.find((it) => it.primary);
              gapi.client
                .request({
                  path: `https://www.googleapis.com/calendar/v3/calendars/${id}/events?orderBy=startTime&singleEvents=true&maxResults=30`
                })
                .then((resp) => {
                  console.log({ resp });
                  const { status, result } = resp;
                  if (status == 200) {
                    const { items } = result;
                    setGroups(groupEvents(items));
                    setLoading(false);
                  }
                });
            }
            console.log(response.result);
          },
          (reason) => {
            console.log('Error: ' + reason.result.error.message);
          }
        );
    }
    if (token) {
      gapi.load('client', start);
    }
  }, [token]);
  // 去授权
  const getGoogleAuth = () => {
    window.GOOGLE_AUTH.signIn();
  };
  const handleTodayClick = () => {
    let list = listEle.current;
    list.querySelector('.today').scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  if (!token) return <GoAuth auth={getGoogleAuth} />;
  if (loading || !groups) return <Loading />;
  return (
    <StyledWrapper>
      <div className="topbar">
        <div className="today">
          <button onClick={handleTodayClick} className="btn">
            Today
          </button>
          <span className="date">{new Date().toLocaleDateString()}</span>
        </div>
        {/* <a className="link" href="http://baidu.com" target="_blank" rel="noopener noreferrer">
          link
        </a> */}
      </div>
      <ul className="list" ref={listEle}>
        {Object.entries(groups).map(([dateKey, events]) => {
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
    </StyledWrapper>
  );
}

import { useEffect, useState, useRef } from 'react';
import { gapi, loadAuth2 } from 'gapi-script';
import Loading from '../Common/Loading';
import GoAuth from '../Common/GoAuth';
import StyledWrapper from './styled';
import useToken from './useToken';
import Event from './Event';

const cid = process.env.REACT_APP_GOOGLE_CALENDAR_CID;
const scopes = 'https://www.googleapis.com/auth/calendar';

export default function GoogleCalendar() {
  const listEle = useRef(null);
  const { token, updateToken } = useToken();
  const [googleAuth, setGoogleAuth] = useState(null);
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const wtf = async () => {
      let auth2 = await loadAuth2(gapi, cid, scopes);
      setGoogleAuth(auth2);
      // let inst = auth2.getAuthInstance();
      auth2.isSignedIn.listen((isSignIn) => {
        console.log({ isSignIn });
        if (isSignIn) {
          updateToken(1);
        } else {
          updateToken('');
        }
      });
      let user = auth2.currentUser.get();
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
                  path: `https://www.googleapis.com/calendar/v3/calendars/${id}/events?orderBy=startTime&singleEvents=true`
                })
                .then((resp) => {
                  console.log({ resp });
                  const { status, result } = resp;
                  if (status == 200) {
                    const { items } = result;
                    setEvents(
                      items.map((itm) => {
                        const { start, end, summary, description, htmlLink } = itm;
                        return {
                          htmlLink,
                          start: start.dateTime,
                          end: end.dateTime,
                          summary,
                          description
                        };
                      })
                    );
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
    googleAuth.signIn();
  };
  const handleTodayClick = () => {
    let list = listEle.current;
    list.querySelector('.today').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  if (!token) return <GoAuth auth={getGoogleAuth} />;
  if (loading || !events) return <Loading />;
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
        {events.map((evt) => {
          return <Event key={evt.summary} data={evt} />;
        })}
      </ul>
    </StyledWrapper>
  );
}

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { utcToZonedTime } from 'date-fns-tz';
// import ErrorTip from '../Common/ErrorTip';
// import Loading from '../Common/Loading';
import Timezones from './Timezones';
// http://worldtimeapi.org/api/ip 根据IP地址获取当地时间
// http://worldtimeapi.org/api/timezone 获取时区列表
const StyledWrapper = styled.section`
  position: relative;
  height: 100%;
  background-color: #1b1c1e;
  user-select: none;
  &:hover {
    .expand_icon {
      opacity: 1;
    }
  }
  .empty {
    font-size: 0.2rem;
    color: #666;
  }

  .clocks {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    /* padding-left: 0.2rem; */
    .clock {
      display: flex;
      flex-direction: column;
      align-items: center;
      &.dark {
        .react-clock__face {
          background: #333436;
          .react-clock__minute-mark {
            .react-clock__mark__body {
              background-color: #666;
            }
          }
          .react-clock__hour-mark {
            .react-clock__mark__body {
              border-radius: 4px;
              background-color: #fff;
            }
          }
        }
      }
      .react-clock__face {
        background: #fff;
        /* border: none; */
        .react-clock__minute-mark .react-clock__mark__body {
          background-color: #ccc;
        }
        .react-clock__hand {
          .react-clock__second-hand__body {
            background-color: #ef9829;
          }
        }
      }
      .city {
        font-weight: 800;
        color: #fff;
        font-size: 0.14rem;
        padding: 0.2rem;
      }
    }
  }
`;
let initialData = [
  {
    tz: 'Asia/Shanghai',
    city: '北京'
  },
  {
    tz: 'Europe/London',
    city: '伦敦'
  },
  {
    tz: 'America/Detroit',
    city: '底特律'
  }
];
let locaKey = 'SETTING_TIMEZONE_CLOCK';
try {
  let localData = localStorage.getItem(locaKey);
  initialData = JSON.parse(localData) || initialData;
} catch (error) {
  console.log({ error });
}
export default function TimezoneClock() {
  const [date, setDate] = useState(new Date());
  const [timezones, setTimezones] = useState(initialData);
  console.log({ timezones });
  const updateCurrTimezones = (tzs) => {
    localStorage.setItem(locaKey, JSON.stringify(tzs));
    setTimezones(tzs);
  };

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // if (loading) return <Loading />;
  // if (errTip) return <ErrorTip tip={errTip} />;
  return (
    <StyledWrapper>
      {/* {loading && <Loading />} */}
      <Timezones currTimezones={timezones} updateTimezones={updateCurrTimezones} />
      {timezones.length == 0 ? (
        <div className="empty">快去添加一个时钟吧！</div>
      ) : (
        <div className="clocks">
          {timezones.map((item) => {
            const { tz, city } = item;
            const localDate = utcToZonedTime(date.getTime(), tz);
            console.log({ localDate });
            let hours = localDate.getHours();
            console.log({ hours });
            let night = hours < 6 || hours >= 18;
            return (
              <div className={`clock ${night ? 'dark' : ''}`} key={tz}>
                <Clock size={120} value={localDate} />
                <h2 className="city">{city}</h2>
              </div>
            );
          })}
        </div>
      )}
    </StyledWrapper>
  );
}

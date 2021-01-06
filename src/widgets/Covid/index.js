import { useState, useEffect } from 'react';
import { format } from 'timeago.js';

import styled from 'styled-components';
import IconCovid from './IconCovid';
import IconClose from './IconClose';
import ErrorTip from '../Common/ErrorTip';
import Loading from '../Common/Loading';
const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  font-size: 0.15rem;
  overflow: hidden;
  position: relative;
  .row {
    display: flex;
    width: 100%;
    .block {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.12rem 0.1rem;
      .compare {
        font-size: 0.1rem;
        color: #7c7c7c;
        padding-bottom: 0.1rem;
      }
      > .num {
        padding-bottom: 0.1rem;
        font-size: 0.24rem;
        font-weight: 800;
      }
      .title {
        padding-bottom: 0.14rem;
        color: #222;
        font-size: 0.18rem;
      }
      &.now-comfirmed {
        background-color: #fdf1f1;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        .num {
          color: #f23a3b;
        }
      }
      &.comfirmed {
        background-color: #fdf1f1;
        border-right: 2px solid #fff;
        .num {
          color: #cc1e1e;
        }
      }
      &.maybe {
        background-color: #fcf4f0;
        border-bottom: 2px solid #fff;
        .num {
          color: #ca3f81;
        }
      }
      &.serious {
        border-right: 2px solid #fff;
        background-color: #faf2f6;
        border-bottom: 2px solid #fff;
        .num {
          color: #f05926;
        }
      }
      &.heal {
        background-color: #f1f8f4;
        border-right: 2px solid #fff;
        .num {
          color: #178b50;
        }
      }
      &.dead {
        background-color: #f3f6f8;
        .num {
          color: #4e5a65;
        }
      }
    }
  }
  .info {
    position: absolute;
    left: 0;
    top: 0;
    overflow: scroll;
    height: 100%;
    width: 100%;
    padding: 0.04rem 0.1rem;
    background-color: #fff;
    p {
      color: #555;
      margin: 0.1rem 0;
      line-height: 1.4;
      font-size: 0.12rem;
      text-align: justify;
      &:first-child {
        font-weight: 800;
        font-size: 0.18rem;
        color: #222;
      }
    }
    .close_icon {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      width: 0.2rem;
      height: 0.2rem;
      cursor: pointer;
    }
  }
  .covid_icon {
    display: none;
    position: absolute;
    left: 0.1rem;
    top: 0.1rem;
    width: 0.2rem;
    height: 0.2rem;
    cursor: pointer;
  }
  &:hover .covid_icon,
  &:hover .date_time {
    display: block;
  }
  .date_time {
    display: none;
    position: absolute;
    left: 0.1rem;
    bottom: 0.1rem;
    padding: 0.04rem 0.06rem;
    border-radius: 0.04rem;
    background-color: rgba(2, 2, 2, 0.3);
    color: #fff;
    font-size: 0.08rem;
  }
`;
export default function Covid() {
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  const [infoVisible, setInfoVisible] = useState(false);
  const [data, setData] = useState(null);
  const toggleInfoVisible = () => {
    setInfoVisible((prev) => !prev);
  };
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(`https://lab.isaaclin.cn/nCoV/api/overall?latest=true`);
      const { results, success } = await resp.json();
      setLoading(false);
      if (!success) {
        setErrTip('⚠️接口出错啦⚠️');
        return;
      }
      setData(results[0]);
      // console.log({ info });
    };
    getData();
  }, []);
  const {
    note1,
    note2,
    note3,
    remark1,
    remark2,
    remark3,
    confirmedCount,
    confirmedIncr,
    curedCount,
    curedIncr,
    deadCount,
    deadIncr,
    currentConfirmedCount,
    currentConfirmedIncr,
    suspectedCount,
    suspectedIncr,
    seriousIncr,
    seriousCount,
    updateTime
  } = data || {};
  if (errTip) return <ErrorTip tip={errTip} />;
  if (loading) return <Loading />;
  const datetimeString = `${new Date(updateTime).toLocaleDateString('zh')} ${new Date(
    updateTime
  ).toLocaleTimeString('zh')}`;
  return (
    <StyledWrapper>
      <div className="date_time">
        更新于: {datetimeString} | {format(new Date(updateTime), 'zh_CN')}
      </div>
      {infoVisible ? (
        <div className="info">
          {[note1, note2, note3, remark1, remark2, remark3].map((n) => {
            return <p key={n}>{n}</p>;
          })}
          <IconClose className="close_icon" onClick={toggleInfoVisible} />
        </div>
      ) : (
        <IconCovid className="covid_icon" onClick={toggleInfoVisible} />
      )}
      <>
        <div className="row">
          <div className="block now-comfirmed">
            <div className="compare">
              较上日 <span className="num">{currentConfirmedIncr}</span>
            </div>
            <div className="num">{currentConfirmedCount}</div>
            <div className="title">现有确诊</div>
          </div>
          <div className="block serious">
            <div className="compare">
              较上日 <span className="num">{seriousIncr}</span>
            </div>
            <div className="num">{seriousCount}</div>
            <div className="title">重症病例</div>
          </div>
          <div className="block maybe">
            <div className="compare">
              较上日 <span className="num">{suspectedIncr}</span>
            </div>
            <div className="num">{suspectedCount}</div>
            <div className="title">疑似感染者</div>
          </div>
        </div>
        <div className="row">
          <div className="block comfirmed">
            <div className="compare">
              较上日 <span className="num">{confirmedIncr}</span>
            </div>
            <div className="num">{confirmedCount}</div>
            <div className="title">累计确诊</div>
          </div>
          <div className="block heal">
            <div className="compare">
              较上日 <span className="num">{curedIncr}</span>
            </div>
            <div className="num">{curedCount}</div>
            <div className="title">累计治愈</div>
          </div>
          <div className="block dead">
            <div className="compare">
              较上日 <span className="num">{deadIncr}</span>
            </div>
            <div className="num">{deadCount}</div>
            <div className="title">累计死亡</div>
          </div>
        </div>
      </>
    </StyledWrapper>
  );
}

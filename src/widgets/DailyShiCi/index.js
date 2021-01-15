import { useEffect, useState, useCallback } from 'react';
import * as jinrishici from 'jinrishici';
import styled from 'styled-components';
import ErrorTip from '../Common/ErrorTip';
import Loading from '../Common/Loading';
import Yi from './Yi';

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.4rem;
  height: 100%;
  /* background-color: ; */
  background: url('//gitee.com/zyanggc/oss/raw/master/works/shici.chuan.png') no-repeat,
    url('//gitee.com/zyanggc/oss/raw/master/works/shici.ddh.png') no-repeat,
    url('https://colors.ichuantong.cn/static/media/bg.texture.dd29a028.png'), #eedeb0;
  background-size: 1.5rem auto, 0.5rem auto;
  background-position: left bottom, right bottom;
  .refresh {
    padding: 0.04rem;
    border-radius: 50%;
    line-height: 1;
    border: 1px solid #666;
    position: absolute;
    top: 0.1rem;
    left: 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.4;
    font-size: 0.1rem;
    &:hover {
      opacity: 1;
    }
  }
  .shici {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.1rem;
    padding: 0.2rem;
    background-color: rgba(2, 2, 2, 0.4);
    border-radius: 5px;
    color: #fff;
    max-height: 100%;
    overflow-y: overlay;
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #333;
    }
    .title {
      font-size: 0.18rem;
      font-weight: 800;
      margin-bottom: 0.08rem;
    }
    .author {
      color: #eee;
      font-size: 0.1rem;
      margin-bottom: 0.12rem;
    }
    .lines {
      display: flex;
      flex-direction: column;
      align-items: center;
      .line {
        font-size: 0.14rem;
        line-height: 1.3;
        margin-bottom: 0.05rem;
        &.famous {
          font-weight: 800;
        }
      }
    }
  }
`;
const WIDGET_LOCAL_SHICI_KEY = 'WIDGET_DAILY_SHICI_LOCAL';
const localData = localStorage.getItem(WIDGET_LOCAL_SHICI_KEY) || 'null';
try {
  let tmp = JSON.parse(localData);
  // 检查下是否是同一天
  if (tmp.storedate != new Date().toDateString()) {
    localStorage.setItem(WIDGET_LOCAL_SHICI_KEY, 'null');
  }
} catch (error) {
  localStorage.setItem(WIDGET_LOCAL_SHICI_KEY, 'null');
}
export default function DailyShici() {
  const innerLocalData = localStorage.getItem(WIDGET_LOCAL_SHICI_KEY) || 'null';
  console.log({ innerLocalData });
  const localShici = JSON.parse(innerLocalData) || null;
  const [shici, setShici] = useState(localShici);
  const [loading, setLoading] = useState(!localShici);
  const [errTip, setErrTip] = useState('');
  const getShici = useCallback(() => {
    setLoading(true);
    jinrishici.load(
      (result) => {
        console.log(result);
        const { status, data } = result;
        if (status == 'success') {
          setShici(data);
          localStorage.setItem(
            WIDGET_LOCAL_SHICI_KEY,
            JSON.stringify({ ...data, storedate: new Date().toDateString() })
          );
        }
        setLoading(false);
      },
      ({ errMessage }) => {
        setLoading(false);
        setErrTip(errMessage);
      }
    );
  }, []);
  useEffect(() => {
    if (!shici) {
      getShici();
    }
  }, [shici]);
  if (loading) return <Loading />;
  if (errTip) return <ErrorTip tip={errTip} />;
  const {
    origin: { title, dynasty, author, content, translate }
  } = shici;
  const highlight = shici.content;
  return (
    <StyledWrapper>
      {translate && <Yi content={translate} />}
      <div className="shici">
        <h2 className="title">{title}</h2>
        <em className="author">
          {author} · {dynasty}
        </em>
        <div className="lines">
          {content.map((c) => {
            return (
              <p className={`line ${c == highlight ? 'famous' : ''}`} key={c}>
                {c}
              </p>
            );
          })}
        </div>
      </div>
      <button className="refresh" onClick={getShici}>
        换
      </button>
    </StyledWrapper>
  );
}

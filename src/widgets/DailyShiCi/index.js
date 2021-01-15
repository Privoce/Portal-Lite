import { useEffect, useState } from 'react';
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
    url('//gitee.com/zyanggc/oss/raw/master/works/shici.ddh.png') no-repeat, #eedeb0;
  background-size: 1.5rem auto, 0.5rem auto;
  background-position: left bottom, right bottom;
  .shici {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.1rem;
    padding: 0.2rem;
    background-color: rgba(2, 2, 2, 0.4);
    border-radius: 5px;
    color: #fff;
    height: 100%;
    overflow-y: overlay;
    /* width */
    &::-webkit-scrollbar {
      width: 3px;

      /* visibility: hidden; */
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #444;
    }
    &:hover {
      &::-webkit-scrollbar {
        display: block;
        /* visibility: visible; */
      }
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

export default function DailyShici() {
  const [shici, setShici] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  useEffect(() => {
    setLoading(true);
    jinrishici.load(
      (result) => {
        console.log(result);
        const { status, data } = result;
        if (status == 'success') {
          setShici(data);
        }
        setLoading(false);
      },
      ({ errMessage }) => {
        setLoading(false);
        setErrTip(errMessage);
      }
    );
  }, []);
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
    </StyledWrapper>
  );
}

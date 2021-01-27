import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorTip from '../Common/ErrorTip';
import Loading from '../Common/Loading';
import Tabs from './Tabs';
import { useWidgetSettings } from '../../hooks';

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .empty {
    font-size: 0.2rem;
    color: #666;
  }
  .wrapper {
    margin: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.13rem;
      font-weight: 400;
      line-height: 0.18rem;
      padding: 0.14rem 0.18rem;
      padding-left: 0.3rem;
      position: relative;
      border-bottom: 1px solid #eee;
      transition: all 0.5s;
      &:last-child {
        margin-bottom: 0.6rem;
        &:after {
          content: '没有啦~';
          color: #aaa;
          position: absolute;
          bottom: -0.4rem;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &:hover {
        background-color: #eee;
        .block .left .title {
          color: rgb(0, 132, 255);
        }
      }
      &:before {
        position: absolute;
        left: 0.08rem;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-seq);
        font-size: 0.12rem;
        font-weight: 400;
        color: #f26e5f;
        line-height: 0.2rem;
        text-align: center;
        width: 0.1rem;
        height: 0.1rem;
      }
      .block {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #222;
        .left {
          display: flex;
          flex: 2;
          flex-direction: column;
          line-height: 1.2;
          padding-right: 0.14rem;
          .title {
            font-size: 0.18rem;
            font-weight: 800;
            width: 3rem;
            padding-right: 0.1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 0.06rem;
          }
          .intro {
            padding-right: 0.1rem;
            line-height: 1.3;
            text-align: justify;
            font-size: 0.1rem;
            margin-bottom: 0.12rem;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
          .hot {
            font-size: 0.08rem;
            color: #999;
          }
        }
        .right {
          flex: 1;
          img {
            width: 100%;
            border-radius: 5px;
            max-height: 1rem;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
export default function ZhihuHot({ name }) {
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const [hots, setHots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  const [currTab, setCurrTab] = useState(getWidgetSetting(name, 'tab') || 'total');
  const updateCurrTab = (tab) => {
    updateWidgetSetting(name, { tab });
    setCurrTab(tab);
  };
  useEffect(() => {
    setLoading(true);
    const getHots = async () => {
      const list = await fetch(
        `${process.env.REACT_APP_SERVICE_DOMAIN}/service/zhihu/hot/${currTab}`
      );
      const { code, data, msg } = await list.json();
      setLoading(false);
      if (code != 0) {
        setErrTip(msg);
        return;
      }
      setHots(data);
    };

    getHots();
  }, [currTab]);
  // if (loading) return <Loading />;
  if (errTip) return <ErrorTip tip={errTip} />;
  return (
    <StyledWrapper>
      {loading && <Loading />}
      <Tabs currTab={currTab} updateCurrTab={updateCurrTab} />
      {!loading &&
        (hots.length == 0 ? (
          <div className="empty">暂无内容，试试其它分类吧~</div>
        ) : (
          <ul className="wrapper">
            {hots.map((n, idx) => {
              const { title, url, intro, id, thumbnail, hot_count } = n;
              return (
                <li className="item" key={id} data-seq={idx + 1}>
                  <a className="block" href={url} target="_blank" rel="noopener noreferrer">
                    <div className="left">
                      <h2 className="title" title={title}>
                        {title}
                      </h2>
                      <p className="intro" title={intro}>
                        {intro}
                      </p>
                      <span className="hot">{hot_count} 万热度</span>
                    </div>
                    {thumbnail && (
                      <div className="right">
                        <img src={thumbnail} alt="知乎配图" />
                      </div>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        ))}
    </StyledWrapper>
  );
}

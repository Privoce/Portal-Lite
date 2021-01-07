import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorTip from '../Common/ErrorTip';
import Loading from '../Common/Loading';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .wrapper {
    margin: 0;
    list-style: none;
    overflow: scroll;
    /* overscroll-behavior: contain; */
    width: 100%;
    height: 100%;
    .item {
      /* margin: 0 0.1rem; */
      font-size: 0.13rem;
      font-weight: 400;
      line-height: 0.18rem;
      /* margin-bottom: 0.1rem; */
      padding: 0.14rem 0.18rem;
      padding-left: 0.3rem;
      position: relative;
      border-bottom: 1px solid #eee;
      transition: all 0.5s;
      &:hover {
        background-color: #eee;
        transform: scale(1.06);
        &:before {
          display: none;
        }
      }
      &:before {
        position: absolute;
        left: 0.05rem;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-seq);
        font-size: 0.14rem;
        font-weight: 400;
        color: #f26e5f;
        line-height: 0.2rem;
        text-align: center;
        width: 0.1rem;
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
          /* width: 0.5rem; */
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
export default function ZhihuHot() {
  const [hots, setHots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errTip, setErrTip] = useState('');
  useEffect(() => {
    const getHots = async () => {
      const list = await fetch(`${process.env.REACT_APP_SERVICE_DOMAIN}/service/zhihu/hot`);
      const { code, data, msg } = await list.json();
      setLoading(false);
      if (code != 0) {
        setErrTip(msg);
        return;
      }
      setHots(data);
    };
    getHots();
  }, []);
  if (loading) return <Loading />;
  if (errTip) return <ErrorTip tip={errTip} />;
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
}

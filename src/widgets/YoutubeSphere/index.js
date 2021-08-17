import styled from 'styled-components';
import Loading from '../../../../../Portal-Lite/src/widgets/Common/Loading';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { appId, appHost } from '../../../../../Portal-Lite/src/InitialConfig';
import { useAuthing } from '@authing/react-ui-components';

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .empty {
    font-size: 0.2rem;
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
            max-width: 3.2rem;
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

export default function YoutubeSphere() {
  const { authClient } = useAuthing({
    appId,
    appHost
  });
  const [userId,serUserId]=useState(null);

  useEffect(() => {
    const initUsername = async () => {
      let user = await authClient.getCurrentUser();
      if (user) {
        serUserId(user.id)
      }
    };
    if (authClient) {
      initUsername();
    }
  }, [authClient]);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: resp, error } = useSWR("https://social.qmcurtis.me/api/user/connect/liked?userId="+userId+"&num=50", fetcher);
  let loading= !error && !resp

  if (loading) return <Loading />;

  if (error) {
    throw new Error(error);
  }
  return (
    <StyledWrapper>
      {(loading&&userId==null)&& <Loading />}
      {(!loading&&userId!=null) &&
      (resp.length == 0 ? (
        <div className="empty">暂无内容，试试添加好友吧~</div>
      ) : (
        <ul className="wrapper">
          {resp.map((item, idx) => {
            const { videoTitle, videoUrl, id, videoThumbnail,nickname,videoDescription} = item;
            return (
              <li className="item" key={id} data-seq={idx + 1}>
                <a className="block" href={videoUrl} target="_blank" rel="noopener noreferrer">
                  <div className="left">
                    <h2 className="title darkmode-ignore" title={videoTitle}>
                      {videoTitle}
                    </h2>
                    <p className="intro" title={videoDescription}>
                      {videoDescription}
                    </p>
                    <span className="hot">liked by {nickname.toString()}</span>
                  </div>
                  {videoThumbnail && (
                    <div className="right">
                      <img src={videoThumbnail} alt="视频封面" />
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

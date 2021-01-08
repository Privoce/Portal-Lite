// import React from 'react'
import { format } from 'timeago.js';
import styled from 'styled-components';
import GithubFork from '../Common/Icons/GithubFork';
import GithubStar from '../Common/Icons/GithubStar';
import GithubHome from '../Common/Icons/GithubHome';
import GithubCommit from '../Common/Icons/GithubCommit';
import GithubPush from '../Common/Icons/GithubPush';
const StyledCard = styled.li`
  font-size: 0.16rem;
  padding: 0.1rem 0.08rem;
  border-radius: 0.06rem;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.05rem;
  min-width: 1.8rem;
  a {
    color: #555;
  }
  &:hover {
    background-color: #eee;
    a {
      color: #000;
      text-decoration: underline;
    }
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .name {
      padding: 0.02rem 0;
      max-width: 90%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .home {
      margin-left: 0.1rem;
      display: flex;
      align-items: center;
      svg {
        width: 0.14rem;
        height: 0.14rem;
      }
    }
  }
  .bottom {
    display: flex;
    font-size: 0.1rem;
    color: #666;
    .item {
      user-select: none;
      display: flex;
      align-items: center;
      padding: 2px 4px;
      margin-right: 4px;
      /* border-radius: 4px; */
      border: 1px solid #aaa;
      svg {
        width: 0.12rem;
        height: 0.12rem;
        fill: #666;
        /* color: #666; */
      }
    }
    .timeago {
      /* font-size: 0.1rem;
      color: #666; */
    }
  }
`;
export default function Card({
  url,
  pushedAt,
  name,
  forkCount,
  stargazerCount,
  homepageUrl,
  object
}) {
  return (
    <StyledCard key={name}>
      <div className="top">
        <a className="name" title={`仓库:${name}`} href={url} target="_blank">
          {name}
        </a>
        {homepageUrl && (
          <a title="项目主页" className="home" href={homepageUrl} target="_blank">
            <GithubHome />
          </a>
        )}
      </div>
      <div className="bottom">
        <span title={'最新更新'} className="item timeago">
          <GithubPush />
          {format(new Date(pushedAt), 'zh_CN')}
        </span>
        <span title="Fork数" className="item fork">
          <GithubFork />
          {forkCount}
        </span>
        <span title="标星数" className="item star">
          <GithubStar />
          {stargazerCount}
        </span>
        {object && (
          <span title="提交数" className="item commit">
            <GithubCommit />
            {object.history.totalCount}
          </span>
        )}
      </div>
    </StyledCard>
  );
}

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Developer from './developer';
import Repo from './repo';
import Loading from '../Common/Loading';
import { GoRepoForked } from 'react-icons/go';

import IconDev from '../Common/Icons/Developer';
const StyledWrapper = styled.div`
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    font-size: 0.18rem;
    list-style: none;
    padding-left: 0;
  }
  .list {
    padding-bottom: 0.4rem;
    margin: 0;
  }
  .tabs {
    position: absolute;
    bottom: 0.05rem;
    left: 0.2rem;
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #888;
    margin: 0;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
    .tab {
      background-color: #fff;
      cursor: pointer;
      padding: 0.02rem 0.14rem;
      transition: all 0.5s;
      color: #000;
      &.active {
        background-color: #333;
        color: #fff;
        svg {
          fill: #eee;
        }
      }
      svg {
        width: 0.14rem;
        height: 0.14rem;
      }
    }
  }
`;
const RepoList = ({ data }) => {
  return (
    <ul className="list">
      {data.map((r, idx) => {
        return <Repo isFirst={idx == 0} repo={r} key={r.url}></Repo>;
      })}
    </ul>
  );
};
const DeveloperList = ({ data = [] }) => {
  return (
    <ul className="list">
      {data.map((d) => {
        return <Developer developer={d} key={d.username}></Developer>;
      })}
    </ul>
  );
};

export default function GithubTrending() {
  const [repos, setRepos] = useState([]);
  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('repositories');
  useEffect(() => {
    const reqData = async () => {
      const resp = await fetch(`https://hackertab.pupubird.com/${type}`);
      const data = await resp.json();
      setLoading(false);
      if (type == 'developers') {
        setDevs(data);
      } else {
        setRepos(data);
      }
    };
    reqData();
  }, [type]);
  const handleTabClick = (t) => {
    console.log({ t });
    if (t !== type) {
      setType(t);
      setLoading(true);
    }
  };
  if (loading) return <Loading />;
  return (
    <StyledWrapper>
      <ul className="tabs">
        <li
          onClick={handleTabClick.bind(null, 'repositories')}
          className={`tab ${type == 'repositories' && 'active'}`}
        >
          <GoRepoForked />
        </li>
        <li
          onClick={handleTabClick.bind(null, 'developers')}
          className={`tab ${type == 'developers' && 'active'}`}
        >
          <IconDev />
        </li>
      </ul>
      {type == 'developers' ? <DeveloperList data={devs} /> : <RepoList data={repos} />}
    </StyledWrapper>
  );
}

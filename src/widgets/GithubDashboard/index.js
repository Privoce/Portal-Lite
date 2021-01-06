import { useState, useEffect } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { format } from 'timeago.js';
import Loading from '../Common/Loading';
import GoAuth from '../../component/GoAuth';
import StyledWrapper from './styled';
import { useGithubToken } from '../../hooks';
const cid = 'f3505bc46977fad4bb33';
const authLink = `https://github.com/login/oauth/authorize?client_id=${cid}&scope=repo&redirect_uri=${encodeURI(
  process.env.REACT_APP_GH_REDIRECT
)}`;
const GET_VIEWER = gql`
  query {
    viewer {
      avatarUrl
      name
      login
    }
  }
`;
const GET_REPOS = gql`
  query GetRepos($viewer: String!) {
    user(login: $viewer) {
      repositories(isFork: false, first: 30, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          name
          createdAt
          description
          updatedAt
          url
        }
      }
    }
  }
`;
export default function GithubDashboard() {
  const { token } = useGithubToken();
  const [user, setUser] = useState(null);
  const [loadUserData, { loading: userLoading, data: userData }] = useLazyQuery(GET_VIEWER);
  const [loadRepos, { loading: reposLoading, data: repos }] = useLazyQuery(GET_REPOS, {
    variables: { viewer: user?.login }
  });
  useEffect(() => {
    if (token) {
      loadUserData();
    }
  }, [token, loadUserData]);
  useEffect(() => {
    if (userData) {
      setUser(userData.viewer);
      loadRepos();
    }
  }, [userData, loadRepos]);
  if (userLoading || reposLoading) return <Loading />;
  return token ? (
    <StyledWrapper>
      {user && (
        <div className="user">
          <h2 className="username">{user.name}</h2>
          <img className="head" src={user.avatarUrl} alt="用户头像" />
        </div>
      )}
      {repos && (
        <ul className="list">
          {repos.user.repositories.nodes.map((repo) => {
            const { name, url, updatedAt } = repo;
            return (
              <li className="item" key={name}>
                <a href={url} target="_blank">
                  {name}
                </a>
                <span className="timeago">更新：{format(new Date(updatedAt), 'zh_CN')}</span>
              </li>
            );
          })}
        </ul>
      )}
    </StyledWrapper>
  ) : (
    <GoAuth authLink={authLink} />
  );
}

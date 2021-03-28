import styled from 'styled-components';
import StyledCard from './card';

const StyledDeveloper = styled(StyledCard)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 34%;
    margin-right: 0.1rem;

    .info {
      display: flex;
      .avatar {
        width: 0.5rem;
        height: 0.5rem;
        border: 1px solid #666;
        border-radius: 50%;
        margin: 0;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .call {
        display: flex;
        flex-direction: column;
        /* width: 1.8rem; */
        margin-left: 0.1rem;
        .name {
          font-size: 0.18rem;
          margin-bottom: 0.05rem;
          width: 1rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .un {
          font-size: 0.12rem;
          color: #666;
          width: 1rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .detail {
    display: flex;
    /* width: 66%; */
    /* justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap; */

    .popular {
      display: flex;
      flex-direction: column;
      /* width: 4rem; */
      /* padding-top: 0.1rem; */
      .repo_name {
        font-size: 0.2rem;
        color: #222;
        margin-bottom: 0.05rem;
      }
      .desc {
        padding-top: 0.04rem;
        font-size: 0.12rem;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
`;

export default function Developer({ developer = {}, ...rest }) {
  const {
    username,
    name,
    avatar,
    url,
    repo: { repo_name, description }
  } = developer;
  return (
    <StyledDeveloper {...rest}>
      <div className="profile">
        <a className="info" href={url} target="_blank">
          <div className="avatar">
            <img
              data-default="https://static.nicegoodthings.com/privoce/developer.png"
              src={`${avatar}`}
              alt="开发者头像"
            />
          </div>
          <div className="call">
            <span className="name"> {name}</span>
            <span className="un"> {username}</span>
          </div>
        </a>
      </div>
      <div className="detail">
        <div className="popular">
          <div className="repo_name">
            🔥
            <a href={`https://github.com/${username}/${repo_name}`} target="_blank">
              {repo_name}
            </a>
            🔥
          </div>
          <div className="desc">{description}</div>
        </div>
      </div>
    </StyledDeveloper>
  );
}

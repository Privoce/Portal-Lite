import styled from 'styled-components';
import StyledCard from './card';

const StyledDeveloper = styled(StyledCard)`
  .profile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.1rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.15rem;
    .avatar {
      width: 0.6rem;
      height: 0.6rem;
      border: 1px solid #333;
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
      width: 1.8rem;
      margin-left: -0.6rem;
      .name {
        font-size: 0.2rem;
        margin-bottom: 0.05rem;
      }
      .un {
        font-size: 0.16rem;
        color: #666;
      }
    }
    .follow {
      font-size: 0.14rem;
      color: #222;
      padding: 0.04rem 0.08rem;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  }
  .detail {
    display: flex;
    flex: 2;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    /* @media screen and (max-width: 414px) {
          flex-direction: column;
        } */
    .popular {
      display: flex;
      flex-direction: column;
    }

    .popular {
      width: 4rem;
      /* padding-top: 0.1rem; */
      .repo_name {
        font-size: 0.2rem;
        color: #222;
        margin-bottom: 0.05rem;
        .label {
          font-size: 0.16rem;
        }
      }
      .desc {
        font-size: 0.12rem;
        color: #666;
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
  // gitee.com/zyanggc/oss/raw/master/works/developer.png
  const handleAvatarError = (evt) => {
    const { target } = evt;
    target.src = 'https://gitee.com/zyanggc/oss/raw/master/works/developer.png';
  };
  return (
    <StyledDeveloper {...rest}>
      <div className="profile">
        <div className="avatar">
          <img onError={handleAvatarError} src={`${avatar}.sss`} alt="开发者头像" />
        </div>
        <div className="call">
          <span className="name"> {name}</span>
          <span className="un"> {username}</span>
        </div>
        <a className="follow" href={url} target="_blank">
          去关注
        </a>
      </div>
      <div className="detail">
        <div className="popular">
          <div className="repo_name">
            <span className="label">主要作品：</span>
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

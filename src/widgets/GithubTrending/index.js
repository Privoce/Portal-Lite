import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background: #fff;
  overflow: scroll;
  height: 100%;
  ul {
    display: flex;
    flex-direction: column;
    font-size: 0.18rem;
    list-style: none;
    padding-left: 0;
    .developer {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 0.2rem;
      padding: 0.1rem 0;

      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      .avatar {
        width: 0.5rem;
        height: 0.5rem;
        border: 1px solid #333;
        border-radius: 50%;
        margin: 0 0.2rem 0.2rem 0.2rem;
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
        .call,
        .popular {
          display: flex;
          flex-direction: column;
        }
        .call {
          width: 1.8rem;
          .name {
            font-size: 0.2rem;
            margin-bottom: 0.05rem;
          }
          .un {
            font-size: 0.16rem;
            color: #666;
          }
        }
        .popular {
          width: 4rem;
          /* padding-top: 0.1rem; */
          .repo_name {
            font-size: 0.2rem;
            color: #222;
            margin-bottom: 0.05rem;
          }
          .desc {
            font-size: 0.12rem;
            color: #666;
          }
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
  }
`;
export default function GithubTrending() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const reqData = async () => {
      const resp = await fetch('https://hackertab.pupubird.com/developers');
      const data = await resp.json();
      setData(data);
    };
    reqData();
  }, []);
  return (
    <StyledWrapper>
      <ul>
        {data.map((d) => {
          const {
            username,
            name,
            avatar,
            url,
            repo: { repo_name, description }
          } = d;
          return (
            <li className="developer" key={username}>
              <img src={avatar} alt="开发者头像" className="avatar" />
              <div className="detail">
                <div className="call">
                  <span className="name"> {name}</span>
                  <span className="un"> {username}</span>
                </div>
                <div className="popular">
                  <div className="repo_name">{repo_name}</div>
                  <div className="desc">{description}</div>
                </div>
                <a className="follow" href={url} target="_blank">
                  Follow
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </StyledWrapper>
  );
}

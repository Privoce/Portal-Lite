// import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import StyledCard from './card';
import { FaUserAstronaut } from 'react-icons/fa';
import { GoRepo } from 'react-icons/go';

const StyledRepo = styled(StyledCard)`
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    width: 3rem;
    .title {
      display: flex;
      align-items: center;
      font-size: 0.16rem;
      margin: 0;
      .icon {
        width: 0.16rem;
        margin-right: 0.04rem;
      }
      a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .desc {
      color: #666;
      font-size: 0.11rem;
      margin: 0.08rem 0;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .items {
      display: flex;
      flex-direction: row;
      .item {
        font-size: 0.1rem;
        display: flex;
        align-items: center;
        &:not(:last-child) {
          margin-right: 0.1rem;
        }
        &.lang:before {
          content: '';
          margin-right: 0.05rem;
          display: block;
          width: 0.1rem;
          height: 0.1rem;
          border-radius: 50%;
          background-color: ${({ langColor }) => langColor};
        }
        &.author {
          .icon {
            width: 0.1rem;
            margin-right: 0.04rem;
          }
          .head {
            border: 1px solid #333;
            width: 0.15rem;
            height: 0.15rem;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    .star {
      font-size: 0.12rem;
      padding: 0.04rem 0.08rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 0.2rem;
    }
    .period_stars {
      font-size: 0.1rem;
    }
  }
`;

export default function Repo({ isFirst, repo, ...rest }) {
  const {
    url,
    author,
    name,
    languageColor,
    language,
    forks,
    stars,
    avatar,
    currentPeriodStars,
    description
  } = repo;
  return (
    <StyledRepo langColor={`${languageColor}`} {...rest}>
      <div className="left">
        <h2 className="title">
          <GoRepo className="icon" />
          <a target="_blank" title={`${author}/${name}`} href={url}>
            {author}/{name}
          </a>
        </h2>
        <div className="desc" title={description}>
          {description || '暂无描述'}
        </div>
        <ul className="items">
          {language && <li className="item lang">{language}</li>}
          <li className="item">⭐ {stars}</li>
          <li className="item">🍴 {forks}</li>
          <li className="item author">
            <FaUserAstronaut className="icon" />
            <a
              className="head"
              href={`http://github.com/${author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={avatar} alt="作者头像" />
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <a target="_blank" className="star" href={url}>
          标星
        </a>
        <div className="period_stars">🆕 {currentPeriodStars} ⭐</div>
      </div>
    </StyledRepo>
  );
}
// "author": "beurtschipper",
// "name": "Depix",
// "languageColor": "3572A5",
// "url": "https://github.com/beurtschipper/Depix",
// "description": "Recovers passwords from pixelized screenshots",
// "language": "Python",
// "stars": "6,900",
// "currentPeriodStars": "1",
// "forks": "353",
// "avatar": "https://github.com/beurtschipper.png?size=120",
// "builtBy": []

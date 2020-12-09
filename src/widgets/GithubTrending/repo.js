import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import StyledCard from './card';
import IconRepo from '../../asset/img/icon.repo.png';
import IconCoder from '../../asset/img/icon.coder.png';

const StyledRepo = styled(StyledCard)`
  .left {
    display: flex;
    flex-direction: column;
    max-width: 6rem;
    .title {
      display: flex;
      align-items: center;
      font-size: 0.18rem;
      margin: 0;
      .icon {
        width: 0.16rem;
        margin-right: 0.04rem;
      }
    }
    .desc {
      color: #666;
      font-size: 0.12rem;
      margin: 0.2rem 0;
      line-height: 1.2;
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
      font-size: 0.14rem;
      color: #222;
      padding: 0.04rem 0.08rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin-bottom: 0.2rem;
    }
    .period_stars {
      font-size: 0.14rem;
    }
  }
`;

export default function Repo({ isFirst, repo, ...rest }) {
  const card = useRef(null);
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
  useEffect(() => {
    card.current.scrollIntoView();
  }, []);
  return (
    <StyledRepo ref={card} langColor={`#${languageColor}`} {...rest}>
      <div className="left">
        <h2 className="title">
          <img className="icon" src={IconRepo} alt="repo icon" />
          <a target="_blank" href={url}>
            {author}/{name}
          </a>
        </h2>
        <div className="desc">{description}</div>
        <ul className="items">
          <li className="item lang">{language}</li>
          <li className="item">✨ {stars}</li>
          <li className="item">🍴 {forks}</li>
          <li className="item author">
            <img className="icon" src={IconCoder} alt="头像图标" />
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
          去标星
        </a>
        <div className="period_stars">今日新增：{currentPeriodStars}✨</div>
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

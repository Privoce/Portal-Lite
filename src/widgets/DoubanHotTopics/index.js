import styled from 'styled-components';
import Loading from '../Common/Loading';
import useData from '../Common/hooks/useData';

const StyledWrapper = styled.section`
  height: fit-content;
  > .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    > .item {
      font-size: 0.16rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      margin: 0 0.1rem 0.1rem 0;
      position: relative;
      .link {
        padding: 0.15rem;
        border-radius: 4px;
        border: 1px solid rgb(59, 169, 77, 0.3);
        color: #3ba94d;
        display: flex;
        flex-direction: column;
        &:hover {
          border-color: #3ba94d;
        }
        .txt {
          margin-bottom: 0.1rem;
          &:before,
          &:after {
            content: '#';
          }
        }
        .info {
          display: flex;
          .views {
            color: #ccc;
            font-size: 0.12rem;
            margin-right: 0.1rem;
          }
          .trends {
            display: flex;
            .bar {
              width: 2px;
              height: 100%;
              background-color: #157dfb;
              margin-right: 1px;
              &.gray {
                opacity: 0.3;
              }
            }
          }
        }
      }
    }
  }
`;
export default function MPDaily() {
  const { data: hots, loading, error } = useData(
    `${process.env.REACT_APP_SERVICE_DOMAIN}/service/douban/topic/hot`
  );
  if (loading) return <Loading />;
  // 抛错
  if (error) {
    throw new Error(error);
  }
  return (
    <StyledWrapper>
      <ul className="wrapper">
        {hots.map((n, idx) => {
          const { topic, link, views, trends } = n;
          return (
            <li className="item" key={idx} data-seq={idx + 1}>
              <a className="link" href={link} target="_blank" rel="noopener noreferrer">
                <div className="txt">{topic}</div>
                <div className="info">
                  <div className="views">{views}</div>
                  <div className="trends">
                    {[1, 2, 3, 4, 5].map((num) => {
                      return <i key={num} className={`bar ${num > trends ? 'gray' : ''}`}></i>;
                    })}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </StyledWrapper>
  );
}

import styled from 'styled-components';
import Loading from '../Common/Loading';
import useData from '../Common/hooks/useData';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .wrapper {
    padding: 0.02rem;
    margin: 0;
    list-style: none;
    /* overflow: scroll; */
    /* overscroll-behavior: contain; */
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.16rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      /* margin-bottom: 0.1rem; */
      margin-bottom: 0.24rem;
      white-space: nowrap;
      padding-left: 0.3rem;
      /* padding-right: 0.2rem; */
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      a {
        color: #2ba245;
      }
      &:before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-seq);
        font-size: 0.14rem;
        font-weight: 400;
        color: #f26e5f;
        line-height: 0.2rem;
        text-align: center;
        width: 0.1rem;
      }
    }
  }
`;
export default function MPDaily() {
  const { data: hots, error, loading } = useData(
    `${process.env.REACT_APP_SERVICE_DOMAIN}/service/mp/hot`
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
          const { title, link } = n;
          return (
            <li className="item" key={idx} data-seq={idx + 1}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledWrapper>
  );
}

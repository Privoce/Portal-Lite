import styled from 'styled-components';
import useData from '../Common/hooks/useData';
import Loading from '../Common/Loading';
const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  .wrapper {
    padding: 0.02rem;
    width: 100%;
    height: 100%;
    .item {
      font-size: 0.15rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #1193d7;
      line-height: 0.21rem;

      white-space: nowrap;
      padding-left: 0.3rem;
      padding-right: 0.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      &:not(:last-child) {
        margin-bottom: 0.23rem;
      }
      a {
        color: #0178b6;
        .heat {
          padding-left: 0.15rem;
          font-size: 0.1rem;
          color: #666;
          text-transform: lowercase;
          .hot {
            height: 0.16rem;
            padding-left: 0.05rem;
            padding-top: 0.02rem;
          }
        }
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
      &:after {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        content: attr(data-tag);
        font-size: 0.12rem;
        color: #ffffff;
        line-height: 0.17rem;
        border-radius: 0.02rem;
        width: 0.18rem;
        text-align: center;
      }
      &[data-tag-type='hotest']:after {
        background: #f86300;
      }
      &[data-tag-type='hot']:after {
        background: #fe9404;
      }
      &[data-tag-type='new']:after {
        background: #ff3852;
      }
      &[data-tag-type='recomm']:after {
        background: #00b7ee;
      }
    }
  }
`;
const TagMap = {
  ['热']: 'hot',
  ['沸']: 'hotest',
  ['新']: 'new',
  ['荐']: 'recomm'
};
export default function WeiboHot() {
  const {
    error,
    loading,
    data: hots
  } = useData(`${import.meta.env.VITE_SERVICE_DOMAIN}/service/weibo/hot`);
  // 抛错
  if (error) {
    throw new Error(error);
  }
  if (loading) return <Loading />;
  return (
    <StyledWrapper>
      <ul className="wrapper">
        {hots.map((n, idx) => {
          const { title, link, hot } = n;
          return (
            <li
              className="item"
              key={idx}
              data-seq={idx + 1}
              data-tag-type={TagMap[hot]}
              data-tag={hot}
            >
              <a href={`https://s.weibo.com${link}`} target="_blank" rel="noopener noreferrer">
                {title}
                {/* {heat && (
                    <span className="heat">
                      {formatNumber(heat)}
                      <img className="hot" src={IconHot} alt="hot icon" />
                    </span>
                  )} */}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledWrapper>
  );
}

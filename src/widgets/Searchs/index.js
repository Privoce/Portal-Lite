import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useSearchEngine } from '../../hooks';
import Loading from '../../component/Loading';

const BaiduSearch = lazy(() => import('./Baidu'));
const GoogleSearch = lazy(() => import('./Google'));
const BingSearch = lazy(() => import('./Bing'));
const Setting = lazy(() => import('./Setting'));
const SearchMap = {
  baidu: <BaiduSearch />,
  google: <GoogleSearch />,
  bing: <BingSearch />
};
const StyledWrapper = styled.section`
  /* display: flex;
  justify-content: center; */
  padding: 0.4rem 0 0.5rem 0;
  position: relative;
  width: 45%;
  .setting {
    visibility: hidden;
  }
  .search {
    margin: 0 auto;
    width: 100%;
    input {
      background-color: rgba(255, 255, 255, 0.8);
      &:focus {
        background-color: #fff;
      }
    }
  }
  &:hover {
    .setting {
      visibility: visible;
    }
  }
  @media (min-width: 320px) and (max-width: 860px) {
    width: 80%;
  }
`;

export default function Searchs() {
  const { search, updateSearch } = useSearchEngine();
  return (
    <StyledWrapper>
      <Suspense fallback={<Loading tip="搜索模块加载中..." />}>
        <Setting search={search} updateSearch={updateSearch} />
        <div className="search">{SearchMap[search]}</div>
      </Suspense>
    </StyledWrapper>
  );
}

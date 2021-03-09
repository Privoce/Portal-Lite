import { useState, lazy, cloneElement, Suspense } from 'react';
import styled from 'styled-components';
import Loading from '../../component/Loading';
import { useWidgetSettings } from '../../hooks';

const BaiduSearch = lazy(() => import('./Baidu'));
const DuckduckSearch = lazy(() => import('./Duckduck'));
const GoogleSearch = lazy(() => import('./Google'));
const BingSearch = lazy(() => import('./Bing'));
const Setting = lazy(() => import('./Setting'));
const SearchMap = {
  baidu: <BaiduSearch />,
  google: <GoogleSearch />,
  bing: <BingSearch />,
  duckduck: <DuckduckSearch />
};
const StyledWrapper = styled.section`
  /* display: flex;
  justify-content: center; */
  padding: 0.4rem 0;
  position: relative;
  width: 6rem;
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

export default function Searchs({ lang, name, toggleWidgetSettingVisible }) {
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const [search, setSearch] = useState(getWidgetSetting({ name }) || 'baidu');
  const refresh = (s) => {
    updateWidgetSetting({ name, data: s });
    setSearch(s);
  };
  return (
    <>
      <Setting
        lang={lang}
        name={name}
        toggleWidgetSettingVisible={toggleWidgetSettingVisible}
        search={search}
        updateSearch={refresh}
      />
      <StyledWrapper>
        <Suspense fallback={<Loading tip="搜索模块加载中..." />}>
          <div className="search">
            {cloneElement(SearchMap[search], {
              lang
            })}
          </div>
        </Suspense>
      </StyledWrapper>
    </>
  );
}

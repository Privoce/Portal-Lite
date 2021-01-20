// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { DndProvider } from 'react-dnd';

// import { HTML5Backend } from 'react-dnd-html5-backend';
import StyledWrapper from './styled';
import Loading from '../../component/Loading';

// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import { useNavData, useSearchEngine, useContextMenu } from '../../hooks';

const Setting = lazy(() => import('../../component/Setting'));
const Feedback = lazy(() => import('../../component/Feedback'));
const BaiduSearch = lazy(() => import('../../component/Searchs/Baidu'));
const GoogleSearch = lazy(() => import('../../component/Searchs/Google'));
const BingSearch = lazy(() => import('../../component/Searchs/Bing'));
const WidgetSection = lazy(() => import('./WidgetSection'));
const NavSection = lazy(() => import('./NavSection'));
const SearchMap = {
  baidu: <BaiduSearch />,
  google: <GoogleSearch />,
  bing: <BingSearch />
};
export default function Home() {
  const { search, updateSearch } = useSearchEngine();
  const { menuVisible, position, widget, showMenu } = useContextMenu(false);
  const { data: navs, addNav, removeNav, updateNavs } = useNavData();
  const removeCurrNav = (w) => {
    const { url } = w;
    console.log({ w });
    removeNav(url);
  };

  return (
    <Suspense fallback={<Loading />}>
      <StyledWrapper>
        <Setting search={search} updateSearch={updateSearch} />
        <Feedback />
        {/* <Account /> */}
        {menuVisible && <ContextMenu {...position} currApp={widget} removeApp={removeCurrNav} />}
        <Suspense fallback={<Loading tip="搜索模块加载中..." />}>
          <div className="search">{SearchMap[search]}</div>
        </Suspense>
        {/* <NavSection showMenu={showMenu} /> */}
        <Suspense fallback={<Loading tip="导航模块加载中..." />}>
          <NavSection navs={navs} addNav={addNav} updateNavs={updateNavs} showMenu={showMenu} />
        </Suspense>
        <Suspense fallback={<Loading tip="小组件模块加载中..." />}>
          {/* <DndProvider backend={HTML5Backend}> */}
          <WidgetSection />
          {/* </DndProvider> */}
        </Suspense>
      </StyledWrapper>
    </Suspense>
  );
}

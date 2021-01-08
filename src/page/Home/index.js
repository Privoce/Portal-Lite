// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { DndProvider } from 'react-dnd';

// import { HTML5Backend } from 'react-dnd-html5-backend';
import StyledWrapper from './styled';
import Loading from '../../component/Loading';

// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import { useAppData, useSearchEngine, useContextMenu } from '../../hooks';

const Setting = lazy(() => import('../../component/Setting'));
const Feedback = lazy(() => import('../../component/Feedback'));
const BaiduSearch = lazy(() => import('../../component/Searchs/Baidu'));
const GoogleSearch = lazy(() => import('../../component/Searchs/Google'));
const BingSearch = lazy(() => import('../../component/Searchs/Bing'));
const WidgetSection = lazy(() => import('./WidgetSection'));
const ToolSection = lazy(() => import('./ToolSection'));
const NavSection = lazy(() => import('./NavSection'));
const SearchMap = {
  baidu: <BaiduSearch />,
  google: <GoogleSearch />,
  bing: <BingSearch />
};
export default function Home() {
  const { search, updateSearch } = useSearchEngine();
  const { menuVisible, position, widget, showMenu } = useContextMenu(false);
  const {
    data: navs,
    addApp: addNav,
    removeApp: removeNav,
    updateAppData: updateNavs
  } = useAppData();
  const {
    data: tools,
    addApp: addTool,
    removeApp: removeTool,
    updateAppData: updateTools
  } = useAppData('tool');
  const removeApp = (w) => {
    const { url } = w;
    console.log({ w });
    if (w.tool) {
      console.log('remove tool');
      removeTool(url);
    } else {
      removeNav(url);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <StyledWrapper>
        <Setting search={search} updateSearch={updateSearch} />
        <Feedback />
        {/* <Account /> */}
        {menuVisible && <ContextMenu {...position} currApp={widget} removeApp={removeApp} />}
        {/* <select
          name="f"
          id=""
          onChange={({ target: { value } }) => {
            console.log({ value });
            updateSearch(value);
          }}
        >
          <option value="baidu">b</option>
          <option value="google">g</option>
          <option value="bing">b</option>
        </select> */}
        <Suspense fallback={<Loading />}>
          <div className="search">{SearchMap[search]}</div>
        </Suspense>
        {/* <NavSection showMenu={showMenu} /> */}
        <NavSection navs={navs} addNav={addNav} updateNavs={updateNavs} showMenu={showMenu} />
        <ToolSection
          tools={tools}
          addTool={addTool}
          updateTools={updateTools}
          showMenu={showMenu}
        />
        {/* <DndProvider backend={HTML5Backend}> */}
        <WidgetSection />
        {/* </DndProvider> */}
      </StyledWrapper>
    </Suspense>
  );
}

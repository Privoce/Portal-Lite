// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { DndProvider } from 'react-dnd';

// import { HTML5Backend } from 'react-dnd-html5-backend';
import StyledWrapper from './styled';
import Loading from '../../component/Loading';

// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import { useAppData } from '../../hooks';

import { useContextMenu } from '../../hooks';

const Feedback = lazy(() => import('../../component/Feedback'));
const BSearch = lazy(() => import('../../component/BaiduSearch'));
const WidgetSection = lazy(() => import('./WidgetSection'));
const ToolSection = lazy(() => import('./ToolSection'));
const NavSection = lazy(() => import('./NavSection'));
export default function Home() {
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
        <Feedback />
        {/* <Account /> */}
        {menuVisible && <ContextMenu {...position} currApp={widget} removeApp={removeApp} />}
        <div className="search">
          <BSearch />
        </div>
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

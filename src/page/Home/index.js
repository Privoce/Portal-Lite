// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { DndProvider } from 'react-dnd';

// import { HTML5Backend } from 'react-dnd-html5-backend';
import StyledWrapper from './styled';

import BSearch from '../../component/BaiduSearch';
// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import { useAppData } from '../../hooks';

import { useContextMenu } from '../../hooks';

import WidgetSection from './WidgetSection';
import ToolSection from './ToolSection';
import NavSection from './NavSection';
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
    <StyledWrapper>
      {/* <Account /> */}
      {menuVisible && <ContextMenu {...position} currApp={widget} removeApp={removeApp} />}
      <div className="search">
        <BSearch />
      </div>
      {/* <NavSection showMenu={showMenu} /> */}
      <NavSection navs={navs} addNav={addNav} updateNavs={updateNavs} showMenu={showMenu} />
      <ToolSection tools={tools} addTool={addTool} updateTools={updateTools} showMenu={showMenu} />
      {/* <DndProvider backend={HTML5Backend}> */}
      <WidgetSection />
      {/* </DndProvider> */}
    </StyledWrapper>
  );
}

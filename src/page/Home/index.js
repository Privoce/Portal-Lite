// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import StyledWrapper from './styled';
import BSearch from '../../component/BaiduSearch';
// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';

import GithubTrending from '../../widgets/GithubTrending';
import YinNote from '../../widgets/YinNote';
import WeiboHot from '../../widgets/WeiboHot';
import { useContextMenu, useAppData } from '../../hooks';
import GithubDashboard from '../../widgets/GithubDashboard';
import WidgetWrapper from './WidgetWrapper';
export default function Home() {
  // const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleType, setModalVisibleType] = useState('');
  const [currWidget, setCurrWidget] = useState(undefined);
  const {
    data: webapps,
    addApp: addWebapp,
    removeApp: removeWebapp,
    updateAppData: updateWebapps
  } = useAppData();
  const {
    data: tools,
    addApp: addTool,
    removeApp: removeTool,
    updateAppData: updateTools
  } = useAppData('tool');

  const { menuVisible, position, widget, showMenu } = useContextMenu(false);
  // const toggleModalVisible = (evt) => {
  //   evt.preventDefault();
  //   setModalVisible((prev) => !prev);
  // };
  const updateModalVisibleType = (type) => {
    // evt.preventDefault();
    setModalVisibleType(type);
  };

  const removeApp = (w) => {
    const { url } = w;
    console.log({ w });
    if (w.tool) {
      console.log('remove tool');
      removeTool(url);
    } else {
      removeWebapp(url);
    }
  };
  const handleWidgetClick = (w) => {
    if (w.url) {
      if (w.frame) {
        setCurrWidget(w);
      } else {
        window.open(w.url, '_blank');
      }
    }
  };
  const handleNavDragEnd = (result) => {
    console.log({ result });
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    if (source.droppableId == 'nav-droppable') {
      let tmpItem = webapps.splice(source.index, 1);
      webapps.splice(destination.index, 0, tmpItem[0]);
      console.log({ webapps });
      updateWebapps(webapps);
    } else {
      let tmpItem = tools.splice(source.index, 1);
      tools.splice(destination.index, 0, tmpItem[0]);
      console.log({ tools });
      updateTools(tools);
    }
  };
  return (
    <StyledWrapper>
      {/* <Account /> */}
      {menuVisible && <ContextMenu {...position} currApp={widget} removeApp={removeApp} />}
      <div className="search">
        <BSearch />
      </div>
      <section className="block">
        <h2 className="header">常用导航</h2>
        <DragDropContext onDragEnd={handleNavDragEnd}>
          <Droppable droppableId="nav-droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                className="widgets"
                {...provided.droppableProps}
                ref={provided.innerRef}
                data-drag-over={snapshot.isDraggingOver}
              >
                {webapps.map((s, index) => {
                  return (
                    <Draggable key={s.title} draggableId={s.title} index={index}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            data-dragging={snapshot.isDragging}
                          >
                            <Widget
                              // key={s.title}
                              onClick={handleWidgetClick.bind(null, s)}
                              showMenu={showMenu}
                              updateCurrAPP={setCurrWidget}
                              data={s}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
                <Widget add onClick={updateModalVisibleType.bind(null, 'nav')} />
                {/* 填充物 */}
                {/* {new Array(3).fill(1).map((item, idx) => {
            return <div style={{ width: '1.8rem', height: '1.35rem' }} key={idx} />;
          })} */}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </section>
      <section className="block one_line">
        <h2 className="header">实用工具</h2>
        <DragDropContext onDragEnd={handleNavDragEnd}>
          <Droppable droppableId="tool-droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                className="widgets"
                {...provided.droppableProps}
                ref={provided.innerRef}
                data-drag-over={snapshot.isDraggingOver}
              >
                {tools.map((s, index) => {
                  return (
                    <Draggable key={s.title} draggableId={s.title} index={index}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            data-dragging={snapshot.isDragging}
                          >
                            <Widget
                              onClick={handleWidgetClick.bind(null, s)}
                              showMenu={showMenu}
                              updateCurrAPP={setCurrWidget}
                              data={s}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
                <Widget add type="tool" onClick={updateModalVisibleType.bind(null, 'tool')} />
                {/* <Widget add onClick={toggleModalVisible} /> */}
                {/* 填充物 */}
                {/* {new Array(3).fill(1).map((item, idx) => {
            return <div style={{ width: '1.8rem', height: '1.35rem' }} key={idx} />;
          })} */}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </section>
      <section className="block">
        <h2 className="header">我的小组件</h2>
        <div className="widgets">
          <WidgetWrapper title="Github热门">
            <GithubTrending />
          </WidgetWrapper>
          <WidgetWrapper title="Github个人仓库">
            <GithubDashboard />
          </WidgetWrapper>
          <WidgetWrapper title="微博热搜">
            <WeiboHot />
          </WidgetWrapper>
          <WidgetWrapper title="印象笔记">
            <YinNote />
          </WidgetWrapper>
        </div>
      </section>
      {modalVisibleType ? (
        <Modal
          type={modalVisibleType}
          addApp={modalVisibleType == 'nav' ? addWebapp : addTool}
          resetModalVisible={updateModalVisibleType.bind(null, '')}
        />
      ) : null}
      {currWidget ? (
        <PreviewModal
          app={currWidget}
          resetCurrApp={() => {
            setCurrWidget(undefined);
          }}
        ></PreviewModal>
      ) : null}
    </StyledWrapper>
  );
}

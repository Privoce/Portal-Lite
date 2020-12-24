// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import StyledWrapper from './styled';
import BSearch from '../../component/BaiduSearch';
// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import ToolModal from '../../component/ToolModal';
import PreviewModal from '../../component/PreviewModal';

import GithubTrending from '../../widgets/GithubTrending';
import YinNote from '../../widgets/YinNote';
import WeiboHot from '../../widgets/WeiboHot';
import GoAuth from '../../component/GoAuth';
import { useContextMenu } from '../../hooks';
import GithubDashboard from '../../widgets/GithubDashboard';
import WidgetWrapper from './WidgetWrapper';
import { Sites, Tools } from './data';
const Widgets = {
  'github-trending': <GithubTrending />,
  'github-dashboard': <GithubDashboard />
};
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [toolModalVisible, setToolModalVisible] = useState(false);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [currWidget, setCurrWidget] = useState({});
  const [currFrame, setCurrFrame] = useState(null);
  const [tools, setTools] = useState(Tools);
  const [sites, setSites] = useState(Sites);
  const { menuVisible, position, showMenu } = useContextMenu(false);
  const toggleModalVisible = (evt) => {
    evt.preventDefault();
    setModalVisible((prev) => !prev);
  };
  const togglePreviewModalVisible = (app) => {
    setPreviewModalVisible((prev) => {
      if (prev == false) {
        setCurrFrame(app);
      }
      return !prev;
    });
  };
  const toggleToolModalVisible = () => {
    setToolModalVisible((prev) => {
      return !prev;
    });
  };
  const handleWidgetClick = (w) => {
    if (w.url) {
      if (w.frame) {
        togglePreviewModalVisible(w);
      } else {
        window.open(w.url, '_blank');
      }
    } else {
      setCurrWidget(w);
      toggleToolModalVisible();
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
      let tmpItem = sites.splice(source.index, 1);
      sites.splice(destination.index, 0, tmpItem[0]);
      console.log({ sites });
      setSites(sites);
    } else {
      let tmpItem = tools.splice(source.index, 1);
      tools.splice(destination.index, 0, tmpItem[0]);
      console.log({ tools });
      setTools(tools);
    }
  };
  return (
    <StyledWrapper>
      {/* <Account /> */}
      {menuVisible && <ContextMenu {...position} />}
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
                {sites.map((s, index) => {
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
                <Widget add onClick={toggleModalVisible} />
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
                <Widget add type="tool" onClick={toggleModalVisible} />
                {/* <Widget add onClick={toggleModalVisible} /> */}
                {/* 填充物 */}
                {/* {new Array(3).fill(1).map((item, idx) => {
            return <div style={{ width: '1.8rem', height: '1.35rem' }} key={idx} />;
          })} */}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {/* <div className="widgets">
          {Tools.map((t) => {
            return (
              <Widget
                key={t.title}
                onClick={handleWidgetClick.bind(null, t)}
                showMenu={showMenu}
                updateCurrAPP={setCurrWidget}
                data={t}
              />
            );
          })}
          <Widget add type="tool" onClick={toggleModalVisible} />
        </div> */}
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
          <WidgetWrapper title="印象笔记">
            <YinNote />
          </WidgetWrapper>
          <WidgetWrapper title="微博热搜">
            <WeiboHot />
          </WidgetWrapper>
          <WidgetWrapper title="Github 仓库">
            <GoAuth />
          </WidgetWrapper>
        </div>
      </section>
      {/* <button onClick={toggleModalVisible} className="add_widget">
        添加小组件
      </button> */}
      <Modal visible={modalVisible} toggleVisible={toggleModalVisible} />
      <ToolModal app={currWidget} visible={toolModalVisible} toggleVisible={toggleToolModalVisible}>
        {Widgets[currWidget.widget]}
      </ToolModal>
      <PreviewModal
        app={currFrame || {}}
        visible={previewModalVisible}
        toggleVisible={togglePreviewModalVisible}
      ></PreviewModal>
    </StyledWrapper>
  );
}

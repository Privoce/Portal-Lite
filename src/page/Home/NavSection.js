import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';

export default function NavSection({ navs, addNav, updateNavs, showMenu }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleNavDragEnd = (result) => {
    console.log({ result });
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    let tmpItem = navs.splice(source.index, 1);
    navs.splice(destination.index, 0, tmpItem[0]);
    console.log({ navs });
    updateNavs(navs);
  };
  const handleBoxClick = (w) => {
    // if (w.frame) {
    //   setCurrNav(w);
    // } else {
    // }
    window.open(w.url, '_blank');
  };
  return (
    <>
      <section className="block">
        <h2 className="header">常用导航</h2>
        <DragDropContext onDragEnd={handleNavDragEnd}>
          <Droppable droppableId="nav-droppable">
            {(provided, snapshot) => (
              <div
                className="boxes"
                {...provided.droppableProps}
                ref={provided.innerRef}
                data-drag-over={snapshot.isDraggingOver}
              >
                {navs.map((s, index) => {
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
                              onClick={handleBoxClick.bind(null, s)}
                              showMenu={showMenu}
                              data={s}
                            />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
                <Widget add type="nav" onClick={setModalVisible.bind(null, true)} />
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
      {modalVisible ? (
        <Modal type={'nav'} addApp={addNav} resetModalVisible={setModalVisible.bind(null, false)} />
      ) : null}
    </>
  );
}

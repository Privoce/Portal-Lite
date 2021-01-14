import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .header {
    font-family: PingFangSC-Medium, PingFang SC;
    font-size: 0.16rem;
    font-weight: 500;
    color: #333;
    line-height: 0.25rem;
    margin-left: 0.25rem;
    margin-bottom: 0.2rem;
    align-self: flex-start;
    cursor: grabbing;
    user-select: none;
  }
  .boxes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;
    padding: 0 0.125rem;

    > div {
      margin-left: 0.125rem;
      margin-right: 0.125rem;
    }
  }
  &.one_line {
    .header {
      margin-bottom: -0.125rem;
    }
    .boxes {
      flex-wrap: nowrap;
      overflow: scroll;
      padding-top: 0.25rem;
    }
  }
`;
export default function NavSection({ navs, addNav, updateNavs, showMenu }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currFrame, setCurrFrame] = useState(null);
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
    if (w.frame) {
      console.log({ w });
      setCurrFrame(w);
    } else {
      window.open(w.url, '_blank');
    }
  };
  return (
    <>
      <StyledSection>
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
      </StyledSection>
      {modalVisible ? (
        <Modal addApp={addNav} resetModalVisible={setModalVisible.bind(null, false)} />
      ) : null}
      {currFrame ? (
        <PreviewModal
          app={currFrame}
          resetCurrApp={() => {
            setCurrFrame(null);
          }}
        ></PreviewModal>
      ) : null}
    </>
  );
}

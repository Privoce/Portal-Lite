import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Nav from '../../component/NavItem';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .boxes {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1.28rem;
    /* padding: 0 0.125rem; */
    margin-bottom: 0.64rem;
    @media (min-width: 320px) and (max-width: 860px) {
      margin-right: 1.6rem;
      margin-left: 1.6rem;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 0.5rem;
      > div {
        margin: 0 auto;
      }
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
                            <Nav
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
                <Nav add onClick={setModalVisible.bind(null, true)} />
                {/* <Nav add onClick={toggleModalVisible} /> */}
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

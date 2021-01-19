import { useState } from 'react';
// import { useDrop } from 'react-dnd';

// import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import { useWidgets } from '../../hooks';
import WidgetWrapper from '../../widgets/Common/WidgetWrapper';
import { Widgets } from '../../data';
import ModalWidgetList from '../../component/ModalWidgetList';
const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 0.6rem;
  .widgets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.28rem;
    grid-auto-flow: row dense;
    grid-auto-rows: 3.62rem;
    .large {
      grid-row: auto / span 2;
    }
    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 0.5rem;
      > div {
        margin: 0 auto;
      }
    }
  }
  .add_widget {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.14rem;
    font-weight: 400;
    color: #333;
    line-height: 0.25rem;
  }
`;
export default function WidgetSection() {
  const { widgets, removeWidget, updateWidgetData, addWidget } = useWidgets();
  const [modalVisible, setModalVisible] = useState(false);
  // const [, drop] = useDrop({ accept: 'box' });
  const toggleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };
  return (
    <StyledSection>
      <div className="widgets">
        {widgets.map((w) => {
          const obj = Widgets[w];
          const { comp: RealWidget, title, compact = false, disableScroll, size } = obj;
          return (
            <WidgetWrapper
              widgets={widgets}
              disableScroll={disableScroll}
              name={w}
              size={size}
              update={updateWidgetData}
              removeWidget={removeWidget.bind(null, w)}
              key={w}
              compact={compact}
              title={title}
            >
              {RealWidget}
            </WidgetWrapper>
          );
        })}
      </div>
      <button onClick={toggleModalVisible} className="add_widget">
        添加小组件
      </button>
      {modalVisible && (
        <ModalWidgetList
          addedWidgets={widgets}
          addWidget={addWidget}
          resetModalVisible={toggleModalVisible}
        />
      )}
    </StyledSection>
  );
}

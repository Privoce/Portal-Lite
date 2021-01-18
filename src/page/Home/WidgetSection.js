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
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;

    > div:nth-child(odd) {
      margin-right: 1.28rem;
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

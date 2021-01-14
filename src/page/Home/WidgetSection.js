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
  .widgets {
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
      <h2 className="header">小组件</h2>
      <div className="widgets">
        {widgets.map((w) => {
          const obj = Widgets[w];
          const { comp: RealWidget, title, compact = false, disableScroll } = obj;
          return (
            <WidgetWrapper
              widgets={widgets}
              disableScroll={disableScroll}
              name={w}
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

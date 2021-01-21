import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWidgets } from '../../hooks';
import WidgetWrapper from '../../widgets/Common/WidgetWrapper';
import { Widgets } from '../../data';
import ModalWidgetList from '../../component/ModalWidgetList';
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 0.6rem;
  .widgets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.28rem;
    grid-auto-flow: row dense;
    grid-auto-rows: 3.62rem;
    > div {
      /* user-select: none; */
      transition: transform 0.5s;
      &.ghost {
        opacity: 0.1;
      }
      &.choosen {
        cursor: grabbing;
        transform: scale(0.9);
      }
      &.large {
        grid-row: auto / span 2;
      }
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
  useEffect(() => {
    // 全局存储
    window.WIDGET_LIST = widgets;
    let widgetContainer = document.querySelector('#widget-container');
    Sortable.create(widgetContainer, {
      // handle: '.title',
      delay: 300,
      // animation: 500,
      // easing: 'cubic-bezier(1, 0, 0, 1)',
      ghostClass: 'ghost',
      dragClass: 'drag',
      chosenClass: 'choosen',
      // Element is chosen
      onChoose: (/**Event*/ evt) => {
        console.log('on choose', evt.oldIndex);
      },

      // Element dragging started
      onStart: (/**Event*/ evt) => {
        console.log('on start', evt.oldIndex);
      },
      // Element dragging ended
      onEnd: function (/**Event*/ evt) {
        const { item, to, from, oldIndex, newIndex } = evt;
        console.log('on,end', {
          item,
          to,
          from,
          oldIndex,
          newIndex
        });
        // 回归原位
        if (oldIndex == newIndex) return;
        let tmpWidgets = [...window.WIDGET_LIST];
        let [tmpItem] = tmpWidgets.splice(oldIndex, 1);
        if (tmpItem) {
          tmpWidgets.splice(newIndex, 0, tmpItem);
          // console.log({ tmpWidgets });
          updateWidgetData(tmpWidgets);
        }
      },
      // Called when creating a clone of element
      onClone: function (/**Event*/ evt) {
        const { item, clone } = evt;
        clone.style.opacity = 0.2;
        console.log('on clone', { item, clone });
      }
    });
  }, [widgets]);
  return (
    <StyledSection>
      <div className="widgets" id="widget-container">
        {widgets.map((w) => {
          const obj = Widgets[w];
          const {
            comp: RealWidget,
            title,
            compact = false,
            disableScroll,
            sizes,
            defaultSize
          } = obj;
          return (
            <WidgetWrapper
              widgets={widgets}
              disableScroll={disableScroll}
              name={w}
              defaultSize={defaultSize}
              sizes={sizes}
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

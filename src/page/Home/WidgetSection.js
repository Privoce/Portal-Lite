import { useEffect } from 'react';
import styled from 'styled-components';
import WidgetWrapper from '../../widgets/Common/WidgetWrapper';
import { Widgets } from '../../data';
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  padding-top: 0.2rem;
  padding-bottom: 0.6rem;
  .widgets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.58rem;
    grid-auto-flow: row dense;
    grid-auto-rows: auto;
    > .widget {
      /* user-select: none; */
      transition: transform 0.5s;
      &.ghost {
        opacity: 0.1;
      }
      &.choosen {
        cursor: grabbing;
        transform: scale(0.98);
      }
      &.large {
        grid-row: auto / span 2;
      }
      &[type='nav'] {
        grid-area: auto / span 2;
      }
      &[type='search'] {
        grid-area: span 1 / span 2;
      }
    }

    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: 1fr;
      grid-column-gap: 0.5rem;
      > .widget {
        margin: 0 auto;
        .container {
          width: 96%;
        }
        &[type='nav'] {
          /* width: 100%; */
          grid-area: auto / auto;
        }
        &[type='search'] {
          /* width: 100%; */
          grid-area: span 1 / auto;
        }
      }
    }
  }
`;
export default function WidgetSection({ widgets, updateWidgetData, removeWidget }) {
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
        console.log('on choose', evt);
      },
      // Element is unchosen
      onUnchoose: (/**Event*/ evt) => {
        console.log('on unchoose', evt.oldIndex);
      },

      // Element dragging started
      onStart: (/**Event*/ evt) => {
        console.log('on start', evt.oldIndex);
      },
      // Element dragging ended
      onEnd: function (/**Event*/ evt) {
        const { item, to, from, oldIndex, newIndex } = evt;
        console.log('on end', {
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
        // item.classList.add('cloned');
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
          const { type, comp, title, compact = false, disableScroll, sizes, defaultSize } = obj;
          return (
            <WidgetWrapper
              type={type}
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
              {comp({ name: w })}
            </WidgetWrapper>
          );
        })}
      </div>
    </StyledSection>
  );
}

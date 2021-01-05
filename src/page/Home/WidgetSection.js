// import { useState } from 'react';
// import { useDrop } from 'react-dnd';

// import { HTML5Backend } from 'react-dnd-html5-backend';
import { useWidgets } from '../../hooks';
import WidgetWrapper from './WidgetWrapper';
import { Widgets } from '../../data';

export default function WidgetSection() {
  const { widgets, removeWidget, updateWidgetData } = useWidgets();
  // const [, drop] = useDrop({ accept: 'box' });
  return (
    <section className="block">
      <h2 className="header">我的小组件</h2>
      <div className="boxes">
        {widgets.map((w) => {
          const obj = Widgets[w];
          const { comp: RealWidget, title, compact = false } = obj;
          return (
            <WidgetWrapper
              widgets={widgets}
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
    </section>
  );
}

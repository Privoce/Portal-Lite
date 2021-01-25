// import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Widgets } from '../../data';
import WidgetWrapper from '../../widgets/Common/WidgetWrapper';
const StyledWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  .widget {
    margin: 0 auto;
    > .title {
      display: none;
    }
  }
`;
export default function Widget() {
  const { widget } = useParams();
  console.log({ widget });
  const obj = Widgets[widget] || null;

  if (!obj) return '小组件不存在';
  const { comp, title, compact = false, disableScroll, sizes, defaultSize, type } = obj;
  return (
    <StyledWrapper>
      <WidgetWrapper
        type={type}
        standalone={true}
        disableScroll={disableScroll}
        name={widget}
        defaultSize={defaultSize}
        sizes={sizes}
        // update={updateWidgetData}
        // removeWidget={removeWidget.bind(null, w)}
        compact={compact}
        title={title}
      >
        {comp({ name: widget })}
      </WidgetWrapper>
    </StyledWrapper>
  );
}

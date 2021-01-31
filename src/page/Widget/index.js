// import { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BackHome from './BackHome';
import { Widgets } from '../../data';
import WidgetWrapper from '../../widgets/Common/WidgetWrapper';
const StyledWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .widget {
    margin: 0 auto;
  }
  &.third {
    .widget {
      > .title {
        display: none;
      }
    }
  }
`;
export default function Widget() {
  const { widget } = useParams();
  const { search } = useLocation();
  let from = new URLSearchParams(search).get('from');
  console.log({ widget, from });
  // console.log(location);
  const obj = Widgets[widget] || null;

  if (!obj) return '小组件不存在';
  const { comp, title, compact = false, disableScroll, sizes, defaultSize, type } = obj;
  return (
    <StyledWrapper className={from}>
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
      {from == 'home' && <BackHome />}
    </StyledWrapper>
  );
}

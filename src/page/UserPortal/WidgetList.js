// import { useState, useEffect, Children, cloneElement } from 'react';
import styled from 'styled-components';
import WidgetWrapper from '../../widgets/Common/Wrapper';
import { Widgets } from '../../data';
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 0.6rem;
  min-height: 80vh;

  .widgets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.58rem;
    grid-auto-flow: row dense;
    grid-auto-rows: auto;
    > .widget {
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
export default function WidgetSection({ keys = [], data }) {
  return (
    <StyledSection>
      <div className="widgets">
        {keys.map((w) => {
          const obj = Widgets[w] || null;
          if (!obj) return null;
          // 过滤掉不可分享的组件
          let canShare = data && data[w] && data[w].share;
          console.log({ w, canShare });
          if (!canShare) return null;
          const { type, comp, title, compact = false, disableScroll, defaultSize } = obj;
          return (
            <WidgetWrapper
              data={data && data[w]}
              readonly={true}
              type={type}
              disableScroll={disableScroll}
              name={w}
              defaultSize={defaultSize}
              key={w}
              compact={compact}
              title={title}
            >
              {comp}
            </WidgetWrapper>
          );
        })}
      </div>
    </StyledSection>
  );
}

import { useState, useEffect, Children, cloneElement } from 'react';
import styled from 'styled-components';
import WidgetWrapper from '../../widgets/Common/Wrapper';
import { Widgets } from '../../data';
import { useWidgets } from '../../hooks';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 0.6rem;
  min-height: 80vh;
  &.single {
    display: flex;
    align-items: center;
  }
  .widget {
    margin: 0 auto;
    .tip {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 1.5rem;
        color: #ff9dac;
        margin-bottom: 0.2rem;
      }
      .txt {
        font-weight: bold;
        font-size: 0.25rem;
        color: #ccc;
      }
    }
  }
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
export default function WidgetSection({ keys = null, data, single }) {
  const { widgets } = useWidgets(keys);
  const [singleWidget, setSingleWidget] = useState(null);
  console.log({ keys, widgets });
  useEffect(() => {
    if (single) {
      const [key] = keys;

      setSingleWidget({ key, data, obj: Widgets[key] });
    }
  }, [single]);
  return (
    <StyledSection className={single ? 'single' : ''}>
      {singleWidget ? (
        <div className="widget">
          {data[singleWidget.key].share ? (
            <WidgetWrapper
              data={singleWidget.data}
              readonly={true}
              type={singleWidget.obj.type}
              disableScroll={singleWidget.obj.disableScroll}
              name={singleWidget.key}
              defaultSize={singleWidget.obj.defaultSize}
              key={singleWidget.key}
              compact={singleWidget.obj.compact}
              title={singleWidget.obj.title}
            >
              {Children.map(singleWidget.obj.comp, (child) =>
                cloneElement(child, {
                  name: singleWidget.key
                })
              )}
            </WidgetWrapper>
          ) : (
            <div className="tip">
              <RiGitRepositoryPrivateLine className="icon" />
              <p className="txt">该小组件被设置为不可见</p>
            </div>
          )}
        </div>
      ) : (
        <div className="widgets">
          {widgets.map((w) => {
            const obj = Widgets[w] || null;
            if (!obj) return null;
            // 过滤掉不可分享的组件
            let canShare = data && data[w] && data[w].share;
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
      )}
    </StyledSection>
  );
}

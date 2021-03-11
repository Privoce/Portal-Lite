import { Children, cloneElement } from 'react';
import styled from 'styled-components';
import WidgetWrapper from '../../widgets/Common/Wrapper';
import { Widgets } from '../../data';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
const StyledSection = styled.section`
  position: relative;
  width: 100%;
  padding-bottom: 0.6rem;
  min-height: 80vh;

  &.single {
    display: flex;
    align-items: center;
    .widget {
      margin: 0 auto;
    }
  }
  .widget {
    margin: 0;
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
`;
export default function WidgetSection({ widgetKey = null, data = {} }) {
  if (!widgetKey) return null;
  let obj = Widgets[widgetKey];
  return (
    <StyledSection>
      <div className="widget">
        {data[widgetKey].share ? (
          <WidgetWrapper
            data={data}
            readonly={true}
            type={obj.type}
            disableScroll={obj.disableScroll}
            name={widgetKey}
            defaultSize={obj.defaultSize}
            compact={obj.compact}
            title={obj.title}
          >
            {Children.map(obj.comp, (child) =>
              cloneElement(child, {
                name: widgetKey
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
    </StyledSection>
  );
}

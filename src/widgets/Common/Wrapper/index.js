import { useState, useRef, Children, useCallback, cloneElement, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import IconThreeDots from '../Icons/ThreeDots';
import ErrorBoundary from './ErrorBoundary';
import StyledWrapper from './styled';
import Loading from '../../../component/Loading';
import IconClose from '../Icons/Close';

import { useWidgetSettings } from '../../../hooks';
// import IconClose from './Icons/CircleClose';
const SizeMap = {
  middle: '中',
  large: '大',
  mini: '小'
};
const isExt = window.IS_CHROME_EXT;
export default function WidgetWrapper({
  type = 'widget',
  enableSetting = false,
  standalone = false,
  name,
  disableScroll = false,
  removeWidget,
  title = '组件标题',
  compact,
  defaultSize = 'middle',
  sizes = null,
  children = null
}) {
  const compContainer = useRef(null);
  const { getWidgetSetting, updateWidgetSetting } = useWidgetSettings();
  const [currSize, setCurrSize] = useState(getWidgetSetting({ name, key: 'size' }) || defaultSize);
  const [settingVisible, setSettingVisible] = useState(false);
  const [widgetSettingVisible, setWidgetSettingVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const updateCurrSize = (key, { size }) => {
    console.log({ key, size });
    setCurrSize(size);
    updateWidgetSetting({ name: key, key: 'size', data: size });
  };
  const handleRemove = (widgetName) => {
    let confirmed = confirm(`确定移除小组件：${widgetName}？`);
    if (confirmed) {
      removeWidget();
    }
  };
  const handleFullscreen = () => {
    //to do
    compContainer.current.requestFullscreen();
    toggleSettingListVisible();
  };
  // console.log({ compact });
  const toggleSettingListVisible = () => {
    setSettingVisible((prev) => !prev);
  };
  const toggleWidgetSettingVisible = useCallback(() => {
    setWidgetSettingVisible((prev) => {
      return !prev;
    });
  }, []);
  // 只有一个size选择也不显示
  const hasSizes = sizes && sizes.length > 1;
  return (
    <StyledWrapper
      ref={compContainer}
      className={`widget ${compact ? 'compact' : ''} ${
        disableScroll ? 'noscroll' : ''
      }  ${currSize} ${hasSizes && sizes.includes('large') ? 'largable' : ''} ${
        settingVisible ? 'setting' : ''
      }`}
      type={type}
    >
      <div className="container" ref={ref}>
        <ErrorBoundary>
          <>
            {inView ? (
              <Suspense fallback={<Loading />}>
                {Children.map(children, (child) =>
                  cloneElement(child, {
                    name,
                    toggleWidgetSettingVisible
                  })
                )}
              </Suspense>
            ) : null}
            <div
              className={`widget_setting_wrapper ${widgetSettingVisible ? 'visible' : 'hidden'}`}
            >
              <IconClose className="close" onClick={toggleWidgetSettingVisible} />
              <div className="setting" id={`widget-${name}-setting`}></div>
            </div>
          </>
        </ErrorBoundary>
      </div>
      <div className="setting" onClick={toggleSettingListVisible}>
        <IconThreeDots />
      </div>
      {settingVisible && (
        <ul className="setting_list" onMouseLeave={toggleSettingListVisible}>
          {enableSetting && (
            <li className="item" onClick={toggleWidgetSettingVisible}>
              设置
            </li>
          )}
          {!standalone && (
            <li className="item" onClick={handleRemove.bind(null, title)}>
              移除
            </li>
          )}
          <li className="item" onClick={handleFullscreen}>
            全屏
          </li>
          {!standalone && (
            <li className="item">
              <a
                href={`${
                  isExt
                    ? `https://nicegoodthings.com/widgets/${name}?from=home`
                    : `/widgets/${name}?from=home`
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isExt ? '独立网页打开' : '新页面打开'}
              </a>
            </li>
          )}
          {hasSizes && (
            <li className="item sizes">
              {sizes.map((key) => {
                return (
                  <span
                    onClick={updateCurrSize.bind(null, name, { size: key })}
                    className={`size ${currSize == key ? 'curr' : ''}`}
                    key={key}
                  >
                    {SizeMap[key]}
                  </span>
                );
              })}
            </li>
          )}
        </ul>
      )}
      {type == 'widget' && <h2 className="title">{title}</h2>}
    </StyledWrapper>
  );
}

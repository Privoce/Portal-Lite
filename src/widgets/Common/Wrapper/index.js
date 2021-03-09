import { useState, useRef, Children, useCallback, cloneElement, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from 'uselanguage';
import { BsThreeDots } from 'react-icons/bs';
import ErrorBoundary from './ErrorBoundary';
import StyledWrapper from './styled';
import Skeleton from 'react-loading-skeleton';

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
  const {
    language: {
      words: { widget: lang, widgets }
    }
  } = useLanguage();
  const { opts: settingLang } = lang;
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
  console.log('lang', widgets[name]);
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
        <ErrorBoundary lang={{ error: lang.error, reload: lang.reload }}>
          <>
            {inView ? (
              <Suspense fallback={<Skeleton count={4} />}>
                {Children.map(children, (child) =>
                  cloneElement(child, {
                    lang: widgets[name],
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
      {/* 小组件内部设置可见判断,避免关闭按钮的UI冲突 */}
      {!widgetSettingVisible && (
        <div className="setting" onClick={toggleSettingListVisible}>
          <BsThreeDots />
        </div>
      )}
      {settingVisible && (
        <ul className="setting_list" onMouseLeave={toggleSettingListVisible}>
          {enableSetting && (
            <li className="item" onClick={toggleWidgetSettingVisible}>
              {settingLang.setting}
            </li>
          )}
          {!standalone && (
            <li className="item" onClick={handleRemove.bind(null, title)}>
              {settingLang.remove}
            </li>
          )}
          <li className="item" onClick={handleFullscreen}>
            {settingLang.fullscreen}
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
                {isExt ? settingLang.open.standalone : settingLang.open.newTab}
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
      {type == 'widget' && <h2 className="title">{widgets[name]?.title || title}</h2>}
    </StyledWrapper>
  );
}

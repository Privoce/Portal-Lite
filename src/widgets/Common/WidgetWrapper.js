import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import IconThreeDots from './Icons/ThreeDots';
import IconClose from './Icons/CircleClose';
const StyledWrapper = styled.div`
  width: 4.87rem;
  position: relative;
  .container {
    overflow-y: scroll;
    overflow-y: overlay;
    overflow-x: hidden;
    position: relative;
    width: 100%;
    max-width: 8rem;
    height: 2.34rem;
    background: #ffffff;
    box-shadow: 0rem 0.02rem 0.06rem 0rem rgba(213, 213, 213, 0.5);
    border-radius: 0.05rem;
    border: 0.01rem solid #e8e8e8;
    padding: 0.14rem 0.16rem;
    transition: all 1s;
    /* width */
    &::-webkit-scrollbar {
      width: 3px;

      /* visibility: hidden; */
      display: none;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #444;
    }
    &:hover {
      &::-webkit-scrollbar {
        display: block;
        /* visibility: visible; */
      }
    }

    .remove {
      cursor: pointer;
      bottom: 0.05rem;
    }
  }
  > .title {
    user-select: none;

    width: 100%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: #666666;
    line-height: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 0.28rem;
  }
  .setting {
    z-index: 997;

    display: flex;
    cursor: pointer;
    /* visibility: hidden; */
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    right: 0.04rem;
    top: 0;
    opacity: 0.6;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .setting_list {
    z-index: 996;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    font-size: 0.14rem;
    /* background-color: #fff; */
    background-color: #eef;
    padding: 0.14rem 0.2rem 0.12rem 0.12rem;
    user-select: none;

    .item {
      padding: 0.05rem;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: rgba(2, 2, 2, 0.6);
      }
    }
  }
  &.l .container {
    height: 4.68rem;
  }
  &.noscroll .container {
    overflow: hidden;
  }
  &.compact .container {
    padding: 0;
    /* overflow: scroll; */
    /* .setting {
      right: 0.1rem;
      top: 0.1rem;
    } */
  }
  &:fullscreen {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container {
      height: fit-content;
      width: fit-content;
      min-height: 2.4rem;
      min-width: 4.87rem;
    }
    .setting,
    .setting_list {
      display: none;
    }
  }
`;
export default function WidgetWrapper({
  disableScroll = false,
  removeWidget,
  title = '组件标题',
  compact,
  size = 'm',
  children = null
}) {
  const compContainer = useRef(null);
  const [settingVisible, setSettingVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleRemove = () => {
    let confirmed = confirm('确定删除？');
    if (confirmed) {
      removeWidget();
    }
  };
  const handleFullscreen = () => {
    //to do
    compContainer.current.requestFullscreen();
    toggleSettingListVisible();
  };
  console.log({ compact });
  const toggleSettingListVisible = () => {
    setSettingVisible((prev) => !prev);
  };
  return (
    <StyledWrapper
      ref={compContainer}
      className={`${compact ? 'compact' : ''} ${disableScroll ? 'noscroll' : ''}  ${size}`}
    >
      <div className="container" ref={ref}>
        {inView ? children : null}
      </div>
      <div className="setting" onClick={toggleSettingListVisible}>
        {settingVisible ? <IconClose width="50%" /> : <IconThreeDots />}
      </div>
      {settingVisible && (
        <ul className="setting_list">
          <li className="item" onClick={handleRemove}>
            移除
          </li>
          <li className="item" onClick={handleFullscreen}>
            全屏
          </li>
        </ul>
      )}
      <h2 className="title">{title}</h2>
    </StyledWrapper>
  );
}

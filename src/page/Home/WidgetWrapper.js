// import React from 'react'
import styled from 'styled-components';
// import { useDrag, useDrop } from 'react-dnd';
const StyledWrapper = styled.div`
  width: 4.87rem;
  .container {
    overflow: scroll;
    position: relative;
    width: 100%;
    height: 2.34rem;
    background: #ffffff;
    box-shadow: 0rem 0.02rem 0.06rem 0rem rgba(213, 213, 213, 0.5);
    border-radius: 0.05rem;
    border: 0.01rem solid #e8e8e8;
    padding: 0.14rem 0.16rem;
    .remove,
    .move {
      display: flex;
      visibility: hidden;
      position: absolute;
      right: 0.05rem;
      opacity: 0.4;
      img {
        width: 0.24rem;
      }
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      .remove,
      .move {
        visibility: visible;
      }
    }
    .move {
      cursor: grabbing;
      top: 0.05rem;
      user-select: none;
    }
    .remove {
      cursor: pointer;
      bottom: 0.05rem;
    }
  }
  > .title {
    width: 100%;
    text-align: center;
    font-size: 0.14rem;
    font-weight: 400;
    color: #666666;
    line-height: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 0.28rem;
  }
  &.l .container {
    height: 4.68rem;
  }
  &.compact .container {
    padding: 0;
    overflow: scroll;
  }
`;
export default function WidgetWrapper({
  // widgets,
  // update,
  // name,
  removeWidget,
  title = '组件标题',
  compact,
  size = 'm',
  children = null
}) {
  const handleRemove = () => {
    let confirmed = confirm('确定删除？');
    if (confirmed) {
      removeWidget();
    }
  };
  // const originalIndex = widgets.findIndex((item) => item == name);
  // const [{ opacity }, drag, preview] = useDrag({
  //   item: { type: 'box', name, originalIndex },
  //   collect: (monitor) => ({
  //     opacity: monitor.isDragging() ? 0.4 : 1
  //   }),
  //   end: (dropResult, monitor) => {
  //     const { name: droppedName, originalIndex: oglIdx } = monitor.getItem();
  //     const didDrop = monitor.didDrop();
  //     if (!didDrop) {
  //       console.log('没有放下？', droppedName);
  //       let tmpItem = widgets.splice(droppedName, 1);
  //       widgets.splice(oglIdx, 0, tmpItem[0]);
  //       console.log({ widgets });
  //       update(widgets);
  //       // moveCard(droppedName, oglIdx);
  //     }
  //   }
  // });
  // const [, drop] = useDrop({
  //   accept: 'box',
  //   canDrop: () => false,
  //   hover({ name: draggedName }) {
  //     console.log({ draggedName, name });
  //     if (draggedName !== name) {
  //       console.log('不是同一个哦！');
  //       let tmpItem = widgets.splice(name, 1);
  //       widgets.splice(draggedName, 0, tmpItem[0]);
  //       console.log({ widgets });
  //       update(widgets);
  //     }
  //   }
  // });
  console.log({ compact });
  return (
    <StyledWrapper className={`${compact ? 'compact' : ''} ${size}`}>
      <div className="container">
        {children}
        {/* <div className="move">
          <img
            draggable={false}
            src="https://gitee.com/zyanggc/oss/raw/master/works/move.png"
            alt="移动小图标"
          />
        </div> */}
        <div className="remove" onClick={handleRemove}>
          <img
            src="https://gitee.com/zyanggc/oss/raw/master/works/alter_delete.png"
            alt="删除小图标"
          />
        </div>
      </div>
      <h2 className="title">{title}</h2>
    </StyledWrapper>
  );
}

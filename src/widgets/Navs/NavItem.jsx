import { useState } from 'react';
import styled from 'styled-components';
import IconDefault from '../../asset/img/icon.logo.png';
import { MdHistory } from 'react-icons/md';
import { getDefaultIcon } from '../../util';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 0.2rem;
  position: relative;
  padding-bottom: 0.32rem;
  width: 1.08rem;
  user-select: none;

  .icon {
    position: relative;
    width: 1.08rem;
    height: 1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ bgColor }) => bgColor};

    box-shadow: 0rem 0rem 0.08rem 0rem #dfdfdf;
    border-radius: 0.24rem;
    transition: all 0.5s;
    img {
      height: 0.36rem;
    }
    .history {
      position: absolute;
      bottom: 6px;
      right: 6px;
    }
  }
  &:hover .icon {
    box-shadow: 0rem 0.08rem 0.16rem 0rem #ececec,
      0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5), 0rem 0.04rem 0.24rem 0rem #a8a8a8;
  }
  .title {
    margin: 0.1rem 0 0 0;
    font-size: 0.14rem;
    font-weight: 400;
    line-height: 0.2rem;
    text-align: center;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  &.add {
    .icon {
      background: #f9f9f9;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        background-color: #999;
      }
      &:before {
        width: 0.28rem;
        height: 2px;
      }
      &:after {
        width: 2px;
        height: 0.28rem;
      }
    }
  }
`;
export default function Nav({
  addTitle = '添加导航',
  data = {},
  showMenu = null,
  add,
  className,
  ...rest
}) {
  const { themeColor = '#333', icon = '', title = '标题', url = '', history = false, frame } = data;
  const [ico, setIco] = useState(icon);
  const handleImageError = () => {
    setIco(IconDefault);
  };
  const handleContextMenu = (evt) => {
    evt.preventDefault();
    if (showMenu) {
      // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取垂直滚动条位置
      // let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft; // 获取水平滚动条位置
      // let left = evt.clientX + scrollLeft;
      // let top = evt.clientY + scrollTop;
      let left = evt.clientX;
      let top = evt.clientY;
      console.log({ left, top });
      showMenu({ position: { left, top }, widget: data });
    }
    return false;
  };

  return (
    <StyledWrapper
      className={`inside ${add && 'add'} ${className}`}
      bgColor={themeColor}
      onContextMenu={history ? null : handleContextMenu}
      title={url}
      {...rest}
    >
      <div className="icon">
        {!add && (
          <img onError={handleImageError} src={ico ? ico : `${getDefaultIcon(url)}`} alt="logo" />
        )}
        {history && <MdHistory className="history" color="#ddd" />}
      </div>

      <h2 className="title">
        {add ? addTitle : title} {frame ? '🖥️' : ''}
      </h2>
    </StyledWrapper>
  );
}

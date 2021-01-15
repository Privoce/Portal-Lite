import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Widgets } from '../data';
import IconClose from '../asset/img/icon.close.png';

const modalRoot = document.querySelector('#modal-root');
const StyledWrapper = styled.section`
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    position: relative;
    background: #fff;
    border-radius: 0.04rem;
    /* padding: 0.7rem 0.25rem 0.35rem 0.25rem; */
    padding: 0.1rem 0.2rem 0 0.2rem;
    width: 8.16rem;
    .widgets {
      margin-top: 0.3rem;
      max-height: 90vh;
      overflow-y: overlay;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .widget {
        position: relative;
        width: 3rem;
        height: 1.44rem;
        transition: background-size 0.5s;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 0.3rem;
        border-radius: 0.05rem;
        border: 0.01rem solid #eee;
        &:nth-child(odd) {
          margin-right: 0.45rem;
        }
        .add,
        .added {
          display: flex;

          border-radius: 50%;
          background-color: #fff;
          box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
          cursor: pointer;
          width: 0.3rem;
          height: 0.3rem;
          position: absolute;
          bottom: 0.1rem;
          right: 0.1rem;
          opacity: 0;
          transition: opacity 0.8s;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .add {
          border: 1px solid #fff;
        }
        .intro {
          width: 100%;
          height: 100%;
          background-color: rgba(2, 2, 2, 0.8);
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          user-select: none;
          transition: opacity 0.5s;
          .title {
            font-size: 0.22rem;
            font-weight: 800;
            margin-bottom: 0.2rem;
          }
          .desc {
            padding: 0 0.2rem;
            line-height: 1.4;
            font-size: 0.1rem;
          }
        }
        &:hover {
          box-shadow: 0rem 0.08rem 0.16rem 0rem #ececec,
            0rem 0.02rem 0.04rem 0rem rgba(213, 213, 213, 0.5), 0rem 0.04rem 0.24rem 0rem #a8a8a8;

          /* background-size: 90%; */
          /* background-color: none; */
          .intro {
            opacity: 0;
          }
          .add,
          .added {
            opacity: 1;
          }
        }
        &.placeholder {
          border: none;
        }
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      top: 0.16rem;
      right: 0.16rem;
      width: 0.16rem;
      height: 0.16rem;
    }
    @media screen and (max-width: 414px) {
      width: 5rem;
    }
  }
`;
// let other_params = {};
export default function Modal({ resetModalVisible, addWidget, addedWidgets }) {
  const modal = useRef(null);
  useEffect(() => {
    let modalEle = modal || modal.current;
    if (modalEle) {
      disableBodyScroll(modalEle);
    }
    return () => {
      enableBodyScroll(modalEle);
    };
  }, []);
  const handleAddClick = (w) => {
    addWidget(w);
    resetModalVisible();
  };
  return (
    <ModalWrapper ref={modal}>
      <StyledWrapper>
        <div className="modal">
          <ul className="widgets">
            {Object.entries(Widgets).map(([key, widget]) => {
              const { title, description, screenshot } = widget;
              const added = addedWidgets.includes(key);
              return (
                <li className="widget" key={key} style={{ backgroundImage: `url(${screenshot})` }}>
                  <div className="intro">
                    <h2 className="title">{title}</h2>
                    <p className="desc">{description}</p>
                  </div>
                  {added ? (
                    <div className="added" title="已新增">
                      <img
                        src="https://gitee.com/zyanggc/oss/raw/master/works/icon.check.png"
                        alt="已新增组件小图标"
                      />
                    </div>
                  ) : (
                    <div className="add" onClick={handleAddClick.bind(null, key)}>
                      <img
                        src="https://gitee.com/zyanggc/oss/raw/master/works/icon.add.png"
                        alt="新增组件小图标"
                      />
                    </div>
                  )}
                </li>
              );
            })}
            {Object.entries(Widgets).length % 2 == 1 && <li className="widget placeholder"></li>}
          </ul>
          <img src={IconClose} onClick={resetModalVisible} className="close" />
        </div>
      </StyledWrapper>
    </ModalWrapper>
  );
}

const ModalWrapper = ({ children }) => {
  return createPortal(children, modalRoot);
};

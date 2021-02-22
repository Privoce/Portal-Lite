// import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { parse, differenceInSeconds } from 'date-fns';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Widgets } from '../../data';
import Item from './Item';
import IconClose from '../../asset/img/icon.close.png';

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
    width: fit-content;
    max-height: 90vh;
    max-width: 90vw;
    padding-top: 0.2rem;
    overflow: auto;
    .widgets {
      /* border-bottom: 1px solid #efefef; */
      margin-bottom: 0.2rem;
      > .title {
        font-size: 0.24rem;
        font-weight: 800;
        padding-left: 0.2rem;
        color: #555;
        /* border-bottom: 1px solid #efefef; */

        /* margin-top: 0.2rem; */
      }
      .list {
        padding: 0.3rem 0.2rem;
        padding-top: 0.15rem;
        max-height: 100vh;
        overflow-y: scroll;
        overflow-y: overlay;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.15rem;
        justify-items: center;
        @media screen and (max-width: 414px) {
          grid-template-columns: repeat(1, 1fr);
        }
        &.added {
          font-size: 0.2rem;
          display: flex;
          flex-wrap: wrap;
          .item {
            padding: 0.15rem 0.1rem;
            border-radius: 0.08rem;
            border: 1px solid #efefef;
          }
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

const isRecent = (ct, ut) => {
  if (!ct) return false;
  // 最近七天
  let durCreate = 7 * 24 * 60 * 60;
  let dateObj = parse(ct, 'yyyy-MM-dd', new Date());
  let timespan = differenceInSeconds(new Date(), dateObj);
  console.log({ ct, dateObj, durCreate, timespan });
  if (timespan < durCreate) {
    return { type: 'create' };
  }
  if (!ut) return false;
  // 最近三天
  let durUpdate = 3 * 24 * 60 * 60;
  dateObj = parse(ut, 'yyyy-MM-dd', new Date());
  timespan = differenceInSeconds(new Date(), dateObj);
  if (timespan < durUpdate) {
    return { type: 'update' };
  }
  return false;
};

// let other_params = {};
export default function Modal({ resetModalVisible, addWidget, addedWidgets }) {
  // const modal = useRef(null);
  // useEffect(() => {
  //   let modalEle = modal || modal.current;
  //   if (modalEle) {
  //     disableBodyScroll(modalEle);
  //   }
  //   return () => {
  //     enableBodyScroll(modalEle);
  //   };
  // }, []);
  const handleAddClick = (w) => {
    addWidget(w);
    // resetModalVisible();
  };
  const handleMaskClick = (evt) => {
    console.log({ evt });
    let { target } = evt;
    if (target.classList.contains('wrapper')) {
      resetModalVisible();
    }
  };
  const taggedWidgets = Object.entries(Widgets).map(([key, widget]) => {
    const added = addedWidgets.includes(key);
    return { key, added, ...widget };
  });
  const addedItems = taggedWidgets.filter((w) => w.added);
  const unAddedWidgets = taggedWidgets.filter((w) => !w.added);
  return (
    <ModalWrapper>
      <StyledWrapper className="wrapper" onClick={handleMaskClick}>
        <div className="modal">
          {addedItems.length ? (
            <div className="widgets">
              <h2 className="title">已添加的小组件 🛍️</h2>
              <ul className="list added">
                {addedItems.map(({ key, title, description }) => {
                  return (
                    <li key={key} title={description} className="item">
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          {unAddedWidgets.length ? (
            <div className="widgets">
              <h2 className="title">未添加的小组件 🛒</h2>
              <ul className="list">
                {unAddedWidgets.map(
                  ({ key, title, description, screenshot, created, updated, added }) => {
                    const recent = isRecent(created, updated);
                    return (
                      <Item
                        key={title}
                        data={{ title, description, screenshot, added, recent }}
                        addWidget={handleAddClick.bind(null, key)}
                      />
                    );
                  }
                )}
              </ul>
            </div>
          ) : null}
          <img src={IconClose} onClick={resetModalVisible} className="close" />
        </div>
      </StyledWrapper>
    </ModalWrapper>
  );
}

const ModalWrapper = ({ children }) => {
  return createPortal(children, modalRoot);
};

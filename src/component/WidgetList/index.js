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
    .widgets {
      /* margin-top: 0.3rem; */
      padding: 0.3rem 0.2rem;
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
    resetModalVisible();
  };
  return (
    <ModalWrapper>
      <StyledWrapper>
        <div className="modal">
          <ul className="widgets">
            {Object.entries(Widgets).map(([key, widget]) => {
              const { title, description, screenshot, created, updated } = widget;
              const added = addedWidgets.includes(key);
              const recent = isRecent(created, updated);
              return (
                <Item
                  key={key}
                  data={{ title, description, screenshot, added, recent }}
                  addWidget={handleAddClick.bind(null, key)}
                />
              );
            })}
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

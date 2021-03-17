import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { parse, differenceInSeconds } from 'date-fns';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLanguage } from 'uselanguage';
import OpenButton from './OpenButton';
import { Widgets } from '../../data';
import Item from './Item';

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
    height: 90vh;
    width: 80vw;
    overflow: auto;
    .tabs {
      position: relative;
      /* background-color: #fff; */
      z-index: 996;
      display: flex;
      position: sticky;
      top: 0;
      .tab {
        padding: 0.2rem 0;
        flex: 1;
        border-bottom: 1px solid #606368;
        &.selected {
          border-bottom: 3px solid #000;
        }
      }
    }
    .list {
      padding: 0.5rem 0.2rem;
      overflow-y: scroll;
      overflow-y: overlay;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.15rem;
      justify-items: center;
      @media screen and (max-width: 414px) {
        grid-template-columns: repeat(1, 1fr);
      }
      &.added {
      }
    }
    .close {
      cursor: pointer;
      position: absolute;
      z-index: 998;
      top: 0.05rem;
      right: 0.05rem;
      width: 0.4rem;
      height: 0.4rem;
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
export default function Modal({ addWidget, removeWidget, addedWidgets }) {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState('new');
  const [list, setList] = useState([]);
  useEffect(() => {
    const taggedWidgets = Object.entries(Widgets).map(([key, widget]) => {
      const added = addedWidgets.includes(key);
      return { key, added, ...widget };
    });
    let tmps = taggedWidgets.filter((w) => {
      return w.added == (tab !== 'new');
    });
    setList(tmps);
  }, [addedWidgets, tab]);
  const {
    language: {
      words: {
        modal: { widgets: lang }
      }
    }
  } = useLanguage();
  const handleAddClick = (w) => {
    addWidget(w);
    // resetModalVisible();
  };
  const handleRemoveClick = (w) => {
    removeWidget(w);
    // resetModalVisible();
  };
  const handleMaskClick = (evt) => {
    console.log({ evt });
    let { target } = evt;
    if (target.classList.contains('wrapper')) {
      toggleModalVisible();
    }
  };
  const handleTabChange = (evt) => {
    let {
      target: { dataset }
    } = evt;
    const { type } = dataset;
    if (type == tab) return;
    setTab(type);
  };
  const toggleModalVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <>
      <OpenButton openWidgetListModal={toggleModalVisible} />
      {visible ? (
        <ModalWrapper>
          <StyledWrapper className="wrapper" onClick={handleMaskClick}>
            <div className="modal">
              <div className="tabs">
                <button
                  onClick={handleTabChange}
                  className={`tab ${tab == 'new' ? 'selected' : ''}`}
                  data-type="new"
                >
                  {lang.notAdded}
                </button>
                <button
                  onClick={handleTabChange}
                  className={`tab ${tab == 'added' ? 'selected' : ''}`}
                  data-type="added"
                >
                  {lang.added}
                </button>
                <MdClose onClick={toggleModalVisible} className="close" />
              </div>
              <ul className="list">
                {list.map(({ key, title, description, screenshot, created, updated, added }) => {
                  const recent = isRecent(created, updated);
                  return (
                    <Item
                      key={title}
                      data={{ title, description, screenshot, added, recent }}
                      addWidget={handleAddClick.bind(null, key)}
                      removeWidget={handleRemoveClick.bind(null, key)}
                    />
                  );
                })}
              </ul>
            </div>
          </StyledWrapper>
        </ModalWrapper>
      ) : null}
    </>
  );
}

const ModalWrapper = ({ children }) => {
  return createPortal(children, modalRoot);
};

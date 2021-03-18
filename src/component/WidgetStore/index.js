import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { CgSmileNeutral } from 'react-icons/cg';
import { parse, differenceInSeconds } from 'date-fns';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useLanguage } from 'uselanguage';
import OpenButton from './OpenButton';
import { Widgets } from '../../data';
import Item from './Item';
import StyledWrapper from './StyledWrapper';

const modalRoot = document.querySelector('#modal-root');

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
              {list.length ? (
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
              ) : (
                <div className="empty">
                  <CgSmileNeutral color="#ffdddd" />
                  <div className="tip">Nothing</div>
                </div>
              )}
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

import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from './NavItem';
import Modal from './Modal';
import ContextMenu from './ContextMenu';

import { useNavData, useContextMenu } from '../../hooks';

import PreviewModal from './PreviewModal';
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
console.log('static', Sortable);
const AniBounceX = keyframes`
  from{
    transform:translateX(-10px);
  }
  to{
    transform:translateX(0);
  }
`;
const StyledSection = styled.section`
  width: 100%;
  padding: 0.1rem 0;
  .boxes {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: max-content;
    grid-column-gap: 0.58rem;
    /* padding: 0 0.125rem; */
    /* margin-bottom: 0.3rem; */
    justify-items: center;
    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 0;
    }
    .box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s ease;
      &.insert_before {
        animation: ${AniBounceX} 0.5s ease-in-out;
      }
      &.insert_after {
        animation: ${AniBounceX} 0.5s ease-in-out reverse;
      }
      &.droppable {
        transform: translateX(10px);
      }
      &.ghost {
        opacity: 0.1;
      }
      &.drag,
      &.choosen {
        cursor: grabbing;
        transform: scale(0.9);
        .nav-item:hover .icon {
          box-shadow: none;
          border: 2px solid #eee;
        }
      }
    }
  }
`;
// let sortable = null;
export default function Navs() {
  const { menuVisible, position, widget, showMenu } = useContextMenu(false);
  const { data: navs, addNav, removeNav, updateNavs } = useNavData();
  const [modalVisible, setModalVisible] = useState(false);
  const [currFrame, setCurrFrame] = useState(null);
  const removeCurrNav = (w) => {
    const { url } = w;
    console.log({ w });
    removeNav(url);
  };
  const handleBoxClick = (w) => {
    if (w.frame) {
      console.log({ w });
      setCurrFrame(w);
    } else {
      window.open(w.url, '_blank');
    }
  };
  useEffect(() => {
    // 全局存储
    window.WEBAPP_NAVS = navs;
    let boxContainer = document.querySelector('#nav-container');
    // if (sortable) {
    //   console.log('existed', sortable);
    //   sortable.destory();
    // }
    Sortable.create(boxContainer, {
      draggable: '.box',
      // delayOnTouchOnly: true,
      delay: 300,
      filter: '.add',
      invertSwap: true,
      // animation: 500,
      // easing: 'cubic-bezier(1, 0, 0, 1)',
      ghostClass: 'ghost',
      chosenClass: 'choosen',
      dragClass: 'drag',
      // Element is chosen
      onChoose: (/**Event*/ evt) => {
        console.log('on choose', evt.oldIndex);
      },
      // Element is unchosen
      onUnchoose: (/**Event*/ evt) => {
        // same properties as onEnd
        console.log('on unchoose', evt);
      },
      // Event when you move an item in the list or between lists
      onMove: (/**Event*/ evt) => {
        const { dragged, related, willInsertAfter } = evt;
        related.classList.remove('insert_after');
        related.classList.remove('insert_before');
        console.log('on move', { dragged, related, willInsertAfter });
        if (willInsertAfter) {
          related.classList.add('insert_after');
        } else {
          related.classList.add('insert_before');
        }
        // evt.draggedRect; // DOMRect {left, top, right, bottom}
        // evt.relatedRect; // DOMRect
        // originalEvent.clientY; // mouse position
        // return false; — for cancel
        // return -1; — insert before target
        // return 1; — insert after target
        // return true; — keep default insertion point based on the direction
        // return void; — keep default insertion point based on the direction
      },
      // Element dragging started
      onStart: (/**Event*/ evt) => {
        console.log('on start', evt.oldIndex);
      },
      // Element is removed from the list into another list
      onRemove: (/**Event*/ evt) => {
        // same properties as onEnd
        console.log('on remove', evt);
      },
      // Changed sorting within list
      onUpdate: (/**Event*/ evt) => {
        // same properties as onEnd
        console.log('on update', evt);
      },

      // Called by any change to the list (add / update / remove)
      onSort: (/**Event*/ evt) => {
        // same properties as onEnd
        console.log('on sort', evt);
      },
      // Element dragging ended
      onEnd: (/**Event*/ evt) => {
        const { item, to, from, oldIndex, newIndex } = evt;
        console.log('on end', {
          item,
          to,
          from,
          oldIndex,
          newIndex
        });
        // 回归原位
        if (oldIndex == newIndex) return;
        let tmpNavs = [...window.WEBAPP_NAVS];
        let [tmpItem] = tmpNavs.splice(oldIndex, 1);
        if (tmpItem) {
          tmpNavs.splice(newIndex, 0, tmpItem);
          // console.log({ tmpNavs });

          updateNavs(tmpNavs);
        }
        // 重新初始化
        // sortable.destory();
      },
      // Called when creating a clone of element
      onClone: function (/**Event*/ evt) {
        const { item, clone } = evt;
        clone.style.opacity = 0.2;
        console.log('on clone', { item, clone });
      }
    });
  }, [navs]);
  return (
    <>
      <StyledSection>
        {menuVisible && <ContextMenu {...position} currApp={widget} removeApp={removeCurrNav} />}
        <ul className="boxes" id={'nav-container'}>
          {navs.map((s) => {
            return (
              <li className="box" key={`nav-${s.id}`} id={`nav-${s.id}`}>
                <Nav
                  // id={`nav-${s.id}`}
                  className="nav-item"
                  key={s.url}
                  onClick={handleBoxClick.bind(null, s)}
                  showMenu={showMenu}
                  data={s}
                />
              </li>
            );
          })}
          <Nav add onClick={setModalVisible.bind(null, true)} />
        </ul>
      </StyledSection>
      {modalVisible ? (
        <Modal addApp={addNav} resetModalVisible={setModalVisible.bind(null, false)} />
      ) : null}
      {currFrame ? (
        <PreviewModal
          app={currFrame}
          resetCurrApp={() => {
            setCurrFrame(null);
          }}
        ></PreviewModal>
      ) : null}
    </>
  );
}

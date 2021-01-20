import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../../component/NavItem';
import Modal from '../../component/Modal';
import PreviewModal from '../../component/PreviewModal';
// import Sortable, { Swap, AutoScroll } from 'sortablejs';
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
// import { AutoScroll } from 'sortablejs/modular/sortable.core.esm.js';
// Sortable.mount(new Swap());
// Sortable.mount(new AutoScroll(), new Swap());
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .boxes {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 1.28rem;
    /* padding: 0 0.125rem; */
    margin-bottom: 0.64rem;
    justify-items: center;
    @media (min-width: 320px) and (max-width: 860px) {
      /* margin-right: 1.6rem;
      margin-left: 1.6rem; */
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 0;
      /* > div {
        margin: 0 auto;
      } */
    }
    .box {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s ease;
      &.droppable {
        transform: translateX(10px);
      }
      &.ghost {
        opacity: 0.1;
      }
      &.drag {
        .nav-item:hover .icon {
          box-shadow: none;
          border: 1px solid #eee;
        }
      }
    }
  }
`;
let sortable = null;
export default function NavSection({ navs, addNav, updateNavs, showMenu }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currFrame, setCurrFrame] = useState(null);
  const handleBoxClick = (w) => {
    if (w.frame) {
      console.log({ w });
      setCurrFrame(w);
    } else {
      window.open(w.url, '_blank');
    }
  };
  useEffect(() => {
    let boxContainer = document.querySelector('#nav-container');
    // if (sortable) {
    //   sortable.destory();
    // }
    sortable = Sortable.create(boxContainer, {
      draggable: '.box',
      // animation: 500,
      // easing: 'cubic-bezier(1, 0, 0, 1)',
      ghostClass: 'ghost',
      dragClass: 'drag',
      // Element is chosen
      onChoose: (/**Event*/ evt) => {
        console.log('on choose', evt.oldIndex);
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
      onSort: function (/**Event*/ evt) {
        // same properties as onEnd
        console.log('on sort', evt);
      },
      // Element dragging ended
      onEnd: function (/**Event*/ evt) {
        const { item, to, from, oldIndex, newIndex } = evt;
        console.log('on end', {
          item,
          to,
          from,
          oldIndex,
          newIndex
        });
        let [tmpItem] = navs.splice(oldIndex, 1);
        navs.splice(newIndex, 0, tmpItem);
        // console.log({ navs });
        updateNavs(navs);
      },
      // Called when creating a clone of element
      onClone: function (/**Event*/ evt) {
        const { item, clone } = evt;
        clone.style.opacity = 0.2;
        console.log('on clone', { item, clone });
      }
    });
    console.log({ sortable });
  }, [navs]);
  return (
    <>
      <StyledSection>
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

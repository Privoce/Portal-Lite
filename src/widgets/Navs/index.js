import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from './NavItem';
import Modal from './Modal';
import ContextMenu from './ContextMenu';
import { useNavData, useContextMenu } from './hooks';

import PreviewModal from './PreviewModal';
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
const StyledSection = styled.section`
  width: 100%;
  padding: 0.1rem 0;
  .boxes {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-auto-rows: max-content;
    grid-column-gap: 0.58rem;
    justify-items: center;
    @media (min-width: 320px) and (max-width: 860px) {
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 0.4rem;
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
export default function Navs({ readonly = true, data, name, lang }) {
  const { menuVisible, position, widget, showMenu } = useContextMenu(false);
  const { data: navs, histories, addNav, removeNav, updateNavs } = useNavData(name, data);
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
    if (!readonly) {
      // 全局存储
      window.WEBAPP_NAVS = navs;
      let boxContainer = document.querySelector('#nav-container');
      Sortable.create(boxContainer, {
        draggable: '.box',
        // delayOnTouchOnly: true,
        delay: 300,
        filter: '.add',
        invertSwap: true,
        ghostClass: 'ghost',
        chosenClass: 'choosen',
        dragClass: 'drag',

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
    }
  }, [navs, readonly]);
  console.log({ navs });
  return (
    <>
      <StyledSection>
        {menuVisible && !readonly && (
          <ContextMenu {...position} currApp={widget} removeApp={removeCurrNav} />
        )}
        <ul className="boxes" id={'nav-container'}>
          {[...histories, ...navs].map((s) => {
            return (
              <li className="box" key={`nav-${s.id}`}>
                <Nav
                  className="nav-item"
                  key={s.url}
                  onClick={handleBoxClick.bind(null, s)}
                  showMenu={showMenu}
                  data={s}
                />
              </li>
            );
          })}
          {!readonly && (
            <Nav addTitle={lang.addNav} add onClick={setModalVisible.bind(null, true)} />
          )}
        </ul>
      </StyledSection>
      {modalVisible ? (
        <Modal
          lang={lang.modal}
          widgetName={name}
          addApp={addNav}
          resetModalVisible={setModalVisible.bind(null, false)}
        />
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

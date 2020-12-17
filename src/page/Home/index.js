// import { Link } from 'react-router-dom';
import { useState } from 'react';
import StyledWrapper from './styled';
import BSearch from '../../component/BaiduSearch';
// import Account from '../../component/Account';
import ContextMenu from '../../component/ContextMenu';
import Widget from '../../component/Widget';
import Modal from '../../component/Modal';
import ToolModal from '../../component/ToolModal';
import PreviewModal from '../../component/PreviewModal';

import GithubTrending from '../../widgets/GithubTrending';
import { useContextMenu } from '../../hooks';
import GithubDashboard from '../../widgets/GithubDashboard';
import { Sites, Tools } from './data';
const Widgets = {
  'github-trending': <GithubTrending />,
  'github-dashboard': <GithubDashboard />
};
export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [toolModalVisible, setToolModalVisible] = useState(false);
  const [previewModalVisible, setPreviewModalVisible] = useState(false);
  const [currWidget, setCurrWidget] = useState({});
  const [currFrame, setCurrFrame] = useState(null);
  const { menuVisible, position, showMenu } = useContextMenu(false);
  const toggleModalVisible = (evt) => {
    evt.preventDefault();
    setModalVisible((prev) => !prev);
  };
  const togglePreviewModalVisible = (app) => {
    setPreviewModalVisible((prev) => {
      if (prev == false) {
        setCurrFrame(app);
      }
      return !prev;
    });
  };
  const toggleToolModalVisible = () => {
    setToolModalVisible((prev) => {
      return !prev;
    });
  };
  const handleWidgetClick = (w) => {
    if (w.url) {
      if (w.frame) {
        togglePreviewModalVisible(w);
      } else {
        window.open(w.url, '_blank');
      }
    } else {
      setCurrWidget(w);
      toggleToolModalVisible();
    }
  };
  return (
    <StyledWrapper>
      {/* <Account /> */}
      {menuVisible && <ContextMenu {...position} />}
      <div className="search">
        <BSearch />
      </div>
      <section className="block">
        <h2 className="header">常用导航</h2>
        <div className="widgets">
          {Sites.map((s) => {
            return (
              <Widget
                key={s.header}
                onClick={handleWidgetClick.bind(null, s)}
                showMenu={showMenu}
                updateCurrAPP={setCurrWidget}
                data={s}
              />
            );
          })}
          <Widget add onClick={toggleModalVisible} />
          {/* 填充物 */}
          {new Array(3).fill(1).map((item, idx) => {
            return <div style={{ width: '1.8rem', height: '1.35rem' }} key={idx} />;
          })}
        </div>
      </section>
      <section className="block">
        <h2 className="header">实用工具</h2>
        <div className="widgets">
          {Tools.map((t) => {
            return (
              <Widget
                key={t.title}
                onClick={handleWidgetClick.bind(null, t)}
                showMenu={showMenu}
                updateCurrAPP={setCurrWidget}
                data={t}
              />
            );
          })}
          <Widget add type="tool" onClick={toggleModalVisible} />
          {/* 填充物 */}
          {new Array(4).fill(1).map((item, idx) => {
            return <div style={{ width: '1.8rem', height: '1.35rem' }} key={idx} />;
          })}
        </div>
      </section>
      <button onClick={toggleModalVisible} className="add_widget">
        添加小组件
      </button>
      <Modal visible={modalVisible} toggleVisible={toggleModalVisible} />
      <ToolModal app={currWidget} visible={toolModalVisible} toggleVisible={toggleToolModalVisible}>
        {Widgets[currWidget.widget]}
      </ToolModal>
      <PreviewModal
        app={currFrame || {}}
        visible={previewModalVisible}
        toggleVisible={togglePreviewModalVisible}
      ></PreviewModal>
    </StyledWrapper>
  );
}

// import { Link } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import ForkMeOnGithub from 'fork-me-on-github';
import { useLanguage } from 'uselanguage';
import StyledWrapper from './styled';
import Skeleton from 'react-loading-skeleton';
import Darkmode from '../../component/Darkmode';
import Footer from './Footer';
import ModalWidgetList from '../../component/WidgetList';
import OpenButton from './OpenButton';
import { useWidgets } from '../../hooks';

// import Account from '../../component/Account';
const Setting = lazy(() =>
  import(/* webpackChunkName: "aside.setting" */ '../../component/Setting')
);
const Profile = lazy(() =>
  import(/* webpackChunkName: "aside.profile" */ '../../component/Profile')
);

const WidgetSection = lazy(() => import(/* webpackChunkName: "block.widgets" */ './WidgetSection'));

export default function Home() {
  const { widgets, removeWidget, updateWidgetData, addWidget } = useWidgets();
  const [syncing, setSyncing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { language } = useLanguage();
  const toggleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };
  return (
    <Suspense fallback={<Skeleton count={10} />}>
      {!window.IS_CHROME_EXT && (
        <ForkMeOnGithub
          repo="https://github.com/Privoce/Portal-Lite-China"
          colorBackground="#4e6ef3"
          colorOctocat="white"
          side="left"
        />
      )}
      <Profile setSyncing={setSyncing} />
      <Setting lang={language.words.setting} />
      <StyledWrapper>
        {/* <Account /> */}

        <Suspense fallback={<Skeleton count={5} />}>
          <WidgetSection
            reloading={syncing}
            widgets={widgets}
            removeWidget={removeWidget}
            updateWidgetData={updateWidgetData}
          />
        </Suspense>
      </StyledWrapper>
      <OpenButton openWidgetListModal={toggleModalVisible} />
      {modalVisible && (
        <ModalWidgetList
          addedWidgets={widgets}
          addWidget={addWidget}
          resetModalVisible={toggleModalVisible}
        />
      )}
      <Footer />
      <Darkmode />
    </Suspense>
  );
}

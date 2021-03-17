// import { Link } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { useLanguage } from 'uselanguage';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import StyledWrapper from './styled';
import Skeleton from 'react-loading-skeleton';
import Darkmode from '../../component/Darkmode';
import Footer from '../../component/Footer';
import { useWidgets } from '../../hooks';

// import Account from '../../component/Account';
const Setting = lazy(() =>
  import(/* webpackChunkName: "aside.setting" */ '../../component/Setting')
);
const SharePortal = lazy(() =>
  import(/* webpackChunkName: "aside.SharePortal" */ '../../component/SharePortal')
);
const Profile = lazy(() =>
  import(/* webpackChunkName: "aside.profile" */ '../../component/Profile')
);
const WidgetStore = lazy(() =>
  import(/* webpackChunkName: "aside.widget.store" */ '../../component/WidgetStore')
);

const WidgetSection = lazy(() => import(/* webpackChunkName: "block.widgets" */ './WidgetSection'));

export default function Home() {
  const { widgets, removeWidget, updateWidgetData, addWidget } = useWidgets();
  const [settingExpanded, setSettingExpanded] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const { language } = useLanguage();

  const handleSettingToggleClick = () => {
    setSettingExpanded((prev) => !prev);
  };
  return (
    <Suspense fallback={<Skeleton count={10} />}>
      <StyledWrapper>
        {/* <Account /> */}
        <ul className={`settings ${settingExpanded ? 'expanded' : ''}`}>
          <li className="setting">
            <SharePortal />
            <span className="tip">Share My Portal</span>
          </li>
          <li className="setting">
            <Profile setSyncing={setSyncing} />
            <span className="tip">Profile</span>
          </li>
          <li className="setting">
            <WidgetStore addedWidgets={widgets} removeWidget={removeWidget} addWidget={addWidget} />
            <span className="tip">Widget Store</span>
          </li>
          <li className="setting">
            <Setting lang={language.words.setting} />
            <span className="tip">Setting</span>
          </li>
          <li className="setting">
            <Darkmode />
            <span className="tip">Dark Mode</span>
          </li>
          <li className="toggle" onClick={handleSettingToggleClick}>
            {settingExpanded ? <IoCloseOutline /> : <BiDotsHorizontalRounded />}
          </li>
        </ul>

        <Suspense fallback={<Skeleton count={5} />}>
          <WidgetSection
            reloading={syncing}
            widgets={widgets}
            removeWidget={removeWidget}
            updateWidgetData={updateWidgetData}
          />
        </Suspense>
      </StyledWrapper>

      <Footer />
    </Suspense>
  );
}

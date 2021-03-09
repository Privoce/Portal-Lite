// import { Link } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import ForkMeOnGithub from 'fork-me-on-github';
import { useLanguage } from 'uselanguage';
import { IoAddSharp } from 'react-icons/io5';
import StyledWrapper from './styled';
import Skeleton from 'react-loading-skeleton';
import Darkmode from '../../component/Darkmode';
import Footer from './Footer';
import { useWidgets } from '../../hooks';

// import Account from '../../component/Account';
const Setting = lazy(() =>
  import(/* webpackChunkName: "aside.setting" */ '../../component/Setting')
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
      {!window.IS_CHROME_EXT && (
        <ForkMeOnGithub
          repo="https://github.com/Privoce/Portal-Lite-China"
          colorBackground="#4e6ef3"
          colorOctocat="white"
          side="left"
        />
      )}
      <StyledWrapper>
        {/* <Account /> */}
        <ul className={`settings ${settingExpanded ? 'expanded' : ''}`}>
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
            <IoAddSharp />
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

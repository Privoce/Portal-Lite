// import { Link } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
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
  const [locale] = useState(navigator.language == 'zh-CN' ? 'zh-CN' : 'en-US');
  const [syncing, setSyncing] = useState(false);
  const [darkTip, setDarkTip] = useState('');
  const { language } = useLanguage();

  const handleSettingToggleClick = () => {
    setSettingExpanded((prev) => !prev);
  };
  const handleSettingClick = (isDark) => {
    if (isDark) {
      let isDark = window.DARK_MODE?.isActivated();
      setDarkTip(isDark ? 'Light Mode' : 'Dark Mode');
    }
  };
  useEffect(() => {
    handleSettingClick(true);
  }, []);
  return (
    <Suspense fallback={<Skeleton count={10} />}>
      <StyledWrapper>
        {/* <Account /> */}
        <ul className={`settings ${settingExpanded ? 'expanded' : ''}`}>
          {[
            {
              comp: <SharePortal />,
              tip: 'Share My Portal'
            },
            {
              comp: <Profile setSyncing={setSyncing} />,
              tip: 'Profile'
            },
            {
              comp: (
                <WidgetStore
                  locale={locale}
                  addedWidgets={widgets}
                  removeWidget={removeWidget}
                  addWidget={addWidget}
                />
              ),
              tip: 'Widget Store'
            },
            {
              comp: <Setting lang={language.words.setting} />,
              tip: 'Setting'
            },
            {
              type: 'dark',
              comp: <Darkmode />,
              tip: darkTip
            }
          ].map(({ comp, tip, type }) => {
            return (
              <li
                key={tip}
                className="setting"
                onClick={handleSettingClick.bind(null, type == 'dark')}
              >
                {comp}
                <span className="tip">{tip}</span>
              </li>
            );
          })}

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

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from 'uselanguage';

import { ToastProvider } from 'react-toast-notifications';

import languages from './lang';
import useGithubToken from './widgets/GithubDashboard/useToken';
import Loading from './component/Loading';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const Home = lazy(() => import(/* webpackChunkName: "page.home" */ './page/Home'));
const VeraLanding = lazy(() =>
  import(/* webpackChunkName: "page.landing.vera" */ './page/Landing/Vera')
);
const Widget = lazy(() => import(/* webpackChunkName: "page.widget" */ './page/Widget'));
const Authing = lazy(() => import(/* webpackChunkName: "page.authing" */ './page/Authing'));
const UserPortal = lazy(() =>
  import(/* webpackChunkName: "page.userPortal" */ './page/UserPortal')
);
const UserPortalWidget = lazy(() =>
  import(/* webpackChunkName: "page.userPortal.widget" */ './page/UserPortal/widget')
);
const OAuth = lazy(() => import(/* webpackChunkName: "page.oauth" */ './page/OAuth'));
const VeraTransfer = lazy(() =>
  import(/* webpackChunkName: "page.vera.transfer" */ './page/Transfer/vera')
);
const WebrowseTransfer = lazy(() =>
  import(/* webpackChunkName: "page.webrowse.transfer" */ './page/Transfer/webrowse')
);
const ZoomTransfer = lazy(() =>
  import(/* webpackChunkName: "page.zoom.transfer" */ './page/Transfer/zoom')
);
const UserInfoTransfer = lazy(() =>
  import(/* webpackChunkName: "page.user.transfer" */ './page/Transfer/userInfo')
);
const NotFound = lazy(() => import(/* webpackChunkName: "page.404" */ './page/NotFound'));
// import PageTitle from './component/PageTitle';

function App() {
  const { token } = useGithubToken();
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `bearer ${token}`
    }
  });
  return (
    <LanguageProvider defaultValue={languages[0]} persisted languages={languages}>
      <ApolloProvider client={client}>
        <ToastProvider>
          <Suspense fallback={<Loading />}>
            <Router basename={'/'}>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/widgets/:widget" element={<Widget />}></Route>
                <Route exact path="/authing" element={<Authing />}></Route>
                <Route exact path={'/p/:username'} element={<UserPortal />}></Route>
                <Route exact path={'/p/:username/:widget'} element={<UserPortalWidget />}></Route>
                <Route exact path="/transfer/vera/:id/:dest" element={<VeraTransfer />}></Route>
                <Route exact path="/transfer/wb/:rid" element={<WebrowseTransfer />}></Route>
                <Route exact path="/transfer/zoom" element={<ZoomTransfer />}></Route>
                <Route exact path="/transfer/user/:product" element={<UserInfoTransfer />}></Route>
                <Route exact path="/oauth/:app" element={<OAuth />}></Route>
                <Route exact path="/landing/vera" element={<VeraLanding />}></Route>
                <Route element={<NotFound />}></Route>
              </Routes>
            </Router>
          </Suspense>
        </ToastProvider>
      </ApolloProvider>
    </LanguageProvider>
  );
}

export default App;

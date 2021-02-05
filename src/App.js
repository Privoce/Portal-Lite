import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useGithubToken from './widgets/GithubDashboard/useToken';
import Loading from './component/Loading';

// import 'animate.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const Home = lazy(() => import(/* webpackChunkName: "page.home" */ './page/Home'));
const Widget = lazy(() => import(/* webpackChunkName: "page.widget" */ './page/Widget'));
const OAuth = lazy(() => import(/* webpackChunkName: "page.oauth" */ './page/OAuth'));
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
  const basePath = process.env.REACT_APP_CHROME_EXT == 'true' ? '/index.html' : '/';
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<Loading />}>
        <Router basename={basePath}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/widgets/:widget">
              <Widget />
            </Route>
            <Route exact path="/oauth/:app">
              <OAuth />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;

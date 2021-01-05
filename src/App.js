import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useGithubToken } from './hooks';
import Loading from './component/Loading';

// import 'animate.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
const Home = lazy(() => import('./page/Home'));
const OAuth = lazy(() => import('./page/OAuth'));
const NotFound = lazy(() => import('./page/NotFound'));
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
    <ApolloProvider client={client}>
      <Suspense fallback={<Loading />}>
        <Router basename={'/'}>
          <Switch>
            <Route exact path="/">
              <Home />
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

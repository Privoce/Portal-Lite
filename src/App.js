import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loading from './component/Loading';

// import 'animate.css';
const Home = lazy(() => import(/* webpackChunkName: "page.home" */ './page/Home'));
const Widget = lazy(() => import(/* webpackChunkName: "page.widget" */ './page/Widget'));
const OAuth = lazy(() => import(/* webpackChunkName: "page.oauth" */ './page/OAuth'));
const NotFound = lazy(() => import(/* webpackChunkName: "page.404" */ './page/NotFound'));
// import PageTitle from './component/PageTitle';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router basename={'/'}>
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
  );
}

export default App;

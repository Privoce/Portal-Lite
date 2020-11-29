import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import NotFound from './page/NotFound';
import 'animate.css';
// import PageTitle from './component/PageTitle';
function App() {
  return (
    <Router basename={'one-stop-nav'}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

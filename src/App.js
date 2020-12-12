import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import OAuth from './page/OAuth';
import NotFound from './page/NotFound';
import { useGithubToken } from './hooks';
import 'animate.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
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
    </ApolloProvider>
  );
}

export default App;

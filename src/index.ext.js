// import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import Vera from './component/Vera';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://g.nicegoodthings.com/v1/graphql',
    headers: {
      'x-hasura-admin-secret': 'tristan@privoce'
    }
  }),
  cache: new InMemoryCache()
});
const PanelID = 'PORTAL_VERA_PANEL';
console.log('index.ext exe');
let panel = document.createElement('aside');
panel.id = PanelID;
document.body.appendChild(panel);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Vera />
  </ApolloProvider>,
  document.getElementById(PanelID)
);

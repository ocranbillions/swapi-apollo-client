import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import App from './App';
import ErrorPage from './pages/error-page';

const client = new ApolloClient({
  uri: 'https://swapi-apollo-server.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const theme = {
  colors: {
    white: '#FFF',
    black: '#333',
    darkBlack: '#1c1e22',
    lightBlack: '#3a3f44',
    yellow: '#FFE300',
    textColor: '#c8c8c8',
    grey: 'grey'
  },
};


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

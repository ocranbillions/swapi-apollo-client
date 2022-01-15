import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';

import './index.css';
import App from './App';
import ErrorPage from './pages/error-page';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const theme = {
  colors: {
    white: '#FFF',
    black: '#000'
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

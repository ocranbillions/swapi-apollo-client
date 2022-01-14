import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import './index.css';
import App from './App';

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
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

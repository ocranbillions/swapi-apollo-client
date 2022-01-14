import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import './index.css';
import App from './App';

const theme = {
  colors: {
    white: '#FFF',
    black: '#000'
  },
};


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

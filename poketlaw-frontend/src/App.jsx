import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import CreateTheme from './themes/MainTheme';
import Apollo from './wrappers/Apollo';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={CreateTheme()}>
        <CssBaseline />
        <Router data-test="component-router">
          <Apollo />
        </Router>
    </ThemeProvider>
  );
}

export default App;

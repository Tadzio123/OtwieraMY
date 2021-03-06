import React from 'react';

import GlobalTemplate from 'template/GlobalTemplate';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';

import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import routes from 'utils/routes';

import { theme } from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'context/useThemeContext';
import HomePageTemplate from 'template/HomePageTemplate';
import TestPage from './TestPage';

const Root = () => (
  <ThemeProvider theme={theme}>
    <ThemeContext.Provider value={theme}>
      <GlobalTemplate>
        <Router history={history}>
          <Switch>
            <Route exact path={routes.login} component={LoginPage} />
            <HomePageTemplate>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path="/test" component={TestPage} />
            </HomePageTemplate>
          </Switch>
        </Router>
      </GlobalTemplate>
    </ThemeContext.Provider>
  </ThemeProvider>
);

export default Root;

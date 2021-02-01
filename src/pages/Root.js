import React from 'react';

import GlobalTemplate from 'template/GlobalTemplate';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from 'utils/history';
import routes from 'utils/routes';

import { theme } from 'theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'context/useThemeContext';

const Root = () => (
  <ThemeProvider theme={theme}>
    <ThemeContext.Provider value={theme}>
      <GlobalTemplate>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} component={HomePage} />
          </Switch>
        </BrowserRouter>
      </GlobalTemplate>
    </ThemeContext.Provider>
  </ThemeProvider>
);

export default Root;

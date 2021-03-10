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
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import HomePageTemplate from 'template/HomePageTemplate';
import Alert from 'components/molecules/Alert';
import { Provider } from 'react-redux';
import store from '_helpers/store';
import TestPage from 'pages/TestPage';

const options = {
  position: positions.TOP_CENTER,
  transition: transitions.SCALE,
  offset: '0',
};

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        <AlertProvider template={Alert} {...options}>
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
        </AlertProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  </Provider>
);

export default Root;

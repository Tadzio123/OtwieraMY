import React from 'react';
import GlobalTemplate from 'template/GlobalTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from 'utils/history';
import routes from 'utils/routes';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';

const Root = () => (
  <GlobalTemplate>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.home} component={HomePage} />
      </Switch>
    </BrowserRouter>
  </GlobalTemplate>
);

export default Root;

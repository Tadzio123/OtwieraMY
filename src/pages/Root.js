import React from 'react';
import GlobalTemplate from 'template/GlobalTemplate';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from 'utils/history';
import routes from 'utils/routes';
import LoginPage from 'pages/LoginPage';

const Root = () => (
  <GlobalTemplate>
    <BrowserRouter history={history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  </GlobalTemplate>
);

export default Root;

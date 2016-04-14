'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';

import App from './components/App';
import User from './components/User';

const History = useRouterHistory(createHistory)({
  basename: '/' + NAME
});

const Routes = [{
  path: '/',
  component: App,
  childRoutes: [{
    path: 'user/:userID',
    component: User
  }]
}];

ReactDOM.render((
  <Router history={History} routes={Routes} />
), document.getElementById('app'));

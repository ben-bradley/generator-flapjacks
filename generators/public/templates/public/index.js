'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link } from 'react-router';

import App from './components/App';
import User from './components/User';

const History = useBasename(createHistory)({
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

/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import TodosPage from './containers/TodosPage';
import urls from './utils/urls';

export default () => (
  <App>
    <Switch>
      <Route path={urls.counter()} component={CounterPage} />
      <Route path={urls.todos()} component={TodosPage} />
      <Route path={urls.home()} exact component={HomePage} />
    </Switch>
  </App>
);

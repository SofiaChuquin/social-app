import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import './index.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Timeline from './containers/Timeline';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/log_in" component={Login} />
        <Redirect exact from="/" to="/log_in" />
        <Route path="/register" component={Register} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

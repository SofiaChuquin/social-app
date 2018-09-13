import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Timeline from './containers/Timeline';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/log_in" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/timeline" component={Timeline} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

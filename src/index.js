import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Timeline from './containers/Timeline';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Fragment>
    <Login />
    <Register />
    <Timeline />
  </Fragment>,
  document.getElementById('root')
);
registerServiceWorker();

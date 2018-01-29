/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import ComponentView from './components/component-view';

import './app.component.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={ComponentView} />
  </Router>
), document.getElementById('oc-examples'));

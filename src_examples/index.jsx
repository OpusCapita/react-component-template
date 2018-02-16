import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ComponentView from './components/component-view';

import './app.component.scss';

render(
  <Router>
    <Route path="/" component={ComponentView} />
  </Router>,
  document.getElementById('oc-examples'),
);

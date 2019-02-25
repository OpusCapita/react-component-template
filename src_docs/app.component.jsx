import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import ExampleContainer from './containers/example.container';

import './app.component.scss';
import './images/favicon.ico';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route path="/" component={ExampleContainer} />
      </Router>
    );
  }
}

export default hot(App);

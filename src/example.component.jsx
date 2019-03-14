import React from 'react';
import PropTypes from 'prop-types';
import './example.component.scss';

export default class Example extends React.PureComponent {
  static propTypes = { example: PropTypes.string.isRequired };

  render() {
    return (
      <div id="example-component">
        { this.props.example }
      </div>
    );
  }
}

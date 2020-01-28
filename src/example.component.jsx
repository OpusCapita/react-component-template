import React from 'react';
import PropTypes from 'prop-types';
import './example.component.scss';

export default class Example extends React.PureComponent {
  static propTypes = {
    example: PropTypes.string.isRequired,
  };

  render() {
    const { example } = this.props;
    return (
      <div id="example-component">
        { example }
      </div>
    );
  }
}

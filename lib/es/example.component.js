function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import './example.component.scss';

var Example =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Example, _React$PureComponent);

  function Example() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Example.prototype;

  _proto.render = function render() {
    return React.createElement("div", {
      id: "example-component"
    }, this.props.example);
  };

  return Example;
}(React.PureComponent);

export { Example as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJFeGFtcGxlIiwicmVuZGVyIiwicHJvcHMiLCJleGFtcGxlIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU8sMEJBQVA7O0lBRXFCQyxPOzs7Ozs7Ozs7OztTQUduQkMsTSxHQUFBLGtCQUFTO0FBQ1AsV0FDRTtBQUFLLE1BQUEsRUFBRSxFQUFDO0FBQVIsT0FDSSxLQUFLQyxLQUFMLENBQVdDLE9BRGYsQ0FERjtBQUtELEc7OztFQVRrQ0wsS0FBSyxDQUFDTSxhOztTQUF0QkosTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL2V4YW1wbGUuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7IGV4YW1wbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImV4YW1wbGUtY29tcG9uZW50XCI+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5leGFtcGxlIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
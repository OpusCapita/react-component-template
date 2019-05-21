"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./example.component.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Example =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Example, _React$PureComponent);

  function Example() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Example.prototype;

  _proto.render = function render() {
    return _react.default.createElement("div", {
      id: "example-component"
    }, this.props.example);
  };

  return Example;
}(_react.default.PureComponent);

exports.default = Example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiRXhhbXBsZSIsInJlbmRlciIsInByb3BzIiwiZXhhbXBsZSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7OztTQUduQkMsTSxHQUFBLGtCQUFTO0FBQ1AsV0FDRTtBQUFLLE1BQUEsRUFBRSxFQUFDO0FBQVIsT0FDSSxLQUFLQyxLQUFMLENBQVdDLE9BRGYsQ0FERjtBQUtELEc7OztFQVRrQ0MsZUFBTUMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICcuL2V4YW1wbGUuY29tcG9uZW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7IGV4YW1wbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImV4YW1wbGUtY29tcG9uZW50XCI+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5leGFtcGxlIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
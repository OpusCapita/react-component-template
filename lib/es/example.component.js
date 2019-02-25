function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from 'react';
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
    }, "Example component");
  };

  return Example;
}(React.PureComponent);

export { Example as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJFeGFtcGxlIiwicmVuZGVyIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBTywwQkFBUDs7SUFFcUJDLE87Ozs7Ozs7Ozs7O1NBQ25CQyxNLEdBQUEsa0JBQVM7QUFDUCxXQUNFO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUiwyQkFERjtBQUtELEc7OztFQVBrQ0YsS0FBSyxDQUFDRyxhOztTQUF0QkYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vZXhhbXBsZS5jb21wb25lbnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiZXhhbXBsZS1jb21wb25lbnRcIj5cbiAgICAgICAgRXhhbXBsZSBjb21wb25lbnRcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Button = function Button(_ref) {
  var border = _ref.border,
      color = _ref.color,
      children = _ref.children,
      height = _ref.height,
      onClick = _ref.onClick,
      radius = _ref.radius,
      width = _ref.width;
  return React.createElement("button", {
    onClick: onClick,
    style: {
      backgroundColor: color,
      border: border,
      borderRadius: radius,
      height: height,
      width: width
    }
  }, children);
};

exports.default = Button;
//# sourceMappingURL=button.cjs.development.js.map

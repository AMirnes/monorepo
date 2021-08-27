import React from 'react';

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

export default Button;
//# sourceMappingURL=button.esm.js.map

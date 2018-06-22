'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function myswitch(param) {
  switch (param.name) {
    case 'input':
      return _react2.default.createElement('input', { label: param.label, placeholder: param.label });
    default:
      return _react2.default.createElement(
        'h2',
        null,
        'd '
      );
  }
}

function FormDetails(props) {
  return _react2.default.createElement(
    'div',
    null,
    myswitch(props)
  );
}

exports.default = FormDetails;
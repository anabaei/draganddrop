'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** A super lame component that says Hello with a custom message. */
function ModalTest(_ref) {
  var message = _ref.message;

  return _react2.default.createElement(
    'div',
    { style: { color: 'green' } },
    ' Hello2 ',
    message
  );
}

ModalTest.propTypes = {
  /** Message to display */
  message: _propTypes2.default.string
};

ModalTest.defaultProps = {
  message: 'ModalTest'
};

exports.default = ModalTest;
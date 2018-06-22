'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormDetails = require('./FormDetails');

var _FormDetails2 = _interopRequireDefault(_FormDetails);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function handleChange() {
  console.log("s");
}

function inputs(param) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      { className: 'form-label' },
      ' ',
      param.name,
      ' '
    ),
    _react2.default.createElement('input', { style: { width: '100%', padding: '6px 3px' }, label: param.label, name: param.id, placeholder: param.name, onChange: handleChange })
  );
}

//function DisplayForm(props){

var DisplayForm = function (_React$Component) {
  _inherits(DisplayForm, _React$Component);

  function DisplayForm(props) {
    _classCallCheck(this, DisplayForm);

    var _this = _possibleConstructorReturn(this, (DisplayForm.__proto__ || Object.getPrototypeOf(DisplayForm)).call(this, props));

    _this.state = {
      previewform: []
    };

    //sessionStorage.setItem('myData', JSON.stringify(props));
    return _this;
  }

  _createClass(DisplayForm, [{
    key: 'render',
    value: function render() {
      function myswitch(param) {
        switch (param.type) {
          case 'input':
            return inputs(param);
          case 'label':
            return _react2.default.createElement(
              'label',
              { className: 'form-labale' },
              ' ',
              param.label,
              ' '
            );
          case 'botton':
            return _react2.default.createElement(
              'button',
              { style: { width: '20%', padding: '6px 3px', backgroundColor: 'lightgray', color: 'black' }, disabled: true },
              ' Submit '
            );
          default:
            return "";
        }
      }

      var tasks = this.props.tasks;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          tasks.map(function (acc) {
            return _react2.default.createElement(
              'div',
              { style: { margin: '2%' } },
              ' ',
              acc.category === "complete" ? myswitch(acc) : console.log("wip"),
              ' '
            );
          })
        )
      );
    }
  }]);

  return DisplayForm;
}(_react2.default.Component);

exports.default = DisplayForm;
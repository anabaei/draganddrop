'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 2%;\n  margin-bottom: 2%;\n    '], ['\n  margin-top: 2%;\n  margin-bottom: 2%;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactBootstrap = require('react-bootstrap');

var _DisplayForm = require('./DisplayForm');

var _DisplayForm2 = _interopRequireDefault(_DisplayForm);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import PublishForm from '../pages/PublishForm';
// import PublishContactForm from '../pages/PublishContactForm';
// import {loadState, SaveState} from './loadState';
// import {todoApp} from './Reducers';
// import {createStore} from 'redux';

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '50%',
    // marginRight           : '-50%',
    backgroundColor: 'darkred',
    transform: 'translate(-50%, -50%)'

  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

    _this.state = {
      modalIsOpen: false,
      props: props
    };

    _this.openModal = _this.openModal.bind(_this);
    _this.afterOpenModal = _this.afterOpenModal.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(Preview, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalIsOpen: true });
    }
  }, {
    key: 'afterOpenModal',
    value: function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //  this.subtitle.style.color = '#f00';
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalIsOpen: false });
    }
    /////////////////////////////////////
    //////////// REDEX //////////////////
    //we need to save state anytime state changes so we call subscribe method to
    // add a listenor and pass current state

    //const persistedState = loadState();
    //const store = createStore(todoApp);


    // store.subscribe( ()=>{
    //   SaveState(store.getState());
    // });

  }, {
    key: 'render',
    value: function render() {
      var Previewbutton = _styledComponents2.default.button(_templateObject);

      /////////////////////////////////////
      //////////// Reducer //////////////////
      function todos() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments[1];

        switch (action.type) {
          case 'ADD_TODO':
            return state.concat([action.text]);
          default:
            return state;
        }
      }

      //////////////////////////////////////////////////////////////////////////////////
      ///////////////////// holds a complete tree of our state /////////////////////////
      //const store = createStore(todos, ['Use Redux', 'ewe']);

      // const store = createStore(todos, JSON.stringify(this.state) );
      //
      // store.dispatch({
      //   type: 'ADD_TODO',
      //   text: 'Read the docs'
      // });


      /// TODO notice we convert object into array of strings to save into store, to read it then we need to do reverse
      /// now we saved current state into store, lets try to catch it from other platform like published

      // console.log('next state', store.getState());

      return _react2.default.createElement(
        'div',
        { style: { backgroundColor: 'darkred' } },
        _react2.default.createElement(
          'botton',
          { className: 'btn btn-default', style: { color: 'blue', position: 'relative', right: '10px ', top: '18px', padding: '8px', backgroundColor: 'white' },
            onClick: this.openModal },
          'Preview'
        ),
        _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: this.state.modalIsOpen,
            onAfterOpen: this.afterOpenModal,
            onRequestClose: this.closeModal,
            bsSize: 'lg',
            style: customStyles,
            contentLabel: 'Example Modal'
          },
          _react2.default.createElement(
            'div',
            { className: 'panel panelDefault' },
            _react2.default.createElement(
              'div',
              { style: { width: '20%', padding: '6px', margin: '2px 40%', backgroundColor: 'lightgrey', textAlign: 'center', color: 'black' } },
              'Publish'
            ),
            sessionStorage.setItem('myData', JSON.stringify(this.state.props)),
            _react2.default.createElement(_DisplayForm2.default, this.state.props)
          )
        )
      );
    }
  }]);

  return Preview;
}(_react.Component);

exports.default = Preview;
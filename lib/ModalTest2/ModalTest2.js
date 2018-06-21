'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color:#ededed;\n\tborder-radius:6px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#777777;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #ffffff;\n'], ['\n  background-color:#ededed;\n\tborder-radius:6px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#777777;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #ffffff;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n width: 100%;\n padding: 12px 20px;\n margin: 8px 4px;\n box-sizing: border-box;\n'], ['\n width: 100%;\n padding: 12px 20px;\n margin: 8px 4px;\n box-sizing: border-box;\n']),
    _templateObject3 = _taggedTemplateLiteral(['color:red'], ['color:red']),
    _templateObject4 = _taggedTemplateLiteral(['border: solid 3px; color:yellow'], ['border: solid 3px; color:yellow']),
    _templateObject5 = _taggedTemplateLiteral(['text-align: center'], ['text-align: center']),
    _templateObject6 = _taggedTemplateLiteral(['\n    position: absolute;\n    width: 30%;\n    height: 100vh;\n    left: 0;\n    top: 10;\n    background-color: #cccccc;\n    border-right: 1px dotted;\n    padding: 1%;\n    text-align: left\n    '], ['\n    position: absolute;\n    width: 30%;\n    height: 100vh;\n    left: 0;\n    top: 10;\n    background-color: #cccccc;\n    border-right: 1px dotted;\n    padding: 1%;\n    text-align: left\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    position: absolute;\n    width: 70%;\n    height: 100vh;\n    right: 0;\n    top: 10;\n    background-color: #800000;\n    border-left: 1px dotted;\n    padding: 1%;\n    text-align: left\n     '], ['\n    position: absolute;\n    width: 70%;\n    height: 100vh;\n    right: 0;\n    top: 10;\n    background-color: #800000;\n    border-left: 1px dotted;\n    padding: 1%;\n    text-align: left\n     ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Botton = _styledComponents2.default.div(_templateObject);
var Inputtext = _styledComponents2.default.input(_templateObject2);

var ModalTest2 = function (_Component) {
  _inherits(ModalTest2, _Component);

  function ModalTest2(props) {
    _classCallCheck(this, ModalTest2);

    var _this = _possibleConstructorReturn(this, (ModalTest2.__proto__ || Object.getPrototypeOf(ModalTest2)).call(this, props));

    _this.onDragOver = function (ev) {
      ev.preventDefault();
    };

    _this.onDragStart = function (ev, id) {
      console.log('draggable ', id);
      ev.dataTransfer.setData("id", id); //setData assign id of draged element into id var
    };

    _this.onDrop = function (ev, cat) {
      var id = ev.dataTransfer.getData("id");
      console.log("ondrop= " + id);
      var tasks = _this.state.tasks.filter(function (task) {
        if (task.name == id) {
          task.category = cat;
        }
        return task;
      });
      _this.setState(Object.assign({}, _this.state, { // passing all params
        tasks: tasks
      }));
    };

    _this.atoms = function (t) {
      if (t.type === 'input') return _react2.default.createElement(Inputtext, {
        onDragStart: function onDragStart(e) {
          return _this.onDragStart(e, t.name);
        },
        draggable: true,
        key: t.name });else if (t.type === 'botton') return _react2.default.createElement(
        Botton,
        {
          onDragStart: function onDragStart(e) {
            return _this.onDragStart(e, t.name);
          },
          draggable: true,
          key: t.name },
        'Submit'
      );
    };

    _this.state = {
      tasks: props.tasks

    };
    return _this;
  }

  /// define funcitons


  // we loop through and if the id were same then change the category with the cat we are passing as params


  _createClass(ModalTest2, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      ////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////  STYLED  ///////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////
      var Error = _styledComponents2.default.div(_templateObject3);
      var In = _styledComponents2.default.div(_templateObject4);
      var Divcontainer = _styledComponents2.default.div(_templateObject5);
      var Divwip = _styledComponents2.default.div(_templateObject6);
      var Divdropable = _styledComponents2.default.div(_templateObject7);

      ////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////          ///////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////
      var tasks = {
        wip: [],
        complete: []

        //////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////  Read props & Create atoms  ///////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////
      };this.state.tasks.forEach(function (t) {
        tasks[t.category].push(_this2.atoms(t));
      });
      //////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////                           ////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Divcontainer,
          null,
          _react2.default.createElement(
            Divwip,
            {
              onDrop: function onDrop(e) {
                _this2.onDrop(e, "wip");
              },
              onDragOver: function onDragOver(e) {
                return _this2.onDragOver(e);
              }
            },
            _react2.default.createElement(
              'h3',
              null,
              'Fields'
            ),
            _react2.default.createElement('br', null),
            tasks.wip
          ),
          _react2.default.createElement(
            Divdropable,
            {
              onDragOver: function onDragOver(e) {
                return _this2.onDragOver(e);
              },
              onDrop: function onDrop(e) {
                return _this2.onDrop(e, "complete");
              }
            },
            tasks.complete
          )
        )
      );
    }
  }]);

  return ModalTest2;
}(_react.Component);

//


ModalTest2.propTypes = {
  /** Message to display */
  message: _propTypes2.default.string
};

ModalTest2.defaultProps = {
  message: 'World',
  tasks: [{ name: " First Name", category: "wip", bgcolor: "yellow", type: "input" }, { name: "Last Name", category: "wip", bgcolor: "pink", type: "input" }, { name: "email", category: "wip", bgcolor: "skyblue", type: "input" }]
};

exports.default = ModalTest2;
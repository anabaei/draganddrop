'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['color:red'], ['color:red']),
    _templateObject2 = _taggedTemplateLiteral(['border: solid 3px; color:yellow'], ['border: solid 3px; color:yellow']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import '../App.css';
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
        if (task.id == id) {
          task.category = cat;
        }
        return task;
      });
      _this.setState(Object.assign({}, _this.state, { // passing all params
        tasks: tasks
      }));
    };

    _this.state = {
      tasks: props.tasks
      //   // accounts: [],
      //   //
      //   // tasks: [
      //   //   {name: "Learn Angular", category:"wip", bgcolor: "yellow"},
      //   //   {name: "React", category:"wip", bgcolor: "pink"},
      //   //   {name: "Vue", category:"complete", bgcolor: "skyblue"}
      //   // ],
      //   // tasks1:[
      //   //    {name: "input", id:"Name" , title: "" , label: "Workshop", type:"string", category:"wip"}
      //   //   // ,{name: "input", id:"Semester" , title: "", label: "Semester", type:"string", category:"wip"}
      //   //   ,{name: "input", id:"Syllabus" , title: "" , label: "Syllabus", type:"url", category:"wip"}
      //   //   // ,{name: "input", id:"Title" , title: "", label: "Title", type:"string", category:"wip"}
      //   //   ,{name: "input", id:"StartDate" , title: "", label: "Start Date", type:"date", category:"wip"}
      //   //   ,{name: "input", id:"EndDate" , title: "", label: "End Date", type:"date", category:"wip"}
      //   //   // ,{name: "input", id:"HomePhone" , title: "", label: "Home Phone", type:"number", category:"wip"}
      //   //   // ,{name: "input", id:"MailingAddress" , title: "", label: "Mailing Address", type:"string", category:"wip"}
      //   //   // ,{name: "input", id:"Mobile" , title: "", label: "Mobile", type:"number", category:"wip"}
      //   //   ,{name: "submitButton", id:"Submit" , title: "",  category:"wip", bgcolor: "green"}
      //   //
      //   // //  ,{name: "label", id:"lable First Name" , title: "", label: "First Name", type:"string", category:"wip"}
      //   // ]
    };

    return _this;
  }

  /// define funcitons


  // we loop through and if the id were same then change the category with the cat we are passing as params


  _createClass(ModalTest2, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Error = _styledComponents2.default.div(_templateObject);
      var In = _styledComponents2.default.div(_templateObject2);

      var tasks = {
        wip: [],
        complete: []
      };

      this.state.tasks.forEach(function (t) {
        tasks[t.category].push(_react2.default.createElement(
          'div',
          {
            onDragStart: function onDragStart(e) {
              return _this2.onDragStart(e, t.name);
            },
            draggable: true,
            key: t.name, className: 'draggable', style: { backgroundColor: t.bgcolor } },
          t.name
        ));
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container-drag' },
          _react2.default.createElement(
            'div',
            { className: 'wip',
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
              _react2.default.createElement(
                Error,
                null,
                ' d'
              ),
              '   Registraion  ',
              _react2.default.createElement(
                In,
                null,
                ' s '
              ),
              'Feilds'
            ),
            _react2.default.createElement('br', null),
            tasks.wip
          ),
          _react2.default.createElement('div', { className: 'dropable',
            onDragOver: function onDragOver(e) {
              return _this2.onDragOver(e);
            },
            onDrop: function onDrop(e) {
              return _this2.onDrop(e, "complete");
            }
          })
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
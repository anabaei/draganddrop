'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import DisplayForm from '../components/DisplayForm';


var PublishForm = function (_React$Component) {
  _inherits(PublishForm, _React$Component);

  function PublishForm(props) {
    _classCallCheck(this, PublishForm);

    var _this = _possibleConstructorReturn(this, (PublishForm.__proto__ || Object.getPrototypeOf(PublishForm)).call(this, props));

    _this.state = {
      form: JSON.parse(sessionStorage.myData),
      value: '',
      accounts: [],
      contacts: []
    };

    return _this;
  }

  _createClass(PublishForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Accounts.getall()
      // .then(res => (console.log("results = "+ JSON.stringify(res.records)), this.setState({accounts: res.records}) ));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log("SS" + JSON.stringify(this.state.form));

      var handleChange = function handleChange(event) {

        switch (event.target.name) {
          case 'Last Name':
            _this2.setState({ last_name: event.target.value });
          case 'First Name':
            _this2.setState({ first_name: event.target.value });
          case 'email':
            _this2.setState({ email: event.target.value });
          case 'Title':
            _this2.setState({ title: event.target.value });
          case 'Birthdate':
            _this2.setState({ birthdate: event.target.value });
          case 'Home Phone':
            _this2.setState({ home_phone: event.target.value });
          case 'Mailing Address':
            _this2.setState({ mailing_address: event.target.value });
          case 'Mobile':
            _this2.setState({ mobile: event.target.value });
          default:
            " ";
        }

        console.log("this state value = " + _this2.state.last_name);
      };

      function myswitch(param) {
        console.log("params name: " + param.name);
        switch (param.name) {
          case 'input':
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'label',
                { className: 'form-label' },
                ' ',
                param.label,
                ' '
              ),
              _react2.default.createElement('input', { className: 'form-control', label: param.label, name: param.id, placeholder: param.label, onChange: handleChange })
            );
          case 'label':
            return _react2.default.createElement(
              'label',
              { className: 'form-labale' },
              ' ',
              param.label,
              ' '
            );
          case 'submitButton':
            return _react2.default.createElement(
              'button',
              { className: 'btn btn-success' },
              ' Submit '
            );
          default:
            return "";
        }
      }

      var callrecords = function callrecords() {
        //  Accounts.getall().then(res => (console.log("This is console.og"), this.setState({accounts: res.records}) ));
        //  Accounts.getcontacts().then(res => (console.log("This is console.og"), this.setState({contacts: res.records}) ));
      };

      var handleSubmit = function handleSubmit(event) {
        event.preventDefault();

        // const {currentTarget} = event;
        //
        // console.log("....  "+ currentTarget.textContent);
        // const arrayofinputs = currentTarget.textContent.replace( / +/g, ' ' ).split(' ').filter(word => (word !== '' && word !== 'Name') );
        //
        // for(var i in arrayofinputs) {
        //   if ( arrayofinputs[i] === 'First') { arrayofinputs[i] = 'First Name';}
        //   else if ( arrayofinputs[i] === 'Last') { arrayofinputs[i] = 'First Name';}
        // }
        // console.log("inputs"+ arrayofinputs);

        var attr = {
          sex: _this2.state.last_name,
          age: _this2.state.last_name,
          evidence: 'eve333'
        };

        //  var formData2 = new formData();
        //  for (var k in attr) {
        //      formData.append(k, attr[k]);
        //     }

        //Connection.postform(attr);

        Connection.postform(attr);

        setTimeout(function () {
          //the passed function is called here
          callrecords();
        }, 2000);

        //Diagnose.postdiag(attr).then((res) => Object.assign(res, attr)).then((res) => this.props.history.push('/components/questions', res));
      };

      var tasks = this.state.form.tasks;

      console.log("tasks= " + tasks);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit },
          tasks.map(function (acc) {
            return _react2.default.createElement(
              'div',
              null,
              ' ',
              acc.category === "complete" ? myswitch(acc) // , console.log("acc= "+ JSON.stringify(acc))  )
              : console.log("wip"),
              ' '
            );
          })
        ),
        // console.log("rrrrr"+ JSON.stringify(this.state.accounts[0] ) ) /* {
        this.state.accounts.map(function (acc) {
          return _react2.default.createElement(
            'p',
            null,
            ' ',
            acc.Name,
            ' '
          );
        }),
        // console.log("rrrrr"+ JSON.stringify(this.state.accounts[0] ) ) /* {
        this.state.contacts.map(function (ac) {
          return _react2.default.createElement(
            'p',
            null,
            ' ',
            ac.Name,
            ' '
          );
        })
      );
    }
  }]);

  return PublishForm;
}(_react2.default.Component);

exports.default = PublishForm;
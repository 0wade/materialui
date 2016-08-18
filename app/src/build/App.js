'use strict';

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _SnackbarExampleSimple = require('./SnackbarExampleSimple');

var _SnackbarExampleSimple2 = _interopRequireDefault(_SnackbarExampleSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return React.createElement(_MuiThemeProvider2.default, null, React.createElement(_SnackbarExampleSimple2.default, null));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
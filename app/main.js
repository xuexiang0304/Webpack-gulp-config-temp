var React = require('react');
var ReactDOM = require('react-dom');
require('./Style/sass/common.scss');
var AppComponent = require('./components/productBox.jsx');
ReactDOM.render(<AppComponent />, document.getElementById('content'));
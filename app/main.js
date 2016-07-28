import React from 'react';
import ReactDOM from 'react-dom';
require('font-awesome/css/font-awesome.css');
require('./Style/sass/_common.scss');
require('./Style/sass/nav.scss');
require('./Style/sass/menu.scss');
require('./Style/sass/messageList.scss');
require('./Style/sass/messageLog.scss');

var NavbarComponent = require('./components/navbar.jsx');
var MenuComponent = require('./components/menu.jsx');
var MsgListComponent = require('./components/messageList.jsx');
var MsgLogComponent = require('./components/messageLog.jsx');

ReactDOM.render(<NavbarComponent />, document.getElementById('nav'));
ReactDOM.render(<MenuComponent />, document.getElementById('menu'));
ReactDOM.render(<MsgListComponent/>, document.getElementById('msg_list'));
ReactDOM.render(<MsgLogComponent/>, document.getElementById('msg_log'))
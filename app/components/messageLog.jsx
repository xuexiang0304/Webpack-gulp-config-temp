import React from 'react';
var MsgBrief = require('./messageBrief.jsx');

//The component of the header of message Log Panel
//Show the brief information of the message
// Used by MessageLog Component
const MsgLogHeader = React.createClass({
   render(){
       return(
           <div className="msg-log-header">
               <div className="msg-log-header-container">
                   <div className="msg-log-header-logo">
                        <span className="fa fa-comments" aria-hidden="true"></span>
                   </div>
                   <MsgBrief/>
               </div>
           </div>
       );
   }
});

//The component of detailed information
//show message content or detailed error info
const DetailedInfo = React.createClass({
   render(){
       return(
           <div className="msg-log-detail">
               <div className="msg-log-title"><p>Information:</p></div>
               <div className="msg-log-content">
                   <p>fsdifghiodfhgdfughdkjfghdkfjghdfkjhdkjs</p>
               </div>
           </div>
       );
   }
});

//The component that shows the status of the message
const MsgLogStatus = React.createClass({
    msg_detected: 'Incoming message detected',
    msg_received: 'message received',
    msg_transformed: 'message transformed ',
    msg_error: 'error detected',
    msg_link_success: 'Message Content',
    msg_link_error: 'Detailed Information',
    panel_classname: 'msg-log-info',
    msg_info: '',
    msg_link: '',


    render(){
        var msgStatus = this.props.msgStatus;
        switch (msgStatus){
            case 'detected':
                this.msg_info = this.msg_detected;
                break;
            case 'received':
                this.msg_info = this.msg_received;
                this.msg_link = this.msg_link_success;
                break;
            case 'transformed':
                this.msg_info = this.msg_transformed;
                this.msg_link = this.msg_link_success;
                break;
            case 'error':
                this.msg_info = this.msg_error;
                this.msg_link = this.msg_link_error;
                this.panel_classname = this.panel_classname + ' error_detect';
                break;
        }
        return(
            <div className={this.panel_classname}>
                <div className="msg-log-title"><p>Information:</p></div>
                <div className="msg-log-content">
                    <p>{this.msg_info}</p>
                </div>
                <div className="msg-log-date">
                    <p>2/02/2016 1:57:56 PM</p>
                </div>
                <div className="msg-log-link">
                    <a>{this.msg_link}</a>
                </div>
            </div>
        );
    }
});

const MessageLog = React.createClass({
    render(){
        return(
            <div>
                <MsgLogHeader/>
                <div className="msg-log-content-panel">
                    <MsgLogStatus msgStatus="detected"/>
                    <MsgLogStatus msgStatus="received"/>
                    <MsgLogStatus msgStatus="transformed"/>
                    <MsgLogStatus msgStatus="error"/>
                    <DetailedInfo/>
                </div>
            </div >
        );
    }
})

module.exports = MessageLog;
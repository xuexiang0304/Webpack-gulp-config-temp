import React from 'react';
import MsgBrief from './messageBrief.jsx';

// //The component of the brief message information
// //Used by messageList component
// const MsgBrief = React.createClass({
//     render(){
//         return(
//             <div className="msg-brief">
//                 <div className="msg-brief-header">
//                     # 15133
//                 </div>
//                 <div className="msg-brief-content">
//                     <div className="row">
//                         <div className="col-md-5">
//                             <label>From:</label>
//                             <p>Syspro</p>
//                         </div>
//                         <div className="col-md-5">
//                             <label>To:</label>
//                             <p>Innova</p>
//                         </div>
//                         <div className="col-md-2">
//                             <div className="error">
//                                 <span className="fa fa-flag" aria-hidden="true"></span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <label>Status:</label>
//                             <p className="error">Received ERROR</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <label>Date:</label>
//                             <p>2/02/2016 1:57:56 PM</p>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-12">
//                             <label>Type:</label>
//                             <p>Record</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });

// The component that showing a list of message brief information
// Rendered in the main.js to the middle message list panel
const MessageList = React.createClass({
    render(){
        return(
            <div>
                <MsgBrief />
                <MsgBrief />
                <MsgBrief />
                <MsgBrief />
                <MsgBrief />
                <MsgBrief />
                <MsgBrief />
                <MsgBrief />
            </div>
        );
    }
});

module.exports = MessageList;
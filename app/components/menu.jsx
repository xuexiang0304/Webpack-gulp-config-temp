import React from 'react';

// The component of showing system name
// used by MsgCategory Component
const System = React.createClass({
    render(){
        return(
            <div className="system_name">
                {this.props.title}
            </div>
        );
    }
});

// The component of displaying the categoried system, like Inbox, Sent
// Used by the MenuPanel Comnponent
const MsgCategory = React.createClass({
    system_list:  'system-list ',
    dropdownIconClassName: 'glyphicon glyphicon-chevron-down',

    getInitialState(){
      return{
          dropdown: false
      };
    },
    handleIconClick() {
        this.setState({dropdown: !this.state.dropdown})
        this.system_list = 'system-list ' + (this.state.dropdown?'':'active');
        this.dropdownIconClassName = 'glyphicon ' + (this.state.dropdown?'glyphicon-chevron-down':'glyphicon-chevron-up');
    },
    render(){
        return(
            <div className="msg_category">
                <div className="category-title">
                    <label className="category"><span className={this.props.iconClassName} aria-hidden="true"></span>{this.props.category}</label>
                    <a className="btn menu_icon" onClick={this.handleIconClick}><span className={this.dropdownIconClassName}></span></a>
                </div>
                <div className = {this.system_list}>
                    <System title="Syspro"/>
                    <System title="Innova"/>
                </div>
            </div>
        );
    }
});

// The component of the menu panel
// Rendered in main.js and displayed on the UI
const MenuPanel = React.createClass({
   render(){
       return(
           <div>
               <div className="menu_top">
                   <label>Menu</label>
                   <a className="btn"><span className="glyphicon glyphicon-menu-hamburger"></span></a>
               </div>
               <MsgCategory category="Attention" iconClassName="fa fa-exclamation"/>
               <MsgCategory category="Inbox" iconClassName="fa fa-inbox"/>
               <MsgCategory category="Sent" iconClassName="fa fa-paper-plane"/>
           </div>
       );
   }
});

module.exports = MenuPanel;
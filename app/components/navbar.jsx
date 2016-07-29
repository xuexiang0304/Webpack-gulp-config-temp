import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import ModalUserAlert from './userAlertModal.jsx';
import ModalSystemConfig from './systemConfigModal.jsx';

// const Navbar = React.createClass({

//     render: function () {
//         return <div className="container-fluid">
//             <div className="navbar-header nav-logo">
//                 <h2>INTERG8</h2>
//             </div>
//             <ul className="nav navbar-nav navbar-right">
//                 <li>
//                     <form className="navbar-form" role="search">
//                         <div className="form-group">
//                             <input type="text" className="form-control" placeholder="Search"/>
//                         </div>
//                         <a type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></a>
//                     </form>
//                 </li>
//                 <li>
//                     <a className="btn nav-icon"><span className="glyphicon glyphicon-refresh" aria-hidden="true"></span></a>
//                 </li>
//                 <li>
//                     <a className="btn nav-icon"><span className="glyphicon glyphicon-user" aria-hidden="true"></span></a>
//                 </li>
//                 <li className="dropdown">
//                     <a href="#" className="dropdown-toggle nav-icon" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
//                         <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
//                     </a>
//                     <ul className="dropdown-menu">
//                         <li><a href="#">User Alerts</a></li>
//                         <li role="separator" className="divider"></li>
//                         <li><a href="#">System Config</a></li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>;
//     }
// });

// Tooltip content for different Nav Items
const tooltip_search = (
    <Tooltip id="tooltip">Search</Tooltip>
);
const tooltip_refresh = (
    <Tooltip id="tooltip">Refresh</Tooltip>
);
const tooltip_user = (
    <Tooltip id="tooltip">User</Tooltip>
);
const tooltip_setting = (
    <Tooltip id="tooltip">Setting</Tooltip>
);

// The component of Nav Bar
// Rendered by main.js and displayed on UI
const NavbarTop = React.createClass({
    handleUserAlert:function(eventkey) {
        ReactDOM.render(<ModalUserAlert show="true"/>, document.getElementById('user-alert'));
    },
    handleSystemConfig:function () {
        ReactDOM.render(<ModalSystemConfig show="true"/>, document.getElementById('system-config'));
    },
    render(){
        return(
        <Navbar fluid className="nav-custom">
            <Navbar.Header>
                <Navbar.Brand>
                    <h2>INTERG8</h2>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem className="nav-search">
                        <Navbar.Form>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>
                            {' '}
                            <OverlayTrigger placement="bottom" overlay={tooltip_search}>
                                <Button type="submit" className="nav-icon btn-custom">
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </Button>
                            </OverlayTrigger>
                        </Navbar.Form>
                    </NavItem>
                    <OverlayTrigger placement="bottom" overlay={tooltip_refresh}>
                        <NavItem eventKey={1} href="#" className="nav-icon">
                            <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                        </NavItem>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={tooltip_user}>
                        <NavItem eventKey={2} href="#" className="nav-icon">
                            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        </NavItem>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={tooltip_setting}>
                        <NavDropdown eventKey={3} id="basic-nav-dropdown" className="nav-icon" title={<span className="glyphicon glyphicon-cog" aria-hidden="true"></span>}>
                            <MenuItem eventKey={3.1} id="user-alert" onSelect={this.handleUserAlert}>User Alerts</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} id="system-config" onSelect={this.handleSystemConfig}>System Configure</MenuItem>
                        </NavDropdown>
                    </OverlayTrigger>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
});

module.exports = NavbarTop;
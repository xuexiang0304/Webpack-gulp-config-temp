import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';

const ModalUserAlert = React.createClass({
    getInitialState(){
        return{
            showModal: true,
            product: [],
        }
    },
    close(){
      this.setState({ showModal: false})
    },
    open(){
        this.setState({ showModal: true})
    },

    componentDidMount(){
        var products = [{
            id: 1,
            name: "Item name 1",
            email: true,
            emailAddress: "123@outlook.com.au",
            logFile: true,
            fileLocation: "~Desktop/abc",
            logEvent: false,
            msgLog: false,
            sms: false,
            smsNumber: ""
        },{
            id: 2,
            name: "Item name 1",
            email: false,
            emailAddress: "",
            logFile: true,
            fileLocation: "~Desktop/abc",
            logEvent: false,
            msgLog: false,
            sms: true,
            smsNumber: "1234546567"
        },{
            id: 3,
            name: "Item name 1",
            email: false,
            emailAddress: "",
            logFile: true,
            fileLocation: "~Desktop/abc",
            logEvent: false,
            msgLog: false,
            sms: true,
            smsNumber: "1234546567"
        },{
            id: 4,
            name: "Item name 1",
            email: false,
            emailAddress: "",
            logFile: true,
            fileLocation: "~Desktop/abc",
            logEvent: false,
            msgLog: false,
            sms: true,
            smsNumber: "1234546567"
        },{
            id: 5,
            name: "Item name 1",
            email: false,
            emailAddress: "",
            logFile: true,
            fileLocation: "~Desktop/abc",
            logEvent: false,
            msgLog: false,
            sms: true,
            smsNumber: "1234546567"
        },{
            id: 6,
            name: "Item name 1",
            email: false,
            emailAddress: "",
            logFile: true,
            fileLocation: "~Desktop/abc",
            logEvent: false,
            msgLog: false,
            sms: true,
            smsNumber: "1234546567"
        }]
        this.setState({product: products});
    },
    render(){
        var cellEditProp = {
            mode: "click",
        };
        function checkBoxFormat(cell, row){
            if (cell == false)
                return '<input type="checkbox">';
            else{
                return '<input type="checkbox" checked>';
            }
        }
        function editcolumnSms(cell,row){
            if (row.sms == false)
                return false;
            else
                return true;
        }
        function editcolumnFileLog(cell,row){
            if (row.logFile == false)
                return false;
            else
                return true;
        }
        function editcolumnEmail(cell,row){
            if (row.email == false)
                return false;
            else
                return true;
        }
        return(
            <div id="setting-modal">
                <Modal show={this.state.showModal} onHide={this.close} aria-labelledby="contained-modal-title">
                    <ModalHeader closeButton>
                        <ModalTitle id="contained-modal-title">User Alert Setting</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <h4>This table list all avalaible alerts and indicates if any alerts are triggered. </h4>
                        <BootstrapTable data={this.state.product} striped={true} hover={true} pagination={true} cellEdit={cellEditProp}>
                            <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" width="40">No.</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" dataAlign="center" editable={false}>Description</TableHeaderColumn>
                            <TableHeaderColumn dataField="email" dataFormat={checkBoxFormat} dataAlign="center" editable={false}>Email</TableHeaderColumn>
                            <TableHeaderColumn dataField="emailAddress" dataAlign="center" editable={editcolumnEmail}>Email Address</TableHeaderColumn>
                            <TableHeaderColumn dataField="logFile" dataFormat={checkBoxFormat} dataAlign="center" editable={false}>Log File</TableHeaderColumn>
                            <TableHeaderColumn dataField="fileLocation" dataAlign="center" editable={editcolumnFileLog}>File location</TableHeaderColumn>
                            <TableHeaderColumn dataField="logEvent" dataFormat={checkBoxFormat} dataAlign="center" editable={false}>LogEvent</TableHeaderColumn>
                            <TableHeaderColumn dataField="msgLog" dataFormat={checkBoxFormat} dataAlign="center" editable={false}>MessageLog</TableHeaderColumn>
                            <TableHeaderColumn dataField="sms" dataFormat={checkBoxFormat} dataAlign="center" editable={false}>SMS</TableHeaderColumn>
                            <TableHeaderColumn dataField="smsNumber" dataAlign="center" editable={editcolumnSms}>SMS Number</TableHeaderColumn>
                        </BootstrapTable>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.close}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
});

module.exports = ModalUserAlert;
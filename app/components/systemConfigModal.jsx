import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';

const ModalSystemConfig = React.createClass({
    getInitialState(){
       return{
           showModal: true,
           sysConfig: [],
       }
    },
    close(){
        this.setState({ showModal: false})
    },
    open(){
        this.setState({ showModal: true})
    },
    componentDidMount(){
        var sysConfigs = [{
            id: 1,
            description: "Item 1",
            value: "lala"
        },{
            id: 2,
            description: "Item 1",
            value: "lala"
        },{
            id: 3,
            description: "hahaha",
            value: "lala"
        },{
            id: 4,
            description: "Item 1",
            value: "lala"
        },{
            id: 5,
            description: "Item 1",
            value: "lala"
        },{
            id: 6,
            description: "Item 1",
            value: "lala"
        },{
            id: 7,
            description: "Item 1",
            value: "lala"
        }];
        this.setState({sysConfig:sysConfigs})
    },
    render(){
        var cellEditProp = {
            mode: "click",
        };
       return(
           <div>
               <Modal show={this.state.showModal} onHide={this.close} aria-labelledby="contained-modal-title">
                   <ModalHeader closeButton>
                       <ModalTitle id="contained-modal-title">System Configuration Setting</ModalTitle>
                   </ModalHeader>
                   <ModalBody>
                       <h4>This table list all avalaible system configurations. </h4>
                       <BootstrapTable data={this.state.sysConfig} striped={true} hover={true} pagination={true} cellEdit={cellEditProp} search={true}>
                           <TableHeaderColumn dataField="id" isKey={true} editable={false}>ID</TableHeaderColumn>
                           <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
                           <TableHeaderColumn dataField="value" editable={false}>Value</TableHeaderColumn>
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

module.exports = ModalSystemConfig;
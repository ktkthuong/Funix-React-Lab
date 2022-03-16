import React, {Component} from 'react';
import { Button, Input, Label, Modal, Row, Col, Form, FormGroup, FormFeedback, ModalHeader, ModalBody } from 'reactstrap';

class AddStaff extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            image: '/assets/images/alberto.png',
            isOpenModal: false
        }
        this.toggleModal=this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({isOpenModal:!this.state.isOpenModal});
    }

    render(){
        return(
            <React.Fragment>
                <Button onClick={this.toggleModal} color='info' className="addButton">
                    <span className='fa fa-plus'></span>
                </Button>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="name" md={4}>Họ và tên</Label>
                                    <Col md={8}>
                                        <Input type='text' id='name' name='name' 
                                        value={this.state.name} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Input type='date' id='doB' name='doB' 
                                        value={this.state.doB} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Input type='date' id='startDate' name='startDate' 
                                        value={this.state.startDate} />
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </React.Fragment>
        )

    }
}
export default AddStaff;
import React, {Component} from 'react';
import { Button, Label, Modal, Row, Col, ModalHeader, ModalBody } from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs';
import {Control, LocalForm} from 'react-redux-form';

class AddStaff extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     id: '',
        //     name: '',
        //     doB: '',
        //     salaryScale: '',
        //     startDate: '',
        //     department: '',
        //     annualLeave: '',
        //     overTime: '',
        //     salary: '',
        //     image: '/assets/images/alberto.png',
        //     isOpenModal: false,
        //     touched: {
        //         name:false,
        //         doB:false,
        //         startDate:false,
        //         department:false,
        //         salaryScale:false,
        //         annualLeave:false,
        //         overTime:false

        //     }
        // }
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleInputChange=this.handleInputChange.bind(this);
         this.handleAddStaff=this.handleAddStaff.bind(this);
        // this.handleBlur=this.handleBlur.bind(this);

    }

    toggleModal(){
        this.setState({isOpenModal:!this.props.isOpenModal});
    }

    // handleInputChange(event){
    //     const value=event.target.value;
    //     const name=event.target.name;
    //     this.setState({[name]:value});
    // }
    handleSubmit(values){
        console.log('Current state is: '+ JSON.stringify(values));
        alert('Current state is: '+ JSON.stringify(values));
    }

    handleAddStaff(e){
        e.preventDefault();
        const newStaff={
            id: this.props.staffs.length,
            name: this.props.name,
            doB: this.props.doB,
            salaryScale: this.props.salaryScale,
            startDate: this.props.startDate,
            department: DEPARTMENTS.find(department => department.id === this.props.department),
            annualLeave: this.props.annualLeave,
            overTime: this.props.overTime,
            image: this.props.image
            
        }
        this.toggleModal();
        this.props.handleAddStaff(newStaff);
    }
    // handleBlur=(field) => ()=>{
    //     this.setState({
    //         touched: {...this.state.touched, [field]:true}

    //     });
    // }

    // validate(name, doB, startDate, department, salaryScale, annualLeave, overTime){
    //     const errors={
    //         name: '',
    //         doB: '', 
    //         startDate: '', 
    //         department: '', 
    //         salaryScale: '', 
    //         annualLeave:'', 
    //         overTime: ''
    //     };
    //     if(this.state.touched.name && name.length===''){
    //         errors.name='Hãy nhập tên bạn';
    //     }else if(this.state.touched.name && name.length<3){
    //         errors.name='Tên của bạn phải từ 3 ký tự trở lên';
    //     }else if(this.state.touched.name && name.length>=30){
    //         errors.name='Tên của bạn phải ít hơn 30 ký tự';
    //     }
    //     if(this.state.touched.doB && doB.length===''){
    //         errors.doB='Hãy nhập ngày tháng năm sinh của bạn';
    //     }
    //     if(this.state.touched.startDate.length===''){
    //         errors.startDate='Hãy nhập ngày vào làm của bạn';
    //     }else if(this.state.touched.startDate && startDate<doB){
    //         errors.startDate='Ngày vào làm phải lớn hơn ngày sinh của bạn';
    //     }
    //     if(this.state.touched.department &&department.length===''){
    //         errors.department='Hãy nhập phòng ban của bạn';
    //     }
    //     if(this.state.touched.salaryScale &&salaryScale<1){
    //         errors.salaryScale='Hệ số lương phải lớn hơn 1';
    //     }
    //     if(this.state.touched.annualLeave && annualLeave===''){
    //         errors.annualLeave='Hãy nhập số ngày nghỉ thường niên của bạn';
    //     }
    //     if(this.state.touched.overTime && overTime===''){
    //         errors.overTime='Hãy nhập số ngày làm thêm của bạn';
    //     }
    //     return errors;

    // }

    render(){
        // const errors=this.validate(this.state.name, this.state.doB, this.state.startDate, this.state.department, this.state.salaryScale, this.state.annualLeave, this.state.overTime);
        return(
            <React.Fragment>
                <Button onClick={this.props.toggleModal} color='info' className="addButton">
                    <span className='fa fa-plus'></span>
                </Button>
                <Modal isOpen={this.props.isOpenModal} toggle={this.props.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            {/* <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".name" md={4}>Họ và tên</Label>
                                    <Col md={8}>
                                        <Control.Text model='.name' id='name' name='name' 
                                        // value={this.state.name} 
                                        // valid={errors.name===''}
                                        // invalid={errors.name!==''}
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('name')}
                                        // <FormFeedback>{errors.name}</FormFeedback>
                                        className='form-control'/>
                                        

                                    </Col>
                                </Row>
                            {/* </FormGroup> */}
                            {/* <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Control.Text model='.doB' id='doB' name='doB' 
                                        value={this.props.doB} 
                                        // valid={errors.doB===''}
                                        // invalid={errors.doB!==''}
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('doB')} />
                                        // <FormFeedback>{errors.doB}</FormFeedback>
                                        className='form-control'/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Control.Text model='.startDate' id='startDate' name='startDate' 
                                         value={this.props.startDate}
                                        // valid={errors.startDate===''}
                                        // invalid={errors.startDate!==''}
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('startDate')} />
                                        // <FormFeedback>{errors.startDate}</FormFeedback>
                                        className='form-control'/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".department" md={4}>Phòng ban</Label>
                                    <Col md={8}>
                                        <Control.Select model='.department' id='department' name='department' >
                                        
                                            <option value='' disabled>Select Department</option>
                                            <option value='Dept01'>Sale</option>
                                            <option value='Dept02'>HR</option>
                                            <option value='Dept03'>Marketing</option>
                                            <option value='Dept04'>IT</option>
                                            <option value='Dept05'>Finance</option>

                                        </Control.Select>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".salaryScale" md={4}>Hệ số lương</Label>
                                    <Col md={8}>
                                        <Control.Text model='.salaryScale' id='salaryScale' name='salaryScale' 
                                        // value={this.state.salaryScale}
                                        // valid={errors.salaryScale===''}
                                        // invalid={errors.salaryScale!==''} 
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('salaryScale')}/>
                                        // <FormFeedback>{errors.salaryScale}</FormFeedback> 
                                        className='form-control'/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                    <Col md={8}>
                                        <Control.Text model='.annualLeave' id='annualLeave' name='annualLeave' 
                                        // value={this.state.annualLeave} 
                                        // valid={errors.annualLeave===''}
                                        // invalid={errors.annualLeave!==''} 
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('annualLeave')} />
                                        // <FormFeedback>{errors.annualLeave}</FormFeedback> 
                                        className='form-control'/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".overTime" md={4}>Số ngày đã làm thêm</Label>
                                    <Col md={8}>
                                        <Control.Text model='.overTime' id='overTime' name='overTime' 
                                        // value={this.state.overTime}
                                        // valid={errors.overTime===''}
                                        // invalid={errors.overTime!==''} 
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('overTime')} />
                                        // <FormFeedback>{errors.overTime}</FormFeedback> 
                                        className='form-control'/>
                                    </Col>
                                </Row>
                            {/* </FormGroup> */}
                            <Button type="submit" color="info">Thêm</Button>
                        </LocalForm>
                    </ModalBody>

                </Modal>
            </React.Fragment>
        )

    }
}
export default AddStaff;
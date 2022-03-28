import React, {Component} from 'react';
import { Button, Label, Modal, Row, Col, ModalHeader, ModalBody } from 'reactstrap';
// import { DEPARTMENTS } from '../shared/staffs';
// import {Link} from 'react-redux-form';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { postStaff, fetchStaffs } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const required=(val)=> val&&val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);
const minLength=(len) => (val) => (val) && (val.length >=len);
const isNumber= (val) => !isNaN(Number(val));



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    postStaff: (staffPost) => dispatch(postStaff(staffPost)),
    fetchStaffs: () => dispatch(fetchStaffs())
})

class AddStaff extends Component{
    constructor(props){
        super(props);
         this.state={
        //     id: '',
        //     name: '',
        //     doB: '',
        //     salaryScale: '',
        //     startDate: '',
        //     department: '',
        //     annualLeave: '',
        //     overTime: '',
        //     salary: '',
            image: '/assets/images/alberto.png',
            isOpenModal: false,
            // touched: {
            //     name:false,
            //     doB:false,
            //     startDate:false,
            //     department:false,
            //     salaryScale:false,
            //     annualLeave:false,
            //     overTime:false

            // },
            staffs:this.props.staffs,
            departments:this.props.departments

        }
        this.toggleModal=this.toggleModal.bind(this);
        //this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleInputChange=this.handleInputChange.bind(this);
         this.handleAddStaff=this.handleAddStaff.bind(this);
        // this.handleBlur=this.handleBlur.bind(this);

    }

    toggleModal(){
        this.setState({isOpenModal:!this.state.isOpenModal});
    }

    // handleInputChange(event){
    //     const value=event.target.value;
    //     const name=event.target.name;
    //     this.setState({[name]:value});
    // }
    // handleSubmit(values){
    //     console.log('Current state is: '+ JSON.stringify(values));
    //     alert('Current state is: '+ JSON.stringify(values));
    // }
    
    handleAddStaff(values){
        // e.preventDefault();
        const salary = parseInt(((values.salaryScale * 3000000) + (values.overTime * 200000)),10);
        const postStaff={
            id: this.props.staffs.length,
            name: values.name,
            doB: values.doB,
            salaryScale: +values.salaryScale,
            startDate: values.startDate,
            // department: DEPARTMENTS.find(department => department.id === values.department),
            departmentId:values.department,
            annualLeave:+values.annualLeave,
            overTime: +values.overTime,
            salary: salary,
            image: this.state.image
            
        }
        this.toggleModal();
        this.props.postStaff(postStaff);
        this.props.fetchStaffs();
        // localStorage.setItem('store',JSON.stringify(newStaff));

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
                <Button onClick={this.toggleModal} color='info' className="addButton">
                    <span className='fa fa-plus'></span>
                </Button>
                <Modal isOpen={this.state.isOpenModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleAddStaff(values)}>
                            {/* <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".name" md={4}>Họ và tên</Label>
                                    <Col md={8}>
                                        <Control.text model='.name' id='name' name='name' 
                                        // value={this.state.name} 
                                        // valid={errors.name===''}
                                        // invalid={errors.name!==''}
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('name')}
                                        // <FormFeedback>{errors.name}</FormFeedback>
                                        className='form-control'
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(25)
                                        }}
                                        />
                                        <Errors 
                                            className='text-danger'
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: "Required ",
                                                minLength: "Must be greater than 2 characters",
                                                maxLength: "Must be 25 characters or less"
                                            }}/>
                                        

                                    </Col>
                                </Row>
                            {/* </FormGroup> */}
                            {/* <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Control.text type='date' model='.doB' id='doB' name='doB' 
                                        //value={this.props.doB} 
                                        // valid={errors.doB===''}
                                        // invalid={errors.doB!==''}
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('doB')} />
                                        // <FormFeedback>{errors.doB}</FormFeedback>
                                        className='form-control' 
                                        validators={{
                                            required
                                        }}
                                        />
                                        <Errors 
                                            className='text-danger'
                                            model=".doB"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                
                                            }}/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Control.text type='date' model='.startDate' id='startDate' name='startDate'
                                         //values={this.props.startDate}
                                        // valid={errors.startDate===''}
                                        // invalid={errors.startDate!==''}
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('startDate')} />
                                        // <FormFeedback>{errors.startDate}</FormFeedback>
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                        />
                                        <Errors 
                                            className='text-danger'
                                            model=".startDate"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                
                                            }}/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".department" md={4}>Phòng ban</Label>
                                    <Col md={8}>
                                        <Control.select model='.department' id='department' name='department' className='form-control'
                                            validators={{
                                                required
                                            }}>
                                                                                                                                 
                                            <option value=''>Select Department</option>
                                            <option value='Dept01'>Sale</option>
                                            <option value='Dept02'>HR</option>
                                            <option value='Dept03'>Marketing</option>
                                            <option value='Dept04'>IT</option>
                                            <option value='Dept05'>Finance</option>
                                              
                                        </Control.select>
                                        <Errors 
                                            className='text-danger'
                                            model=".department"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                
                                            }}/>
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".salaryScale" md={4}>Hệ số lương</Label>
                                    <Col md={8}>
                                        <Control.text model='.salaryScale' id='salaryScale' name='salaryScale' 
                                        // value={this.state.salaryScale}
                                        // valid={errors.salaryScale===''}
                                        // invalid={errors.salaryScale!==''} 
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('salaryScale')}/>
                                        // <FormFeedback>{errors.salaryScale}</FormFeedback> 
                                        className='form-control'
                                        validators={{
                                            required
                                        }}/>
                                        <Errors 
                                            className='text-danger'
                                            model=".salaryScale"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                
                                            }}/>   
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                    <Col md={8}>
                                        <Control.text model='.annualLeave' id='annualLeave' name='annualLeave' 
                                        // value={this.state.annualLeave} 
                                        // valid={errors.annualLeave===''}
                                        // invalid={errors.annualLeave!==''} 
                                        // onChange={this.handleInputChange}
                                        // onBlur={this.handleBlur('annualLeave')} />
                                        // <FormFeedback>{errors.annualLeave}</FormFeedback> 
                                        className='form-control'
                                        validators={{
                                            required
                                        }} />
                                        <Errors 
                                            className='text-danger'
                                            model=".annualLeave"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                
                                            }}/> 
                                    </Col>
                                </Row>
                            {/* </FormGroup>
                            <FormGroup> */}
                                <Row className='form-group'>
                                    <Label htmlFor=".overTime" md={4}>Số ngày đã làm thêm</Label>
                                    <Col md={8}>
                                        <Control.text model='.overTime' id='overTime' name='overTime' 
                                        // value={this.state.overTime}
                                        // valid={errors.overTime===''}
                                        // invalid={errors.overTime!==''} 
                                        // onChange={this.handleInputChange} 
                                        // onBlur={this.handleBlur('overTime')} />
                                        // <FormFeedback>{errors.overTime}</FormFeedback> 
                                        className='form-control'
                                        validators={{
                                            required
                                        }} />
                                        <Errors 
                                            className='text-danger'
                                            model=".overTime"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                
                                            }}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddStaff);
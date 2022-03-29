import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import dateFormat from 'dateformat';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';




    
    
    function RenderStaff({staff, departmentName}) {
        
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4 col-sm-3'>
                            <Card>
                                <CardImg src="/assets/images/alberto.png" alt={staff.name} />
                            </Card>    
                        </div>
                        <div className='col-12 col-md-8 col-sm-9'>
                            <FadeTransform in
                            transformProps={{
                                exitTransform: 'scale(0.5) translateY(-50%)' 
                                }}>
                                <Card>
                                    <CardBody>
                                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                                        <CardTitle>Phòng ban: {departmentName.name}</CardTitle>
                                        <CardTitle>Số ngày nghỉ còn lại: {staff.annualLeave}</CardTitle>
                                        <CardTitle>Số ngày đã làm thêm: {staff.overTime}</CardTitle>
                                    </CardBody>
                                </Card>
                            </FadeTransform>
                        </div>
                    </div>
                </div>
            );
    }
        
    


    const StaffDetail = (props) => {
        if(props.staff !=null){
            return(
                
                    <div className='container'>
                        <div className='row'>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/staff'>Nhân viên</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                                
                            </Breadcrumb>
                        </div>

                            <div className='row'>
                                <RenderStaff staff={props.staff}
                                departmentName={props.departmentName} />
                                    
                            </div>

                                              

                    </div>
              
               

            );
        }
        else{
            return(
                <div></div>
            );
        }
        


        
    }


export default StaffDetail;
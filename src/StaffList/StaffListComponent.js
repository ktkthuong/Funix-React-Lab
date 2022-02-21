import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";
import dateformat, {masks} from "dateformat";
const now = new Date();
class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedStaff: null
        }
    }
    onStaffSelect(staff){
        this.setState({ selectedStaff:staff});
    }
    renderStaff(staff) {
        if(staff!=null){
            return(
                <Card>
                  
                   <CardBody>
                        <CardTitle><p>Họ và tên:</p>{staff.name}</CardTitle>
                        <CardTitle><p>Ngày sinh:</p>{staff.doB}</CardTitle>
                        <CardTitle><p>Ngày vào công ty:</p>{staff.startDate}</CardTitle>
                        <CardTitle><p>Phòng ban:</p>{staff.department.name}</CardTitle>
                        <CardTitle><p>Số ngày nghỉ còn lại:</p>{staff.annualLeave}</CardTitle>
                        <CardTitle><p>Số ngày đã làm thêm:</p>{staff.overTime}</CardTitle>
                        
                        
                    </CardBody> 
                </Card>
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }


    render(){
        const menu = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-sm-6 col-md-4">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        
                       
                        
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                            
                        </CardBody>
                    </Card>
                </div>
            );
        });


        return(
            <div className="container">
                <div className="row">
                    
                        {menu}
                    
                </div>
                <div className='row'>
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }



}
export default Menu;
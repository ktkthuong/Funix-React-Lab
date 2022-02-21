import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button} from "reactstrap";
import dateFormat from "dateformat";
const now = new Date();
class Menu extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedStaff: null,
            click: false
        }
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleToggle(){
        this.setState({click: !this.state.click})
    }


    onStaffSelect(staff){
        this.setState({ selectedStaff:staff});
    }
    renderStaff(staff) {
        if(staff!=null){
            return(
                <Card>
                  
                   <CardBody>
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardTitle>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardTitle>
                        <CardTitle>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardTitle>
                        <CardTitle>Phòng ban: {staff.department.name}</CardTitle>
                        <CardTitle>Số ngày nghỉ còn lại: {staff.annualLeave}</CardTitle>
                        <CardTitle>Số ngày đã làm thêm: {staff.overTime}</CardTitle>
                        
                        
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
    handleToggle(){
        this.setState({
            click: !this.state.click
        })
    }


    render(){
        const menu = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className={this.state.click ? "col-12 col-sm-6 col-md-4" : "col-6 col-sm-4 col-md-2 mt-3"}>
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
                <div className="my-2">
                    <p>Bấm vào tên nhân viên để xem chi tiết.</p>
                </div>
                <Button onClick={this.handleToggle}>Thay đổi giao diện</Button>
                <div className='row'>
                    <div className="col-12 col-md-5 mt-3">
                        {this.renderStaff(this.state.selectedStaff)}
                    </div>
                </div>
            </div>
        );
    }



}
export default Menu;
import React, {Component} from "react";
import { Card, CardImg, CardTitle, Form, Row, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class StaffList extends Component {

    constructor(props){
        super(props);
        this.state={
            staffs:this.props.staffs,
            searchName:"",
        }
        this.handleSearch=this.handleSearch.bind(this)
    }
}
function RenderMenuItem({staff,onClick}){
    return(
        <Card>
           <Link to={`/nhanvien/${staff.id}`} >      
            <CardImg width="100%" src={staff.image} alt={staff.name} />
                    
            <CardImgOverlay>
                <CardTitle>{staff.name}</CardTitle>
                        
            </CardImgOverlay>
            </Link>    
        </Card>
    );
}

const Nhanvien = (props) => {
    const menu = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-2 col-md-4 col-xs-6">
                <RenderMenuItem staff={staff} />
            </div>
        );
    });


    return(
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/nhanvien'>Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>Nhân viên</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                
                    {menu}
                
            </div>
            
        </div>
    );
}
   



export default Menu;

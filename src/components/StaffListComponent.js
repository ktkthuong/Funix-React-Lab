import React, {Component} from "react";
import { Card, CardImg, CardTitle,
      Form, Row, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import AddStaff from './AddStaffComponent';

function RenderStaffList({staff}){
    return(
        <Card>
           <Link to={`/staff/${staff.id}`} >      
            <CardImg width="100%" src={staff.image} alt={staff.name} />
                    
            <div class="text-center mt-2">
                <CardTitle>{staff.name}</CardTitle>
                        
            </div>
            </Link>    
        </Card>
    );
}

class StaffList extends Component {

    constructor(props){
        super(props);
        this.state={
            staffs:this.props.staffs,
            searchName:"",
        }
        this.handleSearch=this.handleSearch.bind(this)
    }

    handleSearch(e){
        const searchName=this.search.value
        this.setState({
            staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(searchName.toLowerCase()))
        })
        e.preventDefault()
    }
    render(){
        const staffList = this.state.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-6 col-sm-4 col-md-2 my-2">
                    <RenderStaffList staff={staff} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className='row'>
                    
                    <div className='col-12'>
                        <h3 className="staff my-2">Nhân viên</h3>
                        <AddStaff />
                        <hr className="my-2"/>
                    </div>
                </div>
                <div className="col-12 col-md-8 my-2">
                    <Form onSubmit={this.handleSearch}>
                        <Row className="form-group" >
                            <Col md={10}>
                                <Input type="text" name="name" id="name"
                                    innerRef={input => this.search = input}
                                    placeholder="Nhập tên nhân viên muốn tìm"
                                />
                            </Col>
                            <Col md={2} >
                                <Button color="primary" type="submit" >Tìm</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="row">
                    
                        {staffList}
                    
                </div>
                
            </div>
        );

    }

}


export default StaffList;

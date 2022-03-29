//import React, {Component} from "react";
import { Card, CardImg, CardTitle,
      Form,FormGroup, Input, Col, Button } from 'reactstrap';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import AddStaff from './AddStaffComponent';
//import {baseUrl} from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';

function RenderStaffList({staff}){
    console.log(staff)
    return(
        <FadeTransform in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
            <Card>
            <Link to={`/staff/${staff.id}`} >      
                <CardImg width="100%" src="assets/images/alberto.png" alt={staff.name} />
                        
                <div className="text-center mt-2">
                    <CardTitle>{staff.name}</CardTitle>
                            
                </div>
                </Link>    
            </Card>
        </FadeTransform>
    );
}

const StaffList = (props) => {
    console.log(props)

    // Tìm kiếm nhân viên

    const [searchInput, setSearchInput] = useState("");
    const [searchStaff, setSearchStaff] = useState();
    const handleSearch = (event) => {
        event.preventDefault();
        const search = props.staffs.staffs.filter((staff) => 
            staff.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchStaff(search);
    }
    const SearchStaff = (props) => {
        return props.staff.map((staff) => {
            return(
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                <RenderStaffList staff={staff} />
            </div>
            );
        });
    }
    const SearchBar = () => {
        return (
            <div className="col-12 col-md-8">
                <Form>
                    <FormGroup row className="inputSearch">
                        <Col>
                            <Input type="text" id="name" name="name"
                                value={searchInput}
                                className="form-control"
                                placeholder="Nhập tên nhân viên muốn tìm"
                                onChange = {(e) => setSearchInput(e.target.value)} />
                        </Col>
                    </FormGroup>
                    <Button type="submit" color="primary" onClick={(event) => handleSearch(event)}>Tìm</Button>
                </Form>
            </div>
        )
    }
    // render UI staffList

    const staffList = props.staffs.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-12 col-md-4 col-lg-2 my-2">
                <RenderStaffList staff={staff} />
            </div>
        );
    });

    if (props.staffs.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.staffs.errMess) {
        return(
            <div className="container">
                <div className="row">
                <h4>{props.staffs.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row staff-info">
                    <div className="col-12 col-md-4">
                        <h3 className="staff">Nhân Viên</h3>
                        <AddStaff 
                            staffs={props.staffs.staffs}
                            handleAddStaff={props.handleAddStaff} 
                        />
                        <hr />
                    </div>
                    <SearchBar />
                </div>
                <div className="row">
                {searchStaff ? <SearchStaff staff={searchStaff} /> : staffList}
                </div>
            </div>
        );
    }
}


export default StaffList;

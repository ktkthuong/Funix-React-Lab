import React from "react";
import {Card, CardText, CardBody} from 'reactstrap';

function RenderDepartment({department}) {
    return(
        <Card>
            
            <CardBody>
                <CardText tag="h2">{department.name}</CardText>
                
                <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
            </CardBody>
        </Card>
    );
}

const Department = (props) => {
    const department = props.departments.departments.map((department) => {
        return(
            <div key={department.id} className="col-12 col-md-6 col-lg-4 my-2">
                <RenderDepartment department={department} />
            </div>
        )
    })
    return(
        <div className="container">
            <div className="row">
                {department}
            </div>
        </div>
    )
}
export default Department;
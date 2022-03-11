import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardText, CardTitle} from 'reactstrap';
import {Link}from 'react-router-dom';


const Salary=(props) =>{
    const basicSalary=3000000;
    const overTimeSalary=200000/8;
    const [sortData, setSortData]=useState("idAscending");
    const handleSort = (e) => {
        setSortData(e.target.value);
    }
    if(sortData === "idAscending") {
        props.staffs.sort((a,b) => {
            return(
                a.id - b.id
            );
        });
    }
    if(sortData === "idDescending") {
        props.staffs.sort((a,b) => {
            return(
                b.id - a.id
            );
        });
    }
    if(sortData === "salaryAscending") {
        props.staffs.sort((a,b) => {
            return(
                (a.salaryScale * basicSalary + a.overTime * overTimeSalary) -
                (b.salaryScale * basicSalary + b.overTime * overTimeSalary)
            );
        });
    }
    if(sortData === "salaryDescending") {
        props.staffs.sort((a,b) => {
            return(
                (b.salaryScale * basicSalary + b.overTime * overTimeSalary) -
                (a.salaryScale * basicSalary + a.overTime * overTimeSalary)
            );
        });
    }
    const staffSalary = props.staffs.map((staff) => {
        const salary = parseInt(((staff.salaryScale * basicSalary) + (staff.overTime * overTimeSalary)),10);            
        return (
            <div key={staff.id} className="col-12 col-sm-6 col-md-4 my-2">
                <Card>
                    <div className="m-4">
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText>Mã nhân viên: {staff.id}</CardText>
                    <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                    <CardText className="salary">Lương: {salary.toLocaleString()} VND</CardText>
                    </div>
                </Card>
            </div>
        );
    });
    return(
        <div className="container">
        <div className="row">             
            <Breadcrumb>
                <BreadcrumbItem><Link to='/staff'>Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
            </Breadcrumb> 
        </div>
        <div className="container">
            <select
                className="my-3 border border-success rounded py-1"
                value={sortData}
                onChange={handleSort}
            >
                <option disabled value='idAscending'>Sort</option>
                <option value='idAscending'>ID up</option>
                <option value='idDescending'>Id down</option>
                <option value='salaryAscending'>Salary Up</option>
                <option value='salaryDescending'>Salary Down</option>
            </select>
        </div>
        <div className="row">
            {staffSalary}
        </div>
    </div>

    );

}

export default Salary;
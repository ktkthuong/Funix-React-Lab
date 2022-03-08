import React, {useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardText, CardTitle} from 'reactstrap';
import {Link}from 'react-router-dom';


const Salary=(props) =>{
    const basicSalary=3000000;
    const overTimeSalary=200000;
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
    
}

export default Salary;
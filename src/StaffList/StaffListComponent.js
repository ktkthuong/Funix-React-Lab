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

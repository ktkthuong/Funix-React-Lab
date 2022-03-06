import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" 
                        alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-users fa-lg"></span> Nhân Viên
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-id-card fa-lg"></span> Phòng Ban
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-money fa-lg"></span> Bản Lương
                                </NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>    
                <Jumbotron>
                <div className='container'>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Nhân Viên</h1>
                            
                        </div>
                    </div>
                </div>

                </Jumbotron>          
            </React.Fragment>
        );
    }
}

export default Header;
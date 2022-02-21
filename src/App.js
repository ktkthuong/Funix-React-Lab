import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './StaffList/StaffListComponent';
import './App.css';
import { STAFFS } from './shared/staffs';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      staffs: STAFFS 
    };
  }
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Menu staffs={this.state.staffs} />
        
      </div>
    );
  }  
}

export default App;

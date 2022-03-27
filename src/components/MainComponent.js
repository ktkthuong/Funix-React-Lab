import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Salary from './SalaryComponent';
import Department from './DepartmentComponent';
// import { STAFFS, DEPARTMENTS} from '../shared/staffs';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {addStaff, fetchStaffs, fetchDepartments, fetchSalary}from '../redux/ActionCreators';
import {connect} from 'react-redux';



const mapStateToProps = state =>{
  return{
    staffs: state.staffs,
    departments: state.departments
  }
}
const mapDispatchToProps = (dispatch) => ({
  addStaff: (newStaff) => dispatch(addStaff(newStaff)),
  fetchStaffs: () => {dispatch(fetchStaffs())},
  fetchDepartments: () => {dispatch(fetchDepartments())},
  fetchSalary: () => {dispatch(fetchSalary())}
})


class Main extends Component {
  constructor (props){
    super(props);
    // this.state = {
    //   staffs: STAFFS,
    //   departments: DEPARTMENTS,
      
    // };
  }
  // handleAddStaff=(newStaff)=> {
  //   this.setState({staffs:[...this.props.staffs, newStaff]});
  // }
  componentDidMount(){
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();
  }

  

  render(){
    
    const StaffWithId= ({match}) => {
      return(
        <StaffDetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
        staffsLoading={this.props.staffs.isLoading}
        staffsErrMess={this.props.staffs.errMess}
        />
      );

    }

    return (
      <div>
        <Header />

        <Switch>
          
          <Route exact path="/" component={() => <StaffList staffs={this.props.staffs} 
          handleAddStaff={this.props.addStaff}/>} />
          <Route exact path="/staff" component={() => <StaffList staffs={this.props.staffs} 
          handleAddStaff={this.props.addStaff}/>} />
          <Route path="/department" component={() => <Department departments={this.props.departments} />} />
          <Route path="/salary" component={() => <Salary staffs={this.props.staffs} />} />
          <Route path="/staff/:staffId" component={StaffWithId} />
          <Redirect to="/" />
        </Switch>
        
        <Footer />
      </div>
    );
  }  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

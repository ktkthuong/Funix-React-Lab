import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import StaffDetail from './StaffDetailComponent';
import Salary from './SalaryComponent';
import Department from './DepartmentComponent';
import { DepartmentStaff } from './DepartmentDetailComponent';
// import { STAFFS, DEPARTMENTS} from '../shared/staffs';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {addStaff, fetchStaffs, fetchDepartments, fetchSalary}from '../redux/ActionCreators';
import {connect} from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group';



const mapStateToProps = state =>{
  return{
    staffs: state.staffs,
    departments: state.departments,
    salary: state.salary
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
      // return(
      //   // <StaffDetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]}
      //   // staffsLoading={this.props.staffs.isLoading}
      //   // staffsErrMess={this.props.staffs.errMess}
      //   // />

      // );
      const staff = this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]
            let departmentName
            if (staff) {
                departmentName = this.props.departments.departments.find((department) => department.id === staff.departmentId)
            }
            if (departmentName) {
                return(
                    <StaffDetail staff={staff}
                        departmentName={departmentName}
                    />
                );
            }
            return <div>Staff is deleted</div>;
        }

        const DepartmentWithId = ({match}) => {
            return (
                <DepartmentStaff 
                    department={this.props.departments.departments.find((department) => department.id === match.params.departmentId)}
                    staff={this.props.staffs.staffs.filter((staff) => staff.departmentId === match.params.departmentId)}
                />
            )

    }

    return (
      <div>
        <Header />
        <TransitionGroup>
        <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch>
              
              <Route exact path="/" component={() => <StaffList staffs={this.props.staffs} 
              handleAddStaff={this.props.addStaff}/>} />
              <Route exact path="/staff" component={() => <StaffList staffs={this.props.staffs} 
              handleAddStaff={this.props.addStaff}/>} />
              <Route exact path="/department" component={() => <Department departments={this.props.departments} />} />
              <Route path="/salary" component={() => <Salary staffs={this.props.staffs} />} />
              <Route path="/staff/:staffId" component={StaffWithId} />
              <Route path="/department/:departmentId" component={DepartmentWithId} />
              <Redirect to="/" />
            </Switch>
          </CSSTransition> 
        </TransitionGroup>
        
        <Footer />
      </div>
    );
  }  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

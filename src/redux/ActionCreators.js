import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';
//import { STAFFS } from '../shared/staffs';

export const addStaff = (newStaff) => ({
    type: ActionTypes.ADD_NEW_STAFF,
    payload: newStaff
}); 

//add fetchStaffs
export const fetchStaffs = () => (dispatch) => {

    dispatch(staffsLoading(true));

    return fetch(baseUrl + 'staffs')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error(`Error ${response.status} : ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errMess = new Error(error.message);
            throw errMess;
        })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)))
}
export const staffsLoading=()=>({
    type: ActionTypes.STAFFS_LOADING
})
export const staffsFailed = (errMess) => ({
    type: ActionTypes.STAFFS_FAILED,
    payload: errMess
})

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})


// add fetchDepartments

export const fetchDepartments = () => (dispatch) => {

    dispatch(departmentsLoading(true))

    return fetch(baseUrl + 'departments')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error(`Error ${response.status} : ${response.statusText}`)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMess = new Error(error.message)
            throw errMess;
        })
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
        .catch(error => dispatch(departmentsFailed(error.message)))
}

export const departmentsLoading = () => ({
    type: ActionTypes.DEPARTMENTS_LOADING
})

export const departmentsFailed = (errMess) => ({
    type: ActionTypes.DEPARTMENTS_FAILED,
    payload: errMess
})

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})

// add fetchSalary

export const fetchSalary=()=>(dispatch)=>{
    dispatch(salaryLoading(true));
    return fetch(baseUrl + 'staffsSalary')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error(`Error ${response.status} : ${response.statusText}`)
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errMess = new Error(error.message)
            throw errMess;
        })
        .then(response => response.json())
        .then(salary => dispatch(addSalary(salary)))
        .then(error => dispatch(salaryFailed(error.message)));
}

export const salaryLoading = () => ({
    type: ActionTypes.SALARY_LOADING
})

export const salaryFailed = (errMess) => ({
    type: ActionTypes.SALARY_FAILED,
    payload: errMess
})

export const addSalary = (salary) => ({
    type: ActionTypes.ADD_SALARY,
    payload: salary
}) 



import * as ActionTypes from './ActionTypes';
export const Salary =(state={
      isLoading: true,
      errMess: null,
      salary: []

}, action)=>{
    switch(action.type){
       
        case ActionTypes.ADD_SALARY:
            return {...state, isLoading:false, errMess:null, staffsSalary: action.payload}
            
        case ActionTypes.SALARY_LOADING:
            return {...state, isLoading:true, errMess:null, staffsSalary: []}

        case ActionTypes.SALARY_FAILED:
            return {...state, isLoading:false, errMess:action.payload, staffsSalary: []}

        default:
            return state;
    }
}
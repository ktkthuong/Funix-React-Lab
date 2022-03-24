import { STAFFS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';
export const staffs=(state=STAFFS , action)=>{
    switch(action.type){
        case ActionTypes.ADD_NEW_STAFF:
            var staff = action.payload;
            staff.id = state.length;
            staff.date = new Date().toISOString();
            return state.concat(staff);
        default:
            return state;
    }
}
import * as types from "../actions/types";

export default function feedback(state=[], action){
    let response =  action.payload;
    switch(action.type){
        case types.FEEDBACKS_SUCCESS:
            return {state, response}
        case types.FEEDBACKS_ERROR:
            return {state, response};
        default:
            return state;
    
    }

}
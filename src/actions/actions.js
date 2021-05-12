import * as types from "./types";

export const feedbacks =  (payload)=>{
    return{
        type:types.FEEDBACK_SUCCESS,
        payload:payload
    }

}
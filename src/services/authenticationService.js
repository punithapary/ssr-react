import axios from "axios";
import {
        FEEDBACK_URL, 
      } from "../config/api-urls";


export const feedbacksService = ()=>{
  return axios.get(`${FEEDBACK_URL}`)
}


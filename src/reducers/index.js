import { combineReducers } from 'redux';
import feedbacks from './feedbacksReducer';


const rootReducer = combineReducers({
  feedbacks
});


export default rootReducer;
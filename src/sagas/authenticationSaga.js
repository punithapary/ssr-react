import { put, call } from 'redux-saga/effects';
import { feedbacksService
} from '../services/authenticationService';
import * as types from '../actions/types'



//BASKET page
export function* feedbacksSaga(){
  try{
    const feedbacks = yield call(feedbacksService);
    yield put({type: types.FEEDBACKS_SUCCESS, payload:feedbacks.data})
  }catch(error){
    yield put({type: types.FEEDBACKS_ERROR, error})
  }
}


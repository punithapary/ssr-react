import { takeLatest } from 'redux-saga/effects';
import { 
  feedbacksSaga
} from './authenticationSaga';

import * as types from '../actions/types';


export default function* watchUserAuthentication() {
  yield takeLatest(types.FEEDBACKS, feedbacksSaga);
}
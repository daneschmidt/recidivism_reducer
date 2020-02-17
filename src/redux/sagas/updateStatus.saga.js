import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* updateStatus(action) {
  try {
    yield axios({
      method: 'PUT',
      url: '/api/status',
      data: action.payload
    });
    put({
      type: 'GET_STATUS'
    });
  } catch (err) {
    console.log('error updating status', err);
  }
}
function* updateStatusSaga() {
  yield takeLatest('UPDATE_STATUS', updateStatus);
}

export default updateStatusSaga;

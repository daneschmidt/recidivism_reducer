import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET most recent 10 competitions
function* getStatus(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/status'
    });
    yield put({
      type: 'SET_STATUS',
      payload: response.data[0]
    });
  } catch (err) {
    console.log('error fetching status: ', err);
  }
}

// ONLY FOR REGISTRATION
function* getStatusSaga() {
  yield takeLatest('GET_STATUS', getStatus);
}

export default getStatusSaga;

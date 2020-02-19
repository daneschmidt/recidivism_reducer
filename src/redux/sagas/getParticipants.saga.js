import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
// Get call for tasks
function* getParticipants(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/participants/'
    });
    yield all([
      put({
        type: 'SET_PARTICIPANTS',
        payload: response.data
      }),
      put({
        type: 'INIT_LIST',
        payload: response.data
      })
    ]);
  } catch (err) {
    console.log('error fetching participants', err);
  }
}
function* getParticipantsSaga() {
  yield takeLatest('GET_PARTICIPANTS', getParticipants);
}

export default getParticipantsSaga;

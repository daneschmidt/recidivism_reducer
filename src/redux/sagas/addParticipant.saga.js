import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* addParticipant(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/participants/',
      data: { id: action.payload }
    });
    put({
      type: 'GET_PARTICIPANTS'
    });
  } catch (err) {
    console.log('error adding participant', err);
  }
}
function* addParticipantSaga() {
  yield takeLatest('ADD_PARTICIPANT', addParticipant);
}

export default addParticipantSaga;

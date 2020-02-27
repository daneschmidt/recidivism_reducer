import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* deleteParticipant(action) {
  const id = action.payload;
  try {
    yield axios({
      method: 'DELETE',
      url: '/api/participants/' + id
    });
    put({
      type: 'GET_PARTICIPANTS'
    });
  } catch (err) {
    console.log('error deleting participant', err);
  }
}
function* deleteParticipantSaga() {
  yield takeLatest('DELETE_PARTICIPANT', deleteParticipant);
}

export default deleteParticipantSaga;

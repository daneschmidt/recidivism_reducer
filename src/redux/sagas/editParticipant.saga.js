import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* editParticipant(action) {
  const id = action.payload.id;
  try {
    yield axios({
      method: 'PUT',
      url: '/api/participants/' + id,
      data: {
        name: action.payload.parName || null,
        status: action.payload.status || null
      }
    });
    put({
      type: 'GET_PARTICIPANTS'
    });
  } catch (err) {
    console.log('error editing participant', err);
  }
}
function* editParticipantSaga() {
  yield takeLatest('EDIT_PARTICIPANT', editParticipant);
}

export default editParticipantSaga;

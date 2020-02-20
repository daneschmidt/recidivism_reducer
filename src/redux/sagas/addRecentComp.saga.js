import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* addRecentComp(action) {
  try {
    yield axios({
      method: 'POST',
      url: '/api/competitions',
      data: action.payload
    });
    put({
      type: 'GET_RECENT_COMPS'
    });
  } catch (err) {
    console.log('error adding recent competition', err);
  }
}
function* addRecentCompSaga() {
  yield takeLatest('ADD_RECENT_COMP', addRecentComp);
}

export default addRecentCompSaga;

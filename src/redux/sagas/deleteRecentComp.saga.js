import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* deleteRecentComp(action) {
  const id = action.payload;
  console.log(id);
  try {
    yield axios({
      method: 'DELETE',
      url: '/api/competitions/' + id
    });
    put({
      type: 'GET_RECENT_COMPS'
    });
  } catch (err) {
    console.log('error deleting recent competition', err);
  }
}
function* deleteRecentCompSaga() {
  yield takeLatest('DELETE_RECENT_COMP', deleteRecentComp);
}

export default deleteRecentCompSaga;

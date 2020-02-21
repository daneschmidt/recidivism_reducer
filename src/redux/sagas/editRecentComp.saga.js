import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* editRecentComp(action) {
  const id = action.payload.id;
  console.log(action.payload);
  try {
    yield axios({
      method: 'PUT',
      url: '/api/competitions/' + id,
      data: action.payload
    });
    put({
      type: 'GET_RECENT_COMPS'
    });
  } catch (err) {
    console.log('error editing competitions', err);
  }
}
function* editRecentCompSaga() {
  yield takeLatest('EDIT_RECENT_COMP', editRecentComp);
}

export default editRecentCompSaga;

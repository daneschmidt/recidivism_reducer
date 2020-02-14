import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET most recent 10 competitions
function* getRecentComps(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/api/competitions'
    });
    yield put({
      type: 'SET_RECENT_COMPS',
      payload: response.data
    });
  } catch (err) {
    console.log('error fetching order: ', err);
  }
}

// ONLY FOR REGISTRATION
function* getRecentCompsSaga() {
  yield takeLatest('GET_RECENT_COMPS', getRecentComps);
}

export default getRecentCompsSaga;

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newClientInfo(action) {
  try {

    yield put({ type: 'CLEAR_BOSS_ERROR' });

    yield axios.post('api/clients', action.payload);
    
    yield put({type: 'SET_CLIENTS'});
  } catch (error) {
      console.log('Error with Boss Info form:', error);
      yield put({ type: 'CLIENT_REJECTED' });
  }
}

function* bossFormSaga() {
  yield takeLatest('ADD_CLIENT', newClientInfo);
}

export default bossFormSaga;
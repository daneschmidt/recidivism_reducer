import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllUserCredentials() {
    try {
        const response = yield axios.get('/api/user-credentials');
        console.log(response);
        yield put ({
            type: 'SET_USER_CREDENTIALS',
            payload: response.data
        })
    } catch (err) {
        console.log(`Couldn't get all events`, err)
    };
};

function* userCredentials() {
    yield takeLatest('GET_USER_CREDENTIALS', getAllUserCredentials);
    
  }
  
  export default userCredentials;
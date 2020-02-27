import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Post call to add new user
function* postUser(action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/user/add',
            data: action.payload
        });
        //
        yield put({
            type: 'GET_USER_CREDENTIALS',
            payload: response.data
        });
    } catch (err) {
        console.log('error adding user', err);
    }
}
function* postUserSaga() {
    yield takeLatest('POST_USER', postUser);
}

export default postUserSaga;
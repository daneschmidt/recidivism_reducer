import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for editing password
function* putPassword(action) {
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/user/change',
            data: action.payload
        });
    } catch (err) {
        console.log('error changing password', err);
    }
}
function* putPasswordSaga() {
    yield takeLatest('PUT_PASSWORD', putPassword);
}

export default putPasswordSaga;
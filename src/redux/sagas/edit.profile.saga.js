import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editProfile(action) {
    const id = action.payload.infoKey;
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/editprofile/' + id,
            data: action.payload
        });
        yield put({
            type: 'GET_PROFILE',
            payload: {
                id: id
            }
        });
    } catch (err) {
        console.log('error with edit profile', err);
    }
}

function* editProfileSaga() {
    yield takeLatest('EDIT_PROFILE', editProfile);
}

export default editProfileSaga;
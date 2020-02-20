import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for editing password
function* putPassword(action) {
    console.log(`In put password`);
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/user/change',
            data: action.payload
        });
        // yield put({
        //     // type: 'GET_TASKS_BY_CLIENT',
        //     // payload: {
        //     //     sortBy: 'byClients',
        //     //     clients_id,
        //     //     trueOrFalse: 'False',
        //     //     }
        //     });
    } catch(err) {
        console.log('error changing password', err);
    }
}
function* putPasswordSaga() {
    yield takeLatest('PUT_PASSWORD', putPassword);
}

export default putPasswordSaga;
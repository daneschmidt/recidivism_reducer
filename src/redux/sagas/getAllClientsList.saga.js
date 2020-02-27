import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Get call for list of all clients
function* getAllClientsList() {
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/clients/all'
        });
        //Sends payload to homepage reducer
        yield put({
            type: 'SET_CLIENTS_LIST',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching clients list', err);
    }
}
function* getAllClientsListSaga() {
    yield takeLatest('GET_ALL_CLIENTS_LIST', getAllClientsList);
}

export default getAllClientsListSaga;
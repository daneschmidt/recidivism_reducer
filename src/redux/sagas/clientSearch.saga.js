import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchClients(action) {
    try {
        const response = yield axios ({
            method: 'GET',
            url: `/api/clients/search/${action.payload}`
        });
        yield put({
            type: 'SET_SEARCH_CLIENT',
            payload: response.data,
        });
    } catch (err) {
        console.log('Error fetching clients:', err);
    }
}

function* searchClientSaga() {
    yield takeLatest('SEARCH_CLIENT', searchClients);
}

export default searchClientSaga;
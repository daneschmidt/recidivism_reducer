import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchClients(action) {
    const keyword = action.payload.search_string;
    try {
        const response = yield axios.get('/api/clients/search/' + keyword);

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
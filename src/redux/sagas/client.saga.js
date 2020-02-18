import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getClients() {
	try {
		const response = yield axios.get('/api/clients/all');

		yield put({
			type: 'SET_CLIENTS',
			payload: response.data,
		});
	} catch (err) {
		console.log('Error fetching clients:', err);
	}
}

function* getClientsSaga() {
	yield takeLatest('GET_CLIENTS', getClients);
}

export default getClientsSaga;

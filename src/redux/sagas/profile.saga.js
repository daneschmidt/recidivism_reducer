
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getProfile(action) {
	// console.log(action.payload.id)
	// const clientsId = action.payload.id;
	// console.log(id);
	try {
		const response = yield axios({
			method: 'GET',
			url: '/api/profile/' + action.payload.id,
		});
		yield put({
			type: 'SET_PROFILE',
			payload: response.data,
		});
	} catch (err) {
		console.log('Error fetching profile:', err);
	}
}

function* getProfileSaga() {
	yield takeLatest('GET_PROFILE', getProfile);
}

export default getProfileSaga;

import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getProfile() {
	try {
		const response = yield axios.get("/api/profile");

		yield put({
			type: "SET_PROFILE",
			payload: response.data,
		});
	} catch (err) {
		console.log("Error fetching profile:", err);
	}
}

function* getProfileSaga() {
	yield takeLatest("GET_PROFILE", getProfile);
}

export default getProfileSaga;

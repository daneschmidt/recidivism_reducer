import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Get call for tasks
function* getTasks(action) {
    console.log(`In get tasks`);
    const sortBy = action.payload.sortBy;
    const clientId = action.payload.clients_id;
    const trueOrFalse = action.payload.trueOrFalse;
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/tasksGet/' + sortBy + '/' + clientId + '/' + trueOrFalse,
        });
        yield put({
            type: 'SET_TASKS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching tasks', err);
    }
}
function* getTasksSaga() {
    yield takeLatest('GET_TASKS', getTasks);
}

export default getTasksSaga;
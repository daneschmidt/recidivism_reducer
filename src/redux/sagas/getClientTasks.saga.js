import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Get call for tasks
function* getClientTasks(action) {
    const sortBy = action.payload.sortBy;
    const id = action.payload.clients_id;
    const trueOrFalse = action.payload.trueOrFalse;
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/tasksGet/' + sortBy + '/' + id + '/' + trueOrFalse,
        });
        yield put({
            type: 'SET_CLIENT_TASKS',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching tasks', err);
    }
}
function* getClientTasksSaga() {
    yield takeLatest('GET_TASKS_BY_CLIENT', getClientTasks);
}

export default getClientTasksSaga;
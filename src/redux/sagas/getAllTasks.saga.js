import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Get call for tasks
function* getAllTasks(action) {
    const sortBy = action.payload.sortBy;
    const trueOrFalse = action.payload.trueOrFalse;
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/tasksGet/' + sortBy + '/' + trueOrFalse,
        });
        yield put({
            type: 'SET_ALL_TASKS',
            payload: response.data
        });
    } catch (err) {
        console.log('error fetching tasks', err);
    }
}
function* getAllTasksSaga() {
    yield takeLatest('GET_TASKS_BY_ALL', getAllTasks);
}

export default getAllTasksSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Get call for tasks
function* getUserTasks(action) {
    console.log(`In get tasks`);
    const sortBy = action.payload.sortBy;
    const id = action.payload.id;
    const trueOrFalse = action.payload.trueOrFalse;
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/tasksGet/' + sortBy + '/' + id + '/' + trueOrFalse,
        });
        yield put({
            type: 'SET_USER_TASKS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching tasks', err);
    }
}
function* getUserTasksSaga() {
    yield takeLatest('GET_TASKS_BY_USER', getUserTasks);
}

export default getUserTasksSaga;
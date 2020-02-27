import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* postTask(action) {
    const id = action.payload.users_id
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/tasks/post',
            data: action.payload
        });
        yield all([
            put({
                type: 'GET_TASKS_BY_ALL',
                payload: {
                    sortBy: 'byAll',
                    trueOrFalse: 'False',
                }
            }),
            put({
                type: 'GET_TASKS_BY_USER',
                payload: {
                    sortBy: 'byUser',
                    trueOrFalse: 'False',
                    id,
                }
            })
        ]);
    } catch (err) {
        console.log('error putting task', err);
    }
}
function* postTaskSaga() {
    yield takeLatest('POST_TASK', postTask);
}

export default postTaskSaga;
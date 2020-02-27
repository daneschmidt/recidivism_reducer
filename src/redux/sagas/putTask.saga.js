import axios from 'axios';
import { put, all, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* putTask(action) {
    const id = action.payload.id;
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/tasks/put',
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
function* putTaskSaga() {
    yield takeLatest('MARK_TASK', putTask);
}

export default putTaskSaga;
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
// Put call for tasks
function* putClientTask(action) {
    const id = action.payload.id;
    const clients_id = action.payload.clients_id
    try {
        const response = yield axios({
            method: 'PUT',
            url: '/api/tasks/put',
            data: action.payload
        });
        yield put({
            type: 'GET_TASKS_BY_CLIENT',
            payload: {
                sortBy: 'byClients',
                clients_id,
                trueOrFalse: 'False',
            }
        });
    } catch (err) {
        console.log('error putting task', err);
    }
}
function* putClientTaskSaga() {
    yield takeLatest('MARK_CLIENT_TASK', putClientTask);
}

export default putClientTaskSaga;
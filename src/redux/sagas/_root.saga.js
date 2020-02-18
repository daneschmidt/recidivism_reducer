import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import bossFormSaga from './bossform.saga';
import getAllClientsListSaga from './getAllClientsList.saga';
import getUserTasksSaga from './getUserTasks.saga';
import getRecentCompsSaga from './competitions.saga';
import calendar from './calendar.saga';
import getProfileSaga from './profile.saga';
import userCredentials from './user.credentials.saga';
import getAllTasksSaga from './getAllTasks.saga';
import getClientTasksSaga from './getClientTasks.saga';
import getClientsSaga from './client.saga';
import putTaskSaga from './putTask.saga';
import postTaskSaga from './postTask.saga';
import putClientTaskSaga from './putClientTask.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    bossFormSaga(),
    getClientsSaga(),
    getAllClientsListSaga(),
    getUserTasksSaga(),
    getRecentCompsSaga(),
    calendar(),
    userCredentials(),
    getAllTasksSaga(),
    getClientTasksSaga(),
    putTaskSaga(),
    postTaskSaga(),
    getProfileSaga(),
    putClientTaskSaga(),
  ]);
}

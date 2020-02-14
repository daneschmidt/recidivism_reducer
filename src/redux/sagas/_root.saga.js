import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import bossFormSaga from './bossform.saga';
import getAllClientsListSaga from './getAllClientsListSaga';
import getTasksSaga from './getTasksSaga';
import getRecentCompsSaga from './competitions.saga';
import calendar from './calendar.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  console.log('The Saga Continues')
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    bossFormSaga(),
    getAllClientsListSaga(),
    getTasksSaga(),
    getRecentCompsSaga(),
    calendar(),
  ]);
}

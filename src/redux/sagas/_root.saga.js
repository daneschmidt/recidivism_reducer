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
import putTaskSaga from './putTask.saga';
import getStatusSaga from './status.saga';
import updateStatusSaga from './updateStatus.saga';
import getParticipantsSaga from './getParticipants.saga';
import editParticipantSaga from './editParticipant.saga';
import addParticipantSaga from './addParticipant.saga';
import searchClientSaga from './clientSearch.saga';
import postTaskSaga from './postTask.saga';
import putClientTaskSaga from './putClientTask.saga';
import getClientsSaga from './client.saga';
import deleteParticipantSaga from './deleteParticipant.saga';
import addRecentCompSaga from './addRecentComp.saga';
import deleteRecentCompSaga from './deleteRecentComp.saga';
import editRecentCompSaga from './editRecentComp.saga';
import postUserSaga from './postUser.saga';
import putPasswordSaga from './putPassword.saga';
import editProfileSaga from './edit.profile.saga';
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
    getStatusSaga(),
    updateStatusSaga(),
    getParticipantsSaga(),
    editParticipantSaga(),
    addParticipantSaga(),
    getProfileSaga(),
    editProfileSaga(),
    putClientTaskSaga(),
    userCredentials(),
    searchClientSaga(),
    postTaskSaga(),
    deleteParticipantSaga(),
    addRecentCompSaga(),
    deleteRecentCompSaga(),
    editRecentCompSaga(),
    postUserSaga(),
    putPasswordSaga()
  ]);
}

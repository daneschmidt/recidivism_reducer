// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// function* getNotes(action) {
//     // console.log(action.payload.id)
//     // const clientsId = action.payload.id;
//     // console.log(id);
//     try {
//         const response = yield axios({
//             method: 'GET',
//             url: '/api/notes/' + action.payload.id,
//         });
//         yield put({
//             type: 'SET_NOTES',
//             payload: response.data,
//         });
//     } catch (err) {
//         console.log('Error fetching notes:', err);
//     }
// }

// function* editNotes(action) {
//     const id = action.payload.id
//     try {
//         const response = yield axios({
//             method: 'PUT',
//             url: '/api/notes/edit/' + id,
//             data: action.payload
//         });
//         yield put({
//             type: 'SET_NOTES'
//         });
//     } catch (err) {
//         console.log('error with edit notes', err);
//     }
// }

// function* notesSaga() {
//     yield takeLatest('GET_NOTES', getNotes);
//     yield takeLatest('EDIT_NOTES', editNotes);
// }

// export default notesSaga;
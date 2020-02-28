import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAllEvents() {
  try {
    const response = yield axios.get('/api/events/');
    yield put({
      type: 'SET_CALENDAR',
      payload: response.data
    })
    // yield put({
    //   type: 'SET_EVENT_DETAILS',
    //   payload: response.data
    // })
  } catch (err) {
    console.log(`Couldn't get all events`, err)
  };
};


function* addNewEvent(action) {
  try {

    yield put({ type: 'CLEAR_ADD_EVENT_ERROR' });

    const response = yield axios.post('/api/events', action.payload);
    yield put({ type: 'GET_EVENTS' });

  } catch (error) {
    console.log('Error with adding event:', error);
    yield put({ type: 'EVENT_REJECTED' });
  }
}

function* deleteEvent(action) {
  const id = action.payload;
  try {
    yield axios({
      method: 'DELETE',
      url: '/api/events/' + id
    });
    yield put({ type: 'GET_EVENTS' })
  } catch (err) {
    console.log('error deleting event', err);
  }
}

function* calendar() {
  yield takeLatest('GET_EVENTS', getAllEvents);
  yield takeLatest('POST_EVENT', addNewEvent);
  yield takeLatest('DELETE_EVENT', deleteEvent);
}

export default calendar;
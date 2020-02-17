import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllEvents() {
    try {
        const response = yield axios.get('/api/events/');
        console.log(response);
        yield put ({
            type: 'SET_CALENDAR',
            payload: response.data
        })
    } catch (err) {
        console.log(`Couldn't get all events`, err)
    };
};

function* getSingleEvent(action) {
  try {
      const response = yield axios.get('/api/events/', action.payload);
      console.log(response);
      yield put ({
          type: 'SET_CALENDAR',
          payload: response.data
      })
  } catch (err) {
      console.log(`Couldn't get all events`, err)
  };
};

function* addNewEvent(action) {
  try {

    yield put({ type: 'CLEAR_ADD_EVENT_ERROR' });

    const response = yield axios.post('/api/events', action.payload);
    console.log(response);
    yield put({type: 'SET_CALENDAR'});
    
  } catch (error) {
      console.log('Error with adding event:', error);
      yield put({ type: 'EVENT_REJECTED' });
  }
}

function* calendar() {
  yield takeLatest('GET_EVENTS', getAllEvents);
  yield takeLatest('GET_EVENT', getSingleEvent);
  yield takeLatest('POST_EVENT', addNewEvent);
}

export default calendar;
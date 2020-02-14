import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAllEvents() {
    try {
        const response = yield axios.get('api/calendar');
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

    const response = yield axios.post('api/calendar/events', action.payload);
    console.log(response);
    yield put({type: 'SET_CALENDAR'});
    
  } catch (error) {
      console.log('Error with adding event:', error);
      yield put({ type: 'EVENT_REJECTED' });
  }
}

function* bossFormSaga() {
  yield takeLatest('GET_EVENTS', getAllEvents);
  yield takeLatest('POST_EVENT', addNewEvent);
}

export default bossFormSaga;
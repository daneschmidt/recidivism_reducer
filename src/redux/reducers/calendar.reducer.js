import { combineReducers } from 'redux';
//import moment from 'moment-timezone/builds/moment-timezone-with-data';
import moment from 'moment';
// import 'moment-timezone';


const calendarEvent = (state = [], action) => {
    // put({
    //   type: 'SET_CALENDAR',
    //   payload: response.data
    // })
    // action.payload = [
    //   {
    //     eventDate: new Date(),
    //     endEventDate: new Date(),
    //     startTime: moment(),
    //     endTime: moment(),
    //     eventTitle: '',
    //     notes: '',
    //     location: '',
    //   }
    // ]
    switch (action.type) {
      case 'SET_CALENDAR':
        return action.payload.map((calendarEventItem) => {
          return {
            ...calendarEventItem,
            title: calendarEventItem.eventTitle,
            start: calendarEventItem.startTime,
            end: calendarEventItem.endTime,
            //date: moment.tz(calendarEventItem.eventDate, 'America/Chicago').format('z'),
            date: moment(calendarEventItem.eventDate).utcOffset(0, false).format("YYYY-MM-DD")
          }
        });
      default:
        return state;
    }
  };

  export default combineReducers({
    calendarEvent,
});
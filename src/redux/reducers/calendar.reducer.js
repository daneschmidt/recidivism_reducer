import { combineReducers } from 'redux';
//import moment from 'moment-timezone/builds/moment-timezone-with-data';
import moment from 'moment';
import 'moment-timezone';


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
          //let jun = moment("2014-06-01T12:00:00Z")
          return {
            ...calendarEventItem,
            id: calendarEventItem.id,
            title: calendarEventItem.eventTitle,
            start: calendarEventItem.startTime,
            end: moment(calendarEventItem.endDate).utcOffset(0, false).format("YYYY-MM-DD"),
            //date: moment.tz(calendarEventItem.eventDate, 'America/Chicago').format('z'),
            date: moment(calendarEventItem.eventDate).utcOffset(0, false).format("YYYY-MM-DD"),
          }
        });
      default:
        return state;
    }
    
  };

const calendarDetails = (state = null, action) => {
  switch (action.type) {
    case 'SET_EVENT_DETAILS':
      return action.payload;
    default:
      return state;
  }
}
export default combineReducers({
  calendarEvent,
  calendarDetails,
});
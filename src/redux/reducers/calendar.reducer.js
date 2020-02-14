import { combineReducers } from 'redux';

const calendarReducer = (state = [], action) => {
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
            title: calendarEventItem.title,
          }
        });
      default:
        return state;
    }
  };

  export default combineReducers({
    calendarReducer,
});
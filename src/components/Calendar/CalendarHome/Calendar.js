// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Component
import EventModal from '../../Calendar/AddEventModal/EventModal';
import EventClick from '../../Calendar/EventClick/EventClick';
import CalendarList from '../../Calendar/CalendarMap/CalendarList';

// CSS
import '../../Calendar/CalendarHome/Calendar.css'

class Calendar extends Component {

  componentDidMount() {
    this.props.dispatch({
        type: 'GET_EVENTS',
    })
  }
  
  render() {
    return (
      <div>
        <div className="calendar">
          {/* <EventModal /> */}
          <EventClick />
          {/* <CalendarList calendarEvent={this.props.store.calendar} /> */}
          {/* <CalendarList  /> */}
        </div>
      </div>
    )
  }

}

export default connect(mapStoreToProps)(Calendar);

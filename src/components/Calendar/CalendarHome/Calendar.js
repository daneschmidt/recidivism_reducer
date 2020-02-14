// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// React Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// Component
import EventModal from '../../Calendar/AddEventModal/EventModal';

// Material UI
import Container from '@material-ui/core/Container';

// CSS
import '../../Calendar/CalendarHome/Calendar.css'


class Calendar extends Component {
  //calendarComponentRef = React.createRef();

  state = {
    calendarEvents:[
      {
        title: 'Be The Boss',
        start: '2020-02-21',
        notes: 'hey',
      }
    ]
  }

  handleEventClick = (calEvent) => {
    // calEvent.event - event info
    // calEvent.view - calendar render view
    // calEvent.jsEvent - basic JS event data
    console.log('event:', calEvent);
    alert(calEvent.event.title);
  }
  

render() {
  return (
    <div>
      <div className="calendar">
        <EventModal />
        <div>
          <Container maxWidth="md" className="calendar-container">
            <FullCalendar
              defaultView="dayGridMonth"
              header={{
                left: "prev, next, today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              ref={this.calendarComponentRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              events={this.state.calendarEvents}
              //dateClick={this.handleDateClick}
              eventClick={this.handleEventClick}
            />
          </Container>
        </div>
      </div>
    </div>
  )
}

}

export default connect(mapStoreToProps)(Calendar);

// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// Component
import EventModal from '../Calendar/EventModal';

// Material UI
import Container from '@material-ui/core/Container';

// CSS
import '../Calendar/Calendar.css'


class Calendar extends Component {
  calendarComponentRef = React.createRef();

  handleDateClick = (event) => {
    
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
                //events={} grab this off the reducer
                dateClick={this.handleDateClick}
              />
            </Container>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStoreToProps)(Calendar);

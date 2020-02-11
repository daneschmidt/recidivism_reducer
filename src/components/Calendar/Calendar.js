import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EventModal from '../Calendar/EventModal';


// Material UI
import Container from '@material-ui/core/Container';



class Calendar extends Component {

  render() {
    return (
      <div>
        <div className="calendar">
          <EventModal />
          <div>
            <Container maxWidth="md" className="calendar-container">
              <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
            </Container>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(mapStoreToProps)(Calendar);
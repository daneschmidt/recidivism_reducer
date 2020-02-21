import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// React Full Calendar
//import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import momentPlugin from "@fullcalendar/core/moment";

// Material UI
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
//import Button from '@material-ui/core/Button';

import moment from 'moment';

// CSS
import '../../Calendar/EventClick/EventClick.css';

class EventClick extends Component {
  state = {
    setOpen: false,
    id: ''
    // selectedEvent: {},
    // calendarEvents: [
    //     {
    //         title: 'Be The Boss',
    //         start: '2020-02-21',
    //         notes: 'hey',
    //     },
    //     {
    //         title: 'Be The Boss',
    //         start: '2020-02-21',
    //         notes: 'hey',
    //     },
    //     {
    //         title: 'Be The Boss',
    //         start: '2020-02-22',
    //         notes: 'hey',
    //     }
    // ]
  };

  //item={this.handleEventClick(item.id)}
  handleEventClick = (calEvent, id) => {
    // calEvent.event - event info
    // calEvent.view - calendar render view
    // calEvent.jsEvent - basic JS event data
    //console.log('event:', calEvent);
    //alert(calEvent.event.title);
    console.log(calEvent);
    console.log(id);
    this.setState({
      setOpen: true,
      id
      //selectedEvent: calEvent.event,
    });
  };

  closeModal = event => {
    this.setState({
      setOpen: false
    });
  };

  render() {
    //console.log(this.state);
    //console.log(this.state.handleEventClick);
    //console.log('*******', this.props.store.calendar.calendarEvent);

    const eventSample = [
      {
        title: 'test',
        date: '2020-02-14',
        scottsKey: 1
      },
      {
        title: 'test2',
        date: '2020-02-15',
        scottsKey: 2
      }
    ];

        const eventArray = this.props.store.calendar.calendarEvent.map((item, index) => {
            console.log(item);
            const convertedStartTime = item.eventDate.slice(0,-1);
            const convertedEndTime = item.endDate.slice(0,-1);
            console.log(convertedStartTime);
            return {
                textColor: '#1a262a', 
                 title: item.eventTitle,
                 date: item.date,
                 end: convertedEndTime,
                 start: convertedStartTime,
                 //endTime: item.endTime,
                 //start: item.startTime,
                 
                 //endTime: item.endTime,
                //date: item.date,
                //evenTitle: item.evenTitle,
                //start: item.start,

          //endTime: item.endTime,
          //date: item.date,
          //evenTitle: item.evenTitle,
          //start: item.start,
        };
      }
    );

    const eventDetails = this.props.store.calendar.calendarEvent.map(
      (item, index) => {
        console.log(item);
        return (
          <div key={index}>
            <h2>{item.notes}</h2>
          </div>
        );
      }
    );
    console.log(this.props.store.calendar.calendarEvent);
    return (
      <div>
        <div>
          <Container maxWidth='md' className='calendar-container'>
            <FullCalendar
              timeZone='America/Chicago'
              defaultView='timeGridWeek'
              eventColor='#B6C1CB'
              header={{
                left: 'prev, next, today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              }}
              ref={this.calendarComponentRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              //events={this.props.store.calendar.calendarEvent}
              //dateClick={this.handleDateClick}
              events={eventArray}
              eventClick={this.handleEventClick}
            />
            <div>
                <div>
                    <Container maxWidth="md" className="calendar-container">
                        <FullCalendar
                            timeZone = "America/Chicago"
                            eventColor = '#b6c1cb'
                            textColor = '#b6c1cb'
                            defaultView="timeGridWeek"
                            header={{
                                left: "prev, next, today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                            }}
                            ref={this.calendarComponentRef}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            //events={this.props.store.calendar.calendarEvent}
                            //dateClick={this.handleDateClick}
                            events={eventArray}
                            eventClick={this.handleEventClick}
                        />
                        <div>
                            <Modal open={this.state.setOpen} onClose={this.closeModal}>
                                    <div className="modal">
                                        {eventDetails}
                                    </div>
                            </Modal>
                        </div>
                    </Container>
                </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EventClick);

{
  /* <h3>{this.props.store.calendar.calendarEvent.eventDate}</h3>
                                        <h3>{this.props.store.calendar.calendarEvent.startTime}</h3>
                                        <h3>{this.props.store.calendar.calendarEvent.endTime}</h3>
                                        <h3>{this.props.store.calendar.calendarEvent.endEventDate}</h3>
                                        <h3>{this.props.store.calendar.calendarEvent.eventTitle}</h3>
                                        <h3>{this.props.store.calendar.calendarEvent.notes}</h3>
                                        <h3>{this.props.store.calendar.calendarEvent.location}</h3> */
}

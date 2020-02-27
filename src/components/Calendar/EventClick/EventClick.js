import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// React Full Calendar
//import { Calendar } from '@fullcalendar/core';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
//import momentPlugin from "@fullcalendar/core/moment";

// Material UI
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import moment from 'moment';

const styles = (theme => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 20,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

class EventClick extends Component {
  calendarComponentRef = React.createRef();
  state = {
    setOpen: false,
    id: '',
    eventTitle: '',
    notes: '',
    location: '',
    // selectedEvent: {},
    calendarWeekends: true,
    calendarEvents: [
      {
        title: '',
        start: new Date(),
        notes: '',
        location: '',
      }
    ]
  };

  handleEventClick = (calEvent, id) => {
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

  deleteEvent = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_EVENT',
      payload: id,
    })
  }

  handleEventClick = ({ event, el, id }) => {
    this.setState({
      setOpen: true
    });
    this.props.dispatch({
      type: 'SET_EVENT_DETAILS',
      payload: event._def.extendedProps
    });
  };

  render() {

    const eventArray = this.props.store.calendar.calendarEvent.map((item, index) => {
      const convertedStartTime = item.eventDate.slice(0, -1);
      const convertedEndTime = item.endDate.slice(0, -1);
      return {
        textColor: '#1a262a',
        title: item.eventTitle,
        date: item.date,
        end: convertedEndTime,
        start: convertedStartTime,
        notes: item.notes,
        location: item.location,
        eventTitle: item.eventTitle,
      };
    }
    );
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
          </Container>
          <div>
            <Modal open={this.state.setOpen} onClose={this.closeModal}>
              <div className="modal">
                {this.props.store.calendar.calendarDetails !== null &&
                  <div className={this.props.classes.root}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        {/* <h4 className={this.props.classes.paper}>Event</h4> */}
                        {/* <Paper className={this.props.classes.paper}> */}
                        <h3 className="modalTitle">{this.props.store.calendar.calendarDetails.eventTitle}</h3>
                        {/* </Paper> */}
                      </Grid>
                      <Grid item xs={4}>
                        <h4 className={this.props.classes.paper}>Location</h4>
                        <Paper className={this.props.classes.paper}>
                          <h3>{this.props.store.calendar.calendarDetails.location}</h3>
                        </Paper>
                      </Grid>
                      <Grid item xs={8}>
                        <h4 className={this.props.classes.paper}>Notes</h4>
                        <Paper className={this.props.classes.paper}>
                          <h3>{this.props.store.calendar.calendarDetails.notes}</h3>
                        </Paper>
                      </Grid>
                    </Grid>
                    <div>
                      <IconButton onClick={this.deleteEvent}>
                        <DeleteIcon className="delete-icon-event" fontSize="large" />
                      </IconButton>
                    </div>
                  </div>
                }
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(connect(mapStoreToProps)(EventClick));
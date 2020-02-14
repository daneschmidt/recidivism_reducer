import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// React Full Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// Material UI
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';
//import Button from '@material-ui/core/Button';

// CSS
import '../../Calendar/EventClick/EventClick.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class EventClick extends Component {

    state = {
        setOpen: false,
        selectedEvent: {},
        calendarEvents: [
            {
                title: 'Be The Boss',
                start: '2020-02-21',
                notes: 'hey',
            },
            {
                title: 'Be The Boss',
                start: '2020-02-21',
                notes: 'hey',
            },
            {
                title: 'Be The Boss',
                start: '2020-02-22',
                notes: 'hey',
            }
        ]
    }

    handleEventClick = (calEvent) => {
        // calEvent.event - event info
        // calEvent.view - calendar render view
        // calEvent.jsEvent - basic JS event data
        //console.log('event:', calEvent);
        //alert(calEvent.event.title);
        this.setState({
            setOpen: true,
            selectedEvent: calEvent.event
        })
    }
    
    closeModal = (event) => {
        this.setState({
            setOpen: false,
        })
    }

    render() {
        return (
            <div>
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
                        <div>
                    <Modal
                        open={this.state.setOpen}
                        onClose={this.closeModal}>
                        <div className="modal">
                        <h2>Reducer should have this info</h2>
                        </div>
                    </Modal>
                </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventClick);

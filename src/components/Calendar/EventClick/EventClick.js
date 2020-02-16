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

class EventClick extends Component {

    state = {
        setOpen: false,
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

        // console.log('*******', this.props.store.calendar.calendarEvent);

        const eventSample = [
            {
                title: "test",
                date: "2020-02-14"
            },
            {
                title: "test2",
                date: "2020-02-15"
            }
        ]

        const eventArray = this.props.store.calendar.calendarEvent.map((item, index) => {
            return {
                title: item.eventTitle,
                date: item.date,
                event: item
            }
        })

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
                            // events={this.props.store.calendar.calendarEvent}
                            //dateClick={this.handleDateClick}
                            events={eventArray}
                            eventClick={this.handleEventClick}
                        />
                        <div>
                    <Modal
                        open={this.state.setOpen}
                        onClose={this.closeModal}>
                        <div className="modal">
                        <h3>{this.props.store.calendar.calendarEvent.eventDate}</h3>
                        <h3>{this.props.store.calendar.calendarEvent.startTime}</h3>
                        <h3>{this.props.store.calendar.calendarEvent.endTime}</h3>
                        <h3>{this.props.store.calendar.calendarEvent.endEventDate}</h3>
                        <h3>{this.props.store.calendar.calendarEvent.eventTitle}</h3>
                        <h3>{this.props.store.calendar.calendarEvent.notes}</h3>
                        <h3>{this.props.store.calendar.calendarEvent.location}</h3>
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

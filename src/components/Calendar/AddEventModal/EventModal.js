// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// React Full Calendar
import DatePicker from 'react-date-picker';
import moment from 'moment';

// Material UI
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// CSS
import '../../Calendar/AddEventModal/EventModal.css'

class EventModal extends Component {

    state = {
        setOpen: false,
        calendarEvents:
            {
                eventDate: new Date(),
                endEventDate: new Date(),
                startTime: moment(),
                endTime: moment(),
                eventTitle: '',
                notes: '',
                location: '',
            }
    }


    handleInputField = infoKey => (event) => {
        const inputedVal = event.target != null ? event.target.value : event;
        this.setState({
            // calendarEvents: {
            //     ...this.state.calendarEvents,
            // },
            [infoKey]: inputedVal,
        });
    }

    openNewEvent = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    closeNewEvent = (event) => {
        this.setState({
            setOpen: false,
            eventDate: '',
            startTime: '',
            endTime: '',
            endEventDate: '',
            eventTitle: '',
            notes: '',
            location: '',
        })
    }

    handleSubmit = (event, infoKey) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'POST_EVENT',
            payload: {
                eventDate: this.state.eventDate,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
                endEventDate: this.state.endEventDate,
                eventTitle: this.state.eventTitle,
                notes: this.state.notes,
                location: this.state.location,
            }
        })
        this.closeNewEvent();
    }

    render() {
        return (
            <div className="container">
                <div className="task-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openNewEvent}
                    >
                        Add Event
                </Button>
                    <div className="event-modal">
                        <Modal open={this.state.setOpen} onClose={this.closeNewEvent}>
                            <div className="modal-input">
                                <div className="modal-header">
                                    <h2>Create Event</h2>
                                </div>
                                <div className="event-form">
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <div className="text-input">
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Event Name"
                                                    value={this.state.calendarEvents.eventTitle}
                                                    onChange={this.handleInputField('eventTitle')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Address"
                                                    value={this.state.calendarEvents.location}
                                                    onChange={this.handleInputField('location')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Start Time"
                                                    value={this.state.calendarEvents.startTime}
                                                    onChange={this.handleInputField('startTime')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="End Time"
                                                    value={this.state.calendarEvents.endTime}
                                                    onChange={this.handleInputField('endTime')}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DatePicker
                                                value={this.state.eventDate}
                                                onChange={this.handleInputField('eventDate')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className="notes-container">
                                        <TextField variant="outlined" className="notes-box"
                                            type="text"
                                            label="Notes"
                                            multiline
                                            rowsMax="4"
                                            value={this.state.calendarEvents.notes}
                                            onChange={this.handleInputField('notes')}
                                        />
                                    </div>
                                </div>
                                <div className="form-button">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSubmit}
                                    >
                                        OK
                                </Button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventModal);

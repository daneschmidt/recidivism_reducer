// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// React Full Calendar
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment-timezone';

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
            eventDate: '',
            endDate: '',
            eventTitle: '',
            notes: '',
            location: '',
            //startTime: moment().format('h:mma'),
            //endTime: moment().format('h:mma'),
            //eventDate: new Date(dateStr + 'T00:00:00'),
            // endEventDate: new Date(),
            //startTime: moment().format('h:mma'),
            
            // endTime: moment().format('h:mma'),
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
        this.props.dispatch({
            type: 'POST_EVENT',
            payload: {
                eventDate: moment(this.state.eventDate).format('YYYY-MM-DD HH:mm:ss'),
                //start: moment(this.state.startTime, "h:mma").format('HH:mm'),
                endDate: moment(this.state.endDate).format('YYYY-MM-DD HH:mm:ss'),
                //endEventDate: moment(this.state.endEventDate).format("YYYY-MM-DD"),
                // eventDate: this.state.eventDate,
                // startTime: this.state.startTime,    
                //startTime: moment(this.state.startTime, "h:mma").format("HH:mm"),
                //endTime: moment(this.state.endTime, "h:mma").format('HH:mm'),
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
                                                    onChange={this.handleInputField('eventTitle')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Address"
                                                    onChange={this.handleInputField('location')}
                                                />
                                                {/* <TextField variant="outlined"
                                                    type="text"
                                                    label="Start Time"
                                                    onChange={this.handleInputField('startTime')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="End Time"
                                                    onChange={this.handleInputField('endTime')}
                                                /> */}
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>

                                            {/* <input type="datetime-local" value="-08:00" onChange={this.handleInputField('eventDate')}/> */}
                                            {/* <input type="hidden" id="timezone" name="timezone" value="-08:00" /> */}
                                            <p>Enter Start Date and Time</p>
                                            <DatePicker
                                                //showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                showTimeSelect
                                                selected={this.state.eventDate}
                                                onChange={this.handleInputField('eventDate')}
                                            />
                                            <p>Enter End Date and Time</p>
                                            <DatePicker
                                                //showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                showTimeSelect
                                                selected={this.state.endDate}
                                                onChange={this.handleInputField('endDate')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className="notes-container">
                                        <TextField variant="outlined" className="notes-box"
                                            type="text"
                                            label="Notes"
                                            multiline
                                            rowsMax="4"
                                            onChange={this.handleInputField('notes')}
                                        />
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
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(EventModal);

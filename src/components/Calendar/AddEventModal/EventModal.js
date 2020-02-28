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
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';
import GridItem from "../../Grid/GridItem.js";
import GridContainer from "../../Grid/GridContainer.js";
import Card from "../../Card/Card.js";

// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js'

// CSS
import '../../App/App.css';

class EventModal extends Component {

    state = {
        setOpen: false,
        calendarEvents:
        {
            eventTitle: '',
            notes: '',
            location: '',
            //startTime: moment().format('h:mma'),
            //endTime: moment().format('h:mma'),
            //eventDate: new Date(dateStr + 'T00:00:00'),
            // endEventDate: new Date(),
            //startTime: moment().format('h:mma'),

            // endTime: moment().format('h:mma'),
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
            endDate: '',
            endTime: '',
            endEventDate: '',
            eventTitle: '',
            notes: '',
            location: '',
        })
    }

    handleSubmit = (event, infoKey) => {
        if (this.state.eventDate &&
            this.state.endDate) {
            this.props.dispatch({
                type: 'POST_EVENT',
                payload: {
                    eventDate: moment(this.state.eventDate).format('YYYY-MM-DD HH:mm:ss'),
                    endDate: moment(this.state.endDate).format('YYYY-MM-DD HH:mm:ss'),
                    eventTitle: this.state.eventTitle,
                    notes: this.state.notes,
                    location: this.state.location,
                    //start: moment(this.state.startTime, "h:mma").format('HH:mm'),
                    //endEventDate: moment(this.state.endEventDate).format("YYYY-MM-DD"),
                    // eventDate: this.state.eventDate,
                    // startTime: this.state.startTime,    
                    //startTime: moment(this.state.startTime, "h:mma").format("HH:mm"),
                    //endTime: moment(this.state.endTime, "h:mma").format('HH:mm'),
                }
            })
            this.closeNewEvent();
            Swal.fire({
                position: 'Center',
                icon: 'success',
                title: 'Event has been added',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            this.closeNewEvent();
            Swal.fire({
                position: 'center',
                icon: 'error',
                //title: 'Oops...',
                text: 'Please eneter a start and end date',
                timer: 1500
            })
        }
    }

    render() {
        return (
            <GridContainer justify="center">
                <div className="add-event-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openNewEvent}
                    >
                        Add Event
                    </Button>
                </div>
                <div>
                    <Modal open={this.state.setOpen} onClose={this.closeNewEvent}>
                        <div className="modal">
                            <h3 className="add-event-header">Create Event</h3>
                            <div className="event-form">
                                <div className="date-picker">
                                <Grid container spacing={2}>
                                    <Grid item xs={12}><span>Enter Event Date and Time Range</span></Grid>
                                    <Grid item xs={6}>
                                        <span>Start:</span>
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
                                    </Grid>
                                    <Grid item xs={6}>
                                        <span>End:</span>
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
                                </div>
                                <Divider style={{ marginBottom: '20px', }}/>
                                <div className="add-event-input">
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <TextField variant="outlined"
                                            type="text"
                                            label="Event Name"
                                            onChange={this.handleInputField('eventTitle')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField variant="outlined"
                                            type="text"
                                            label="Address"
                                            onChange={this.handleInputField('location')}
                                        />
                                    </Grid>
                                </Grid>
                                </div>
                                <Grid item xs={12}>
                                <div className="notes-container">
                                    <TextField variant="outlined" className="notes-box"
                                        type="text"
                                        label="Notes"
                                        multiline
                                        rowsMax="4"
                                        onChange={this.handleInputField('notes')}
                                    />
                                </div>
                                </Grid>
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
            </GridContainer>
        );
    }
}

export default connect(mapStoreToProps)(EventModal);
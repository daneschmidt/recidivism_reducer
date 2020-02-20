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

import Paper from '@material-ui/core/Paper';
import GridItem from "../../Grid/GridItem.js";
import GridContainer from "../../Grid/GridContainer.js";
import Card from "../../Card/Card.js";

// CSS
import '../../UserPage/Modal.css'

class EventModal extends Component {

    state = {
        setOpen: false,
        calendarEvents:
        {
            eventDate: new Date(),
            endEventDate: new Date(),
            startTime: moment().format('h:mma'),
            endTime: moment().format('h:mma'),
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
            <GridContainer justify="center">
                <Paper className="paperPanel" elevation={5}>
                    <div className="container">
                        <div className="task-button">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={this.openNewEvent}
                            >
                                Add Event
                    </Button>

                            <div className="modal">
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
                                                        <TextField variant="outlined"
                                                            type="text"
                                                            label="Start Time"
                                                            onChange={this.handleInputField('startTime')}
                                                        />
                                                        <TextField variant="outlined"
                                                            type="text"
                                                            label="End Time"
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
                </Paper>
            </GridContainer>
        );
    }
}

export default connect(mapStoreToProps)(EventModal);

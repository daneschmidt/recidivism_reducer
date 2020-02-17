// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';
import DatePicker from 'react-date-picker';
// Material UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// CSS
import '../TaskPage/Modal.css'

class AddTaskModal extends Component {
    state = {
        setOpen: false,
        newTask: {
            users_id: this.props.store.user.id,
            clients_id: '',
            task: '',
            assignedOn: moment(Date()).format(),
            dueBy: '',
        }
    };

    handleInputField = infoKey => (event) => {
        const inputedVal = event.target != null ? event.target.value : event;
        this.setState({
            [infoKey]: inputedVal,
        });
    }

    openAddTask = (event) => {
        this.setState({
            setOpen: true,
        })
    }

    closeAddTask = (event) => {
        this.setState({
            setOpen: false,
        })
    }
    handleSubmit = (event, infoKey) => {
        this.props.dispatch({
            type: 'POST_TASK',
            payload: {
                ...this.state.newTask
            }
        })
        this.closeAddTask();
    }

    render() {
        const allClientsList = this.props.store.getAllClientsReducer.map((item, index) => {
            return (
                <option key={index} value={item.id}>{item.firstName} {item.lastName}</option>
            )
        });
        const blankClient = <option>Select Client</option>;
        return (
            <div className="container">
                <div className="modal-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openAddTask}
                    >
                        Add Task
                    </Button>
                </div>
                <div className="event-modal">
                    <Modal
                        open={this.state.setOpen}
                        onClose={this.closeAddTask}>
                        <div className="modal">
                            <h2>Add Task</h2>
                            <div className="text-input">
                                <TextField variant="outlined"
                                    type="text"
                                    label="Task"
                                    
                                    onChange={(event) => this.handleInputField(event, this.state.newTask.task = event.target.value)}
                                />
                                <TextField variant="outlined"
                                    type="text"
                                    label="Due By"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                      }}
                                    onChange={(event) => this.handleInputField(event, this.state.newTask.dueBy = event.target.value)}
                                />
                                
                                <Grid item xs={6}>
                                </Grid>
                                <select className="select-task-css" onChange={(event) => this.handleInputField(event, this.state.newTask.clients_id = event.target.value)}>
                                    {blankClient}
                                    {allClientsList}
                                </select>
                                </div>
                                <div className="form-button">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSubmit}
                                    >
                                        Add Task
                                    </Button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AddTaskModal);

// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';

// Material UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
import Card from '../Card/Card.js';
import Paper from '@material-ui/core/Paper';

// CSS
import '../TaskPage/Modal.css';
// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js';

class AddTaskModal extends Component {
  state = {
    setOpen: false,
    newTask: {
      users_id: this.props.store.user.id,
      clients_id: '',
      task: '',
      assignedOn: moment(Date()).format(),
      dueBy: ''
    }
  };

  handleInputField = infoKey => event => {
    const inputedVal = event.target != null ? event.target.value : event;
    this.setState({
      [infoKey]: inputedVal
    });
  };

  openAddTask = event => {
    this.setState({
      setOpen: true
    });
  };

  closeAddTask = event => {
    this.setState({
      setOpen: false
    });
  };
  handleSubmit = (event, infoKey) => {
    if (
      this.state.newTask.task &&
      this.state.newTask.clients_id &&
      this.state.newTask.dueBy
    ) {
      // this.closeAddTask();

      this.props.dispatch({
        type: 'POST_TASK',
        payload: {
          ...this.state.newTask
        }
      });
      this.closeAddTask();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Task has been Added!',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.setState({
          checkbox: null
        });
      });
    } else {
      this.closeAddTask();
      Swal.fire({
        position: 'center',
        icon: 'error',
        text: 'Please fill out all input fields!',
        timer: 1500
      });
    }
    // this.closeAddTask();
  };

  render() {
    const allClientsList = this.props.store.getAllClientsReducer.map(
      (item, index) => {
        return (
          <option key={index} value={item.id}>
            {item.firstName} {item.lastName}
          </option>
        );
      }
    );
    const blankClient = <option>Select Client</option>;
    return (
      <div>
        <div>
          <Button
            variant='contained'
            color='primary'
            onClick={this.openAddTask}
          >
            Add Task
          </Button>
        </div>
        <div className='event-modal'>
          <Modal open={this.state.setOpen} onClose={this.closeAddTask}>
            <div className='modal'>
              <GridContainer justify='center'>
                {/* <GridItem xs={12} sm={12} md={8}> */}
                <Card>
                  {/* <Paper className="paperPanel" elevation={5}> */}
                  <h2>Add Task</h2>
                  <div className='event-form'>
                    <TextField
                      variant='outlined'
                      type='text'
                      label='Task'
                      onChange={event =>
                        this.handleInputField(
                          event,
                          (this.state.newTask.task = event.target.value)
                        )
                      }
                    />

                    <TextField
                      variant='outlined'
                      type='text'
                      label='Due By'
                      type='date'
                      InputLabelProps={{
                        shrink: true
                      }}
                      onChange={event =>
                        this.handleInputField(
                          event,
                          (this.state.newTask.dueBy = event.target.value)
                        )
                      }
                    />

                    <select
                      className='select-task-css'
                      onChange={event =>
                        this.handleInputField(
                          event,
                          (this.state.newTask.clients_id = event.target.value)
                        )
                      }
                    >
                      {blankClient}
                      {allClientsList}
                    </select>
                  </div>
                  <div className='form-button'>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={this.handleSubmit}
                    >
                      Add Task
                    </Button>
                  </div>
                  {/* </Paper> */}
                </Card>
                {/* </GridItem> */}
              </GridContainer>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddTaskModal);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';

// core components
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
import CustomTabs from '../CustomTabs/CustomTabs';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Card from '../Card/Card.js';

import AddTaskModal from '../TaskPage/AddTaskModal';
// Sweet Alert
import Swal from 'sweetalert2/dist/sweetalert2.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class TaskPage extends Component {
  state = {
    tasks: {
      sortBy: 'byClients',
      clients_id: '',
      trueOrFalse: 'False',
      checkbox: 'False',
      taskId: ''
    }
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_CLIENTS_LIST'
    });
    this.props.dispatch({
      type: 'GET_TASKS_BY_USER',
      payload: {
        sortBy: 'byUser',
        id: this.props.user.id,
        trueOrFalse: 'False'
      }
    });
    this.props.dispatch({
      type: 'GET_TASKS_BY_ALL',
      payload: {
        sortBy: 'byAll',
        trueOrFalse: 'False'
      }
    });
  }

  handleInputChange = (event, inputKey) => {
    this.setState({
      tasks: {
        ...this.state.tasks,
        [inputKey]: event.target.value
      }
    });
    this.getClientTasks(event, inputKey);
  };
  handleCheckboxChange = (event, id, inputKey) => {
    this.setState({
      tasks: {
        ...this.state.tasks,
        id: event.target.value
      }
    });
    this.markTask(event, id, inputKey);
  };

  markTask = (event, id, inputKey) => {
    const taskId = id;
    const checkbox = inputKey;
    const completedOn = moment(Date()).format();
    Swal.fire({
      title: 'Mark as Completed?',
      text: 'Are you sure you want to mark this task as completed?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Completed!'
    }).then(result => {
      if (result.value) {
        Swal.fire(
          'Completed!',
          'Task has been marked as completed!',
          'success'
        );
        this.props.dispatch({
          type: 'MARK_TASK',
          payload: {
            taskId,
            completedOn,
            checkbox,
            id: this.props.user.id
          }
        });
      }
    });
  };

  handleClientCheckboxChange = (event, id, clients_id, inputKey) => {
    this.setState({
      tasks: {
        ...this.state.tasks,
        id: event.target.value
      }
    });
    this.markClientTask(event, id, clients_id, inputKey);
  };

  markClientTask = (event, id, clients_id, inputKey) => {
    const taskId = id;
    const checkbox = inputKey;
    const completedOn = moment(Date()).format();
    Swal.fire({
      title: 'Mark as Completed?',
      text: 'Are you sure you want to mark this task as completed?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Completed!'
    }).then(result => {
      if (result.value) {
        Swal.fire(
          'Completed!',
          'Task has been marked as completed!',
          'success'
        );
        this.props.dispatch({
          type: 'MARK_CLIENT_TASK',
          payload: {
            taskId,
            completedOn,
            checkbox,
            clients_id,
            id: this.props.user.id
          }
        });
      }
    });
    this.getClientTasks(event);
  };
  getClientTasks = (event, inputKey) => {
    const tasksToGet = this.state.tasks;
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_TASKS_BY_CLIENT',
      payload: tasksToGet
    });
  };

  render() {
    const currentUser = `${this.props.store.user.firstName} ${this.props.store.user.lastName} Tasks`;
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

    const taskListByAll = this.props.store.getAllTasksReducer.map(
      (item, index) => {
        return (
          <TableRow hover className='table-row' key={index}>
            <TableCell>{item.task}</TableCell>
            {/* <TableCell>Task:</TableCell> */}
            <TableCell>{moment(item.assignedOn).format('LL')}</TableCell>
            {/* <TableCell>Added On:</TableCell> */}
            <TableCell>{moment(item.dueBy).format('LL')}</TableCell>
            {/* <TableCell>Due By:</TableCell> */}
            {/* <TableCell>Added By:</TableCell> */}
            <TableCell>{item.clientsFirstName}</TableCell>
            {/* <TableCell>Client:</TableCell> */}
            <TableCell>{item.clientsLastName}</TableCell>
            <Checkbox
              type='checkbox'
              checked={item.complete}
              onChange={event =>
                this.handleCheckboxChange(
                  event,
                  item.tasksId,
                  (this.state.tasks.checkbox = event.target.checked)
                )
              }
            />
          </TableRow>
        );
      }
    );
    const taskListByUser = this.props.store.getUserTasksReducer.map(
      (item, index) => {
        return (
          <TableRow hover className='table-row' key={index}>
            <TableCell>{item.task}</TableCell>
            {/* <TableCell>Task:</TableCell> */}
            <TableCell>{moment(item.assignedOn).format('LL')}</TableCell>
            {/* <TableCell>Added On:</TableCell> */}
            <TableCell>{moment(item.dueBy).format('LL')}</TableCell>
            {/* <TableCell>Due By:</TableCell> */}
            {/* <TableCell>Added By:</TableCell> */}
            <TableCell>{item.clientsFirstName}</TableCell>
            {/* <TableCell>Client:</TableCell> */}
            <TableCell>{item.clientsLastName}</TableCell>
            <Checkbox
              type='checkbox'
              checked={item.complete}
              onChange={event =>
                this.handleCheckboxChange(
                  event,
                  item.tasksId,
                  (this.state.tasks.checkbox = event.target.checked)
                )
              }
            />
          </TableRow>
        );
      }
    );
    const taskListByClient = this.props.store.getClientTasksReducer.map(
      (item, index) => {
        return (
          <TableRow hover className='table-row' key={index}>
            <TableCell>{item.task}</TableCell>
            {/* <TableCell>Task:</TableCell> */}
            <TableCell>{moment(item.assignedOn).format('LL')}</TableCell>
            {/* <TableCell>Added On:</TableCell> */}
            <TableCell>{moment(item.dueBy).format('LL')}</TableCell>
            {/* <TableCell>Due By:</TableCell> */}
            {/* <TableCell>Added By:</TableCell> */}
            <TableCell>{item.clientsFirstName}</TableCell>
            {/* <TableCell>Client:</TableCell> */}
            <TableCell>{item.clientsLastName}</TableCell>
            <Checkbox
              type='checkbox'
              checked={item.complete}
              onChange={event =>
                this.handleClientCheckboxChange(
                  event,
                  item.tasksId,
                  item.clients_id,
                  (this.state.tasks.checkbox = event.target.checked)
                )
              }
            />
          </TableRow>
        );
      }
    );

    const TaskListClient = (
      <TableContainer
        component={Paper}
        className='container'
        style={{
          marginTop: '30px',
          marginRight: '300px',
          boxSizing: 'border-box'
        }}
      >
        <Table size='small'>
          <TableHead
            className='table-head'
            style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
          >
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Task</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Creation Date</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Due Date</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>First Name</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Last Name</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Complete</strong>
            </TableCell>
          </TableHead>
          <TableBody>{taskListByClient}</TableBody>
        </Table>
      </TableContainer>
    );

    const taskListUser = (
      <TableContainer
        component={Paper}
        className='container'
        style={{ marginTop: '30px', boxSizing: 'border-box' }}
      >
        <Table size='small'>
          <TableHead
            className='table-head'
            style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
          >
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Task</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Creation Date</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Due Date</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>First Name</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Last Name</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Complete</strong>
            </TableCell>
          </TableHead>
          <TableBody>{taskListByUser}</TableBody>
        </Table>
      </TableContainer>
    );

    const taskListAll = (
      <TableContainer
        component={Paper}
        className='container'
        style={{ marginTop: '30px', boxSizing: 'border-box' }}
      >
        <Table size='small'>
          <TableHead
            className='table-head'
            style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
          >
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Task</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Creation Date</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Due Date</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>First Name</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Last Name</strong>
            </TableCell>
            <TableCell style={{ color: '#b6c1cb' }}>
              <strong>Complete</strong>
            </TableCell>
          </TableHead>
          <TableBody>{taskListByAll}</TableBody>
        </Table>
      </TableContainer>
    );

    return (
      <GridContainer justify='center' paddingTop={5}>
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <Paper
              className='paperPanel'
              elevation={5}
              style={{
                padding: '50px',
                backgroundColor: 'rgb(56, 73, 84, 0.3)'
              }}
            >
              <CustomTabs
                title='Task List:'
                headerColor='primary'
                tabs={[
                  {
                    tabName: currentUser,
                    tabIcon: PlaylistAddCheckIcon,
                    tabContent: taskListUser
                  },

                  {
                    tabName: 'All Tasks',
                    tabIcon: PlaylistAddCheckIcon,
                    tabContent: taskListAll
                  },
                  {
                    tabName: (
                      <select
                        className='select-css'
                        onChange={event =>
                          this.handleInputChange(
                            event,
                            (this.state.tasks.clients_id = event.target.value)
                          )
                        }
                      >
                        {blankClient}
                        {allClientsList}
                      </select>
                    ),
                    tabIcon: PlaylistAddCheckIcon,
                    tabContent: TaskListClient
                  }
                ]}
              />
              <AddTaskModal />
            </Paper>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default connect(mapStoreToProps)(TaskPage);

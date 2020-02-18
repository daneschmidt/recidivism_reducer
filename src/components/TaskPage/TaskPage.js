import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import CustomTabs from "../CustomTabs/CustomTabs";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import AddTaskModal from '../TaskPage/AddTaskModal';

class TaskPage extends Component {
    
    state = {
        heading: 'Task Page',
        tasks: {
            sortBy: 'byClients',
            clients_id: '',
            trueOrFalse: 'False',
            checkbox: 'False',
            taskId: '',
        } 
    }
    
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_ALL_CLIENTS_LIST'
        })
        this.props.dispatch({
            type: 'GET_TASKS_BY_USER',
            payload: {
                sortBy: 'byUser',
                id: this.props.user.id,
                trueOrFalse: 'False',
            }
        })
        this.props.dispatch({
            type: 'GET_TASKS_BY_ALL',
            payload: {
                sortBy: 'byAll',
                trueOrFalse: 'False',
            }
        })
    }
    
    handleInputChange = (event, inputKey) => {
        this.setState({
            tasks: {
                ...this.state.tasks,
                [inputKey]: event.target.value
            }
        });
        this.getClientTasks(event, inputKey);
    }
    handleCheckboxChange = (event, id, inputKey) => {
        this.setState({
            tasks: {
                ...this.state.tasks,
                id: event.target.value
            }
        });
        this.markTask(event, id, inputKey);
    }

    markTask = (event, id, inputKey) => {
        const taskId = id;
        const checkbox = inputKey;
        const completedOn = moment(Date()).format();
        this.props.dispatch({
            type: 'MARK_TASK',
            payload: {
                taskId,
                completedOn,
                checkbox,
                id: this.props.user.id,
            }
        })
        // this.getClientTasks(event)
    }

    handleClientCheckboxChange = (event, id, clients_id, inputKey) => {
        this.setState({
            tasks: {
                ...this.state.tasks,
                id: event.target.value
            }
        });
        this.markClientTask(event, id, clients_id, inputKey);
    }

    markClientTask = (event, id, clients_id, inputKey) => {
        const taskId = id;
        const checkbox = inputKey;
        const completedOn = moment(Date()).format();
        this.props.dispatch({
            type: 'MARK_CLIENT_TASK',
            payload: {
                taskId,
                completedOn,
                checkbox,
                clients_id,
                id: this.props.user.id,
            }
        })
        this.getClientTasks(event)
    }
    getClientTasks = (event, inputKey) => {
        const tasksToGet = this.state.tasks;
        event.preventDefault();
        this.props.dispatch({
            type: 'GET_TASKS_BY_CLIENT',
            payload: tasksToGet
        })
    }

    render() {
        const currentUser = `${this.props.store.user.firstName} ${this.props.store.user.lastName} Tasks`;
        const allClientsList = this.props.store.getAllClientsReducer.map((item, index) => {
            return (
                <option key={index} value={item.id}>{item.firstName} {item.lastName}</option>
            )
        });
        const blankClient = <option>Select Client</option>;

        const taskListByAll = this.props.store.getAllTasksReducer.map((item, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" checked={item.complete} onChange={(event) => this.handleCheckboxChange(event, item.tasksId, this.state.tasks.checkbox = event.target.checked)}/>
                    <ul className="noBullets">
                        <li>Task: {item.task}</li>
                        <li>Added On: {moment(item.assignedOn).format('LL')}</li>
                        <li>Due By: {moment(item.dueBy).format('LL')}</li>
                        <li>Added By: {item.userFirstName} {item.userLastName}</li>
                        <li>Client: {item.clientsFirstName} {item.clientsLastName}</li>
                    </ul>
                </div>
            )
        });
        const taskListByUser = this.props.store.getUserTasksReducer.map((item, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" checked={item.complete} onChange={(event) => this.handleCheckboxChange(event, item.tasksId, this.state.tasks.checkbox = event.target.checked)}/>
                    <ul className="noBullets">
                        <li>Task: {item.task}</li>
                        <li>Added On: {moment(item.assignedOn).format('LL')}</li>
                        <li>Due By: {moment(item.dueBy).format('LL')}</li>
                        <li>Added By: {item.userFirstName} {item.userLastName}</li>
                        <li>Client: {item.clientsFirstName} {item.clientsLastName}</li>
                     </ul>
                </div>
            )
        });
        const taskListByClient = this.props.store.getClientTasksReducer.map((item, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" checked={item.complete} onChange={(event) => this.handleClientCheckboxChange(event, item.tasksId, item.clients_id, this.state.tasks.checkbox = event.target.checked)}/>
                    <ul className="noBullets">
                        <li>Task: {item.task}</li>
                        <li>Added On: {moment(item.assignedOn).format('LL')}</li>
                        <li>Due By: {moment(item.dueBy).format('LL')}</li>
                        <li>Added By: {item.userFirstName} {item.userLastName}</li>
                        <li>Client: {item.clientsFirstName} {item.clientsLastName}</li>
                    </ul>
                </div>
            )
        });
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <GridContainer justify="center" paddingTop={12}>
            <GridItem xs={12} sm={12} md={10}>
            <AddTaskModal />
                <CustomTabs
                    title="Task List:"
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: currentUser,
                            tabIcon: PlaylistAddCheckIcon,
                            tabContent: taskListByUser
                        },

                        {
                            tabName: "All Tasks",
                            tabIcon: PlaylistAddCheckIcon,
                            tabContent: taskListByAll
                        },
                        {
                            tabName: <select className="select-css" onChange={(event) => this.handleInputChange(event, this.state.tasks.clients_id = event.target.value)}>
                            {blankClient}
                            {allClientsList}
                            </select>,
                            tabIcon: PlaylistAddCheckIcon,
                            tabContent: taskListByClient
                        }
                    ]}
                />
            </GridItem>
        </GridContainer>
            </div>
        )
    }
}


export default connect(mapStoreToProps)(TaskPage);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TaskPage extends Component {
    state = {
        heading: 'Task Page',
        tasks: {
            sortBy: '',
            clients_id: '',
            trueOrFalse: '',
        }
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_ALL_CLIENTS_LIST'
        })
        // this.props.dispatch({
        // type: 'GET_TASKS'
        // })
    }

    handleInputChange = (event, inputKey) => {
        this.setState({
            tasks: {
                ...this.state.tasks,
                [inputKey]: event.target.value
            }
        });
    }

    getTasks = (event, inputKey) => {
        const tasksToGet = this.state.tasks;
        const userID = this.props.store.user.id;
        // const trueOrFalse = this.state.complete
        // const taskDataForServer = {
        //     ...tasksToGet,
        // }
        event.preventDefault();
        this.props.dispatch({
            type: 'GET_TASKS',
            payload: tasksToGet
        })
    }

    render() {
        const allClientsList = this.props.store.getAllClientsReducer.map((item, index) => {
            return (
                <option key={index} value={item.id}>{item.firstName} {item.lastName}</option>
            )
        });
        const taskList = this.props.store.getTasksReducer.map((item, index) => {
            return (
                <ul>
                    <li key={index}>{item.task} {item.clientsFirstName}</li>
                </ul>
            )
        });
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <button>Add Task</button>
                <form onSubmit={this.getTasks}>

                    <select onChange={(event) => this.handleInputChange(event, this.state.tasks.sortBy = event.target.value)}>
                        <option value="byClients">Clients</option>
                        <option value="byUser">{this.props.store.user.firstName} {this.props.store.user.lastName}</option>
                        <option value="All">All</option>
                    </select>
                    <select onChange={(event) => this.handleInputChange(event, this.state.tasks.clients_id = event.target.value)}>
                        {allClientsList}
                    </select>
                    <select onChange={(event) => this.handleInputChange(event, this.state.tasks.trueOrFalse = event.target.value)}>
                        <option value="FALSE">Uncompleted</option>
                        <option value="TRUE">Completed</option>
                    </select>
                    <button type='submit' value='Submit'>Get Tasks</button>
                </form>

                {taskList}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(TaskPage);
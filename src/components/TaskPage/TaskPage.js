import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { MenuItem, Select, Button, TextField } from '@material-ui/core';



class TaskPage extends Component {
    state = {
        heading: 'Task Page',
        tasks: {
            id: '',
            users_id: '',
            clients_id: '',
            task: '',
            complete: '',
            assignedOn: '',
            dueBy: '',
            completedOn: '',
        }
    }
    componentDidMount() {
        this.props.dispatch({
        type: 'GET_ALL_CLIENTS_LIST'
    })
}

    handleInputChange = (event, inputKey) => {
        this.setState({
            newSale: {
                ...this.state.tasks,
                [inputKey]: event.target.value
            }
        });
    }

    render() {
        const allClientsList = this.props.store.getAllClientsReducer.map((item, index) => {
            return(
                    <option key={index}>{item.firstName} {item.lastName}</option>
            )
        })
        return(
            <div>
                <h2>{this.state.heading}</h2>
                <button>Add Task</button>
                <button>Get Tasks</button>
                <select>
                    <option value="Clients">Clients</option>
                    <option value="User">User</option>
                    <option value="All">All</option>
                </select>
                <select>
                {allClientsList}
                </select>
                <select>
                    <option value="Uncompleted">Uncompleted</option>
                    <option value="Completed">Completed</option>
                </select>
                <p>
                    Task Page!
                </p>                                                  
            </div>
        )
    }
}

export default connect(mapStoreToProps)(TaskPage);
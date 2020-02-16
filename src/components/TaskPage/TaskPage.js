import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment';
/*eslint-disable*/
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import SnackbarContent from "../Snackbar/SnackbarContent";
import Snackbar from "../Snackbar/Snackbar";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import Tasks from "../../components/Tasks/Tasks";
import Table from "../../components/Table/Table.js";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import CustomTabs from "../CustomTabs/CustomTabs";
import BugReport from "@material-ui/icons/BugReport";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { bugs, website, server } from "../../../src/variables/general";


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
    }

    getClientTasks = (event, inputKey) => {
        const tasksToGet = this.state.tasks;
        const userID = this.props.store.user.id;
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
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <button>Add Task</button>
                <GridContainer justify="center" paddingTop={12}>
            <GridItem xs={12} sm={12} md={10}>
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
                {/* <form onSubmit={this.getTasks}>

                    <Select onChange={(event) => this.handleInputChange(event, this.state.tasks.sortBy = event.target.value)}>
                        <option value="byClients">Clients</option>
                        <option value="byUser">{this.props.store.user.firstName} {this.props.store.user.lastName}</option>
                        <option value="All">All</option>
                    </Select>
                    <Select onChange={(event) => this.handleInputChange(event, this.state.tasks.clients_id = event.target.value)}>
                        {allClientsList}
                    </Select>
                    <Select value="FALSE" onChange={(event) => this.handleInputChange(event, this.state.tasks.trueOrFalse = event.target.value)}>
                        <option value="FALSE">Uncompleted</option>
                        <option value="TRUE">Completed</option>
                    </Select>
                    <Button type='submit' value='Submit'>Get Tasks</Button>
                </form>

                {taskList} */}
            </div>
        )
    }
}


export default connect(mapStoreToProps)(TaskPage);



// const styles = {
//     cardCategoryWhite: {
//         "&,& a,& a:hover,& a:focus": {
//             color: "rgba(255,255,255,.62)",
//             margin: "0",
//             fontSize: "14px",
//             marginTop: "0",
//             marginBottom: "0"
//         },
//         "& a,& a:hover,& a:focus": {
//             color: "#FFFFFF"
//         }
//     },
//     cardTitleWhite: {
//         color: "#FFFFFF",
//         marginTop: "0px",
//         minHeight: "auto",
//         fontWeight: "300",
//         fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//         marginBottom: "3px",
//         textDecoration: "none",
//         "& small": {
//             color: "#777",
//             fontSize: "65%",
//             fontWeight: "400",
//             lineHeight: "1"
//         }
//     }
// };


// {
//     tabName: "Kyle's Tasks",
//     tabIcon: PlaylistAddCheckIcon,
//     tabContent: (
//         <Tasks
//             checkedIndexes={[0, 3]}
//             tasksIndexes={[1]}
//             tasks={bugs}
//         />
//     )
// },

// const useStyles = makeStyles(styles);


/*onChange={(event) => this.handleCheckboxChange(event, item.id, this.state.tasks.checkbox = 'False')}*/
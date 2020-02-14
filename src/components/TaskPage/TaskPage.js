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

// /*eslint-disable*/
// import React from "react";
// // nodejs library to set properties for components
// // import PropTypes from "prop-types";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// // @material-ui/icons
// import AddAlert from "@material-ui/icons/AddAlert";
// // core components
// import GridItem from "../Grid/GridItem.js";
// import GridContainer from "../Grid/GridContainer.js";
// import Button from "../CustomButtons/Button.js";
// import SnackbarContent from "../Snackbar/SnackbarContent";
// import Snackbar from "../Snackbar/Snackbar";
// import Card from "../Card/Card.js";
// import CardHeader from "../Card/CardHeader.js";
// import CardBody from "../Card/CardBody.js";
// import Tasks from "../../components/Tasks/Tasks";
// import Table from "../../components/Table/Table.js";

// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";

// import CustomTabs from "../CustomTabs/CustomTabs";
// import BugReport from "@material-ui/icons/BugReport";
// import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';



// import { bugs, website, server } from "../../../src/variables/general";

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

// const useStyles = makeStyles(styles);

// export default function Notifications() {
//     return (
//         <GridContainer justify="center" paddingTop={12}>
//             <GridItem xs={12} sm={12} md={10}>
//                 <CustomTabs
//                     title="Task List:"
//                     headerColor="primary"
//                     tabs={[
//                         {
//                             tabName: "Kyle's Tasks",
//                             tabIcon: PlaylistAddCheckIcon,
//                             tabContent: (
//                                 <Tasks
//                                     checkedIndexes={[0, 3]}
//                                     tasksIndexes={[0, 1, 2, 3, 4, 5]}
//                                     tasks={bugs}
//                                 />
//                             )
//                         },
//                         {
//                             tabName: "Leslie's Tasks",
//                             tabIcon: PlaylistAddCheckIcon,
//                             tabContent: (
//                                 <Tasks
//                                     checkedIndexes={[0]}
//                                     tasksIndexes={[0, 1]}
//                                     tasks={website}
//                                 />
//                             )
//                         },
//                         {
//                             tabName: "All Tasks",
//                             tabIcon: PlaylistAddCheckIcon,
//                             tabContent: (
//                                 <Tasks
//                                     checkedIndexes={[1]}
//                                     tasksIndexes={[0, 1, 2]}
//                                     tasks={server}
//                                 />
//                             )
//                         }
//                     ]}
//                 />
//             </GridItem>
//         </GridContainer>
//     );
// }

export default connect(mapStoreToProps)(TaskPage);

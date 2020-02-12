
/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Button from "../CustomButtons/Button.js";
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

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
    return (
        <GridContainer justify="center" paddingTop={12}>
            <GridItem xs={12} sm={12} md={10}>
                <CustomTabs
                    title="Task List:"
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Kyle's Tasks",
                            tabIcon: PlaylistAddCheckIcon,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[0, 3]}
                                    tasksIndexes={[0, 1, 2, 3, 4, 5]}
                                    tasks={bugs}
                                />
                            )
                        },
                        {
                            tabName: "Leslie's Tasks",
                            tabIcon: PlaylistAddCheckIcon,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[0]}
                                    tasksIndexes={[0, 1]}
                                    tasks={website}
                                />
                            )
                        },
                        {
                            tabName: "All Tasks",
                            tabIcon: PlaylistAddCheckIcon,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[1]}
                                    tasksIndexes={[0, 1, 2]}
                                    tasks={server}
                                />
                            )
                        }
                    ]}
                />
            </GridItem>
        </GridContainer>
    );
}














/// OLD PAGE //

// import React, { Component } from 'react';

// class TaskPage extends Component {
//     render() {
//         return(
//             <div>                                   
//                 <p>
//                     Task Page!
//                 </p>                                                  
//             </div>
//         )
//     }
// }

// export default TaskPage;
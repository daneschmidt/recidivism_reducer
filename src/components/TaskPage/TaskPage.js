
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
    // const classes = useStyles();
    // const [tl, setTL] = React.useState(false);
    // const [tc, setTC] = React.useState(false);
    // const [tr, setTR] = React.useState(false);
    // const [bl, setBL] = React.useState(false);
    // const [bc, setBC] = React.useState(false);
    // const [br, setBR] = React.useState(false);
    // React.useEffect(() => {
    //     // Specify how to clean up after this effect:
    //     return function cleanup() {
    //         // to stop the warning of calling setState of unmounted component
    //         var id = window.setTimeout(null, 0);
    //         while (id--) {
    //             window.clearTimeout(id);
    //         }
    //     };
    // });
    // const showNotification = place => {
    //     switch (place) {
    //         case "tl":
    //             if (!tl) {
    //                 setTL(true);
    //                 setTimeout(function () {
    //                     setTL(false);
    //                 }, 6000);
    //             }
    //             break;
    //         case "tc":
    //             if (!tc) {
    //                 setTC(true);
    //                 setTimeout(function () {
    //                     setTC(false);
    //                 }, 6000);
    //             }
    //             break;
    //         case "tr":
    //             if (!tr) {
    //                 setTR(true);
    //                 setTimeout(function () {
    //                     setTR(false);
    //                 }, 6000);
    //             }
    //             break;
    //         case "bl":
    //             if (!bl) {
    //                 setBL(true);
    //                 setTimeout(function () {
    //                     setBL(false);
    //                 }, 6000);
    //             }
    //             break;
    //         case "bc":
    //             if (!bc) {
    //                 setBC(true);
    //                 setTimeout(function () {
    //                     setBC(false);
    //                 }, 6000);
    //             }
    //             break;
    //         case "br":
    //             if (!br) {
    //                 setBR(true);
    //                 setTimeout(function () {
    //                     setBR(false);
    //                 }, 6000);
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // };
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
            {/* <GridItem xs={12} sm={12} md={6}>
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                        <p className={classes.cardCategoryWhite}>
                            New employees on 15th September, 2016
              </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="warning"
                            tableHead={["ID", "Name", "Salary", "Country"]}
                            tableData={[
                                ["1", "Dakota Rice", "$36,738", "Niger"],
                                ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                                ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                                ["4", "Philip Chaney", "$38,735", "Korea, South"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem> */}
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
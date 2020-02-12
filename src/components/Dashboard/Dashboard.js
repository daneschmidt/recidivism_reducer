/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
// react plugin for creating charts
import ChartistGraph from "react-chartist";
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
import CardFooter from "../Card/CardFooter.js";
import Tasks from "../../components/Tasks/Tasks";
import Table from "../../components/Table/Table.js";
import AccessTime from "@material-ui/icons/AccessTime";

import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import CustomTabs from "../CustomTabs/CustomTabs";
import BugReport from "@material-ui/icons/BugReport";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';



import { bugs, website, server } from "../../../src/variables/general";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "../../variables/charts";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle"

const useStyles = makeStyles(styles);

export default function DashboardPage() {
    const classes = useStyles();
    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={2}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Client List</h4>
                        <p className={classes.cardCategoryWhite}>
                            Clients as of 2-12-2020
              </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Name"]}
                            tableData={[
                                ["Dane Schmidt"],
                                ["Grizzler Johnston"],
                                ["Josh Wolf"],
                                ["Dad Lackus"],
                                ["Luke YoMaMa"],
                                ["DUKE LUKE"],
                                ["Scott"],
                                ["Rachael"],
                                ["Myron"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
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
            <GridItem xs={12} sm={12} md={4}>
                <Card chart>
                    <CardHeader color="primary">
                        <ChartistGraph
                            className="ct-chart"
                            data={emailsSubscriptionChart.data}
                            type="Bar"
                            options={emailsSubscriptionChart.options}
                            responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                            listener={emailsSubscriptionChart.animation}
                        />
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                        <p className={classes.cardCategory}>Last Campaign Performance</p>
                    </CardBody>
                    <CardFooter chart>
                        <div className={classes.stats}>
                            <AccessTime /> campaign sent 2 days ago
              </div>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    );
}










/// OLD PAGE



// class Dashboard extends Component {
//     render() {
//         return(
//             <div>                                   
//                 <p>
//                     Dashboard Page!
//                 </p>                                                  
//             </div>
//         )
//     }
// }

// export default Dashboard;
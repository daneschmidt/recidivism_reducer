/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import AddAlert from '@material-ui/icons/AddAlert';
// core components
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
// import Button from "../CustomButtons/Button.js";
// import SnackbarContent from "../Snackbar/SnackbarContent";
// import Snackbar from "../Snackbar/Snackbar";
// import Card from "../Card/Card.js";
// import CardHeader from "../Card/CardHeader.js";
// import CardBody from "../Card/CardBody.js";
// import CardFooter from "../Card/CardFooter.js";
// import Tasks from "../../components/Tasks/Tasks";
// import Table from "../../components/Table/Table.js";
// import AccessTime from "@material-ui/icons/AccessTime";

// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";

// import CustomTabs from "../CustomTabs/CustomTabs";
// import BugReport from "@material-ui/icons/BugReport";
// import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

import TaskPage from '../TaskPage/TaskPage';

// import { bugs, website, server } from "../../../src/variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from '../../variables/charts';

import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle';
import Calendar from '../Calendar/CalendarHome/Calendar.js';
import ClientPage from '../ClientPage/ClientPage.js';
import CompetitionPage from '../CompetitionPage/CompetitionPage';

const useStyles = makeStyles(styles);

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <GridContainer justify='center'>
      <GridItem xs={12} sm={12} md={2}>
        <ClientPage />
      </GridItem>

      <GridItem xs={12} sm={12} md={6}>
        <TaskPage />
      </GridItem>

      <GridItem xs={12} sm={12} md={4}>
        <Calendar />
      </GridItem>

      <GridItem xs={12} sm={12} md={8}>
        <CompetitionPage />
      </GridItem>

      {/* <GridItem xs={12} sm={12} md={4}>
                <Card chart>
                    <CardHeader color="secondary">
                        <ChartistGraph
                            className="ct-chart"
                            data={completedTasksChart.data}
                            type="Line"
                            options={completedTasksChart.options}
                            listener={completedTasksChart.animation}
                        />
                    </CardHeader>
                    <CardBody>
                        <h4 className={classes.cardTitle}>Completed Tasks</h4>
                        <p className={classes.cardCategory}>Last Campaign Performance</p>
                    </CardBody>
                    <CardFooter chart>
                        <div className={classes.stats}>
                            <AccessTime /> campaign sent 2 days ago
              </div>
                    </CardFooter>
                </Card>
            </GridItem> */}
    </GridContainer>
  );
}

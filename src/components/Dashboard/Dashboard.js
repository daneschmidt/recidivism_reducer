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
// import CardContent from '@material-ui/core/CardContent';
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

import { Link } from 'react-router-dom';

import DateRangeIcon from '@material-ui/icons/DateRange';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import GroupIcon from '@material-ui/icons/Group';
import FaceIcon from '@material-ui/icons/Face';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';










import { blueGrey } from '@material-ui/core/colors';




const useStyles = makeStyles(styles);

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <GridContainer style={{ display: 'flex' }} justify='center'>


      {/* <GridItem style={{ flex: '2' }} xs={12} sm={12} md={8}>
        <TaskPage />
      </GridItem> */}

      <GridItem style={{ flex: '2' }} xs={4} sm={4} md={4}>
        <Link to='/calendar'>

          <DateRangeIcon
            style={{
              fontSize: 200,
              color: blueGrey[900]
            }}
          />
        </Link>
        <h3 align="center">Calendar</h3>
      </GridItem>

      <GridItem style={{ flex: '3' }} xs={4} sm={4} md={4}>
        <Link to='/taskpage'>
          <DoneAllIcon
            style={{
              fontSize: 200,
              color: blueGrey[900]
            }}
          />
        </Link>
        <h3 align="center">Tasks</h3>
      </GridItem>

      <GridItem style={{ flex: '4' }} xs={4} sm={4} md={4}>
        <Link to='/userpage'>
          <FaceIcon
            style={{
              fontSize: 200,
              color: blueGrey[900]
            }}
          />
        </Link>
        <h3 align="center">Users</h3>
      </GridItem>

      <GridItem style={{ flex: '4' }} xs={4} sm={4} md={4}>
        <Link to='/clientpage'>
          <GroupIcon
            style={{
              fontSize: 200,
              color: blueGrey[900]
            }}
          />
        </Link>
        <h3 align="center">Clients</h3>
      </GridItem>

      <GridItem style={{ flex: '4' }} xs={4} sm={4} md={4}>
        <Link to='/betheboss'>
          <EmojiPeopleIcon
            style={{
              fontSize: 200,
              color: blueGrey[900]
            }}
          />
        </Link>
        <h3 align="center">Be The Boss</h3>
      </GridItem>

      {/* <GridItem style={{ flex: '1' }} xs={12} sm={12} md={12}>
        <ClientPage />
      </GridItem> */}

      {/* <GridItem xs={12} sm={12} md={8}>
        <CompetitionPage />
      </GridItem> */}

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

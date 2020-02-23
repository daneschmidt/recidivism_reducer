/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// @material-ui/icons
import AddAlert from '@material-ui/icons/AddAlert';
import DateRangeIcon from '@material-ui/icons/DateRange';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import GroupIcon from '@material-ui/icons/Group';
import FaceIcon from '@material-ui/icons/Face';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
// core components
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
// colors
import { blueGrey } from '@material-ui/core/colors';

//routing
import { Link } from 'react-router-dom';
//styles
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center">

        <Grid item xs={6} sm={3}>
          <Link to='/calendar'>

            <DateRangeIcon
              style={{
                fontSize: 200,
                color: blueGrey[900],
              }}
            />
          </Link>
          <h3 align="center">Calendar</h3>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Link to='/taskpage'>
            <DoneAllIcon
              style={{
                fontSize: 200,
                color: blueGrey[900]
              }}
            />
          </Link>
          <h3 align="center">Tasks</h3>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Link to='/userpage'>
            <FaceIcon
              style={{
                fontSize: 200,
                color: blueGrey[900]
              }}
            />
          </Link>
          <h3 align="center">Users</h3>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Link to='/clientpage'>
            <GroupIcon
              style={{
                fontSize: 200,
                color: blueGrey[900]
              }}
            />
          </Link>
          <h3 align="center">Clients</h3>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Link to='/betheboss'>
            <EmojiPeopleIcon
              style={{
                fontSize: 200,
                color: blueGrey[900]
              }}
            />
          </Link>
          <h3 align="center">Be The Boss</h3>
        </Grid>

      </Grid>
    </div >
  );
}

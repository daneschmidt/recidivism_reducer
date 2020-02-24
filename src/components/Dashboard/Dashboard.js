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
import AssessmentIcon from '@material-ui/icons/Assessment';



// colors
import { blueGrey } from '@material-ui/core/colors';

//routing
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 800
  },
  root2: {
    minWidth: 275,
    maxWidth: 800,
    maxHeight: 400,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: blueGrey[200],
  },
}));

export default function DashboardPage() {
  const classes = useStyles();
  return (
    <div align="center">
      <Card className={classes.root} align="center">
        <CardContent>
          <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center">
            <Grid item xs={12} sm={4}>
              <Link to='/calendar'>
                <DateRangeIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600],

                  }}
                />
              </Link>
              <h3 align="center">Calendar</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link to='/taskpage'>
                <DoneAllIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600]
                  }}
                />
              </Link>
              <h3 align="center">Tasks</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link to='/userpage'>
                <FaceIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600]
                  }}
                />
              </Link>
              <h3 align="center">Users</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link to='/clientpage'>
                <GroupIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600]
                  }}
                />
              </Link>
              <h3 align="center">Clients</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link to='/betheboss'>
                <EmojiPeopleIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600]
                  }}
                />
              </Link>
              <h3 align="center">Be The Boss</h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link to='/competition'>
                <AssessmentIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600],
                    '&:hover': {
                      color: blueGrey[500],
                    },
                  }}
                />
              </Link>
              <h3 align="center">Competition Tracker</h3>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div >
  );
}

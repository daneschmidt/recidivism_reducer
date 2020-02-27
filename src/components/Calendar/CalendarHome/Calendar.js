// React
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// Component
import EventModal from '../../Calendar/AddEventModal/EventModal';
import EventClick from '../../Calendar/EventClick/EventClick';
import CalendarList from '../../Calendar/CalendarMap/CalendarList';

import GridItem from "../../Grid/GridItem.js";
import GridContainer from "../../Grid/GridContainer";
import Card from "../../Card/Card.js";


// CSS
import '../../Calendar/CalendarHome/Calendar.css'

import Paper from '@material-ui/core/Paper';

class Calendar extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_EVENTS',
    })
  }

  render() {
    
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <Paper className="paperPanel" elevation={5}>
              <div className="calendar">
                <EventModal />
                <EventClick />
                {/* <CalendarList calendarEvent={this.props.store.calendar} /> */}
                {/* <CalendarList  /> */}
              </div>
            </Paper>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }

}

export default connect(mapStoreToProps)(Calendar);

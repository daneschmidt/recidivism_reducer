import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import CalendarItem from '../../Calendar/CalendarMap/CalendarItem';

class CalendarList extends Component {

    render() {

        let calendarArray = this.props.store.calendar.calendarEvent.map((item, index) => {
            return <CalendarItem item={item} key={index} />
        });
        return (
            <div>
                {calendarArray}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(CalendarList);

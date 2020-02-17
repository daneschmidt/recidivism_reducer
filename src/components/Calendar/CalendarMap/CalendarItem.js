import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class CalendarItem extends Component {

    render() {
        return (
            <div>
                <p>{this.props.item.title}</p>
                <p>{this.props.item.start}</p>
                <p>{this.props.item.end}</p>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(CalendarItem);

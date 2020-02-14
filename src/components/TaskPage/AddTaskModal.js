import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { MenuItem, Select, Button, TextField } from '@material-ui/core';


class TaskPage extends Component {
    state = {
        heading: 'Add Task Modal',

    }
    render() {
        return(
            <div>
                <h2>{this.state.heading}</h2>
                                                
            </div>
        )
    }
}

export default connect(mapStoreToProps)(TaskPage);
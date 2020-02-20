import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';

class ClientSearchItem extends Component {
    render() {
        return(
            <div className="results-container">
                <Grid   
                    container
                    spacing={2}
                    justify="center">
                    <Grid item xs={2}>
                        <p>{this.props.client.firstName}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>{this.props.client.lastName}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>{this.props.client.phoneNumber}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <p>{this.props.client.email}</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(ClientSearchItem);
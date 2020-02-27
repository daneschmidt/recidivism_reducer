import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
import Card from '../Card/Card.js';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CardContent from '@material-ui/core/CardContent';

class ClientSearchItem extends Component {
    state = {
        heading: 'Clients',
        search_string: '',
    }

    goToProfile = (event, id) => {
        this.props.dispatch({
            type: 'GET_PROFILE',
            payload: { id }
        });
        //Navigates to profile page, will give all information on selected client
        this.props.history.push('/profilepage');
    };

    onChange = key => event => {
        this.setState(
            {
                ...this.state,
                [key]: event.target.value
            }
        );
    };

    render() {

        return (
            <TableRow hover style={{ backgroundColor: '#fefefe' }}>
                <TableCell onClick={event => this.goToProfile(event, client.id)}>
                    {this.props.client.firstName} {this.props.client.lastName}
                </TableCell>
                <TableCell>{this.props.client.phoneNumber}</TableCell>
                <TableCell>{this.props.client.email}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label='info'
                        size='small'
                        // style={{ backgroundColor: '#f0ad43', color: '#384954' }}
                        color='primary'
                        onClick={event => this.goToProfile(event, client.id)}
                    >
                        <InfoIcon
                        //  fontSize='small'
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }
}

export default connect(mapStoreToProps)(ClientSearchItem);

// <TableRow key={index} hover style={{ backgroundColor: '#fefefe' }}>
//           <TableCell onClick={event => this.goToProfile(event, item.id)}>
//             {this.props.client.firstName} {this.props.client.lastName}
//           </TableCell>
//           <TableCell>{this.props.client.phoneNumber}</TableCell>
//           <TableCell>{this.props.client.email}</TableCell>
//           <TableCell>
//             <IconButton
//               aria-label='info'
//               size='small'
//               // style={{ backgroundColor: '#f0ad43', color: '#384954' }}
//               color='primary'
//               onClick={event => this.goToProfile(event, item.id)}
//             >
//               <InfoIcon
//               //  fontSize='small'
//               />
//             </IconButton>
//           </TableCell>
//         </TableRow>
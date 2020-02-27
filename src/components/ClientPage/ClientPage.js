import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
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

class ClientPage extends Component {
  state = {
    heading: 'Clients',
    search_string: ''
  };
  //Dispatches to client.saga to GET full list of clients
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CLIENTS'
    });
  }
  //Captures onChange event in the search field
  onChange = key => event => {
    this.setState(
      {
        ...this.state,
        [key]: event.target.value
      },
    );
  };

  //Dispatches to client
  search = event => {
    this.props.dispatch({
      type: 'SEARCH_CLIENT',
      payload: { search_string: this.state.search_string }
    });
  };

  delete = event => {
    this.props.dispatch({
      type: 'DELETE_CLIENT',
      payload: {
        // this.state.isActive
      }
    });
  };

  //Dispatches selected client id to profile.saga
  goToProfile = (event, id) => {
    this.props.dispatch({
      type: 'GET_PROFILE',
      payload: { id }
    });
    //Navigates to profile page, will give all information on selected client
    this.props.history.push('/profilepage');
  };

  render() {
    const clientList = this.props.store.client.map((item, index) => {
      return (
        <TableRow hover key={index} style={{ backgroundColor: '#fefefe' }}>
          <TableCell onClick={event => this.goToProfile(event, item.id)}>
            {item.firstName} {item.lastName}
          </TableCell>
          <TableCell>{item.phoneNumber}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>
            <IconButton
              aria-label='info'
              size='small'
              // style={{ backgroundColor: '#f0ad43', color: '#384954' }}
              color='primary'
              onClick={event => this.goToProfile(event, item.id)}
            >
              <InfoIcon
              //  fontSize='small'
              />
            </IconButton>
          </TableCell>
        </TableRow>
      );
    });
    return (
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <Paper
              elevation={5}
              style={{
                backgroundColor: '#86949f',
                color: '#1a262a',
                padding: '30px'
              }}
            >
              <CardContent>
                <h2>{this.state.heading}</h2>

                <TextField
                  style={{ marginBottom: '10px' }}
                  variant='outlined'
                  size='small'
                  type='text'
                  label='Enter Search'
                  onChange={this.onChange('search_string')}
                />
                <Link to='/clientresults'>
                  <Button
                    variant='contained'
                    style={{
                      marginBottom: '10px',
                      marginLeft: '15px',
                      backgroundColor: '#f0ad43',
                      color: '#1a262a'
                    }}
                    variant='outlined'
                    onClick={this.search}
                  >
                    SEARCH
                  </Button>
                </Link>
              </CardContent>

              <TableContainer component={Paper}>
                <Table>
                  <TableHead
                    style={{ backgroundColor: '#384954', color: '#b6c1cb' }}
                  >
                    <TableRow hover>
                      <TableCell style={{ color: '#b6c1cb' }}>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell style={{ color: '#b6c1cb' }}>
                        <strong>Phone</strong>
                      </TableCell>
                      <TableCell style={{ color: '#b6c1cb' }}>
                        <strong>Email</strong>
                      </TableCell>
                      <TableCell style={{ color: '#b6c1cb' }}>
                        <strong>Details</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{clientList}</TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default connect(mapStoreToProps)(ClientPage);

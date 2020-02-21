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
      () => {
        console.log(this.state);
      }
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
    console.log(id);
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
        <div key={index}>
          <h3 onClick={event => this.goToProfile(event, item.id)}>
            {item.firstName} {item.lastName}
          </h3>
          <p>phone: {item.phoneNumber}</p>
          <p>email: {item.email}</p>
        </div>
      );
    });
    return (
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={9}>
          <Card>
            <Paper
              className='paperPanel'
              elevation={5}
              style={{ backgroundColor: '#86949f', color: '#1a262a' }}
            >
              <h1>{this.state.heading}</h1>
              <div>
                <TextField
                  style={{ margin: '13px' }}
                  variant='outlined'
                  size='small'
                  type='text'
                  label='Enter Search'
                  onChange={this.onChange('search_string')}
                />
                <Link to='/clientresults'>
                  <Button
                    style={{
                      marginTop: '15px',
                      backgroundColor: '#f0ad43',
                      color: '#1a262a'
                    }}
                    variant='outlined'
                    onClick={this.search}
                  >
                    SEARCH
                  </Button>
                </Link>
              </div>
              {clientList}
            </Paper>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default connect(mapStoreToProps)(ClientPage);

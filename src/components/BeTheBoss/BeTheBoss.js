import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';
import Card from '../Card/Card.js';
import CardContent from '@material-ui/core/CardContent';

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { withStyles, createStyles, Theme } from '@material-ui/core/styles';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import FaceIcon from '@material-ui/icons/Face';
import { blueGrey } from '@material-ui/core/colors';

import './BeTheBoss.css';

const styles = () => createStyles({});

class BeTheBoss extends Component {
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    email: ''
  };

  changeField = (event, infoKey) => {
    this.setState({
      [infoKey]: event.target.value
    });
  };

  addClientInfo = event => {
    event.preventDefault();

    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.gender &&
      this.state.phoneNumber
    ) {
      this.props.dispatch({
        type: 'ADD_CLIENT',
        payload: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          gender: this.state.gender,
          phoneNumber: this.state.phoneNumber,
          email: this.state.email
        }
      });

      Swal.fire("You're done!", 'Thanks for entering your info!', 'success');

      this.setState({
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        email: ''
      });
    } else {
      Swal.fire('Oops!', 'Please enter all of your info!', 'error');
      // if (!this.state.firstName) alert("Must enter first name.");
      // else if (!this.state.lastName) alert("Must enter last name.");
      // else if (!this.state.gender) alert("Must enter gender.");
      // else if (!this.state.phoneNumber) alert("Must enter phone number.");
      // else if (!this.state.email) alert("Must enter email.");
    }
  };

  render() {
    return (
      <GridContainer justify='center'>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardContent className='paperPanel' elevation={5}>
              <Paper style={{ backgroundColor: '#fefefe', color: '#1a262a' }}>
                {/* <h1 className='beTheBoss' style={{ padding: '10px' }}>
                  HELLO THERE
                </h1> */}
                <br></br>
                <FaceIcon
                  style={{
                    fontSize: 150,
                    color: blueGrey[600]
                  }}
                />
                <h1 className='beTheBoss' style={{ padding: '10px' }}>
                  Welcome to Be the Boss!
                </h1>
                <h2>
                  Please Enter Your Info
                </h2>


                <div style={{ display: 'flex' }}>
                  <TextField
                    style={{ margin: '13px', flex: '1' }}
                    variant='outlined'
                    size='small'
                    type='text'
                    className='inputs'
                    label='First Name'
                    value={this.state.firstName}
                    onChange={event => this.changeField(event, 'firstName')}
                    required
                  />
                  <br />
                  <TextField
                    style={{ margin: '13px', flex: '1' }}
                    variant='outlined'
                    size='small'
                    type='text'
                    className='inputs'
                    label='Last Name'
                    value={this.state.lastName}
                    onChange={event => this.changeField(event, 'lastName')}
                    required
                  />
                </div>
                <br />
                <div style={{ display: 'flex' }}>
                  <TextField
                    style={{ margin: '13px', flex: '2' }}
                    variant='outlined'
                    size='small'
                    type='text'
                    className='inputs'
                    label='Gender'
                    value={this.state.gender}
                    onChange={event => this.changeField(event, 'gender')}
                    required
                  />
                  <br />
                  <TextField
                    style={{ margin: '13px', flex: '2' }}
                    variant='outlined'
                    size='small'
                    type='number'
                    className='inputs'
                    label='Phone Number'
                    value={this.state.phoneNumber}
                    onChange={event => this.changeField(event, 'phoneNumber')}
                    required
                  />
                  <br />
                  <TextField
                    style={{ margin: '13px', flex: '2' }}
                    variant='outlined'
                    size='small'
                    type='text'
                    className='inputs'
                    label='Email'
                    value={this.state.email}
                    onChange={event => this.changeField(event, 'email')}
                  />
                </div>
                <br />
                <Button
                  style={{ margin: '20px' }}
                  variant='contained'
                  color='primary'
                  onClick={this.addClientInfo}
                >
                  Submit
                </Button>
              </Paper>
            </CardContent>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default connect(mapStoreToProps)(BeTheBoss);
// export default connect(mapStoreToProps)(withStyles(styles)(BtnImgBaseClass));

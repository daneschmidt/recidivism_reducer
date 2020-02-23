import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  };

  login = event => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password
        }
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = propertyName => event => {
    this.setState({
      [propertyName]: event.target.value
    });
  };

  render() {
    return (
      <div>
        {this.props.store.errors.loginMessage && (
          <h2 className='alert' role='alert'>
            {this.props.store.errors.loginMessage}
          </h2>
        )}
        <form
          onSubmit={this.login}
          style={{
            backgroundColor: '#b6c1cb',
            color: '#1a262a',
            padding: '20px'
          }}
        >
          <Paper
            style={{
              backgroundColor: '#fefefe',
              color: '#1a262a',
              padding: '20px',
              width: '105%'
            }}
          >
            <h1>Login</h1>
            <div>
              <TextField
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                style={{
                  marginLeft: '150px',
                  marginTop: '30px',
                  marginBottom: '20px',
                  flex: '1'
                }}
                variant='outlined'
                size='small'
                className='inputs'
                label='User Name'
                required
              />
            </div>
            <div>
              <TextField
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
                style={{ marginLeft: '150px', marginTop: '30px', flex: '1' }}
                variant='outlined'
                size='small'
                className='inputs'
                label='Password'
                required
              />
            </div>
            <div>
              <Button
                className='log-in'
                type='submit'
                name='submit'
                value='Log In'
                style={{ marginLeft: '200px', marginTop: '60px', flex: '1' }}
                variant='contained'
                color='primary'
              >
                Login
              </Button>
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);

//OLD STUFF

// import React from "react";
// import { Component } from "react";
// // nodejs library to set properties for components
// // react plugin for creating charts
// import ChartistGraph from "react-chartist";
// // import PropTypes from "prop-types";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// // @material-ui/icons
// import AddAlert from "@material-ui/icons/AddAlert";
// // core components
// import GridItem from "../Grid/GridItem.js";
// import GridContainer from "../Grid/GridContainer.js";
// import Button from "../CustomButtons/Button.js";
// import SnackbarContent from "../Snackbar/SnackbarContent";
// import Snackbar from "../Snackbar/Snackbar";
// import Card from "../Card/Card.js";
// import CardHeader from "../Card/CardHeader.js";
// import CardBody from "../Card/CardBody.js";
// import CardFooter from "../Card/CardFooter.js";
// import Tasks from "../../components/Tasks/Tasks";
// import Table from "../../components/Table/Table.js";
// import AccessTime from "@material-ui/icons/AccessTime";
// import CustomInput from "../../components/CustomInput/CustomInput.js";

// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0"
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none"
//   }
// };

// // const useStyles = makeStyles(styles);
// // const classes = useStyles();

// class LoginPage extends Component {
//   state = {
//     username: '',
//     password: '',
//   };

//   login = (event) => {
//     event.preventDefault();

//     if (this.state.username && this.state.password) {
//       this.props.dispatch({
//         type: 'LOGIN',
//         payload: {
//           username: this.state.username,
//           password: this.state.password,
//         },
//       });
//     } else {
//       this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
//     }
//   } // end login

//   handleInputChangeFor = propertyName => (event) => {
//     this.setState({
//       [propertyName]: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <GridContainer>
//           <GridItem xs={12} sm={12} md={8}>
//             <Card>
//               <CardHeader color="primary">
//                 <h4>Edit Profile</h4>
//                 <p>Complete your profile</p>
//               </CardHeader>
//               <CardBody>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={5}>
//                     <CustomInput
//                       labelText="Company (disabled)"
//                       id="company-disabled"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         disabled: true
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={3}>
//                     <CustomInput
//                       labelText="Username"
//                       id="username"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="password"
//                       id="email-address"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={6}>
//                     <CustomInput
//                       labelText="First Name"
//                       id="first-name"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={6}>
//                     <CustomInput
//                       labelText="Last Name"
//                       id="last-name"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="City"
//                       id="city"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="Country"
//                       id="country"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                   <GridItem xs={12} sm={12} md={4}>
//                     <CustomInput
//                       labelText="Postal Code"
//                       id="postal-code"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//                 <GridContainer>
//                   <GridItem xs={12} sm={12} md={12}>
//                     <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
//                     <CustomInput
//                       labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
//                       id="about-me"
//                       formControlProps={{
//                         fullWidth: true
//                       }}
//                       inputProps={{
//                         multiline: true,
//                         rows: 5
//                       }}
//                     />
//                   </GridItem>
//                 </GridContainer>
//               </CardBody>
//               <CardFooter>
//                 <Button color="primary">Update Profile</Button>
//               </CardFooter>
//             </Card>
//           </GridItem>
//           {/* <GridItem xs={12} sm={12} md={4}>
//           <Card profile>
//             <CardAvatar profile>
//               <a href="#pablo" onClick={e => e.preventDefault()}>
//                 <img src={avatar} alt="..." />
//               </a>
//             </CardAvatar>
//             {/* <CardBody profile>
//               <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
//               <h4 className={classes.cardTitle}>Alec Thompson</h4>
//               <p className={classes.description}>
//                 Don{"'"}t be scared of the truth because we need to restart the
//                 human foundation in truth And I love you like Kanye loves Kanye
//                 I love Rick Owens’ bed design but the back is...
//               </p>
//               <Button color="primary" round>
//                 Follow
//               </Button>
//             </CardBody> */}
//           {/* </Card>
//         </GridItem> */}
//         </GridContainer>
//       </div>
//     );
//   }
// }

// export default connect(mapStoreToProps)(LoginPage);

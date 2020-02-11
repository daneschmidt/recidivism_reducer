import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Hey there, you are logged in as { props.store.user.username }!
    </h1>
    <h3>
      Here is a table of all our application users:
    </h3>
    <p>
      table goes here!
    </p>
    <p>
      All done for the day?
    </p>
    <LogOutButton className="log-in" />
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
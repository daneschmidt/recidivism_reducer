import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = props => {
  let loginLinkData = {
    path: '/login',
    text: 'Login'
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/dashboard';
    loginLinkData.text = 'Dashboard';
  }

  return (
    <div className='nav'>
      <Link to='/home'>
        <h2 className='nav-title'>Determination Inc. Community Tracker</h2>
      </Link>
      <div className='nav-right'></div>
      <div className='nav-right'>
        <Link className='nav-link' to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className='nav-link' to='/betheboss'>
              Be The Boss
            </Link>
            <Link className='nav-link' to='/clientpage'>
              Clients
            </Link>
            <Link className='nav-link' to='/calendar'>
              Calendar
            </Link>
            <Link className='nav-link' to='/competition'>
              Competitions
            </Link>
            <Link className='nav-link' to='/taskpage'>
              Tasks
            </Link>
            <Link className='nav-link' to='/userpage'>
              Users
            </Link>
            {/* <Link className='nav-link' to='/surveypage'>
              Surveys
            </Link> */}
            <LogOutButton className='nav-link' />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);

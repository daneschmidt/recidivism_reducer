<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from "react";
>>>>>>> develop
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";

<<<<<<< HEAD
import { connect } from 'react-redux';
=======
import { connect } from "react-redux";
>>>>>>> develop

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import BeTheBoss from "../BeTheBoss/BeTheBoss";
import UserPage from "../UserPage/UserPage";
import Calendar from "../Calendar/Calendar";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Dashboard from "../Dashboard/Dashboard";
import ClientPage from "../ClientPage/ClientPage";
import Competition from "../CompetitionPage/CompetitionPage";
import TaskPage from "../TaskPage/TaskPage";

import "./App.css";

class App extends Component {
<<<<<<< HEAD
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <br />
          <br />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/betheboss" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/betheboss"
              component={BeTheBoss}
            />
            <Route
              exact
              path="/clientpage"
              component={ClientPage}
            />
            <Route
              exact
              path="/home"
              component={LandingPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/userpage"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/calendar"
              component={Calendar}
            />
            <ProtectedRoute
              exact
              path="/userpage"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/competition"
              component={Competition}
            />
            <ProtectedRoute
              exact
              path="/taskpage"
              component={TaskPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
=======
	componentDidMount() {
		this.props.dispatch({ type: "FETCH_USER" });
	}

	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						{/* Visiting localhost:3000 will redirect to localhost:3000/home */}
						<Redirect exact from="/" to="/betheboss" />
						{/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
						<Route exact path="/betheboss" component={BeTheBoss} />
						<Route exact path="/home" component={LandingPage} />
						{/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
						<ProtectedRoute exact path="/userpage" component={UserPage} />
						<ProtectedRoute exact path="/calendar" component={Calendar} />
						<ProtectedRoute exact path="/clientpage" component={ClientPage} />
						<ProtectedRoute exact path="/userpage" component={UserPage} />
						<ProtectedRoute exact path="/competition" component={Competition} />
						<ProtectedRoute exact path="/taskpage" component={TaskPage} />
						{/* This works the same as the other protected route, except that if the user is logged in,
>>>>>>> develop
            they will see the info page instead. */}
						<ProtectedRoute exact path="/dashboard" component={Dashboard} />
						{/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
						<ProtectedRoute
							exact
							path="/login"
							authRedirect="/dashboard"
							component={LoginPage}
						/>

						<ProtectedRoute
							exact
							path="/registration"
							authRedirect="/dashboard"
							component={RegisterPage}
						/>

<<<<<<< HEAD
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
=======
						{/* If none of the other routes matched, we will show a 404. */}
						<Route render={() => <h1>404</h1>} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
>>>>>>> develop
}

export default connect()(App);

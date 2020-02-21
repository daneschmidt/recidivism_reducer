import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";



import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";


import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
// import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import './BeTheBoss.css';

const styles = (theme) => createStyles({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 200,
		},
	},
});


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

	addClientInfo = (event) => {
		event.preventDefault();

		if (this.state.firstName &&
			this.state.lastName &&
			this.state.gender &&
			this.state.phoneNumber) {
			this.props.dispatch({
				type: 'ADD_CLIENT',
				payload: {
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					gender: this.state.gender,
					phoneNumber: this.state.phoneNumber,
					email: this.state.email,
				},
			});

			Swal.fire("You\'re done!", "Thanks for entering your info!", "success")

			this.setState({
				firstName: "",
				lastName: "",
				gender: "",
				phoneNumber: "",
				email: "",
			})
		} else {
			console.log('whoops');
			Swal.fire("Oops!", "Please enter all of your info!", "error")
			// if (!this.state.firstName) alert("Must enter first name.");
			// else if (!this.state.lastName) alert("Must enter last name.");
			// else if (!this.state.gender) alert("Must enter gender.");
			// else if (!this.state.phoneNumber) alert("Must enter phone number.");
			// else if (!this.state.email) alert("Must enter email.");
		}
	}

	render() {
		return (
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<Paper className="paperPanel" elevation={5}>
							<h1 className='beTheBoss'>Be The Boss</h1>
							<TextField
								id="standard-basic"
								label="Standard"
								type="text"
								className="inputs"
								placeholder="First Name"
								value={this.state.firstName}
								onChange={event => this.changeField(event, "firstName")}
								required
							/>
							<br />
							<TextField
								id="standard-basic"
								label="Standard"
								type="text"
								className="inputs"
								placeholder="Last Name"
								value={this.state.lastName}
								onChange={event => this.changeField(event, "lastName")}
							/>
							<br />
							<TextField
								id="standard-basic"
								label="Standard"
								type="text"
								className="inputs"
								placeholder="Gender"
								value={this.state.gender}
								onChange={event => this.changeField(event, "gender")}
							/>
							<br />
							<TextField
								id="standard-basic"
								label="Standard"
								type="number"
								className="inputs"
								placeholder="Phone Number"
								value={this.state.phoneNumber}
								onChange={event => this.changeField(event, "phoneNumber")}
							/>
							<br />
							<TextField
								id="standard-basic"
								label="Standard"
								type="text"
								className="inputs"
								placeholder="Email"
								value={this.state.email}
								onChange={event => this.changeField(event, "email")}
							/>
							<br />

						</Paper>
						<button variant="contained" color="primary" onClick={this.addClientInfo}>Submit</button>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

export default connect(mapStoreToProps)(withStyles(styles)(BeTheBoss));
// export default connect(mapStoreToProps)(withStyles(styles)(BtnImgBaseClass));
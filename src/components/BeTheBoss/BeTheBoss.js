import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
class BeTheBoss extends Component {
	state = {
		firstName: "",
		lastName: "",
		gender: "",
		phoneNumber: "",
		email: "",
	};

	changeField = (event, infoKey) => {
		this.setState({
			[infoKey]: event.target.value,
		});
	};

	addClientInfo = (event) => {
		event.preventDefault();
	
		if (this.state.firstName && 
			this.state.lastName &&
			this.state.gender &&
			this.state.phoneNumber &&
			this.state.email) {
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
		} else {
			console.log('whoops');
			this.props.dispatch({ type: 'CLIENT_REJECTED' });
			// if (!this.state.firstName) alert("Must enter first name.");
			// else if (!this.state.lastName) alert("Must enter last name.");
			// else if (!this.state.gender) alert("Must enter gender.");
			// else if (!this.state.phoneNumber) alert("Must enter phone number.");
			// else if (!this.state.email) alert("Must enter email.");
		}
	  }

	render() {
		return (
			<div>
				<h1>Be The Boss</h1>
					<input
						type="text"
						placeholder="First Name"
						value={this.state.firstName}
						onChange={event => this.changeField(event, "firstName")}
						required
					/>
					<input
						type="text"
						placeholder="Last Name"
						value={this.state.lastName}
						onChange={event => this.changeField(event, "lastName")}
					/>
					<input
						type="text"
						placeholder="Gender"
						value={this.state.gender}
						onChange={event => this.changeField(event, "gender")}
					/>
					<input
						type="number"
						placeholder="Phone Number"
						value={this.state.phoneNumber}
						onChange={event => this.changeField(event, "phoneNumber")}
					/>
					<input
						type="text"
						placeholder="Email"
						value={this.state.email}
						onChange={event => this.changeField(event, "email")}
					/>
					<button onClick={this.addClientInfo}>Submit</button>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(BeTheBoss);

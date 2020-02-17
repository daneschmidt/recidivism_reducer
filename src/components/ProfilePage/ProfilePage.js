import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class profilePage extends Component {
	state = {
		// heading: "Class Component",
	};

	//Dispatches selected profile id to editProfile.saga
	editProfile = id => {
		console.log(id);
		this.props.dispatch({
			type: 'EDIT_PROFILE',
			payload: id,
		});
		//Navigates to Edit Profile Modal
		this.props.history.push('/editprofilepage');
	};

	render() {
		const clientProfile = this.props.store.getProfileReducer.map(
			(item, index) => {
				return (
					<ul key={index}>
						<li>Frist Name: {item.firstName}</li>
						<li>Last Name: {item.lastName}</li>
						<li>Gender: {item.gender}</li>
						<li>Phone Number: {item.phoneNumber}</li>
						<li>Email: {item.email}</li>
						<li>Criminal Record: {item.criminalRecord}</li>
						<li>Currently Incarcerated: {item.currentlyIncar}</li>
						<li>Incarceration Length: {item.incarcerationLength}</li>
						<li>Release Date: {item.releaseDate}</li>
						<li>D.O.C Number: {item.docNumber}</li>
						<li>State of Incarceration: {item.stateIncarcerated}</li>
						<li>Currently On Parole: {item.paroleOnRelease}</li>
						<li>Parole Officer: {item.agentName}</li>
						<li>Parole Officer Phone Number: {item.agentPhone}</li>
						<li>Connections With Reentry Programs: {item.connections}</li>
						<li>Type Of Business: {item.business}</li>
						<li>Business Stage: {item.businessStage}</li>
						<li>Why Did You Attend "Be The Boss": {item.whyAtBeTheBoss}</li>
						<li>
							What Do You Hope To Gain By Attending: {item.whatHopeToGain}
						</li>
						<li>Active: {item.isActive}</li>
					</ul>
				);
			},
		);
		return <div>{clientProfile}</div>;
	}
}

export default connect(mapStoreToProps)(profilePage);

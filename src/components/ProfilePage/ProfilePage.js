import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import './ProfilePage.css';
import moment from 'moment';

class profilePage extends Component {
	state = {
		// heading: "Class Component",
	};

	componentDidMount() {
		this.props.dispatch({
			type: 'GET_NOTES',
		});
	}

	//Dispatches selected profile id to editProfile.saga

	render() {
		const clientProfile = this.props.store.getProfileReducer.map(
			(item, index) => {
				return (
					<div key={index}>
						<h1>{item.firstName} {item.lastName}</h1>
						<p>{item.gender}</p>
						<p>Phone Number: {item.phoneNumber}</p>
						<p>Email: {item.email}</p>
						<p>Criminal Record: {item.criminalRecord}</p>
						<p>Currently Incarcerated: {item.currentlyIncar}</p>
						<p>Incarceration Length: {item.incarcerationLength}</p>
						<p>Release Date: {moment(item.releaseDate).format('LL')}</p>
						<p>D.O.C Number: {item.docNumber}</p>
						<p>State of Incarceration: {item.stateIncarcerated}</p>
						<p>Currently On Parole: {item.paroleOnRelease}</p>
						<p>Parole Officer: {item.agentName}</p>
						<p>Parole Officer Phone Number: {item.agentPhone}</p>
						<p>Connections With Reentry Programs: {item.connections}</p>
						<p>Type Of Business: {item.business}</p>
						<p>Business Stage: {item.businessStage}</p>
						<p>Why Did You Attend "Be The Boss": {item.whyAtBeTheBoss}</p>
						<p>What Do You Hope To Gain By Attending: {item.whatHopeToGain}</p>
						<p>Active: {item.isActive}</p>
					</div>
				);
			}
		);
		const notesArray = this.props.store.getProfileReducer.map((item, index) => {
			return (
				<div key={index}>
					<p>{item.note}</p>
				</div>
			)
		}
		);
		return (
			<div>
				<div className="clientInfo">
					{clientProfile}
				</div>
				<div className="clientNotes">
					<h2>Notes</h2>
					{notesArray}
				</div>
				<EditProfilePage />
			</div>
		);
	}
}

export default connect(mapStoreToProps)(profilePage);

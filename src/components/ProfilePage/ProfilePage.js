import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import './ProfilePage.css';
import moment from 'moment';
import {
	Grid,
	Paper,
} from '@material-ui/core';
import { Person } from '@material-ui/icons';

class profilePage extends Component {

	render() {
		const clientInfo = this.props.store.getProfileReducer[0] != null ? this.props.store.getProfileReducer[0] : {};
		const clientProfile = this.props.store.getProfileReducer.map(
			(item, index) => {
				return (
					<div key={index}>
						<Paper className="paperStack">
							<h3>Person Information</h3>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<p>Phone Number: {item.phoneNumber}</p>
									<p>Email: {item.email}</p>
								</Grid>
								<Grid item xs={6}>
									<p>Gender: {item.gender}</p>
								</Grid>
							</Grid>
						</Paper>
						<Paper className="paperStack">
							<h3>Incarceration Details</h3>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<p>Criminal Record: {item.criminalRecord == true ? 'Yes' : 'No'}</p>
									<p>Currently Incarcerated: {item.currentlyIncar == true ? 'Yes' : 'No'}</p>
									<p>Incarceration Length: {item.incarcerationLength}</p>
									<p>Currently On Parole: {item.paroleOnRelease == true ? 'Yes' : 'No'}</p>
									<p>Parole Officer: {item.agentName}</p>
								</Grid>
								<Grid item xs={6}>
									<p>Release Date: {moment(item.releaseDate).format('LL')}</p>
									<p>D.O.C Number: {item.docNumber}</p>
									<p>State of Incarceration: {item.stateIncarcerated}</p>
									<p>Parole Officer Phone Number: {item.agentPhone}</p>
								</Grid>
							</Grid>
						</Paper>
						<Paper className="paperStack">
							<h3>Program Status</h3>
							<Grid container spacing={3}>
								<Grid item xs={6}>
									<p>Connections With Reentry Programs: {item.connections == true ? 'Yes' : 'No'}</p>
									<p>Type Of Business: {item.business}</p>
									<p>Business Stage: {item.businessStage}</p>
								</Grid>
								<Grid item xs={6}>
									<p>Why Did You Attend "Be The Boss": {item.whyAtBeTheBoss}</p>
									<p>What Do You Hope To Gain By Attending: {item.whatHopeToGain}</p>
									<p>Active: {item.isActive == true ? 'Yes' : 'No'}</p>
								</Grid>
							</Grid>
						</Paper>
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
			<div className="wrapper">
				<Grid
					container
					spacing={3}
				>
					<Grid item xs={3} style={{ textAlign: 'center', }}>
						<Paper className="paperStack">

							<div className="profIcon">
								<Person />
							</div>
							<h2 className="primeHdg">{clientInfo.firstName} {clientInfo.lastName}</h2>
						</Paper>
					</Grid>
					<Grid item xs={9}>

						{clientProfile}

						<Paper className="paperStack">
							<h3>Notes</h3>
							{notesArray}
						</Paper>
					</Grid>
				</Grid>
				<EditProfilePage />
			</div>
		);
	}
}

export default connect(mapStoreToProps)(profilePage);

import React, { Component } from "react";
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material UI
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// CSS
import '../EditProfilePage/EditProfilePage.css'

class EditProfilePage extends Component {
	
	state = {
		setOpen: false,
		profile: {
			id: '',
			firstName: '',
			lastName: '',
			gender: '',
			phoneNumber: '',
			email: '',
			criminalRecord: '',
			midemOrFel: '',
			incarceratedYorN: '',
			incarcerationLength: '',
			releaseDate: '',
			docNumber: '',
			stateIncarcerated: '',
			paroleOnRelease: '',
			agentName: '',
			agentPhone: '',
			connections: '',
			ifYesConnections: '',
			business: '',
			businessStage: '',
			whyAtBeTheBoss: '',
			whatHopeToGain: '',
			profilePic: '',
			timeStamp: '',
			isActive: '',
			note: '',
		}
	};
	
	handleInputField = infoKey => (event) => {
		const inputedVal = event.target != null ? event.target.value : event;
		this.setState({
			[infoKey]: inputedVal,
		});
	}

	openEditClient = (event) => {
		this.setState({
			id:this.props.id,
			setOpen: true,
		})
	}

	closeEditClient = (event) => {
		this.setState({
			setOpen: false,
		})
	}

	handleSubmit = (event, infoKey, id) => {
		this.props.dispatch({
			type: 'EDIT_PROFILE',
			payload: {
				id: this.props.store.getProfileReducer.id,
				...this.state.profile,
			}
		})
		this.closeEditClient();
	}

	render() {
		const editClientProfile = this.props.store.getProfileReducer.map(
			(item, index) => {
		return (
				<div key={index}>
				<Grid item xs={10}>
					<div className="text-input">
						<TextField variant="outlined"
							type="text"
							label="First Name"
							defaultValue={item.firstName}
							onChange={(event) => this.handleInputField(event, this.state.profile.firstName = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Last Name"
							defaultValue={item.lastName}
							onChange={(event) => this.handleInputField(event, this.state.profile.lastName = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Gender"
							defaultValue={item.gender}
							onChange={(event) => this.handleInputField(event, this.state.profile.gender = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Phone Number"
							defaultValue={item.phoneNumber}
							onChange={(event) => this.handleInputField(event, this.state.profile.phoneNumber = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Email"
							defaultValue={item.email}
							onChange={(event) => this.handleInputField(event, this.state.profile.email = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							multiline
							rowsMax="4"
							label="Criminal Record"
							defaultValue={item.criminalRecord}
							onChange={(event) => this.handleInputField(event, this.state.profile.criminalRecord = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Currently Incarcerated"
							defaultValue={item.incarceratedYorN}
							onChange={(event) => this.handleInputField(event, this.state.profile.incarceratedYorN = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Length of incarceration"
							defaultValue={item.incarcerationLength}
							onChange={(event) => this.handleInputField(event, this.state.profile.incarcerationLength = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="D.O.C. Number"
							defaultValue={item.docNumber}
							onChange={(event) => this.handleInputField(event, this.state.profile.docNumber = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="State of Incarceration"
							defaultValue={item.stateIncarcerated}
							onChange={(event) => this.handleInputField(event, this.state.profile.stateIncarcerated = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Currently on parole"
							defaultValue={item.paroleOnRelease}
							onChange={(event) => this.handleInputField(event, this.state.profile.paroleOnRelease = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Parole Officer"
							defaultValue={item.agentName}
							onChange={(event) => this.handleInputField(event, this.state.profile.agentName = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Parole officer phone number"
							defaultValue={item.agentPhone}
							onChange={(event) => this.handleInputField(event, this.state.profile.agentPhone = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Connections with re-entry programs"
							defaultValue={item.ifYesConnections}
							onChange={(event) => this.handleInputField(event, this.state.profile.ifYesConnections = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							// multiline
							rowsMax="4"
							label="Type of business"
							defaultValue={item.business}
							onChange={(event) => this.handleInputField(event, this.state.profile.business = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Business Stage"
							defaultValue={item.businessStage}
							onChange={(event) => this.handleInputField(event, this.state.profile.businessStage = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							multiline
							rowsMax="4"
							label="Why did you attend Be The Boss?"
							defaultValue={item.whyAtBeTheBoss}
							onChange={(event) => this.handleInputField(event, this.state.profile.whyAtBeTheBoss = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							multiline
							rowsMax="4"
							label="What do you hope to gain by attending Be The Boss?"
							defaultValue={item.whatHopeToGain}
							onChange={(event) => this.handleInputField(event, this.state.profile.whatHopeToGain = event.target.value)}
						/>
						<TextField variant="outlined"
							type="text"
							label="Currently Active"
							defaultValue={item.isActive}
							onChange={(event) => this.handleInputField(event, this.state.profile.isActive = event.target.value)}
						/>
					</div>
				</Grid>
				</div>
		)})
		const addNotesArray = this.props.store.getProfileReducer.map((item, index) => {
			return (
				<div key={index}>
					<div className="notes-container">
						<TextField variant="outlined" className="notes-box"
							type="text"
							label="Notes"
							multiline
							rowsMax="4"
							defaultValue={item.note}
							onChange={(event) => this.handleInputField(event, this.state.profile.note = event.target.value)}
						/>
					</div>
					<div className="form-button">
						<Button
							variant="contained"
							color="primary"
							onClick={this.handleSubmit}
						>
							SAVE
								</Button>
					</div>
				</div>	
	)})
	return (
		<div>
			<div className="container">
				<div className="modal-button">
					<Button
						variant="contained"
						color="primary"
						onClick={this.openEditClient}
					>
						EDIT
                    </Button>
				</div>
				<div className="edit-profile-modal">
					<Modal
						height="100%"
						width="100%"
						open={this.state.setOpen}
						onClose={this.handleSubmit}>
						<div className="modalProfile">
							<h2>Update Client</h2>
							<Grid container spacing={10}
								direction="row"
								justify="space-evenly"
								alignItems="baseline"
							></Grid>
			{editClientProfile}
			{addNotesArray}
			</div>
					</Modal>
				</div>
		</div>
		</div>
	)	
};
}
export default connect(mapStoreToProps)(EditProfilePage);
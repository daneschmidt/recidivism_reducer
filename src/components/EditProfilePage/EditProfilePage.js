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
			firstName: '',
			lastName: '',
			gender: '',
			phoneNumber: '',
			email: '',
			criminalRecord: '',
			currentlyIncarcerated: '',
			incarcerationLength: '',
			releaseDate: '',
			docNumber: '',
			stateofIncarceration: '',
			currentlyOnParole: '',
			paroleOfficer: '',
			paroleOfficerPhoneNumber: '',
			connectionsWithReentryPrograms: '',
			typeOfBusiness: '',
			buisnessStage: '',
			whyDidYouAttendBeTheBoss: '',
			whatDoYouHopeToGainByAttending: '',
			active: '',
		}
	};

	handleInputField = infoKey => (event) => {
		const inputedVal = event.target != null ? event.target.value : event;
		this.setState({
			// profile: {
			//     ...this.state.profile,
			// },
			[infoKey]: inputedVal,
		});
	}

	openEditClient = (event) => {
		this.setState({
			setOpen: true,
		})
	}

	closeEditClient = (event) => {
		this.setState({
			setOpen: false,
		})
	}

	handleSubmit = (event, infoKey) => {
		this.props.dispatch({
			type: 'EDIT_PROFILE',
			payload: {
				...this.state.profile
			}
		})
		this.closeEditClient();
	}



	render() {
		return (
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
							>
								<Grid item xs={10}>
									<div className="text-input">
										<TextField variant="outlined"
											type="text"
											label="First Name"
											onChange={this.handleInputField('firstName')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Last Name"
											onChange={this.handleInputField('lastName')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Gender"
											onChange={this.handleInputField('gender')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Phone Number"
											onChange={this.handleInputField('phoneNumber')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Email"
											onChange={this.handleInputField('eamil')}
										/>
										<TextField variant="outlined"
											type="text"
											multiline
											rowsMax="4"
											label="Criminal Record"
											onChange={this.handleInputField('criminalRecord')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Currently Incarcerated"
											onChange={this.handleInputField('currentlyIncarcerated')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Length of incarceration"
											onChange={this.handleInputField('incarcerationLength')}
										/>
										<TextField variant="outlined"
											type="text"
											label="D.O.C. Number"
											onChange={this.handleInputField('docNumber')}
										/>
										<TextField variant="outlined"
											type="text"
											label="State of incarceration"
											onChange={this.handleInputField('stateofIncarceration')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Currently on parole"
											onChange={this.handleInputField('currentlyOnParole')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Parole Officer"
											onChange={this.handleInputField('paroleOfficer')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Parole officer phone number"
											onChange={this.handleInputField('paroleOfficerPhoneNumber')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Connections with re-entry programs"
											onChange={this.handleInputField('connectionsWithReentryPrograms')}
										/>
										<TextField variant="outlined"
											type="text"
											multiline
											rowsMax="4"
											label="Type of business"
											onChange={this.handleInputField('typeOfBusiness')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Business Stage"
											onChange={this.handleInputField('buisnessStage')}
										/>
										<TextField variant="outlined"
											type="text"
											multiline
											rowsMax="4"
											label="Why did you attend Be The Boss?"
											onChange={this.handleInputField('whyDidYouAttendBeTheBoss')}
										/>
										<TextField variant="outlined"
											type="text"
											multiline
											rowsMax="4"
											label="What do you hope to gain by attending Be The Boss?"
											onChange={this.handleInputField('whatDoYouHopeToGainByAttending')}
										/>
										<TextField variant="outlined"
											type="text"
											label="Currently Active"
											onChange={this.handleInputField('active')}
										/>
									</div>
								</Grid>
							</Grid>
							<div className="notes-container">
								<TextField variant="outlined" className="notes-box"
									type="text"
									label="Notes"
									multiline
									rowsMax="4"
									onChange={this.handleInputField('notes')}
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
					</Modal>
				</div>
			</div>
		);
	}
}
export default connect(mapStoreToProps)(EditProfilePage);
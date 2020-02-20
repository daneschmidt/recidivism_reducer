import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
import CardFooter from "../Card/CardFooter.js";

import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

import './BeTheBoss.css';

const styles = () =>
	createStyles({
		// 	cardHeader: {
		// 	padding: "0.75rem 1.25rem",
		// 	marginBottom: "0",
		// 	borderBottom: "none",
		// 	background: "transparent",
		// 	zIndex: "3 !important",
		// 	"&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
		// 		margin: "0 15px",
		// 		padding: "0",
		// 		position: "relative",
		// 		color: whiteColor
		// 	},
		// 	"&:first-child": {
		// 		borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
		// 	},
		// 	"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
		// 		"&:not($cardHeaderIcon)": {
		// 			borderRadius: "3px",
		// 			marginTop: "-20px",
		// 			padding: "15px"
		// 		}
		// 	},
		// 	"&$cardHeaderStats svg": {
		// 		fontSize: "36px",
		// 		lineHeight: "56px",
		// 		textAlign: "center",
		// 		width: "36px",
		// 		height: "36px",
		// 		margin: "10px 10px 4px"
		// 	},
		// 	"&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
		// 		fontSize: "36px",
		// 		lineHeight: "56px",
		// 		width: "56px",
		// 		height: "56px",
		// 		textAlign: "center",
		// 		overflow: "unset",
		// 		marginBottom: "1px"
		// 	},
		// 	"&$cardHeaderStats$cardHeaderIcon": {
		// 		textAlign: "right"
		// 	}
		// },
		// cardHeaderPlain: {
		// 	marginLeft: "0px !important",
		// 	marginRight: "0px !important"
		// },
		// cardHeaderStats: {
		// 	"& $cardHeaderIcon": {
		// 		textAlign: "right"
		// 	},
		// 	"& h1,& h2,& h3,& h4,& h5,& h6": {
		// 		margin: "0 !important"
		// 	}
		// },
		// cardHeaderIcon: {
		// 	"&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
		// 		background: "transparent",
		// 		boxShadow: "none"
		// 	},
		// 	"& i,& .material-icons": {
		// 		width: "33px",
		// 		height: "33px",
		// 		textAlign: "center",
		// 		lineHeight: "33px"
		// 	},
		// 	"& svg": {
		// 		width: "24px",
		// 		height: "24px",
		// 		textAlign: "center",
		// 		lineHeight: "33px",
		// 		margin: "5px 4px 0px"
		// 	}
		// },
		// warningCardHeader: {
		// 	color: whiteColor,
		// 	"&:not($cardHeaderIcon)": {
		// 		...warningCardHeader
		// 	}
		// },
		// successCardHeader: {
		// 	color: whiteColor,
		// 	"&:not($cardHeaderIcon)": {
		// 		...successCardHeader
		// 	}
		// },
		// dangerCardHeader: {
		// 	color: whiteColor,
		// 	"&:not($cardHeaderIcon)": {
		// 		...dangerCardHeader
		// 	}
		// },
		// infoCardHeader: {
		// 	color: whiteColor,
		// 	"&:not($cardHeaderIcon)": {
		// 		...infoCardHeader
		// 	}
		// },
		// primaryCardHeader: {
		// 	color: whiteColor,
		// 	"&:not($cardHeaderIcon)": {
		// 		...primaryCardHeader
		// 	}
		// },
		// roseCardHeader: {
		// 	color: whiteColor,
		// 	"&:not($cardHeaderIcon)": {
		// 		...roseCardHeader
		// 	}
		// }

	})


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
							<button variant="contained" color="primary" onClick={this.addClientInfo}>Submit</button>
						</Paper>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

export default connect(mapStoreToProps)(BeTheBoss);
// export default connect(mapStoreToProps)(withStyles(styles)(BtnImgBaseClass));
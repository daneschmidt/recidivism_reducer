import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ClientPage extends Component {
	state = {
		heading: "Clients",
		search_string: '',
	};
	//Dispatches to client.saga to GET full list of clients
	componentDidMount() {
		this.props.dispatch({
			type: 'GET_CLIENTS',
		});
	}
	//Captures onChange event in the search field
	onChange = key => event => {
		this.setState(
			{
				...this.state,
				[key]: event.target.value
			},
			() => {
				console.log(this.state);
			}
		);
	};

	//Dispatches to client
	search = event => {
		this.props.dispatch({
			type: 'SEARCH_CLIENT',
			payload: { search_string: this.state.search_string }
		});
	};

	delete = event => {
		this.props.dispatch({
			type: 'DELETE_CLIENT',
			payload: {
				// this.state.isActive
			}
		})
	}


	//Dispatches selected client id to profile.saga
	goToProfile = (event, id) => {
		console.log(id);
		this.props.dispatch({
			type: 'GET_PROFILE',
			payload: { id }
		});
		//Navigates to profile page, will give all information on selected client
		this.props.history.push('/profilepage');
	};

	render() {
		return (
			<div>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={9}>
						<Card>
							<Paper className="paperPanel" elevation={5}>
								<h1>{this.state.heading}</h1>
								<div>
									<input type="text" onChange={this.onChange('search_string')}></input>
									<Link to="/clientresults">
										<button onClick={this.search}>SEARCH</button>
									</Link>
								</div>
							</Paper>
						</Card>
					</GridItem>
				</GridContainer>

				<TableContainer component={Paper} className="container">
					<Table size="large">
						<TableHead className="table-head">
							<TableRow className="table-row">
								<TableCell></TableCell>
								<TableCell align="left">First&nbsp;Name</TableCell>
								<TableCell align="left">Last&nbsp;Name</TableCell>
								<TableCell align="left">Phone&nbsp;Number</TableCell>
								<TableCell align="left">Email</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.store.client.map((item, index) =>
								<TableRow key={index}>
									<TableCell align="right">{item.firstName}</TableCell>
									<TableCell align="right">{item.lastName}</TableCell>
									<TableCell align="right">{item.phoneNumber}</TableCell>
									<TableCell align="right">{item.email}</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>

			</div>
		);
	}
}

export default connect(mapStoreToProps)(ClientPage);

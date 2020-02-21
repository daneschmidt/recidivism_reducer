import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Card from "../Card/Card.js";
import Paper from '@material-ui/core/Paper';

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
	onChange = key => (event) => {
		this.setState({
				[key]: event.target.value
		});
	}

	//Dispatches to client
	search = (event) => {
		this.props.dispatch({ type: 'SEARCH_CLIENT', payload: this.state.search_string });
	}

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
		const clientList = this.props.store.client.map((item, index) => {
			return (
				<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<Paper className="paperPanel" elevation={5}>
						<div key={index}>
							<h3 onClick={event => this.goToProfile(event, item.id)}>
								{item.firstName} {item.lastName}
							</h3>
							<p>
								phone: {item.phoneNumber}
							</p>
							<p>
								email: {item.email} 
							</p>
						</div>
						</Paper>
					</Card>
				</GridItem>
			</GridContainer>
			);
		});
		return (
			<GridContainer justify="center">
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<Paper className="paperPanel" elevation={5}>
							<h1>{this.state.heading}</h1>
							<div>
								<input type="text" onChange={this.onChange('search_string')}></input>
								<Link to="/clientresults">
									<button onClick={this.search}>SEARCH</button>
								</Link>
							</div>
							
									{clientList}
								
						</Paper>
					</Card>
				</GridItem>
			</GridContainer>
		);
	}
}

export default connect(mapStoreToProps)(ClientPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';

import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";

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
		const clientList = this.props.store.client.map((item, index) => {
			return (
				<ul key={index}>
					<li onClick={event => this.goToProfile(event, item.id)}>
						{item.firstName}
						<br />
						{item.lastName}
						<br />
						{item.phoneNumber}
						<br />
						{item.email}
					</li>
				</ul>

			);
		});
		return (
			<div>
				<h1>{this.state.heading}</h1>
				<div>
					<input type="text" onChange={this.onChange('search_string')}></input>
					<Link to="/clientresults">
						<button onClick={this.search}>SEARCH</button>
					</Link>
				</div>
				{clientList}
			</div>
		);
	}
}

export default connect(mapStoreToProps)(ClientPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
	//Dispatches to profile.saga to edit selected client's profile
	editProfile = id => {
		console.log(id);
		this.props.dispatch({
			type: 'EDIT_PROFILE',
			payload: id,
		});
		//Navigates to Edit Profile Modal
		this.props.history.push('/editprofilepage');
	};
	//Dispatches to client
	search = event => {
		this.props.dispatch({
			type: 'SEARCH_CLIENT',
			payload: { search_string: this.state.search_string }
		});
	};


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
					<GridItem xs={12} sm={12} md={6}>
						<ul key={index}>
							<li onClick={event => this.goToProfile(event, item.id)}>
								{item.firstName}
								<br />
								{item.lastName}
								<br />
								{item.phoneNumber}
								<br />
								{item.email}
								<button onClick={this.editProfile}>EDIT</button>
							</li>
						</ul>

					</GridItem>
				</GridContainer>

			);
		});
		return (
			<div>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={6}>
						<h1>{this.state.heading}</h1>
						<div>
							<input type="text" onChange={this.onChange('search_string')}></input>
							<button onClick={this.search}>SEARCH</button>
						</div>

						{clientList}
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(ClientPage);

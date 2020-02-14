import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class clientPage extends Component {
	state = {
		// heading: "Class Component",
	};
	//Dispatches to client.saga to GET full list of clients
	componentDidMount() {
		this.props.dispatch({
			type: "GET_CLIENTS",
		});
	}
	//Dispatches selected client id to profile.saga
	goToProfile = id => {
		console.log(id);
		this.props.dispatch({
			type: "GET_PROFILE",
			payload: id,
		});
		//Navigates to profile page, will give all information on selected client
		this.props.history.push("/profile/");
	};

	render() {
		const clientList = this.props.store.client.map((item, index) => {
			return (
				<div
					key={index}
					className="click-client"
					onClick={event => this.goToProfile(item.id)}
				>
					<span>{item.firstName}</span>
					<span>{item.lastName}</span>
					<span>{item.email}</span>
					<span>{item.phoneNumber}</span>
				</div>
			);
		});
		return <div>{clientList}</div>;
	}
}

export default connect(mapStoreToProps)(clientPage);

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class profilePage extends Component {
	state = {
		// heading: "Class Component",
	};

	componentDidMount() {
		this.props.dispatch({
			type: "GET_PROFILE",
			payload: this.props.store.user.id,
		});
	}

	render() {
		return;
		<div>
			<p>First Name:{this.props.store.profile.firstName}</p>

			<p>Last Name:{this.props.store.profile.lastName}</p>

			<p>Gender:{this.props.store.profile.gender}</p>

			<p>Phone Number:{this.props.store.profile.phoneNumber}</p>

			<p>Email:{this.props.store.profile.email}</p>

			<p>Criminal Record:{this.props.store.profile.criminalRecord}</p>

			<p>Currently Incarcerated:{this.props.store.profile.currentlyIncar}</p>

			<p>Incarceration Length:{this.props.store.profile.incarcerationLength}</p>

			<p>Release Date:{this.props.store.profile.releaseDate}</p>

			<p>DOC Number:{this.props.store.profile.docNumber}</p>

			<p>State of Incarceration:{this.props.store.profile.stateIncarcerated}</p>

			<p>Currently On Parole:{this.props.store.profile.paroleOnRelease}</p>

			<p>Parole Officer:{this.props.store.profile.agentName}</p>

			<p>Parole Officer Phone Number:{this.props.store.profile.agentPhone}</p>

			<p>
				Connections With Reentry Programs:{this.props.store.profile.connections}
			</p>

			<p>Type Of Business:{this.props.store.profile.business}</p>

			<p>Business Stage:{this.props.store.profile.businessStage}</p>

			<p>
				Why Did You Attend "Be The Boss":
				{this.props.store.profile.whyAtBeTheBoss}
			</p>

			<p>
				What Do You Hope To Gain By Attending:
				{this.props.store.profile.whatHopeToGain}
			</p>

			<p>Active:{this.props.store.profile.isActive}</p>
		</div>;
	}
}

export default connect(mapStoreToProps)(profilePage);

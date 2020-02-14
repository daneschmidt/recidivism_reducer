import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
	<div>
		<h1>The Info Page</h1>

		<img
			src="https://live.staticflickr.com/8055/8116623060_4227d86ac2_b.jpg"
			alt="Barn Owl"
		/>

		<p>Tyto project is getting kicked off.</p>
		<table>
			<thead>
				<td>luke's changes</td>
			</thead>
		</table>

		<p>Change here</p>
		<p>What did jay-z call Beyonce before they got married? ...fiance.</p>

		<p>
			You ever heard of updog? No, what is up dog? Nothing much what's up with
			you? HAHAHAHAHAHA!!!!
		</p>

		<p>hey... you're cute *smiley face*</p>

	</div>
);

export default InfoPage;
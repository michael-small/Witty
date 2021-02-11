import React, { Component } from 'react';
import Aux from '../hocs/Aux';
import Button from '@material-ui/core/Button';

export default class Profile extends Component {
	render() {
		return (
			<Aux>
				<h1>Profile</h1>
				<h2>Hello {'{NAME}'}</h2>
				<Aux>
					<p>Students: </p>
					<ul>
						<li>{'{STUDENT_1_NAME: Level K}'}</li>
						<li>{'{STUDENT_2_NAME: Level 56}'}</li>
					</ul>
					<p>Subscription: Active until {'{DATE}'}</p>
					{/* TODO: Remove inline when I get a better hold of MUI styling */}
					<Button style={{ border: '1px solid white' }}>
						Renew Subscription
					</Button>
				</Aux>
			</Aux>
		);
	}
}

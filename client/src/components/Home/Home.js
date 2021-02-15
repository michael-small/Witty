import React, { Component } from 'react';
import Aux from '../hocs/Aux';
import axios from 'axios';

export default class Home extends Component {
	render() {
		const hitBackend = () => {
			axios.get('/test').then((response) => {
				console.log(response.data);
			});
		};
		return (
			<Aux>
				<h1>Home</h1>
				<p>Welcome to the homepage of Witty</p>
			</Aux>
		);
	}
}

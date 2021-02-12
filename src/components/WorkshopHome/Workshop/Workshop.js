import React, { Component } from 'react';
import Aux from '../../hocs/Aux';

export default class Workshop extends Component {
	render() {
		return (
			<Aux>
				<h1>{this.props.workshopTitle}</h1>
				<p>{this.props.workshopPreview}</p>
				<p>{this.props.workshopImage}</p>
			</Aux>
		);
	}
}

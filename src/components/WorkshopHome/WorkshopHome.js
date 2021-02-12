import React, { Component } from 'react';
import Aux from '../hocs/Aux';
import Workshop from './Workshop/Workshop';
export default class WorkshopHome extends Component {
	render() {
		return (
			<Aux>
				<h1>Workshops</h1>
				<Workshop
					workshopTitle='Workshop 1'
					workshopPreview='Workshop 1 description'
					workshopImage='workshop1_image.jpg'
				></Workshop>
				<Workshop
					workshopTitle='Workshop 2'
					workshopPreview='Workshop 2 description'
					workshopImage='workshop2_image.jpg'
				></Workshop>
			</Aux>
		);
	}
}

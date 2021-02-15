import React, { Component } from 'react';
import Aux from '../hocs/Aux';
import Workshop from './Workshop/Workshop';
import './WorkshopHome.css';
export default class WorkshopHome extends Component {
	render() {
		return (
			<Aux>
				<h1 id='page-title'>Workshops</h1>
				<Workshop
					workshopTitle='Skimming Readings for Key Points 101'
					workshopPreview="The SAT encourages not actually reading the story and to just skim, so it's never a bad time to start learning how to do this..."
					workshopImage='https://cdn.pixabay.com/photo/2017/04/21/02/00/book-2247427_960_720.png'
				></Workshop>
				<Workshop
					workshopTitle='Writing Cleanly'
					workshopPreview="You won't change any minds if your points are incredible but your writing is illegible. Learn tips on writing well."
					workshopImage='https://cdn.pixabay.com/photo/2017/05/03/22/08/notebook-2282300_960_720.png'
				></Workshop>
			</Aux>
		);
	}
}

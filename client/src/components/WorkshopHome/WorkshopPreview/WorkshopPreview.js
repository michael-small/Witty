import React, { Component } from 'react';
import Aux from '../../hocs/Aux';

// TODO 1: Consider converting to functional component

// TODO 2: This may be redundant. `Workshop` may be all that is neccisary.
//It could just conditionally only show title, subtitle, and pic and "link" to
//the full workshop content. Same component, different state of preview vs full workshop.

export default class WorkshopPreview extends Component {
	render() {
		return (
			<Aux>
				<h1>Workshop Preview</h1>
			</Aux>
		);
	}
}

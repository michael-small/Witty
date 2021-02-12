import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import Aux from '../../hocs/Aux';
import './Workshop.css';

export default class Workshop extends Component {
	render() {
		return (
			<Aux>
				<Grid
					className='workshop-container'
					justify='center'
					alignItems='center'
					container
				>
					<Grid item sm className='grid-item'>
						<img src='https://via.placeholder.com/150' />
					</Grid>
					<Grid item sm>
						<h1>{this.props.workshopTitle}</h1>
						<p>{this.props.workshopPreview}</p>
					</Grid>
				</Grid>
			</Aux>
		);
	}
}

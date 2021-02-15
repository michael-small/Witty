import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Workshop.css';

const useStyles = makeStyles((theme) => ({
	card: {
		display: 'flex',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginBottom: '1rem',
		[theme.breakpoints.up('md')]: {
			width: '40%',
		},
		padding: '4px',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		width: '60%',
	},
	content: {
		flex: '1 0 auto',
	},
	image: {
		width: '240px',
		height: '180px',
		[theme.breakpoints.down('md')]: {
			width: '30%',
			display: `block`,
		},
	},
}));

export default function MediaControlCard(props) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.image}
				image={props.workshopImage}
				title={props.workshopTitle}
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component='h5' variant='h5'>
						{props.workshopTitle}
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						{props.workshopPreview}
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
}

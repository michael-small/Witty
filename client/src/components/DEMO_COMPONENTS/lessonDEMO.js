import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import JP_Workshop from '../../images/JP_Workshop.png';
import BookLessonHeader from '../../images/Book_Lesson_Header.jpg';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStlyes = makeStyles((theme) => ({
	headerCard: {
		backgroundColor: '#f8f8ff',
		color: '#000',
	},
	headerImg: {
		maxWidth: '100%',
	},
	appBar: {
		top: 'auto',
		bottom: '0',
	},
	button: {
		margin: '3px',
	},
	offset: theme.mixins.toolbar,
}));

export default function LessonDEMO() {
	const classes = useStlyes();
	return (
		<div>
			<CardHeader
				avatar={<Avatar src={JP_Workshop} aria-label=''></Avatar>}
				action={
					<IconButton aria-label=''>
						<BookmarksIcon />
					</IconButton>
				}
				title='Skimming Essentials'
				subheader='Skimming: Skimming Overview'
				className={classes.headerCard}
			/>
			<img src={BookLessonHeader} className={classes.headerImg} />
			<Paper>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc in porta arcu. Curabitur tincidunt rutrum semper. Etiam
					cursus sem et egestas finibus. Cras viverra congue lectus in
					posuere. Donec pretium euismod ligula eu sodales. Etiam orci
					lorem, aliquet a nunc eget, pulvinar interdum sapien. Duis
					eget convallis quam. Sed enim sapien, porta nec erat ut,
					pulvinar congue metus. Cras ultricies nisi faucibus diam
					imperdiet, sed luctus ligula convallis. Ut eu eros lorem.
					Donec ac posuere lacus, id consequat leo. Suspendisse
					potenti. Etiam imperdiet sapien quis sapien venenatis, et
					pellentesque purus congue. Cras fermentum vel felis quis
					porttitor. Donec sed ultricies nulla. Donec lobortis cursus
					neque. Sed non justo nulla. Maecenas malesuada lectus at mi
					dignissim, eu feugiat dolor ultrices. In eget arcu vel erat
					volutpat bibendum fermentum et ante.
				</p>
			</Paper>
			<AppBar position='fixed' color='primary' className={classes.appBar}>
				<Toolbar>
					<Button
						variant='contained'
						color='default'
						className={classes.button}
					>
						Mark Complete <CheckBoxOutlineBlankIcon />
					</Button>
					<Button
						variant='contained'
						color='default'
						className={classes.button}
					>
						Part 2: Skimming Like a Pro <ChevronRightIcon />
					</Button>
				</Toolbar>
			</AppBar>
			<div className={classes.offset} />
		</div>
	);
}

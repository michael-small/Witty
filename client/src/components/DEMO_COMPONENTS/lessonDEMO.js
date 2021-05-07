import React, { useState } from 'react';
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
import Aux from '../hocs/Aux';
import ReactPlayer from 'react-player';

import { gql, useQuery } from '@apollo/client';

const GET_LESSON = gql`
	query GetLesson {
		lesson(where: { id: "ckn9m6h6wa4hi0b71tgc4vj2u" }) {
			lessonTitle
			vimeoVideo
			lessonContentSimplified
		}
	}
`;

const useStlyes = makeStyles((theme) => ({
	// Aaron would rather the white be consistent behind extra video space
	// the whole root is white bg
	root: {
		[theme.breakpoints.up('elev_thous')]: {
			marginLeft: '20%',
			marginRight: '20%',
		},
	},
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
		alignItems: 'center',
	},
	button: {
		margin: '3px',
	},
	offset: theme.mixins.toolbar,
	lessonText: {
		padding: '3px',
	},
	playerWrapper: {
		position: 'relative',
		paddingTop: '56.25%',
		marginTop: '14px',
	},
	reactPlayer: {
		position: 'absolute',
		top: '0',
		left: '0',
	},
}));

function CompleteButton({ lessonComplete }) {
	const classes = useStlyes();

	let button;

	{
		lessonComplete
			? (button = (
					// Not really semantically used as a button, but this conveniently has a consistent look
					//that wouldn't have a differing shape or alignment or size as `NextLessonButton subFC`.
					<Button
						variant='text'
						color='default'
						className={classes.button}
						disabled
					>
						Lesson Complete!
					</Button>
			  ))
			: (button = (
					<Button
						variant='contained'
						color='default'
						className={classes.button}
					>
						Mark Complete <CheckBoxOutlineBlankIcon />
					</Button>
			  ));
	}

	return <Aux>{button}</Aux>;
}

function NextLessonButton({ lessonComplete }) {
	const classes = useStlyes();

	return (
		<span>
			{lessonComplete && (
				<Button
					variant='contained'
					color='default'
					className={classes.button}
				>
					Part 2: Skimming Like a Pro <ChevronRightIcon />
				</Button>
			)}
		</span>
	);
}

export default function LessonDEMO() {
	const classes = useStlyes();

	const [lessonComplete, setLessonComplete] = useState(false);

	const { loading, error, data } = useQuery(GET_LESSON);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<div className={classes.root}>
			<CardHeader
				avatar={<Avatar src={JP_Workshop} aria-label=''></Avatar>}
				action={
					<IconButton aria-label=''>
						<BookmarksIcon />
					</IconButton>
				}
				title={data.lesson.lessonTitle}
				subheader='Skimming: Skimming Overview'
				className={classes.headerCard}
			/>
			<div className={classes.playerWrapper}>
				<ReactPlayer
					url={data.lesson.vimeoVideo}
					width='100%'
					height='100%'
					controls={true}
					className={classes.reactPlayer}
				/>
			</div>
			<Paper>
				<p className={classes.lessonText}>
					{data.lesson.lessonContentSimplified}
				</p>
			</Paper>
			<AppBar
				position='relative'
				color='primary'
				className={classes.appBar}
			>
				<Toolbar>
					{/* `onClick` must be on some parent element of the button being passed props */}
					{/* `<span>` does somehow minorly impact the button, but `<Aux>` didn't work */}
					{/* `<Aux> could be redone to handle clicks like this SO suggestion, but I'm fine for now: https://stackoverflow.com/a/54522871` */}
					<span onClick={() => setLessonComplete(true)}>
						<CompleteButton
							lessonComplete={lessonComplete}
							onClick={() => setLessonComplete(true)}
						/>
					</span>
					<NextLessonButton lessonComplete={lessonComplete} />
				</Toolbar>
			</AppBar>
		</div>
	);
}

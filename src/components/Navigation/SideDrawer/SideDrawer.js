import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// CSS
import clsx from 'clsx';
import styled from 'styled-components';

// ICONS
import ListItemIcon from '@material-ui/core/ListItemIcon';
// ----conditional icons----
import HomeIcon from '@material-ui/icons/Home';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpIcon from '@material-ui/icons/Help';
// ----misc icons----
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const StyledLink = styled(Link)`
		text-decoration: none;
		color: inherit;
		&:focus,
		&:hover,
		&:visited,
		&:link,
		&:active {
			text-decoration: none;
		}
	`;

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const navLinks = [
		{ page: 'Home', path: '/' },
		// { page: 'Lessons', path: '/lessons' },
		{ page: 'Profile', path: '/profile' },
	];

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{navLinks.map((link, index) => (
					<StyledLink key={index} to={link.path}>
						<ListItem button>
							<ListItemIcon>
								{link.page === 'Home' ? (
									<HomeIcon />
								) : link.page === 'Profile' ? (
									<AccountCircleIcon />
								) : (
									<HelpIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={link.page} />
						</ListItem>
					</StyledLink>
				))}
			</List>
		</div>
	);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</Button>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}

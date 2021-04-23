import React from 'react';
import Aux from '../../hocs/Aux';
import { gql, useQuery } from '@apollo/client';
import WorkshopLessons from './WorkshopLessons/WorkshopLessons';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';

const GET_SECTIONS = gql`
	query GetSections($id: ID) {
		sections(where: { workshop: { id: $id } }) {
			id
			lessons {
				id
				lessonTitle
			}
			sectionTitle
		}
	}
`;

const useStyles = makeStyles({
	lessonBorder: {
		backgroundColor: '#C8C8C8',
		margin: '4px',
	},
});

export default function WorkshopSections(props) {
	const classes = useStyles();
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_SECTIONS, {
		variables: { id: id },
	});
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			{data.sections.map(({ sectionTitle, id, lessons }) => (
				<Accordion key={id}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'
					>
						<Typography variant='h4'>{sectionTitle}</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.lessonBorder}>
						<WorkshopLessons lessons={lessons} />
					</AccordionDetails>
				</Accordion>
			))}
		</Aux>
	);
}

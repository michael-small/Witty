import React from 'react';
import Aux from '../../hocs/Aux';
import { gql, useQuery } from '@apollo/client';
import WorkshopLessons from './WorkshopLessons/WorkshopLessons';

const GET_SECTIONS = gql`
	query GetSections {
		sections {
			lessons {
				id
				lessonTitle
			}
			sectionTitle
		}
	}
`;

export default function WorkshopSections() {
	const { loading, error, data } = useQuery(GET_SECTIONS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<Aux>
			{data.sections.map(({ sectionTitle, lessons }, index) => (
				<div key={index}>
					<h2>{sectionTitle}</h2>
					<WorkshopLessons lessons={lessons} />
				</div>
			))}
		</Aux>
	);
}

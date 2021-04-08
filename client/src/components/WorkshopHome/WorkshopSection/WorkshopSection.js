import React from 'react';
import Aux from '../../hocs/Aux';
import { gql, useQuery } from '@apollo/client';

const GET_SECTIONS = gql`
	query GetSections {
		sections {
			lessons {
				lessonTitle
			}
			sectionTitle
		}
	}
`;

export default function WorkshopSection() {
	const { loading, error, data } = useQuery(GET_SECTIONS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<Aux>
			<h1>WorkshopSection</h1>
			{data.sections.map((section, index) => (
				<div key={index}>
					<h2>{section.sectionTitle}</h2>
				</div>
			))}
			<h2></h2>
		</Aux>
	);
}

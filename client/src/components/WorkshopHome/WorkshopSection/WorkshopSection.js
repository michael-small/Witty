import React from 'react';
import Aux from '../../hocs/Aux';
import { gql, useQuery } from '@apollo/client';
import WorkshopLesson from './WorkshopLesson/WorkshopLesson';

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
			{data.sections.map(({ sectionTitle, lessons }, index) => (
				<div key={index}>
					<h2>{sectionTitle}</h2>
					{lessons.map((lesson, indexVal) => (
						<WorkshopLesson
							lessonTitle={lesson.lessonTitle}
							key={indexVal}
						/>
					))}
				</div>
			))}
		</Aux>
	);
}

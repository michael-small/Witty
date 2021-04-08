import React from 'react';
import Aux from '../hocs/Aux';
import Workshop from './Workshop/Workshop';
import './WorkshopHome.css';

import { gql, useQuery } from '@apollo/client';

const GET_WORKSHOPS = gql`
	query GetWorkshops {
		workshops {
			id
			sections {
				lessons {
					lessonTitle
				}
				sectionTitle
			}
			workshopTitle
			previewPhoto {
				url
			}
		}
	}
`;
export default function WorkshopHome() {
	const { loading, error, data } = useQuery(GET_WORKSHOPS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			<h1 id='page-title'>Workshops</h1>
			{data.workshops.map((workshop, key) => (
				<Workshop
					key={workshop.id}
					workshopTitle={workshop.workshopTitle}
					workshopPreview={workshop.workshopPreview}
					workshopImage={workshop.previewPhoto.url}
				/>
			))}
		</Aux>
	);
}

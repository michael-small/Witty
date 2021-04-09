import React from 'react';
import Aux from '../hocs/Aux';
import WorkshopPreview from './WorkshopPreview/WorkshopPreview';
import './WorkshopHome.css';

import { gql, useQuery } from '@apollo/client';

const GET_WORKSHOPS = gql`
	query GetWorkshops {
		workshops {
			id
			workshopTitle
			previewPhoto {
				url
			}
			descriptionPreview
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
			{data.workshops.map((workshop) => (
				<Aux key={workshop.id}>
					<WorkshopPreview
						keyVal={workshop.id}
						workshopTitle={workshop.workshopTitle}
						workshopPreview={workshop.descriptionPreview}
						workshopImage={workshop.previewPhoto.url}
					/>
				</Aux>
			))}
		</Aux>
	);
}

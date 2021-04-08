import React from 'react';

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

export default function WorkshopSection() {
	return <h1>WorkshopSection</h1>;
}

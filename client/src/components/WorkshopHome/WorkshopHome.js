import React from 'react';
import Aux from '../hocs/Aux';
import WorkshopPreview from './WorkshopPreview/WorkshopPreview';
import { Link } from 'react-router-dom';
import './WorkshopHome.css';
import styled from 'styled-components';

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

	const { loading, error, data } = useQuery(GET_WORKSHOPS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			<h1 id='page-title'>Workshops</h1>
			{data.workshops.map((workshop) => (
				<StyledLink to={`/workshop/${workshop.id}`} key={workshop.id}>
					<Aux>
						<WorkshopPreview
							keyVal={workshop.id}
							workshopTitle={workshop.workshopTitle}
							workshopPreview={workshop.descriptionPreview}
							workshopImage={workshop.previewPhoto.url}
						/>
					</Aux>
				</StyledLink>
			))}
		</Aux>
	);
}

import React from 'react';
import Aux from '../../hocs/Aux';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import WorkshopSections from '../WorkshopSections/WorkshopSections';

const GET_WORKSHOP = gql`
	query GetWorkshop($id: Integer!) {
		workshop(where: { id: $id }) {
			workshopTitle
			sections {
				sectionTitle
			}
		}
	}
`;

export default function Workshop() {
	const { id } = useParams();

	const { loading, error, data } = useQuery(GET_WORKSHOP, {
		variables: { id: id },
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			<h1>{data.workshop.workshopTitle}</h1>
			<WorkshopSections />
		</Aux>
	);
}

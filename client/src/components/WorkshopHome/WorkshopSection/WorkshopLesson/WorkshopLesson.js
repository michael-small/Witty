import React from 'react';
import Aux from '../../../hocs/Aux';
// import { gql, useQuery } from '@apollo/client';

// const GET_LESSON = gql`
// 	query GetLesson {
// 		lesson {
// 			lessonTitle
// 		}
// 	}
// `;

export default function WorkshopSection(props) {
	// const { loading, error, data } = useQuery(GET_LESSON);

	// if (loading) return 'Loading...';
	// if (error) return `Error! ${error.message}`;
	return (
		<Aux>
			<h3 key={props.keyVal}>{props.lessonTitle}</h3>
		</Aux>
	);
}

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';

const GET_LESSON = gql`
	query GetLesson($id: ID) {
		lesson(where: { id: $id }) {
			lessonTitle
		}
	}
`;

export default function WorkshopLesson(props) {
	const { loading, error, data } = useQuery(GET_LESSON, {
		variables: { id: props.lessonId },
	});
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return <Typography variant='body1'>{data.lesson.lessonTitle}</Typography>;
}

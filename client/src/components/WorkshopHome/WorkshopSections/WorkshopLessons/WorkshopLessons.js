import React from 'react';
import Aux from '../../../hocs/Aux';
import Typography from '@material-ui/core/Typography';

export default function WorkshopLessons(props) {
	return (
		<Aux>
			{props.lessons.map((lesson) => (
				<Typography variant='h5' key={lesson.id}>
					* {lesson.lessonTitle}
				</Typography>
			))}
		</Aux>
	);
}

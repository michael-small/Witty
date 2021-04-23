import React from 'react';
import Aux from '../../../hocs/Aux';
import Typography from '@material-ui/core/Typography';
import WorkshopLesson from './WorkshopLesson/WorkshopLesson';

export default function WorkshopLessons(props) {
	return (
		<div>
			{props.lessons.map((lesson) => (
				<Typography variant='h5' key={lesson.id}>
					<WorkshopLesson lessonId={lesson.id} />
				</Typography>
			))}
		</div>
	);
}

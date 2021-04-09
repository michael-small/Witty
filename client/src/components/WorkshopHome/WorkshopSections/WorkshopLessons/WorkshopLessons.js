import React from 'react';
import Aux from '../../../hocs/Aux';

export default function WorkshopLessons(props) {
	return (
		<Aux>
			{props.lessons.map((lesson) => (
				<h3 key={lesson.id}>{lesson.lessonTitle}</h3>
			))}
		</Aux>
	);
}

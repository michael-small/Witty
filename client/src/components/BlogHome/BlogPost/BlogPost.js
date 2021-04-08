import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Aux from '../../hocs/Aux';
import ReactDOM from 'react-dom';

export default function BlogPost() {
	const GET_POST = gql`
		query GetPost {
			post(where: { id: "ckld25gdk4inm0b77o37wr8yt" }) {
				content {
					text
				}
				date
				excerpt
				slug
				tags
				title
				id
			}
		}
	`;

	const { loading, error, data } = useQuery(GET_POST);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<Aux>
			<h1>{data.post.title}</h1>
			<p>{data.post.date}</p>
			<p>{data.post.tags}</p>
			<p>{data.post.excerpt}</p>
			<p id='test'>
				{ReactDOM.render(
					data.post.content.html,
					document.getElementById('test')
				)}
			</p>
		</Aux>
	);
}

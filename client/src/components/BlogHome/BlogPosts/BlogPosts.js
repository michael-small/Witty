import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Aux from '../../hocs/Aux';
import styled from 'styled-components';

// MUI Components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

const GET_POSTS = gql`
	query GetPosts {
		posts {
			id
			date
			title
			tags
		}
	}
`;

export default function BlogPosts() {
	const StyledCard = styled(Card)`
		margin-bottom: 0.5rem;
		max-width: 600px;
	`;

	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<Aux>
			{data.posts.map(({ title, date, tags }, postIndex) => (
				<StyledCard key={postIndex}>
					<CardContent>
						<Typography variant='h5' component='h2'>
							<b>{title}</b>
						</Typography>
						<Typography variant='subtitle1'>
							<i>Published: {date}</i>
						</Typography>
						{tags.map((tag, tagIndex) => (
							<Chip key={tagIndex} label={tag}></Chip>
						))}
					</CardContent>
				</StyledCard>
			))}
		</Aux>
	);
}

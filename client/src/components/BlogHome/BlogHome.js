import React from 'react';
import Aux from '../hocs/Aux';
import BlogPosts from './BlogPosts/BlogPosts';

export default function BlogHome() {
	return (
		<Aux>
			<h1>Our Blog</h1>
			<BlogPosts />
		</Aux>
	);
}

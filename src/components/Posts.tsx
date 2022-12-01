import { useFetch } from '../hooks/useFetch';
import { Post } from '../types';
import PostCard from './PostCard';

import '../styles/Posts.css';

const Posts = () => {
	const { data: posts } = useFetch<Post>({
		path: 'https://jsonplaceholder.typicode.com/posts',
	});

	if (!posts) return null;

	return (
		<section className='posts'>
			<div className='container'>
				<h1>Posts</h1>

				<div className='posts-group'>
					{posts.map((post) => (
						<PostCard key={post.id} data={post} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Posts;

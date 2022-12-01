import { useFetch } from '../hooks/useFetch';
import { Post } from '../types';
import PostCard from './PostCard';

import '../styles/Posts.css';

const Posts = () => {
	const {
		data: posts,
		isLoading,
		isError,
		error,
	} = useFetch<Post>({
		path: 'https://jsonplaceholder.typicode.com/posts',
	});

	return (
		<section className='posts'>
			<div className='container'>
				<h1>Posts</h1>

				{isLoading && <div className='posts-loading'>Loading...</div>}

				{isError && error}

				{posts && (
					<div className='posts-group'>
						{posts.map((post) => (
							<PostCard key={post.id} data={post} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Posts;

import { Post } from '../types';

import '../styles/PostCard.css';

interface Props {
	data: Post;
}

const PostCard = ({ data }: Props) => {
	return (
		<div className='post-card'>
			<h2>{data.title}</h2>
			<p>{data.body}</p>
		</div>
	);
};

export default PostCard;

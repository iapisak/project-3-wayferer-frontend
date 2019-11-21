import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const postLink = `/posts/${post._id}`;
  return (
    <Link to={postLink}>
      <div className="post">
        <h4>{post.title}</h4>
        <p>{post.content}</p>
      </div>
    </Link>
  );
};

export default Post;

import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const postLink = `/posts/${post._id}`;
  return (
    
      <div className="post">
        <Link to={postLink}>
        <h4>{post.title}</h4>
        </Link>
  <p>{post.content.substring(0,90)}{post.content.length > 90 && '...'}</p>
      </div>
    
  );
};

export default Post;

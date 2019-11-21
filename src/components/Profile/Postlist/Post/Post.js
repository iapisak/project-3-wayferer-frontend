import React from 'react';

const Post = ({ post }) => (
  <div className="post">
    <h4>{post.title}</h4>
    <p>{post.content}</p>
  </div>
);

export default Post;

import React from 'react';

const Article = (props) => (
  <div className="article col-md-4">
    <h4>{props.article.title}</h4>
    <p>{props.article.content}</p>
  </div>

);

export default Article;

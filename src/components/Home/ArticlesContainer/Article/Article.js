import React from 'react';

const Article = (props) => (
  <div className="col-md-4">
    <div className="article">
      <h4>{props.article.title}</h4>
      <p>{props.article.content}</p>
    </div>
  </div>

);

export default Article;

import React from 'react';

import Carousel from './Carousel/Carousel';
import ArticlesContainer from './ArticlesContainer/ArticlesContainer';

const Home = () => (
  <div className="home">
    <h1>Home page</h1>
    <Carousel />
    <ArticlesContainer />
  </div>
);

export default Home;

import React from 'react';
import { withRouter } from 'react-router-dom'

import Carousel from './Carousel/Carousel';
import ArticlesContainer from './ArticlesContainer/ArticlesContainer';

const Home = () => (
  <div className="home container">
    <Carousel />
    <h1>WAYFARER</h1>
    <ArticlesContainer />
  </div>
);

export default withRouter(Home);

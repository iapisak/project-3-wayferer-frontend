import React from 'react';
import { withRouter } from 'react-router-dom'

import Carousel from './Carousel/Carousel';
import ArticlesContainer from './ArticlesContainer/ArticlesContainer';

import './Home.css'

const Home = () => (
      <>
        <Carousel />
        <div className="home container">
          <h1>WAYFARER</h1>
          <ArticlesContainer />
        </div>
      </>
);

export default withRouter(Home);

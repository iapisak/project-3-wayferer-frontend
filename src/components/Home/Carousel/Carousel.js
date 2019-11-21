import React from 'react';

import './Carousel.css';

const Carousel = () => (

  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous ></span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    <div className="carousel-inner">
      <div className="carousel-item active  bg-dark">
         CAROUSEL PLACEHOLDER
      </div>
      <div className="carousel-item">
        CAROUSEL PLACEHOLDER
      </div>
    </div>
  </div>
);

export default Carousel;

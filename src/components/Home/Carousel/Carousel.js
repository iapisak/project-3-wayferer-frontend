import React from 'react';

import './Carousel.css';

const Carousel = (props) => {
      return (
            <div className="carousel-item" style={{ backgroundImage:`url('${props.photo}')` }}>
              <h1>{props.name}</h1>
            </div>
      );
}

export default Carousel;
